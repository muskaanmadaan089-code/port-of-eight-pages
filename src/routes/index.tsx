import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriMaster Wellness Hub — Diet Plans, Supplements & NutriScan AI" },
      { name: "description", content: "Personalized diet plans, lab-tested supplements, therapeutic recipes and NutriScan AI. Your Health, Your Nutrition, Your Transformation." },
      { property: "og:title", content: "NutriMaster Wellness Hub — Diet Plans, Supplements & NutriScan AI" },
      { property: "og:description", content: "Personalized diet plans, lab-tested supplements, therapeutic recipes and NutriScan AI. Your Health, Your Nutrition, Your Transformation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
