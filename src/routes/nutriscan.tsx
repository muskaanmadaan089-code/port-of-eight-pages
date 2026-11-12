import { createFileRoute } from "@tanstack/react-router";
import { NutriScanPage } from "@/components/pages/NutriScanPage";

export const Route = createFileRoute("/nutriscan")({
  head: () => ({
    meta: [
      { title: "NutriScan AI — Food Nutrition Scanner | NutriMaster Wellness Hub" },
      { name: "description", content: "Upload a meal photo or search a food to see calories, protein, carbs, fats, fibre and a 1–10 nutrition score." },
      { property: "og:title", content: "NutriScan AI — Food Nutrition Scanner | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Upload a meal photo or search a food to see calories, protein, carbs, fats, fibre and a 1–10 nutrition score." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NutriScanPage,
});
