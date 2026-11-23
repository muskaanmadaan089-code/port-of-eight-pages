import { describe, expect, it } from "vitest";
import { filterProducts, type StoreFilters } from "./store-filter";

const base = { short_description: "", rating: 4, stock: 5, sort_order: 0, is_vegan: false, is_gluten_free: true, is_lab_verified: true, is_informed_choice: false };
const list = [
  { ...base, name: "Whey Isolate", category: "Whey Protein", price: 2899, sort_order: 1 },
  { ...base, name: "Plant Protein", category: "Plant-Based Protein", price: 1499, is_vegan: true, sort_order: 2 },
  { ...base, name: "Creatine", category: "Creatine", price: 999, stock: 0, sort_order: 3 },
];
const F: StoreFilters = { q: "", categories: [], maxPrice: 5000, vegan: false, glutenFree: false, labVerified: false, informed: false, inStock: false, sort: "priority" };

describe("store filters", () => {
  it("searches by name", () => expect(filterProducts(list, { ...F, q: "whey" }).map((p) => p.name)).toEqual(["Whey Isolate"]));
  it("filters by max price", () => expect(filterProducts(list, { ...F, maxPrice: 1500 })).toHaveLength(2));
  it("filters vegan", () => expect(filterProducts(list, { ...F, vegan: true }).map((p) => p.name)).toEqual(["Plant Protein"]));
  it("hides out of stock", () => expect(filterProducts(list, { ...F, inStock: true })).toHaveLength(2));
  it("sorts price low to high", () => expect(filterProducts(list, { ...F, sort: "price_asc" })[0]!.price).toBe(999));
});
