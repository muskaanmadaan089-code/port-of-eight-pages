import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { UPI_ID, WHATSAPP, addDaysISO, formatDate, friendlyError, inr, todayISO, waLink } from "@/lib/format";

export const BOOKING_PLANS = [
  { slug: "initial-assessment", label: "Initial Clinical Assessment (₹699/session)", short: "Initial Clinical Assessment", price: 699 },
  { slug: "review-follow-up", label: "Review Follow-Up (₹399/session)", short: "Review Follow-Up", price: 399 },
  { slug: "basic-nutrition", label: "Basic Nutrition Plan (₹1,499/month)", short: "Basic Nutrition Plan", price: 1499 },
  { slug: "weight-management", label: "Weight Management Plan (₹2,999/month)", short: "Weight Management Plan", price: 2999 },
  { slug: "fitness-muscle", label: "Fitness & Muscle Building Plan (₹3,999/month)", short: "Fitness & Muscle Building Plan", price: 3999 },
  { slug: "premium-wellness", label: "Premium Wellness Plan (₹5,999/month)", short: "Premium Wellness Plan", price: 5999 },
] as const;
export type PlanSlug = (typeof BOOKING_PLANS)[number]["slug"];

const CLINICIANS = [
  { value: "Muskaan (Clinical Specialist)", label: "Muskaan (Clinical & Hormonal)" },
  { value: "Nishan Mann (Sports & Hypertrophy)", label: "Nishan Mann (Sports & Hypertrophy)" },
  { value: "First Available Senior Specialist", label: "First Available Senior Specialist" },
];

const SLOTS = [
  { title: "Morning (10:00 AM - 01:00 PM)", slots: ["10:00 AM", "11:30 AM", "12:15 PM"] },
  { title: "Afternoon (02:00 PM - 05:00 PM)", slots: ["02:30 PM", "03:45 PM", "04:30 PM"] },
  { title: "Evening (06:00 PM - 08:30 PM)", slots: ["06:00 PM", "07:15 PM", "08:00 PM"] },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter the patient's full name").max(100),
  phone: z.string().trim().regex(/^\+?[\d\s-]{10,16}$/, "Enter a valid WhatsApp / phone number"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date"),
});

const slotIdle = "slot-btn py-2 rounded-xl text-center font-label-sm bg-surface-container text-on-surface hover:bg-secondary-container transition-all";
const slotActive = "slot-btn py-2 rounded-xl text-center font-label-sm bg-primary-container text-on-primary font-bold shadow-sm";
const modeActive = "py-2.5 px-4 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all bg-primary-container text-on-primary shadow-sm";
const modeIdle = "py-2.5 px-4 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all text-on-surface-variant hover:text-primary";

type Booked = { id: string; plan: string; amount: number; date: string; slot: string; mode: string; clinician: string; name: string };

export function BookingSection({ selected, onSelect }: { selected: PlanSlug; onSelect: (p: PlanSlug) => void }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"online" | "offline">("online");
  const [clinician, setClinician] = useState(CLINICIANS[0].value);
  const [date, setDate] = useState(addDaysISO(1));
  const [slot, setSlot] = useState("11:30 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [booked, setBooked] = useState<Booked | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.full_name) setName((n) => n || data.full_name || "");
        if (data?.phone) setPhone((p) => p || data.phone || "");
      });
  }, [user]);

  const plan = BOOKING_PLANS.find((p) => p.slug === selected) ?? BOOKING_PLANS[3];

  async function submit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone, date });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    if (date < todayISO()) {
      toast.error("Please choose today or a future date");
      return;
    }
    if (!user) {
      toast.info("Please sign in to confirm your booking");
      navigate({ to: "/auth", search: { next: "/diet-plans" } });
      return;
    }
    setBusy(true);
    const { data, error } = await supabase.rpc("book_consultation", {
      _plan_slug: plan.slug,
      _mode: mode,
      _clinician: clinician,
      _date: date,
      _slot: slot,
      _client_name: parsed.data.name,
      _phone: parsed.data.phone,
    });
    setBusy(false);
    if (error || !data) {
      toast.error(friendlyError(error, "Could not save your booking. Please try again."));
      return;
    }
    setBooked({ id: String(data), plan: plan.short, amount: plan.price, date, slot, mode, clinician, name: parsed.data.name });
    toast.success("Booking request saved");
  }

  const ref = booked ? booked.id.slice(0, 8).toUpperCase() : "";
  const waText = booked
    ? `Hi, I booked ${booked.plan} (${inr(booked.amount)}) on ${formatDate(booked.date)} at ${booked.slot}. Booking ref ${ref}. Name: ${booked.name}.`
    : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
      <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
        {booked ? (
          <div className="space-y-space-md animate-fade" role="status">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">event_available</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Booking request received</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Reference <span className="font-mono font-semibold">{ref}</span></p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-xl font-body-sm text-body-sm text-on-surface space-y-1">
              <p><strong>Status:</strong> <span className="text-secondary font-semibold">Awaiting payment</span> — your slot is held, not yet confirmed.</p>
              <p>To confirm, pay <strong>{inr(booked.amount)}</strong> to UPI ID <span className="font-mono">{UPI_ID}</span>, then send us the payment reference (UTR) on WhatsApp or through the Contact page.</p>
              <p className="text-on-surface-variant">Online card payment is not available yet.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-sm">
              <a className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:opacity-90" href={waLink(WHATSAPP.muskaan.phone, waText)} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Send on WhatsApp
              </a>
              <button type="button" onClick={() => navigate({ to: "/about", hash: "payment-channels" })} className="flex-1 py-3 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary transition-all">
                Submit UPI Reference
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-sm">
              <button type="button" onClick={() => navigate({ to: "/account" })} className="flex-1 py-2 font-label-lg text-label-lg text-primary hover:underline">View in My Account</button>
              <button type="button" onClick={() => setBooked(null)} className="flex-1 py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-primary">Book another session</button>
            </div>
          </div>
        ) : (
          <form className="space-y-space-md" id="consultation-form" onSubmit={submit} noValidate>
            <div>
              <label className="block font-label-lg text-label-lg text-primary mb-2">Consultation Mode</label>
              <div className="grid grid-cols-2 gap-space-sm p-1 bg-surface-container-low rounded-full">
                <button className={mode === "online" ? modeActive : modeIdle} aria-pressed={mode === "online"} onClick={() => setMode("online")} type="button">
                  <span className="material-symbols-outlined text-[18px]">videocam</span>
                  Online Call / Video
                </button>
                <button className={mode === "offline" ? modeActive : modeIdle} aria-pressed={mode === "offline"} onClick={() => setMode("offline")} type="button">
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                  Offline Clinic Visit
                </button>
              </div>
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-primary mb-1" htmlFor="plan-select">Select Consultation or Membership</label>
              <div className="relative">
                <select className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-3 text-on-surface font-body-md text-body-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary" id="plan-select" value={selected} onChange={(e) => onSelect(e.target.value as PlanSlug)}>
                  {BOOKING_PLANS.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.label}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-lg text-label-lg text-primary mb-1" htmlFor="appointment-date">Preferred Date</label>
                <input className="w-full bg-surface-container-lowest rounded-xl px-4 py-2.5 text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="appointment-date" min={todayISO()} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-primary mb-1" htmlFor="clinician-select">Lead Clinician</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-lowest rounded-xl px-4 py-2.5 text-on-surface font-body-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary" id="clinician-select" value={clinician} onChange={(e) => setClinician(e.target.value)}>
                    {CLINICIANS.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-primary mb-2">Available Time Slot</label>
              <div className="space-y-space-xs">
                {SLOTS.map((g, i) => (
                  <div key={g.title} className={i ? "pt-2" : undefined}>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">{g.title}</span>
                    <div className="grid grid-cols-3 gap-2">
                      {g.slots.map((s) => (
                        <button key={s} className={slot === s ? slotActive : slotIdle} aria-pressed={slot === s} onClick={() => setSlot(s)} type="button">{s}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div>
                <label className="block font-label-lg text-label-lg text-primary mb-1" htmlFor="client-name">Patient Full Name</label>
                <input className="w-full bg-surface-container-lowest rounded-xl px-4 py-2.5 text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="client-name" placeholder="e.g. Priyanshu Sharma" required type="text" maxLength={100} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-primary mb-1" htmlFor="client-phone">WhatsApp / Phone Number</label>
                <input className="w-full bg-surface-container-lowest rounded-xl px-4 py-2.5 text-on-surface font-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="client-phone" placeholder="+91 98765 43210" required type="tel" maxLength={16} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="pt-space-xs">
              <button disabled={busy} className="w-full py-3.5 px-space-lg rounded-full bg-primary-container text-on-primary font-title-md text-title-md shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2 group disabled:opacity-60" type="submit">
                <span>{busy ? "Saving booking…" : user ? "Confirm & Proceed to Payment" : "Sign in & Confirm Booking"}</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
        <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md">
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
            <h3 className="font-headline-sm text-headline-sm text-primary">Appointment Dossier</h3>
            <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-semibold">Live Review</span>
          </div>
          <div className="space-y-2.5 font-body-sm text-body-sm">
            <Row label="Selected Plan:" value={plan.short} />
            <Row label="Mode:" value={mode === "online" ? "Online Video (Google Meet / WhatsApp)" : "Clinic Visit (Chandigarh)"} />
            <Row label="Practitioner:" value={clinician} />
            <div className="flex justify-between py-1 gap-2">
              <span className="text-on-surface-variant">Date & Time:</span>
              <span className="font-semibold text-secondary text-right">{date ? `${formatDate(date)} at ${slot}` : "Choose a date"}</span>
            </div>
            <Row label="Duration:" value="30 Minutes (Clinical Standard)" />
            <Row label="Client Name:" value={name.trim() || "Self / Registered Member"} />
          </div>
          <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>Session / Plan Fee</span>
              <span className="font-semibold text-on-surface">{inr(plan.price)}</span>
            </div>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>Digital Processing & Record Filing</span>
              <span className="text-secondary font-semibold">FREE (₹0)</span>
            </div>
            <div className="pt-2 border-t border-surface-container flex justify-between items-baseline font-title-md text-title-md text-primary">
              <span className="font-bold">Total Payable Amount</span>
              <span className="font-headline-sm text-headline-sm font-bold text-primary">{inr(plan.price)}</span>
            </div>
          </div>
        </div>
        <PaymentCards />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1 gap-2">
      <span className="text-on-surface-variant">{label}</span>
      <span className="font-semibold text-primary text-right">{value}</span>
    </div>
  );
}

function PaymentCards() {
  return (
    <>
        <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-primary">Direct UPI & Clinic Payment</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Confirmed on WhatsApp once payment is verified</p>
            </div>
          </div>
          <div className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded-xl mb-space-sm">
            <div className="w-16 h-16 bg-surface-container-lowest p-1.5 rounded-lg shrink-0 shadow-xs flex items-center justify-center">
              <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 8h8v8H2v-8zm2 2v4h4v-4H4zm8-12h8v8h-8V2zm2 2v4h4V4h-4zm2 8h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm2-2h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zM5 5h2v2H5V5zm0 8h2v2H5v-2zm8-8h2v2h-2V5z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-label-lg text-label-lg text-primary truncate">{UPI_ID}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Accepts GPay, PhonePe, Paytm & NetBanking</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
              256-Bit Encrypted Triage
            </span>
            <span>PAN-India Billing</span>
          </div>
        </div>
        <div className="bg-primary-container text-on-primary p-space-md rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[24px] text-secondary-fixed">chat</span>
            <div>
              <p className="font-label-lg text-label-lg">Need Immediate Help?</p>
              <p className="font-body-sm text-body-sm text-on-primary-container">Chat with Muskaan or Nishan Mann</p>
            </div>
          </div>
          <a className="px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm hover:opacity-90 transition-opacity" href="https://wa.me/917404114816" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
    </>
  );
}
