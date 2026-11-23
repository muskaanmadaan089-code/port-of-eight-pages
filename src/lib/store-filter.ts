import type { Database } from "@/integrations/supabase/types";

export type Product = Database["public"]["Tables"]["products"]["Row"];
export type SortKey = "priority" | "price_asc" | "price_desc" | "rating";
export type StoreFilters = {
  q: string; categories: string[]; maxPrice: number;
  vegan: boolean; glutenFree: boolean; labVerified: boolean; informed: boolean; inStock: boolean; sort: SortKey;
};

type P = Pick<Product, "name" | "category" | "short_description" | "price" | "rating" | "stock" | "sort_order" | "is_vegan" | "is_gluten_free" | "is_lab_verified" | "is_informed_choice">;

export function filterProducts<T extends P>(list: T[], f: StoreFilters): T[] {
  const q = f.q.trim().toLowerCase();
  const out = list.filter((p) =>
    (!q || `${p.name} ${p.category} ${p.short_description ?? ""}`.toLowerCase().includes(q)) &&
    (!f.categories.length || f.categories.includes(p.category)) &&
    p.price <= f.maxPrice &&
    (!f.vegan || p.is_vegan) && (!f.glutenFree || p.is_gluten_free) &&
    (!f.labVerified || p.is_lab_verified) && (!f.informed || p.is_informed_choice) &&
    (!f.inStock || p.stock > 0));
  const s = [...out];
  if (f.sort === "price_asc") s.sort((a, b) => a.price - b.price);
  else if (f.sort === "price_desc") s.sort((a, b) => b.price - a.price);
  else if (f.sort === "rating") s.sort((a, b) => Number(b.rating) - Number(a.rating));
  else s.sort((a, b) => a.sort_order - b.sort_order);
  return s;
}
