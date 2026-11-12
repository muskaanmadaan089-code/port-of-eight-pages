import { createFileRoute } from "@tanstack/react-router";
import { AccountPage } from "@/components/pages/AccountPage";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account & Health Tracking | NutriMaster Wellness Hub" },
      { name: "description", content: "Track BMI, calories, macros, water, weight progress, appointments, orders and NutriScan history." },
      { property: "og:title", content: "My Account & Health Tracking | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Track BMI, calories, macros, water, weight progress, appointments, orders and NutriScan history." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountPage,
});
