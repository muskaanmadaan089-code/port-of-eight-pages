import { createFileRoute } from "@tanstack/react-router";
import { StorePage } from "@/components/pages/StorePage";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Supplement Store | NutriMaster Wellness Hub" },
      { name: "description", content: "Lab-tested whey protein, creatine, omega-3, probiotics and multivitamins with INR pricing, delivery and Chandigarh pickup." },
      { property: "og:title", content: "Supplement Store | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Lab-tested whey protein, creatine, omega-3, probiotics and multivitamins with INR pricing, delivery and Chandigarh pickup." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StorePage,
});
