export const inr = (n: number | null | undefined) =>
  "₹" + Math.round(Number(n ?? 0)).toLocaleString("en-IN");

export function bmi(heightCm: number, weightKg: number) {
  if (!heightCm || !weightKg || heightCm <= 0) return 0;
  const m = heightCm / 100;
  return Math.round((weightKg / (m * m)) * 10) / 10;
}

export function bmiCategory(value: number) {
  if (!value) return "—";
  if (value < 18.5) return "Underweight";
  if (value < 23) return "Healthy";
  if (value < 25) return "Overweight";
  return "Obese";
}

/** Daily water need used by the hydration calculator: 35 ml per kg body weight. */
export const waterNeedMl = (weightKg: number) => Math.round(weightKg * 35);

export const todayISO = () => {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

export const formatDate = (iso: string | null | undefined, opts?: Intl.DateTimeFormatOptions) =>
  iso ? new Date(iso).toLocaleDateString("en-IN", opts ?? { day: "numeric", month: "short", year: "numeric" }) : "—";

export const statusLabel = (s: string) =>
  s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const WHATSAPP = {
  muskaan: { name: "Muskaan", phone: "917404114816", display: "+91 74041 14816" },
  nishan: { name: "Nishan Mann", phone: "918168147733", display: "+91 81681 47733" },
};
export const waLink = (phone: string, text?: string) =>
  `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** UPI ID shown for manual payments (from the original design). */
export const UPI_ID = "nutrimaster@upi";

export const addDaysISO = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

/** Turns a database/RPC error into a short message safe to show users. */
export function friendlyError(err: unknown, fallback = "Something went wrong. Please try again.") {
  const msg = (err as { message?: string } | null)?.message ?? "";
  if (!msg) return fallback;
  if (/jwt|permission denied|row-level security|violates/i.test(msg)) return fallback;
  return msg.length > 160 ? fallback : msg;
}
