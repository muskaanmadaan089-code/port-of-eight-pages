import { describe, expect, it } from "vitest";
import { cartTotals, clampQty, mergeLines, shippingFee } from "./cart";

describe("store cart pricing", () => {
  it("adds line totals into the subtotal", () => {
    const t = cartTotals([
      { product_id: "whey", quantity: 1, price: 2899 },
      { product_id: "omega", quantity: 2, price: 849 },
    ]);
    expect(t.subtotal).toBe(4597);
    expect(t.count).toBe(3);
  });
  it("charges ₹79 delivery under ₹999", () => {
    expect(cartTotals([{ product_id: "mv", quantity: 1, price: 649 }]).total).toBe(728);
  });
  it("ships free from ₹999", () => {
    expect(shippingFee(999, "delivery")).toBe(0);
  });
  it("never charges shipping for dispensary pickup", () => {
    expect(shippingFee(649, "pickup")).toBe(0);
  });
  it("charges nothing for an empty bag", () => {
    expect(cartTotals([]).total).toBe(0);
  });
  it("keeps quantity between 1 and 20", () => {
    expect(clampQty(0)).toBe(1);
    expect(clampQty(25)).toBe(20);
  });
  it("merges a guest bag into the account bag", () => {
    expect(mergeLines([{ product_id: "a", quantity: 2 }], [{ product_id: "a", quantity: 1 }, { product_id: "b", quantity: 1 }])).toEqual([
      { product_id: "a", quantity: 3 },
      { product_id: "b", quantity: 1 },
    ]);
  });
});
