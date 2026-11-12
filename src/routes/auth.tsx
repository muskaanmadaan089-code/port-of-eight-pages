import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/use-auth";

const searchSchema = z.object({
  mode: z.enum(["signin", "signup", "forgot"]).optional(),
  next: z.string().optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in | NutriMaster Wellness Hub" },
      { name: "description", content: "Sign in or create your NutriMaster account to book consultations, shop and track your health." },
      { property: "og:title", content: "Sign in | NutriMaster Wellness Hub" },
      { property: "og:description", content: "Sign in or create your NutriMaster account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

const safeNext = (n?: string) => (n && n.startsWith("/") && !n.startsWith("//") ? n : "/account");

const emailSchema = z.string().trim().email("Enter a valid email").max(255);
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").max(72);

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">(search.mode ?? "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const next = safeNext(search.next);

  useEffect(() => {
    if (user) navigate({ to: next });
  }, [user, next, navigate]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setNotice(null);
    const em = emailSchema.safeParse(email);
    if (!em.success) {
      toast.error(em.error.issues[0]?.message ?? "Enter a valid email");
      return;
    }
    setBusy(true);
    try {
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(em.data, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setNotice("If an account exists for that email, a reset link is on its way.");
        return;
      }
      const pw = passwordSchema.safeParse(password);
      if (!pw.success) {
        toast.error(pw.error.issues[0]?.message ?? "Invalid password");
        return;
      }
      if (mode === "signup") {
        if (name.trim().length < 2) {
          toast.error("Please enter your full name");
          return;
        }
        const { data, error } = await supabase.auth.signUp({
          email: em.data,
          password: pw.data,
          options: { emailRedirectTo: `${window.location.origin}${next}`, data: { full_name: name.trim() } },
        });
        if (error) throw error;
        if (!data.session) setNotice("Check your inbox to confirm your email, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: em.data, password: pw.data });
        if (error) throw error;
        toast.success("Welcome back!");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    try {
      sessionStorage.setItem("nm_next", next);
    } catch {
      /* ignore */
    }
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) toast.error(result.error.message ?? "Google sign-in failed");
  }

  const input =
    "w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl grid lg:grid-cols-2 gap-gutter-lg items-center">
      <div className="hidden lg:flex flex-col gap-space-md">
        <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          Secure Client Portal
        </span>
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Your Health, Your Nutrition, Your Transformation.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
          One account for consultations, diet plans, supplement orders, NutriScan history and daily health tracking.
        </p>
      </div>
      <div className="bg-surface-container-lowest rounded-3xl shadow-card border border-outline-variant/20 p-space-lg md:p-space-xl max-w-md w-full mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-1">
          {mode === "signup" ? "Create your account" : mode === "forgot" ? "Reset your password" : "Sign in"}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
          {mode === "signup" ? "Start your personalized nutrition journey." : mode === "forgot" ? "We'll email you a secure reset link." : "Welcome back to NutriMaster."}
        </p>
        {mode !== "forgot" && (
          <>
            <button type="button" onClick={google} className="w-full py-3 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container font-label-lg text-label-lg text-on-surface flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
              Continue with Google
            </button>
            <div className="flex items-center gap-3 my-space-md text-on-surface-variant font-label-sm text-label-sm">
              <span className="h-px flex-1 bg-outline-variant/50" /> OR <span className="h-px flex-1 bg-outline-variant/50" />
            </div>
          </>
        )}
        <form onSubmit={submit} className="space-y-space-sm" noValidate>
          {mode === "signup" && (
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant">Full name</span>
              <input className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={100} required />
            </label>
          )}
          <label className="block">
            <span className="font-label-md text-label-md text-on-surface-variant">Email</span>
            <input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={255} required />
          </label>
          {mode !== "forgot" && (
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant">Password</span>
              <input className={input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === "signup" ? "new-password" : "current-password"} minLength={8} required />
            </label>
          )}
          {notice && <p className="p-3 rounded-xl bg-secondary-container text-on-secondary-container font-body-sm text-body-sm">{notice}</p>}
          <button disabled={busy} type="submit" className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-secondary transition-colors disabled:opacity-60">
            {busy ? "Please wait…" : mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"}
          </button>
        </form>
        <div className="mt-space-md flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant text-center">
          {mode === "signin" && (
            <>
              <button type="button" className="text-secondary hover:underline" onClick={() => setMode("forgot")}>Forgot password?</button>
              <span>New here? <button type="button" className="text-secondary font-semibold hover:underline" onClick={() => setMode("signup")}>Create an account</button></span>
            </>
          )}
          {mode !== "signin" && (
            <span>Already have an account? <button type="button" className="text-secondary font-semibold hover:underline" onClick={() => setMode("signin")}>Sign in</button></span>
          )}
        </div>
      </div>
    </div>
  );
}
