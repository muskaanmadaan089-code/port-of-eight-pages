import { createFileRoute } from "@tanstack/react-router";
import { TherapeuticDietsPage } from "@/components/pages/TherapeuticDietsPage";

export const Route = createFileRoute("/therapeutic-diets")({
  head: () => ({
    meta: [
      { title: "Therapeutic Diets & Healthy Recipes | NutriMaster Wellness Hub" },
      { name: "description", content: "Diabetes, PCOS, thyroid, heart-healthy, kidney-friendly and gluten-free diet protocols with macro-calculated recipes." },
      { property: "og:title", content: "Therapeutic Diets & Healthy Recipes | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Diabetes, PCOS, thyroid, heart-healthy, kidney-friendly and gluten-free diet protocols with macro-calculated recipes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TherapeuticDietsPage,
});
