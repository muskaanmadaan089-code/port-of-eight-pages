import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

const field =
  "w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/50";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s-]{10,20}$/, "Enter a valid phone number"),
  subject: z.string().max(150),
  message: z.string().trim().min(10, "Please write a little more detail").max(2000),
});

const SUBJECTS = [
  "Diet Plan Consultation",
  "Therapeutic Clinical Query (PCOS/Thyroid/Diabetes)",
  "Supplement Order / Store Inquiry",
  "Payment Confirmation / UTR Update",
  "General Wellness Inquiry",
];

export function ContactForm() {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("contact_enquiries").insert({
      kind: "general",
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      subject: parsed.data.subject,
      message: parsed.data.message,
      user_id: user?.id ?? null,
    });
    setBusy(false);
    if (error) {
      toast.error("Could not send your enquiry. Please try again or WhatsApp us.");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" });
    toast.success("Enquiry sent");
  }

  return (
    <form className="space-y-space-md" onSubmit={submit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="fullName">Full Name</label>
          <input className={field} id="fullName" placeholder="e.g. Aarav Sharma" required type="text" value={form.name} onChange={set("name")} maxLength={100} />
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="emailAddr">Email Address</label>
          <input className={field} id="emailAddr" placeholder="aarav.sharma@domain.com" required type="email" value={form.email} onChange={set("email")} maxLength={255} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="phoneNum">Phone Number (with WhatsApp)</label>
          <input className={field} id="phoneNum" placeholder="+91 98765 43210" required type="tel" value={form.phone} onChange={set("phone")} maxLength={20} />
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="subjectMatter">Subject</label>
          <select className={field} id="subjectMatter" value={form.subject} onChange={set("subject")}>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="userMessage">Detailed Message / Health Goals</label>
        <textarea className={field} id="userMessage" placeholder="Mention any existing clinical health challenges, current medication, or specific dietary requests..." required rows={4} value={form.message} onChange={set("message")} maxLength={2000} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
          Your medical data is held in strict clinical confidentiality.
        </span>
        <button disabled={busy} className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary transition-all disabled:opacity-60" type="submit">
          <span>{busy ? "Sending…" : "Send Enquiry"}</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>
      {sent && (
        <div className="p-space-sm bg-secondary-container text-on-secondary-container rounded-xl flex items-center gap-2 animate-fade">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span className="font-body-sm text-body-sm">Thank you! Your enquiry has been routed directly to our Chandigarh desk. We will reach out shortly.</span>
        </div>
      )}
    </form>
  );
}

export function UtrForm() {
  const { user } = useAuth();
  const [utr, setUtr] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("Consultation");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const ref = utr.trim();
    if (!/^[0-9A-Za-z]{8,22}$/.test(ref)) {
      toast.error("Enter the 12-digit UTR / UPI reference from your payment app");
      return;
    }
    if (name.trim().length < 2) {
      toast.error("Enter the name on the payment");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("contact_enquiries").insert({
      kind: "payment",
      name: name.trim(),
      subject: `UPI payment reference — ${purpose}`,
      message: `UTR / reference: ${ref}`,
      user_id: user?.id ?? null,
    });
    setBusy(false);
    if (error) {
      toast.error("Could not submit the reference. Please try again.");
      return;
    }
    setDone(ref);
    setUtr("");
  }

  const input =
    "w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/50 text-body-sm";
  return (
    <>
      <form className="space-y-space-sm mb-space-md" onSubmit={submit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          <input className={input} placeholder="Name on the payment" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} />
          <select className={input} value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option>Consultation</option>
            <option>Membership plan</option>
            <option>NutriScan subscription</option>
            <option>Supplement order</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-sm">
          <div className="sm:col-span-8">
            <input className={`${input} font-mono`} id="utrInput" placeholder="12-digit UPI Ref / UTR No. (e.g. 408923481234)" required type="text" value={utr} onChange={(e) => setUtr(e.target.value)} maxLength={22} />
          </div>
          <div className="sm:col-span-4">
            <button disabled={busy} className="w-full px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors disabled:opacity-60" type="submit">
              {busy ? "Submitting…" : "Submit Reference"}
            </button>
          </div>
        </div>
      </form>
      {done ? (
        <div className="mt-space-md p-space-sm rounded-xl bg-surface-container-lowest flex items-center gap-3 animate-fade">
          <span className="material-symbols-outlined text-secondary text-[22px]">hourglass_top</span>
          <div>
            <p className="font-label-md text-label-md text-primary">Reference received: <span className="font-mono">{done}</span></p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Status: <strong className="text-secondary">Awaiting manual verification</strong>. Our desk will match it with your bank statement and confirm on WhatsApp.</p>
          </div>
        </div>
      ) : (
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Payments are verified manually against our bank statement — usually within a few working hours. You will see the updated status in My Account.
        </p>
      )}
    </>
  );
}

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="p-1 rounded bg-surface-container hover:bg-surface-variant text-primary transition-colors ml-auto"
      title={label}
      aria-label={label}
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          toast.error("Copy failed — please copy it manually");
        }
      }}
    >
      <span className={`material-symbols-outlined text-[16px] ${copied ? "text-secondary" : ""}`}>{copied ? "check" : "content_copy"}</span>
    </button>
  );
}
