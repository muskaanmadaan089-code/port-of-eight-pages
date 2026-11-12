import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password | NutriMaster Wellness Hub" },
      { name: "description", content: "Choose a new password for your NutriMaster account." },
      { property: "og:title", content: "Set a new password | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Choose a new password for your NutriMaster account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (pw.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    navigate({ to: "/account" });
  }
  return (
    <div className="max-w-md mx-auto px-margin-sm py-space-xl">
      <form onSubmit={submit} className="bg-surface-container-lowest rounded-3xl shadow-card p-space-xl space-y-space-md">
        <h1 className="font-headline-md text-headline-md text-primary">Set a new password</h1>
        <input type="password" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-secondary" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="New password (min 8 characters)" autoComplete="new-password" />
        <button disabled={busy} className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg disabled:opacity-60" type="submit">
          {busy ? "Saving…" : "Update password"}
        </button>
      </form>
    </div>
  );
}
