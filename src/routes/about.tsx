import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Contact | NutriMaster Wellness Hub" },
      { name: "description", content: "Meet clinical nutritionists Muskaan and Nishan Mann. Contact us via form, WhatsApp, phone or UPI." },
      { property: "og:title", content: "About Us & Contact | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Meet clinical nutritionists Muskaan and Nishan Mann. Contact us via form, WhatsApp, phone or UPI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
