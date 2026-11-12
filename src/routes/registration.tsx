import { createFileRoute } from "@tanstack/react-router";
import { RegistrationPage } from "@/components/pages/RegistrationPage";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Client Registration | NutriMaster Wellness Hub" },
      { name: "description", content: "Create your health profile: personal details, height, weight, BMI, lifestyle, dietary preferences and conditions." },
      { property: "og:title", content: "Client Registration | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Create your health profile: personal details, height, weight, BMI, lifestyle, dietary preferences and conditions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistrationPage,
});
