import { z } from "zod";
export const registrationSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full legal name").max(100),
  phone: z.string().regex(/^\d{10}$/, "Enter a 10-digit contact number"),
  email: z.string().trim().email("Enter a valid email address"),
  city: z.string().trim().min(2, "Enter your city"),
  age: z.number().int().min(1).max(115), gender: z.string().min(1), age_group: z.string().min(1),
  height_cm: z.number().min(100).max(230), weight_kg: z.number().min(30).max(250), target_weight_kg: z.number().min(30).max(250),
  lifestyle: z.string().min(1), activity_level: z.string().min(1), health_goals: z.array(z.string()).min(1, "Select a health goal"),
  diet_preference: z.string().min(1), nutritional_status: z.string(), health_conditions: z.array(z.string()), allergies: z.array(z.string()),
  selected_plan_slug: z.string(), notes: z.string().max(2000),
});
export type RegistrationData = z.infer<typeof registrationSchema>;
export function nextIntakeStep(step: number) { return Math.min(4, step + 1); }
