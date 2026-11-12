import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/admin/AdminPage";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | NutriMaster Wellness Hub" },
      { name: "description", content: "Manage users, bookings, products, inventory, orders, recipes and enquiries." },
      { property: "og:title", content: "Admin Dashboard | NutriMaster Wellness Hub" },
      { property: "og:description", content: "NutriMaster admin dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});
