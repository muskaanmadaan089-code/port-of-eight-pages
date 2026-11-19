import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { formatDate, inr, statusLabel } from "@/lib/format";

type Item = { id: string; title: string; sub: string; status: string; at: string };

function badge(status: string) {
  if (status === "paid") return { icon: "done_all", wrap: "bg-secondary-container/40 text-secondary", pill: "bg-secondary-container text-on-secondary-container", dot: "bg-secondary", label: "Paid" };
  if (status === "failed" || status === "refunded") return { icon: "close", wrap: "bg-error-container/40 text-error", pill: "bg-error-container text-on-error-container", dot: "bg-error", label: statusLabel(status) };
  return { icon: "hourglass_empty", wrap: "bg-surface-container text-outline", pill: "bg-surface-container-high text-on-surface", dot: "bg-outline", label: status === "unpaid" ? "Awaiting Payment" : statusLabel(status) };
}

export function PaymentStatusList() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    if (!user) {
      setItems(null);
      return;
    }
    let cancelled = false;
    Promise.all([
      supabase.from("consultations").select("id, plan_name, amount, payment_status, appointment_date, created_at").order("created_at", { ascending: false }).limit(5),
      supabase.from("orders").select("id, order_number, total, payment_method, payment_status, created_at").order("created_at", { ascending: false }).limit(5),
    ]).then(([c, o]) => {
      if (cancelled) return;
      const list: Item[] = [
        ...(c.data ?? []).map((r) => ({ id: r.id, title: r.plan_name, sub: `Consultation • ${inr(r.amount)} • ${formatDate(r.appointment_date)}`, status: r.payment_status, at: r.created_at })),
        ...(o.data ?? []).map((r) => ({ id: r.id, title: `Order ${r.order_number}`, sub: `Supplements • ${inr(r.total)} • ${r.payment_method.toUpperCase()}`, status: r.payment_status, at: r.created_at })),
      ].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 5);
      setItems(list);
    });
    return () => {
      cancelled = true;
    };
  }, [user]);

  return (
    <div>
      <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold mb-2">Your Payment Status</p>
      {!user ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant p-3 rounded-xl bg-surface-container-lowest">
          {loading ? "Loading…" : <><Link to="/auth" search={{ next: "/about" }} className="text-secondary font-semibold hover:underline">Sign in</Link> to see the payment status of your bookings and orders.</>}
        </p>
      ) : items === null ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant p-3">Loading…</p>
      ) : items.length === 0 ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant p-3 rounded-xl bg-surface-container-lowest">You have no bookings or orders yet.</p>
      ) : (
        <div className="space-y-2">
          {items.map((it) => {
            const b = badge(it.status);
            return (
              <div key={it.id} className="flex items-center justify-between gap-2 p-3 rounded-xl bg-surface-container-lowest">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${b.wrap}`}>
                    <span className="material-symbols-outlined text-[18px]">{b.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-on-surface truncate">{it.title}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{it.sub}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold flex items-center gap-1 shrink-0 ${b.pill}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${b.dot}`} />
                  {b.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
