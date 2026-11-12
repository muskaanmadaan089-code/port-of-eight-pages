import { describe, expect, it } from "vitest";
import { bmi, bmiCategory, inr, waterNeedMl } from "./format";

describe("health formulas", () => {
  it("computes BMI to one decimal", () => {
    expect(bmi(165, 68.5)).toBe(25.2);
  });
  it("uses Asian-Indian BMI bands", () => {
    expect(bmiCategory(22.9)).toBe("Healthy");
    expect(bmiCategory(24)).toBe("Overweight");
    expect(bmiCategory(17)).toBe("Underweight");
  });
  it("hydration need is 35 ml per kg", () => {
    expect(waterNeedMl(70)).toBe(2450);
  });
  it("formats rupees in Indian grouping", () => {
    expect(inr(123456)).toBe("₹1,23,456");
  });
});
