import { createFileRoute } from "@tanstack/react-router";
import { DietPlansPage } from "@/components/pages/DietPlansPage";

export const Route = createFileRoute("/diet-plans")({
  head: () => ({
    meta: [
      { title: "Diet Plans & Consultation | NutriMaster Wellness Hub" },
      { name: "description", content: "Weight loss, weight gain, muscle gain, PCOS and diabetes diet plans with online or clinic consultations from ₹399." },
      { property: "og:title", content: "Diet Plans & Consultation | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Weight loss, weight gain, muscle gain, PCOS and diabetes diet plans with online or clinic consultations from ₹399." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DietPlansPage,
});
