/** Store pricing rules — must match the place_order() database function. */
export const FREE_SHIPPING_FROM = 999;
export const SHIPPING_FEE = 79;
export const MAX_QTY = 20;

export type CartLine = { product_id: string; quantity: number };
export type PricedLine = CartLine & { price: number };

export function cartSubtotal(lines: PricedLine[]) {
  return lines.reduce((s, l) => s + l.price * l.quantity, 0);
}

export function shippingFee(subtotal: number, fulfilment: "delivery" | "pickup") {
  if (subtotal <= 0 || fulfilment === "pickup" || subtotal >= FREE_SHIPPING_FROM) return 0;
  return SHIPPING_FEE;
}

export function cartTotals(lines: PricedLine[], fulfilment: "delivery" | "pickup" = "delivery") {
  const subtotal = cartSubtotal(lines);
  const shipping = shippingFee(subtotal, fulfilment);
  const count = lines.reduce((s, l) => s + l.quantity, 0);
  return { subtotal, shipping, total: subtotal + shipping, count };
}

export const clampQty = (q: number) => Math.max(1, Math.min(MAX_QTY, Math.round(q)));

export function mergeLines(a: CartLine[], b: CartLine[]): CartLine[] {
  const m = new Map<string, number>();
  for (const l of [...a, ...b]) m.set(l.product_id, clampQty((m.get(l.product_id) ?? 0) + l.quantity));
  return [...m].map(([product_id, quantity]) => ({ product_id, quantity }));
}
