import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import img24 from "@/assets/photos/img24.png.asset.json";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";
import { cartTotals, FREE_SHIPPING_FROM, MAX_QTY } from "@/lib/cart";
import { inr, friendlyError, UPI_ID, waLink, WHATSAPP } from "@/lib/format";
import { filterProducts, type Product, type StoreFilters, type SortKey } from "@/lib/store-filter";

const checkoutSchema = z.object({
  name: z.string().trim().min(2, "Enter the recipient name").max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{10,15}$/, "Enter a valid 10-digit phone number"),
});

const EMPTY: StoreFilters = { q: "", categories: [], maxPrice: 5000, vegan: false, glutenFree: false, labVerified: false, informed: false, inStock: false, sort: "priority" };

export function StorePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const cart = useCart();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [f, setF] = useState<StoreFilters>(EMPTY);
  const [detail, setDetail] = useState<Product | null>(null);
  const [wish, setWish] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"bag" | "checkout" | "done">("bag");
  const [fulfilment, setFulfilment] = useState<"delivery" | "pickup">("delivery");
  const [pay, setPay] = useState<"upi" | "cod">("upi");
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "Chandigarh", pincode: "", notes: "" });
  const [busy, setBusy] = useState(false);
  const [placed, setPlaced] = useState<{ number: string; total: number; status: string; method: string } | null>(null);

  useEffect(() => {
    supabase.from("products").select("*").eq("active", true).order("sort_order").then(({ data, error }) => {
      if (error) setLoadError(true);
      setProducts((data ?? []) as Product[]);
    });
  }, []);
  useEffect(() => {
    if (!user) { setWish(new Set()); return; }
    supabase.from("wishlist_items").select("product_id").eq("user_id", user.id).then(({ data }) => setWish(new Set((data ?? []).map((w) => w.product_id))));
  }, [user]);

  const categories = useMemo(() => {
    const m = new Map<string, number>();
    for (const p of products ?? []) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return [...m];
  }, [products]);
  const shown = useMemo(() => filterProducts(products ?? [], f), [products, f]);
  const byId = useMemo(() => new Map((products ?? []).map((p) => [p.id, p])), [products]);
  const bag = cart.lines.flatMap((l) => { const p = byId.get(l.product_id); return p ? [{ ...l, price: p.price, product: p }] : []; });
  const totals = cartTotals(bag, fulfilment);
  const set = <K extends keyof StoreFilters>(k: K, v: StoreFilters[K]) => setF((s) => ({ ...s, [k]: v }));
  const toggleCat = (c: string) => set("categories", f.categories.includes(c) ? f.categories.filter((x) => x !== c) : [...f.categories, c]);

  async function addToBag(p: Product) {
    if (p.stock <= 0) { toast.error("This product is out of stock"); return; }
    const cur = cart.lines.find((l) => l.product_id === p.id)?.quantity ?? 0;
    if (cur + 1 > Math.min(p.stock, MAX_QTY)) { toast.error(`You can add at most ${Math.min(p.stock, MAX_QTY)} of this item`); return; }
    if (await cart.add(p.id)) toast.success(`${p.name} added to your bag`);
  }
  async function toggleWish(p: Product) {
    if (!user) { toast.info("Sign in to save items to your wishlist"); navigate({ to: "/auth", search: { next: "/store" } }); return; }
    const has = wish.has(p.id);
    const { error } = has
      ? await supabase.from("wishlist_items").delete().eq("user_id", user.id).eq("product_id", p.id)
      : await supabase.from("wishlist_items").insert({ user_id: user.id, product_id: p.id });
    if (error) { toast.error("Could not update your wishlist"); return; }
    const n = new Set(wish); if (has) n.delete(p.id); else n.add(p.id); setWish(n);
    toast.success(has ? "Removed from wishlist" : "Saved to wishlist");
  }
  function goCheckout() {
    if (!bag.length) return;
    if (!user) { toast.info("Please sign in to check out — your bag will be kept"); navigate({ to: "/auth", search: { next: "/store" } }); return; }
    setStep("checkout");
  }
  async function placeOrder(e: FormEvent) {
    e.preventDefault();
    const v = checkoutSchema.safeParse(form);
    if (!v.success) { toast.error(v.error.issues[0]?.message ?? "Check your details"); return; }
    if (fulfilment === "delivery" && (form.address.trim().length < 5 || !/^\d{6}$/.test(form.pincode.trim()))) { toast.error("Enter a full delivery address and 6-digit PIN code"); return; }
    setBusy(true);
    const { data, error } = await supabase.rpc("place_order", {
      _payment_method: pay, _fulfilment: fulfilment, _name: v.data.name, _phone: v.data.phone,
      _address: form.address.trim(), _city: form.city.trim(), _pincode: form.pincode.trim(), _notes: form.notes.trim() || undefined,
    } as never);
    if (error || !data) { setBusy(false); toast.error(friendlyError(error, "Could not place your order. Please try again.")); return; }
    const { data: o } = await supabase.from("orders").select("order_number,total,status,payment_method").eq("id", String(data)).single();
    setBusy(false);
    cart.clearLocal();
    await cart.reload();
    setPlaced(o ? { number: o.order_number, total: o.total, status: o.status, method: o.payment_method } : { number: String(data).slice(0, 8), total: totals.total, status: "pending_payment", method: pay });
    setStep("done");
    supabase.from("products").select("*").eq("active", true).order("sort_order").then(({ data: d }) => d && setProducts(d as Product[]));
  }

  const chip = (on: boolean) => on
    ? "px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shrink-0 shadow-sm transition-all hover:opacity-90"
    : "px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors";
  const field = "w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg w-full pt-space-lg pb-space-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-gutter pb-space-md">
            <div className="flex flex-col max-w-xl">
              <div className="flex items-center gap-space-xs text-secondary mb-1">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-md text-label-md tracking-wider uppercase font-semibold">Pharmaceutical-Grade Dispensary</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">Pure Lab Formulation Store</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Clean-label bio-active nutraceuticals, verified 3rd-party batch reports, online dispatch & flagship dispensary walk-ins.</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-md">
              <div className="relative w-full sm:w-72">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input aria-label="Search products" value={f.q} onChange={(e) => set("q", e.target.value)} className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-4 py-2.5 rounded-full font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Search protein, omega, tests..." type="search" />
              </div>
              <button type="button" onClick={() => { setStep(placed ? "bag" : step); setOpen(true); }} aria-label="Open your bag" className="relative group cursor-pointer flex items-center gap-space-sm bg-surface-container-lowest py-2.5 px-4 rounded-full shadow-sm hover:shadow-md transition-all text-left">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary font-label-sm w-4 h-4 rounded-full flex items-center justify-center text-[10px]">{totals.count}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Bag Subtotal</span>
                  <span className="font-title-md text-title-md text-primary leading-tight mt-0.5">{inr(totals.subtotal)}</span>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px] ml-1 group-hover:translate-x-0.5 transition-transform">arrow_forward_ios</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar mb-space-lg">
            <button type="button" className={chip(!f.categories.length)} onClick={() => set("categories", [])}>All Formulations</button>
            {categories.map(([c]) => (
              <button type="button" key={c} className={chip(f.categories.length === 1 && f.categories[0] === c)} onClick={() => set("categories", [c])}>{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter bg-surface-container-low rounded-2xl p-space-md lg:p-space-lg mb-space-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />
            <div className="lg:col-span-6 flex flex-col justify-between space-y-space-md pr-0 lg:pr-space-md">
              <div className="space-y-space-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                  <span>Express Cold-Chain Network</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">Shop Online with Doorstep Delivery</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Pan-India air dispatch with hermetically sealed temperature controls. Guaranteed authentic tamper-evident seal on every container.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm pt-2">
                <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-xl text-on-surface shadow-sm font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                  <span>100% Third-Party Lab Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-xl text-on-surface shadow-sm font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
                  <span>Same-Day Dispatch before 2 PM</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest p-space-md lg:p-space-md rounded-xl shadow-sm space-y-space-md">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-wide text-tertiary-fixed-dim bg-tertiary-container px-2.5 py-0.5 rounded-full font-bold">Flagship Clinic & Dispensary</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Open 9:00 AM - 8:30 PM
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-primary">Offline Walk-ins & Direct WhatsApp Triage</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Speak directly with licensed dispensary nutritionists for bulk clinic orders, immediate counter pickups, or custom stack inquiries.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                <a className="flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group" href="https://wa.me/917404114816?text=Hi%20Muskaan,%20I%20would%20like%20to%20enquire%20about%20offline%20supplements" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface leading-tight">Muskaan</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">+91 74041 14816</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-110 transition-transform">open_in_new</span>
                </a>
                <a className="flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group" href="https://wa.me/918168147733?text=Hi%20Nishan,%20I%20would%20like%20to%20enquire%20about%20offline%20supplements" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface leading-tight">Nishan Mann</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">+91 81681 47733</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-110 transition-transform">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <aside className="lg:col-span-3 bg-surface-container-lowest p-space-md rounded-2xl shadow-sm space-y-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-title-md text-title-md text-primary">Refine Protocols</span>
                <button type="button" onClick={() => setF(EMPTY)} className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer">Reset All</button>
              </div>
              <div className="space-y-2">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block font-bold">Product Categories</span>
                <div className="space-y-1 font-body-sm text-body-sm text-on-surface">
                  {categories.map(([c, n]) => (
                    <label key={c} className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                      <span className="flex items-center gap-2">
                        <input checked={f.categories.includes(c)} onChange={() => toggleCat(c)} className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                        <span>{c}</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{n}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="price-range" className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Max Price (₹)</label>
                  <span className="font-label-lg text-label-lg font-semibold text-primary">{inr(f.maxPrice)}</span>
                </div>
                <input className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary" id="price-range" max="5000" min="500" step="100" type="range" value={f.maxPrice} onChange={(e) => set("maxPrice", Number(e.target.value))} />
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant"><span>₹500</span><span>₹5,000</span></div>
              </div>
              <div className="space-y-2">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block font-bold">Clinical Standard</span>
                <div className="space-y-1.5">
                  {([["vegan", "100% Vegan Certified"], ["glutenFree", "Gluten-Free & Celiac Safe"], ["labVerified", "Lab Verified (Zero Heavy Metals)"], ["informed", "Informed-Choice Tested"]] as const).map(([k, l]) => (
                    <label key={k} className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer hover:text-secondary">
                      <input checked={f[k]} onChange={(e) => set(k, e.target.checked)} className="w-4 h-4 rounded accent-primary" type="checkbox" />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <label className="flex items-center justify-between p-2.5 bg-surface-container rounded-xl cursor-pointer">
                  <span className="font-label-lg text-label-lg text-on-surface">In Stock Only</span>
                  <input checked={f.inStock} onChange={(e) => set("inStock", e.target.checked)} className="w-4 h-4 accent-secondary rounded" type="checkbox" />
                </label>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant space-y-1">
                <div className="flex items-center gap-1.5 text-primary font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-[18px] text-secondary">storefront</span>
                  <span>Chandigarh Dispensary</span>
                </div>
                <p className="font-label-sm text-label-sm leading-normal">Sector 8C Inner Market. Ready for instant drive-through pickup.</p>
              </div>
            </aside>
            <section className="lg:col-span-9 flex flex-col space-y-space-md">
              <div className="flex flex-wrap gap-2 items-center justify-between bg-surface-container-lowest px-space-md py-3 rounded-xl shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-title-md text-title-md text-primary">{products ? `${shown.length} Formulation${shown.length === 1 ? "" : "s"} Available` : "Loading products…"}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Certified Batch Release 2025</span>
                </div>
                <label className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>Sort by:</span>
                  <select value={f.sort} onChange={(e) => set("sort", e.target.value as SortKey)} className="bg-surface-container py-1 px-2.5 rounded-lg text-on-surface font-label-sm text-label-sm focus:outline-none">
                    <option value="priority">Clinical Priority</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </label>
              </div>
              {loadError && <p className="p-space-md bg-error-container text-on-error-container rounded-xl font-body-sm">Products could not be loaded. Please refresh the page.</p>}
              {products && !shown.length && !loadError && (
                <div className="p-space-lg bg-surface-container-lowest rounded-2xl text-center space-y-2">
                  <p className="font-title-md text-title-md text-primary">No products match these filters</p>
                  <button type="button" onClick={() => setF(EMPTY)} className="font-label-lg text-label-lg text-secondary hover:underline">Reset filters</button>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                {shown.map((p, i) => {
                  const save = p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
                  const wa = i % 2 ? WHATSAPP.nishan : WHATSAPP.muskaan;
                  return (
                    <div key={p.id} className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                      <div className="p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">{p.badge}</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="ml-1 text-on-surface font-semibold">{Number(p.rating).toFixed(1)}</span>
                              <span className="text-on-surface-variant ml-0.5">({p.review_count})</span>
                            </div>
                            <button type="button" onClick={() => toggleWish(p)} aria-label={wish.has(p.id) ? "Remove from wishlist" : "Save to wishlist"} aria-pressed={wish.has(p.id)} className="text-secondary hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-[20px]" style={wish.has(p.id) ? { fontVariationSettings: "'FILL' 1" } : undefined}>favorite</span>
                            </button>
                          </div>
                        </div>
                        <button type="button" onClick={() => setDetail(p)} className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3" aria-label={`View details for ${p.name}`}>
                          {p.image_url && <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={p.image_url} alt={p.name} loading="lazy" />}
                          <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">{p.size_label}</span>
                          {p.stock <= 0 && <span className="absolute top-2 right-2 bg-error text-on-error px-2 py-0.5 rounded text-[11px] font-semibold">Out of stock</span>}
                        </button>
                        <div className="space-y-1">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{p.brand}</span>
                          <button type="button" onClick={() => setDetail(p)} className="block text-left font-title-md text-title-md text-primary leading-snug hover:text-secondary">{p.name}</button>
                          <p className="font-label-sm text-label-sm text-secondary font-medium">{p.short_description}</p>
                        </div>
                        <div className="mt-4 pt-3 flex items-baseline justify-between">
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm font-bold text-primary">{inr(p.price)}</span>
                            {save > 0 && <span className="font-label-sm text-label-sm text-on-surface-variant line-through">{inr(p.mrp)}</span>}
                          </div>
                          {save > 0 && <span className="font-label-sm text-label-sm bg-primary-container text-on-primary px-2 py-0.5 rounded">Save {save}%</span>}
                        </div>
                      </div>
                      <div className="p-4 pt-0 space-y-2">
                        <button type="button" disabled={p.stock <= 0} onClick={() => addToBag(p)} className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                          <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                          <span>{p.stock <= 0 ? "Out of Stock" : "Add to Cart"}</span>
                        </button>
                        <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href={waLink(wa.phone, `Enquiry for ${p.name} (${inr(p.price)})`)} rel="noopener noreferrer" target="_blank">
                          <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                          <span>Offline Purchase Enquire</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container-lowest rounded-2xl shadow-sm gap-space-sm mt-space-md">
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">policy</span>
                  <span>Batch analytical certificates (COA) included in every package dispatched.</span>
                </div>
                {user && <Link to="/account" hash="orders" className="font-label-lg text-label-lg text-secondary hover:underline">Track my orders</Link>}
              </div>
            </section>
          </div>
          <div className="mt-space-xl bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-6 space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>Dispensary Walk-In Available</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">NutriMaster Chandigarh Dispensary</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Experience our complete clinical apothecary in person. Receive personalized stack counseling, in-body biometric composition scanning, and direct shelf purchases.</p>
                </div>
                <div className="w-full h-44 rounded-xl bg-cover bg-center shadow-sm relative overflow-hidden flex items-end p-3" data-location="Sector 8C Chandigarh, India" style={{ backgroundImage: `url('${img24.url}')` }}>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-lg flex items-center justify-between w-full shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface leading-none">Sector 8C Commercial Hub</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Madhya Marg Inner Circle, Chandigarh</p>
                      </div>
                    </div>
                    <a className="px-3 py-1.5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:bg-secondary transition-colors" href="https://maps.google.com/?q=Sector+8C+Chandigarh" rel="noopener noreferrer" target="_blank">Directions</a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-space-md bg-surface-container-low p-space-md lg:p-space-md rounded-2xl">
                <h3 className="font-title-md text-title-md text-primary">Dispensary Coordinators & Settlement</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div className="p-3 bg-surface-container-lowest rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">M</div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Muskaan</p>
                        <p className="font-label-sm text-label-sm text-secondary">Lead Pharmacotherapy</p>
                      </div>
                    </div>
                    <a className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium" href="https://wa.me/917404114816" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                      <span>+91 74041 14816</span>
                    </a>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">N</div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Nishan Mann</p>
                        <p className="font-label-sm text-label-sm text-secondary">Clinical Operations Head</p>
                      </div>
                    </div>
                    <a className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium" href="https://wa.me/918168147733" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                      <span>+91 81681 47733</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold block">Frictionless Payment Modes</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">contactless</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">UPI & Instant</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">GPay, PhonePe, Paytm</p>
                    </div>
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">qr_code_scanner</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">Dynamic QR</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Instant Counter Tally</p>
                    </div>
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">local_shipping</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">Cash On Delivery</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Eligible Postal Codes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {detail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={detail.name}>
            <button type="button" aria-label="Close" className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setDetail(null)} />
            <div className="relative bg-surface-container-lowest rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2 animate-fade">
              {detail.image_url && <img src={detail.image_url} alt={detail.name} className="w-full h-64 md:h-full object-cover" />}
              <div className="p-space-lg space-y-space-sm">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-label-sm text-label-sm font-semibold text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">{detail.badge}</span>
                  <button type="button" onClick={() => setDetail(null)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center" aria-label="Close details"><span className="material-symbols-outlined text-[18px]">close</span></button>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary">{detail.name}</h2>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{detail.category} • {detail.size_label}</p>
                <p className="font-body-sm text-body-sm text-on-surface">{detail.description ?? detail.short_description}</p>
                {detail.benefits.length > 0 && <ul className="list-disc pl-5 font-body-sm text-body-sm text-on-surface-variant space-y-0.5">{detail.benefits.map((b) => <li key={b}>{b}</li>)}</ul>}
                {detail.ingredients && <p className="font-label-sm text-label-sm text-on-surface-variant"><strong>Ingredients:</strong> {detail.ingredients}</p>}
                <div className="flex flex-wrap gap-1.5">
                  {detail.is_vegan && <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm">Vegan</span>}
                  {detail.is_gluten_free && <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm">Gluten-free</span>}
                  {detail.is_lab_verified && <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm">Lab verified</span>}
                  {detail.is_informed_choice && <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm">Informed-Choice</span>}
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{detail.stock > 0 ? `${detail.stock} in stock` : "Out of stock"}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">{inr(detail.price)}</span>
                  <button type="button" disabled={detail.stock <= 0} onClick={() => addToBag(detail)} className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg disabled:opacity-50">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {open && (
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Your Wellness Bag">
            <button type="button" aria-label="Close bag" className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface-container-lowest shadow-2xl p-space-lg flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-2">
                  {step === "checkout" && <button type="button" onClick={() => setStep("bag")} aria-label="Back to bag" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">arrow_back</span></button>}
                  <span className="material-symbols-outlined text-secondary text-[24px]">shopping_bag</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">{step === "checkout" ? "Checkout" : step === "done" ? "Order placed" : "Your Wellness Bag"}</h2>
                </div>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close bag" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              {step === "done" && placed ? (
                <div className="space-y-space-md" role="status">
                  <div className="p-space-md bg-secondary-container text-on-secondary-container rounded-xl space-y-1">
                    <p className="font-title-md text-title-md">Order {placed.number}</p>
                    <p className="font-body-sm text-body-sm">Total {inr(placed.total)} • {placed.method === "cod" ? "Cash on delivery — confirmed" : "Awaiting payment"}</p>
                  </div>
                  {placed.method === "upi" && (
                    <p className="font-body-sm text-body-sm text-on-surface">Pay <strong>{inr(placed.total)}</strong> to UPI ID <span className="font-mono">{UPI_ID}</span>, then submit your payment reference (UTR). We confirm payments by hand; your order ships once it's verified.</p>
                  )}
                  <div className="flex flex-col gap-2">
                    {placed.method === "upi" && <Link to="/about" hash="payment-channels" onClick={() => setOpen(false)} className="py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg text-center hover:bg-secondary">Submit UPI Reference</Link>}
                    <Link to="/account" hash="orders" onClick={() => setOpen(false)} className="py-3 rounded-full bg-surface-container text-primary font-label-lg text-label-lg text-center">Track this order</Link>
                    <button type="button" onClick={() => { setPlaced(null); setStep("bag"); setOpen(false); }} className="py-2 font-label-lg text-label-lg text-on-surface-variant">Continue shopping</button>
                  </div>
                </div>
              ) : step === "checkout" ? (
                <form onSubmit={placeOrder} noValidate className="space-y-space-sm">
                  <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-full">
                    {(["delivery", "pickup"] as const).map((m) => (
                      <button key={m} type="button" aria-pressed={fulfilment === m} onClick={() => setFulfilment(m)} className={`py-2 rounded-full font-label-md text-label-md ${fulfilment === m ? "bg-primary-container text-on-primary" : "text-on-surface"}`}>{m === "delivery" ? "Home Delivery" : "Clinic Pickup"}</button>
                    ))}
                  </div>
                  <input className={field} placeholder="Recipient name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-label="Recipient name" maxLength={100} />
                  <input className={field} placeholder="Phone (10 digits)" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} aria-label="Phone" maxLength={15} />
                  {fulfilment === "delivery" ? (
                    <>
                      <textarea className={field} rows={2} placeholder="House, street, area" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} aria-label="Address" maxLength={300} />
                      <div className="grid grid-cols-2 gap-2">
                        <input className={field} placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} aria-label="City" maxLength={60} />
                        <input className={field} placeholder="PIN code" inputMode="numeric" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, "").slice(0, 6) })} aria-label="PIN code" />
                      </div>
                    </>
                  ) : <p className="font-label-sm text-label-sm text-on-surface-variant">Pick up at Sector 8C Inner Market, Chandigarh (9:00 AM – 8:30 PM).</p>}
                  <textarea className={field} rows={2} placeholder="Notes (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} aria-label="Notes" maxLength={300} />
                  <span className="block font-label-md text-label-md text-primary pt-1">Payment</span>
                  {([["upi", "UPI transfer (submit reference after paying)"], ["cod", fulfilment === "pickup" ? "Pay at the counter" : "Cash on delivery"]] as const).map(([k, l]) => (
                    <label key={k} className="flex items-center gap-2 p-2.5 bg-surface-container-low rounded-xl cursor-pointer font-body-sm text-body-sm">
                      <input type="radio" name="pay" checked={pay === k} onChange={() => setPay(k)} className="accent-secondary" /> {l}
                    </label>
                  ))}
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Online card payment isn't available yet.</p>
                  <Totals subtotal={totals.subtotal} shipping={totals.shipping} total={totals.total} />
                  <button disabled={busy} type="submit" className="w-full py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-secondary shadow-md disabled:opacity-60">{busy ? "Placing order…" : `Place Order • ${inr(totals.total)}`}</button>
                </form>
              ) : (
                <>
                  <div className="space-y-space-sm flex-1">
                    {!cart.ready && <p className="font-body-sm text-on-surface-variant">Loading your bag…</p>}
                    {cart.ready && !bag.length && <p className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface-variant text-center">Your bag is empty.</p>}
                    {bag.map((l) => (
                      <div key={l.product_id} className="flex items-center justify-between gap-2 p-3 bg-surface-container-low rounded-xl">
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-lg text-label-lg text-on-surface truncate">{l.product.name}</span>
                          <span className="font-label-sm text-label-sm text-secondary font-medium">{inr(l.price)} × {l.quantity} = {inr(l.price * l.quantity)}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button type="button" aria-label="Decrease quantity" disabled={l.quantity <= 1} onClick={() => cart.setQty(l.product_id, l.quantity - 1)} className="w-7 h-7 rounded-full bg-surface-container disabled:opacity-40"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                          <span className="w-6 text-center font-label-lg" aria-label="Quantity">{l.quantity}</span>
                          <button type="button" aria-label="Increase quantity" disabled={l.quantity >= Math.min(MAX_QTY, l.product.stock)} onClick={() => cart.setQty(l.product_id, l.quantity + 1)} className="w-7 h-7 rounded-full bg-surface-container disabled:opacity-40"><span className="material-symbols-outlined text-[16px]">add</span></button>
                          <button type="button" aria-label={`Remove ${l.product.name}`} onClick={() => cart.remove(l.product_id)} className="text-error hover:opacity-75 ml-1"><span className="material-symbols-outlined text-[18px]">delete_outline</span></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-space-md space-y-space-sm">
                    <Totals subtotal={totals.subtotal} shipping={totals.shipping} total={totals.total} />
                    {totals.subtotal > 0 && totals.subtotal < FREE_SHIPPING_FROM && <p className="font-label-sm text-label-sm text-on-surface-variant text-center">Add {inr(FREE_SHIPPING_FROM - totals.subtotal)} more for free delivery.</p>}
                    <button type="button" disabled={!bag.length} onClick={goCheckout} className="w-full py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span>Proceed to UPI / COD Checkout</span>
                    </button>
                    <p className="text-center font-label-sm text-label-sm text-on-surface-variant">WhatsApp billing support via Muskaan (+91 74041 14816)</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Totals({ subtotal, shipping, total }: { subtotal: number; shipping: number; total: number }) {
  return (
    <div className="p-3 bg-surface-container rounded-xl space-y-1.5">
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant"><span>Subtotal</span><span>{inr(subtotal)}</span></div>
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant"><span>Shipping</span><span className="text-secondary font-semibold">{shipping ? inr(shipping) : "FREE"}</span></div>
      <div className="flex justify-between font-title-md text-title-md text-primary font-bold"><span>Payable Amount</span><span>{inr(total)}</span></div>
    </div>
  );
}
