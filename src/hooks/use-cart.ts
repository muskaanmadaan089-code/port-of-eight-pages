import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { clampQty, mergeLines, type CartLine } from "@/lib/cart";

const KEY = "nm_guest_cart";

function readGuest(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    const v = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return Array.isArray(v) ? v.filter((l) => typeof l.product_id === "string" && l.quantity > 0) : [];
  } catch {
    return [];
  }
}
const writeGuest = (lines: CartLine[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* storage unavailable */
  }
};

/** Shopping bag: kept in the browser for guests, saved to the account once signed in. */
export function useCart() {
  const { user, loading } = useAuth();
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const synced = useRef<string | null>(null);

  const reload = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase.from("cart_items").select("product_id, quantity").eq("user_id", user.id);
    if (!error) setLines(data ?? []);
  }, [user]);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      synced.current = null;
      setLines(readGuest());
      setReady(true);
      return;
    }
    if (synced.current === user.id) return;
    synced.current = user.id;
    (async () => {
      const guest = readGuest();
      if (guest.length) {
        const { data } = await supabase.from("cart_items").select("product_id, quantity").eq("user_id", user.id);
        const merged = mergeLines(data ?? [], guest);
        const { error } = await supabase
          .from("cart_items")
          .upsert(merged.map((l) => ({ ...l, user_id: user.id })), { onConflict: "user_id,product_id" });
        if (!error) writeGuest([]);
      }
      await reload();
      setReady(true);
    })();
  }, [user, loading, reload]);

  const setQty = useCallback(
    async (productId: string, qty: number) => {
      const quantity = clampQty(qty);
      const prev = lines;
      const exists = prev.some((l) => l.product_id === productId);
      const next = exists
        ? prev.map((l) => (l.product_id === productId ? { ...l, quantity } : l))
        : [...prev, { product_id: productId, quantity }];
      setLines(next);
      if (!user) {
        writeGuest(next);
        return true;
      }
      const { error } = await supabase
        .from("cart_items")
        .upsert({ user_id: user.id, product_id: productId, quantity }, { onConflict: "user_id,product_id" });
      if (error) {
        setLines(prev);
        toast.error("Could not update your bag. Please try again.");
        return false;
      }
      return true;
    },
    [lines, user],
  );

  const add = useCallback(
    (productId: string, qty = 1) => {
      const cur = lines.find((l) => l.product_id === productId)?.quantity ?? 0;
      return setQty(productId, cur + qty);
    },
    [lines, setQty],
  );

  const remove = useCallback(
    async (productId: string) => {
      const prev = lines;
      const next = prev.filter((l) => l.product_id !== productId);
      setLines(next);
      if (!user) {
        writeGuest(next);
        return;
      }
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id).eq("product_id", productId);
      if (error) {
        setLines(prev);
        toast.error("Could not remove the item. Please try again.");
      }
    },
    [lines, user],
  );

  return { lines, ready, add, setQty, remove, reload, clearLocal: () => setLines([]) };
}
