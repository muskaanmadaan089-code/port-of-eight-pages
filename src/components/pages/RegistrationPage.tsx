import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { bmi, bmiCategory } from "@/lib/format";
import { registrationSchema, nextIntakeStep, type RegistrationData } from "@/lib/registration";
import { BOOKING_PLANS } from "@/components/booking/BookingSection";


export function RegistrationPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState<RegistrationData>({ full_name: "", age: 32, gender: "Male", age_group: "26–35", phone: "", email: "", city: "", height_cm: 175, weight_kg: 82.5, target_weight_kg: 75, activity_level: "Moderately Active", lifestyle: "Desk-based", health_goals: [], diet_preference: "Vegetarian", health_conditions: [], allergies: [], nutritional_status: "", selected_plan_slug: "", notes: "" });
  useEffect(() => {
    if (loading) return;
    if (!user) { setReady(true); return; }
    let live = true;
    supabase.from("profiles").select("*").eq("id", user.id).maybeSingle().then(({data, error}) => {
      if (!live) return;
      if (error) toast.error("Could not retrieve your registration");
      if (data) { setForm(f => ({ ...f, full_name: data.full_name ?? "", email: data.email ?? user.email ?? "", phone: data.phone ?? "", city: data.city ?? "", gender: data.gender ?? f.gender, age: data.age ?? f.age, age_group: data.age_group ?? f.age_group, height_cm: data.height_cm ?? f.height_cm, weight_kg: data.current_weight_kg ?? f.weight_kg, target_weight_kg: data.target_weight_kg ?? f.target_weight_kg, activity_level: data.activity_level ?? f.activity_level, lifestyle: data.lifestyle ?? f.lifestyle, health_goals: data.health_goals.length ? data.health_goals : data.primary_goal ? [data.primary_goal] : [], diet_preference: data.diet_preference ?? f.diet_preference, health_conditions: data.health_conditions, allergies: data.allergies, nutritional_status: data.nutritional_status ?? "", selected_plan_slug: data.selected_plan_slug ?? "", notes: data.clinical_notes ?? "" })); setStep(data.onboarding_complete ? 1 : data.onboarding_step); }
      setReady(true);
    });
    return () => { live = false; };
  }, [user?.id, loading]);
  const set = <K extends keyof RegistrationData>(k: K, v: RegistrationData[K]) => setForm(f => ({...f, [k]: v}));
  const toggle = (k: "health_goals" | "health_conditions" | "allergies", value: string) => setForm(f => ({ ...f, [k]: value.startsWith("None /") ? (f[k].includes(value) ? [] : [value]) : f[k].includes(value) ? f[k].filter(x => x !== value) : [...f[k].filter(x => !x.startsWith("None /")), value] }));
  const selection = (on: boolean) => on ? "bg-primary-container text-on-primary shadow-sm" : "bg-surface-container text-on-surface hover:bg-surface-container-high";
  async function save(e: FormEvent) {
    e.preventDefault();
    if (!user) { toast.info("Sign in to save your registration"); return; }
    const parsed = registrationSchema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Check your details"); return; }
    if (step === 4 && !form.selected_plan_slug) { toast.error("Choose a diet plan"); return; }
    setBusy(true);
    try {
      const {error} = await supabase.rpc("save_client_registration", { _data: { ...parsed.data, nutritional_status: form.nutritional_status || bmiCategory(bmi(form.weight_kg, form.height_cm)) }, _step: nextIntakeStep(step), _complete: step === 4 });
      if (error) throw error;
      toast.success(step === 4 ? "Registration and selected plan saved" : "Your details have been saved");
      if (step === 4) await navigate({to: "/account"});
      else { setStep(nextIntakeStep(step)); document.getElementById("intake-form")?.scrollIntoView({block: "start"}); }
    } catch { toast.error("Could not save your registration. Please try again."); }
    finally { setBusy(false); }
  }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wide">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Clinical Onboarding Dossier • Step {step} of 4
              </div>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Client Registration & Biometrics</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Welcome to NutriMaster Wellness Hub! Start Your Journey Towards a Healthier Lifestyle. Accurate baseline metrics allow our certified specialists to compute precise metabolic targets.</p>
            </div>
            <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">encrypted</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-bold">HIPAA & DISHA Compliant</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">256-bit encrypted medical record</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <aside className="lg:col-span-4 space-y-space-lg lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-space-lg shadow-xl">
                <div className="relative z-10 space-y-space-md">
                  <div className="flex items-center gap-space-xs text-secondary-fixed">
                    <span className="material-symbols-outlined text-[22px]">vital_signs</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">Clinical Philosophy</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-primary">Your Health, Your Nutrition, Your Transformation.</h2>
                    <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">Evidence-led clinical protocols designed to recalibrate metabolic inertia without restrictive starvation or unverified crash regimens.</p>
                  </div>
                  <div className="p-space-md rounded-xl bg-primary/40 backdrop-blur-md space-y-space-sm">
                    <div className="flex justify-between items-center text-on-primary">
                      <span className="font-label-sm text-label-sm">Metabolic Readiness Index</span>
                      <span className="font-title-md text-title-md text-secondary-fixed">94.2%</span>
                    </div>
                    <div className="w-full bg-surface-variant/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary-fixed h-full rounded-full transition-all duration-500" style={{ width: "94%" }} />
                    </div>
                    <p className="font-label-sm text-label-sm text-on-primary-container text-right">Adaptive dynamic calculation</p>
                  </div>
                  <div className="flex items-center gap-space-sm pt-space-xs">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-sm text-label-sm font-bold shadow-sm">M</div>
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-label-sm text-label-sm font-bold shadow-sm">N</div>
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">spa</span>
                      </div>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-primary-container">
                      Supervised by{" "}
                      <strong className="text-on-primary">Muskaan</strong>
                      {" "}&{" "}
                      <strong className="text-on-primary">Nishan Mann</strong>
                    </p>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-secondary opacity-20 blur-2xl pointer-events-none" />
              </div>
              <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">Intake Sequence</span>
                <nav aria-label="Registration Steps" className="space-y-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md shrink-0 shadow-sm">1</div>
                    <div className="min-w-0">
                      <p className="font-title-md text-title-md text-primary leading-tight">General Information</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Legal identifiers, anthropometrics & lifestyle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-md text-label-md shrink-0">2</div>
                    <div className="min-w-0">
                      <p className="font-title-md text-title-md text-on-surface leading-tight">Biochemical Analysis</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Blood markers, lipid profile & HbA1c</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-md text-label-md shrink-0">3</div>
                    <div className="min-w-0">
                      <p className="font-title-md text-title-md text-on-surface leading-tight">NutriScan AI Integration</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Nutrient gaps & micro-deficiency scan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-md text-label-md shrink-0">4</div>
                    <div className="min-w-0">
                      <p className="font-title-md text-title-md text-on-surface leading-tight">Dashboard & Meal Plans</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Tailored therapeutic macronutrient chart</p>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-space-md flex items-center justify-between gap-space-sm">
                <div className="space-y-0.5">
                  <p className="font-label-md text-label-md text-primary font-bold">Have acute symptoms?</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Chat with a triage nutritionist immediately</p>
                </div>
                <a className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary transition-colors shrink-0 shadow-sm" href="https://wa.me/917404114816" target="_blank" title="Quick WhatsApp Assist" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </a>
              </div>
            </aside>
            <section className="lg:col-span-8 space-y-space-lg">
              {!user && ready && <Link to="/auth" search={{next: "/registration"}} className="block text-secondary font-semibold">Sign in to save your registration</Link>}
              <form className="space-y-space-lg scroll-mt-24" id="intake-form" onSubmit={save} noValidate>
                <div hidden={step !== 1}>
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">person</span>
                      <h3 className="font-headline-sm text-headline-sm">1. Personal Basics</h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mandatory Identity</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="fullName">Full Legal Name</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">badge</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="fullName" placeholder="e.g. Aarav Sharma" required type="text" value={form.full_name} onChange={e => set("full_name", e.target.value)}} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="exactAge">Exact Age (Years)</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">cake</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="exactAge" max="115" min="1" required type="number" value={form.age} onChange={e => set("age", Number(e.target.value))}} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">Gender</label>
                      <div className="grid grid-cols-3 gap-2" role="radiogroup">
                        <Button className={`gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all    ${selection(form.gender === 'Male')}`} aria-pressed={form.gender === 'Male'} onClick={() => set("gender", 'Male')} type="button">Male</Button>
                        <Button className={`gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all    ${selection(form.gender === 'Female')}`} aria-pressed={form.gender === 'Female'} onClick={() => set("gender", 'Female')} type="button">Female</Button>
                        <Button className={`gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all    ${selection(form.gender === 'Other')}`} aria-pressed={form.gender === 'Other'} onClick={() => set("gender", 'Other')} type="button">Other</Button>
                      </div>
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-label-lg text-label-lg text-on-surface">Age Cohort</label>
                      <div className="flex flex-wrap gap-2" id="age-group-container">
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === 'Below 18')}`} aria-pressed={form.age_group === 'Below 18'} onClick={() => set("age_group", 'Below 18')} type="button">Below 18</Button>
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === '18–25')}`} aria-pressed={form.age_group === '18–25'} onClick={() => set("age_group", '18–25')} type="button">18–25</Button>
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === '26–35')}`} aria-pressed={form.age_group === '26–35'} onClick={() => set("age_group", '26–35')} type="button">26–35</Button>
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === '36–45')}`} aria-pressed={form.age_group === '36–45'} onClick={() => set("age_group", '36–45')} type="button">36–45</Button>
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === '46–60')}`} aria-pressed={form.age_group === '46–60'} onClick={() => set("age_group", '46–60')} type="button">46–60</Button>
                        <Button className={`age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm    transition-colors ${selection(form.age_group === 'Above 60')}`} aria-pressed={form.age_group === 'Above 60'} onClick={() => set("age_group", 'Above 60')} type="button">Above 60</Button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="contactPhone">Contact Number</label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md select-none shrink-0">+91 (IN)</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="contactPhone" pattern="[0-9]{10}" placeholder="98765 43210" required type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="emailAddr">Email Address</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">alternate_email</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="emailAddr" placeholder="aarav.sharma@example.com" required type="email" value={form.email} onChange={e => set("email", e.target.value)}} />
                      </div>
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="cityRegion">City / Region (Pan-India or International)</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">pin_drop</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="cityRegion" placeholder="e.g. Chandigarh, Punjab / Gurugram, Haryana" required type="text" value={form.city} onChange={e => set("city", e.target.value)}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">straighten</span>
                      <h3 className="font-headline-sm text-headline-sm">2. Biometric Metrics & Deficit Target</h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dynamic Differential</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="font-label-lg text-label-lg text-on-surface" htmlFor="userHeight">Height</label>
                        <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full text-[11px] font-semibold text-on-surface-variant">
                          <span className="text-primary font-bold" id="unit-cm-label">cm</span>
                          <span>/</span>
                          <span className="opacity-60" id="unit-ft-label">ft</span>
                        </div>
                      </div>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="userHeight" max="230" min="100" step="0.5" type="number" value={form.height_cm} onChange={e => set("height_cm", Number(e.target.value))}} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant">cm</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="currentWeight">Current Weight</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="currentWeight" max="250" min="30" step="0.5" type="number" value={form.weight_kg} onChange={e => set("weight_kg", Number(e.target.value))}} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant">kg</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="targetWeight">Target Weight</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="targetWeight" max="250" min="30" step="0.5" type="number" value={form.target_weight_kg} onChange={e => set("target_weight_kg", Number(e.target.value))}} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant">kg</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">swap_vert</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Computed Metabolic Trajectory</p>
                        <p className="font-title-md text-title-md text-primary font-bold" id="differentialStatusText">
                          Target Deficit:{" "}
                          <span className="text-secondary" id="diffValueDisplay">{(form.target_weight_kg - form.weight_kg).toFixed(1)} kg</span>
                          {" "}(Gradual Recomposition)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Safe Pace: 0.6 kg / week</span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Est. 12-14 Weeks</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">directions_run</span>
                      <h3 className="font-headline-sm text-headline-sm">3. Lifestyle & Activity Baseline</h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NEAT & Caloric Expenditure</span>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface">Weekly Physical Activity Level</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm" id="activity-level-group">
                      <Button type="button" aria-pressed={form.activity_level === 'Sedentary'} onClick={() => set("activity_level", 'Sedentary')} className={`activity-card h-auto whitespace-normal text-left cursor-pointer p-space-md rounded-2xl   transition-all flex items-start gap-space-sm ${selection(form.activity_level === 'Sedentary')}`}>
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">chair</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-inherit font-semibold leading-tight">Sedentary</h4>
                          <p className="font-body-sm text-body-sm text-inherit">Desk job, minimal active walking, under 4k steps/day</p>
                        </div>
                      </Button>
                      <Button type="button" aria-pressed={form.activity_level === 'Lightly Active'} onClick={() => set("activity_level", 'Lightly Active')} className={`activity-card h-auto whitespace-normal text-left cursor-pointer p-space-md rounded-2xl   transition-all flex items-start gap-space-sm ${selection(form.activity_level === 'Lightly Active')}`}>
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">nordic_walking</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-inherit font-semibold leading-tight">Lightly Active</h4>
                          <p className="font-body-sm text-body-sm text-inherit">Light exercise or yoga 1–3 days/week, 6k-8k steps</p>
                        </div>
                      </Button>
                      <Button type="button" aria-pressed={form.activity_level === 'Moderately Active'} onClick={() => set("activity_level", 'Moderately Active')} className={`activity-card h-auto whitespace-normal text-left cursor-pointer p-space-md rounded-2xl    flex items-start gap-space-sm ${selection(form.activity_level === 'Moderately Active')}`}>
                        <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-inherit font-semibold leading-tight">Moderately Active</h4>
                          <p className="font-body-sm text-body-sm text-inherit">Moderate training / cardio 3–5 days/week</p>
                        </div>
                      </Button>
                      <Button type="button" aria-pressed={form.activity_level === 'Very Active'} onClick={() => set("activity_level", 'Very Active')} className={`activity-card h-auto whitespace-normal text-left cursor-pointer p-space-md rounded-2xl   transition-all flex items-start gap-space-sm ${selection(form.activity_level === 'Very Active')}`}>
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">sprint</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-inherit font-semibold leading-tight">Very Active</h4>
                          <p className="font-body-sm text-body-sm text-inherit">Hard exertion, intense athletics or sports 6–7 days</p>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Primary Health Goal</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-sm" id="goals-group">
                      <Button type="button" aria-pressed={form.health_goals.includes('Weight Loss & Metabolic Reset')} onClick={() => toggle("health_goals", 'Weight Loss & Metabolic Reset')} className={`goal-pill h-auto whitespace-normal text-left cursor-pointer p-3.5 rounded-xl    flex items-center gap-space-sm transition-all ${selection(form.health_goals.includes('Weight Loss & Metabolic Reset'))}`}>
                        <span className="material-symbols-outlined text-[20px]">monitor_weight</span>
                        <span className="font-label-md text-label-md font-semibold">Weight Loss & Metabolic Reset</span>
                      </Button>
                      <Button type="button" aria-pressed={form.health_goals.includes('Healthy Weight Gain')} onClick={() => toggle("health_goals", 'Healthy Weight Gain')} className={`goal-pill h-auto whitespace-normal text-left cursor-pointer p-3.5 rounded-xl    flex items-center gap-space-sm transition-all ${selection(form.health_goals.includes('Healthy Weight Gain'))}`}>
                        <span className="material-symbols-outlined text-[20px]">trending_up</span>
                        <span className="font-label-md text-label-md font-semibold">Healthy Weight Gain</span>
                      </Button>
                      <Button type="button" aria-pressed={form.health_goals.includes('Muscle Hypertrophy')} onClick={() => toggle("health_goals", 'Muscle Hypertrophy')} className={`goal-pill h-auto whitespace-normal text-left cursor-pointer p-3.5 rounded-xl    flex items-center gap-space-sm transition-all ${selection(form.health_goals.includes('Muscle Hypertrophy'))}`}>
                        <span className="material-symbols-outlined text-[20px]">sports_gymnastics</span>
                        <span className="font-label-md text-label-md font-semibold">Muscle Hypertrophy</span>
                      </Button>
                      <Button type="button" aria-pressed={form.health_goals.includes('General Vitality & Energy')} onClick={() => toggle("health_goals", 'General Vitality & Energy')} className={`goal-pill h-auto whitespace-normal text-left cursor-pointer p-3.5 rounded-xl    flex items-center gap-space-sm transition-all ${selection(form.health_goals.includes('General Vitality & Energy'))}`}>
                        <span className="material-symbols-outlined text-[20px]">energy_savings_leaf</span>
                        <span className="font-label-md text-label-md font-semibold">General Vitality & Energy</span>
                      </Button>
                      <Button type="button" aria-pressed={form.health_goals.includes('Therapeutic Disease & Hormone Management (PCOS/Thyroid)')} onClick={() => toggle("health_goals", 'Therapeutic Disease & Hormone Management (PCOS/Thyroid)')} className={`goal-pill h-auto whitespace-normal text-left cursor-pointer p-3.5 rounded-xl    flex items-center gap-space-sm transition-all sm:col-span-2 md:col-span-2 ${selection(form.health_goals.includes('Therapeutic Disease & Hormone Management (PCOS/Thyroid)'))}`}>
                        <span className="material-symbols-outlined text-[20px]">healing</span>
                        <span className="font-label-md text-label-md font-semibold">Therapeutic Disease & Hormone Management (PCOS/Thyroid)</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">nutrition</span>
                      <h3 className="font-headline-sm text-headline-sm">4. Nutritional & Medical Safeguards</h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Clinical Profiling</span>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface">Dietary Pattern Preference</label>
                    <div className="flex flex-wrap gap-2.5">
                      <Button className={`diet-pill px-4 py-2 rounded-full font-label-md text-label-md    transition-all ${selection(form.diet_preference === 'Vegetarian')}`} aria-pressed={form.diet_preference === 'Vegetarian'} onClick={() => set("diet_preference", 'Vegetarian')} type="button">Vegetarian</Button>
                      <Button className={`diet-pill px-4 py-2 rounded-full font-label-md text-label-md    transition-all ${selection(form.diet_preference === 'Non-Vegetarian')}`} aria-pressed={form.diet_preference === 'Non-Vegetarian'} onClick={() => set("diet_preference", 'Non-Vegetarian')} type="button">Non-Vegetarian</Button>
                      <Button className={`diet-pill px-4 py-2 rounded-full font-label-md text-label-md    transition-all ${selection(form.diet_preference === 'Vegan (100% Plant-Based)')}`} aria-pressed={form.diet_preference === 'Vegan (100% Plant-Based)'} onClick={() => set("diet_preference", 'Vegan (100% Plant-Based)')} type="button">Vegan (100% Plant-Based)</Button>
                      <Button className={`diet-pill px-4 py-2 rounded-full font-label-md text-label-md    transition-all ${selection(form.diet_preference === 'Eggetarian (Ovo-Vegetarian)')}`} aria-pressed={form.diet_preference === 'Eggetarian (Ovo-Vegetarian)'} onClick={() => set("diet_preference", 'Eggetarian (Ovo-Vegetarian)')} type="button">Eggetarian (Ovo-Vegetarian)</Button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface">Existing Health Conditions / Diagnostics</label>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Select all that apply</span>
                    </div>
                    <div className="flex flex-wrap gap-2" id="conditions-container">
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('Diabetes Type 1 / 2'))}`} aria-pressed={form.health_conditions.includes('Diabetes Type 1 / 2')} onClick={() => toggle("health_conditions", 'Diabetes Type 1 / 2')} type="button">Diabetes Type 1 / 2</Button>
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('PCOS / PCOD'))}`} aria-pressed={form.health_conditions.includes('PCOS / PCOD')} onClick={() => toggle("health_conditions", 'PCOS / PCOD')} type="button">PCOS / PCOD</Button>
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('Thyroid / Hypothyroid'))}`} aria-pressed={form.health_conditions.includes('Thyroid / Hypothyroid')} onClick={() => toggle("health_conditions", 'Thyroid / Hypothyroid')} type="button">Thyroid / Hypothyroid</Button>
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('Hypertension (High BP)'))}`} aria-pressed={form.health_conditions.includes('Hypertension (High BP)')} onClick={() => toggle("health_conditions", 'Hypertension (High BP)')} type="button">Hypertension (High BP)</Button>
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('Fatty Liver (Grade 1/2)'))}`} aria-pressed={form.health_conditions.includes('Fatty Liver (Grade 1/2)')} onClick={() => toggle("health_conditions", 'Fatty Liver (Grade 1/2)')} type="button">Fatty Liver (Grade 1/2)</Button>
                      <Button className={`condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.health_conditions.includes('None / Good General Health'))}`} aria-pressed={form.health_conditions.includes('None / Good General Health')} onClick={() => toggle("health_conditions", 'None / Good General Health')} type="button">None / Good General Health</Button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Known Food Allergies or Intolerances</label>
                    <div className="flex flex-wrap gap-2" id="allergies-container">
                      <Button className={`allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.allergies.includes('Lactose / Dairy'))}`} aria-pressed={form.allergies.includes('Lactose / Dairy')} onClick={() => toggle("allergies", 'Lactose / Dairy')} type="button">Lactose / Dairy</Button>
                      <Button className={`allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.allergies.includes('Gluten / Celiac Sensitivity'))}`} aria-pressed={form.allergies.includes('Gluten / Celiac Sensitivity')} onClick={() => toggle("allergies", 'Gluten / Celiac Sensitivity')} type="button">Gluten / Celiac Sensitivity</Button>
                      <Button className={`allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.allergies.includes('Tree Nuts / Peanuts'))}`} aria-pressed={form.allergies.includes('Tree Nuts / Peanuts')} onClick={() => toggle("allergies", 'Tree Nuts / Peanuts')} type="button">Tree Nuts / Peanuts</Button>
                      <Button className={`allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.allergies.includes('Soy & Legumes'))}`} aria-pressed={form.allergies.includes('Soy & Legumes')} onClick={() => toggle("allergies", 'Soy & Legumes')} type="button">Soy & Legumes</Button>
                      <Button className={`allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm    transition-colors ${selection(form.allergies.includes('None / No Known Allergies'))}`} aria-pressed={form.allergies.includes('None / No Known Allergies')} onClick={() => toggle("allergies", 'None / No Known Allergies')} type="button">None / No Known Allergies</Button>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg space-y-space-md">
                  <label className="block font-label-lg">Lifestyle<select aria-label="Lifestyle" className="w-full rounded-xl bg-surface-container px-4 py-3" value={form.lifestyle} onChange={e => set("lifestyle", e.target.value)}>{["Desk-based", "Shift work", "Active occupation", "Student", "Homemaker"].map(x => <option key={x}>{x}</option>)}</select></label>
                  <label className="block font-label-lg">Nutritional Status<select aria-label="Nutritional Status" className="w-full rounded-xl bg-surface-container px-4 py-3" value={form.nutritional_status} onChange={e => set("nutritional_status", e.target.value)}>{["", "Underweight", "Healthy weight", "Overweight", "Obese", "Nutrition deficiency", "Not sure"].map(x => <option key={x} value={x}>{x || "Use calculated BMI category"}</option>)}</select></label>
                  <p className="text-primary font-semibold" role="status">BMI: {bmi(form.weight_kg, form.height_cm)} • {bmiCategory(bmi(form.weight_kg, form.height_cm))}</p>
                </div>
                </div>
                {step === 2 && <div className="rounded-2xl bg-surface-container-lowest p-space-lg space-y-space-md"><h3 className="font-headline-sm text-primary">Biochemical Analysis</h3><label className="block">Blood markers, lipid profile & HbA1c<textarea aria-label="Blood markers, lipid profile & HbA1c" value={form.notes} onChange={e => set("notes", e.target.value)} className="w-full bg-surface-container-low rounded-xl p-4" rows={4} maxLength={2000} /></label></div>}
                {step === 3 && <div className="rounded-2xl bg-surface-container-lowest p-space-lg space-y-space-md"><h3 className="font-headline-sm text-primary">NutriScan AI Integration</h3><p className="text-on-surface-variant">Nutrient gaps & micro-deficiency scan</p><Link to="/nutriscan" className="text-secondary font-semibold">Open NutriScan</Link></div>}
                {step === 4 && <div className="rounded-2xl bg-surface-container-lowest p-space-lg space-y-space-md"><h3 className="font-headline-sm text-primary">Dashboard & Meal Plans</h3><label className="block">Select Your Diet Plan<select aria-label="Select Your Diet Plan" value={form.selected_plan_slug} onChange={e => set("selected_plan_slug",e.target.value)} className="w-full rounded-xl bg-surface-container-low p-4"><option value="">Choose a diet plan</option>{BOOKING_PLANS.map(p => <option key={p.slug} value={p.slug}>{p.label}</option>)}</select></label><p className="text-on-surface-variant">Payment and consultation confirmation remain separate from plan selection.</p></div>}
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  {step > 1 && <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="space-y-1 text-center sm:text-left">
                      <p className="font-title-md text-title-md text-primary font-semibold">Ready to generate your personalized dossier?</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Redirects directly to Home & Wellness Dashboard upon verification.</p>
                    </div>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary font-title-md text-title-md shadow-lg hover:bg-secondary transition-all transform hover:-translate-y-0.5" type="submit" disabled={busy || !ready}>
                      <span>{busy ? "Saving…" : step === 4 ? "Submit & Explore NutriMaster" : "Save & Next"}</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low text-on-surface-variant space-y-1">
                    <div className="flex items-center gap-1.5 text-primary font-semibold text-label-md">
                      <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
                      Clinical Ethics & Transparency Statement
                    </div>
                    <p className="font-label-sm text-label-sm leading-relaxed text-justify">NutriMaster Wellness Hub provides nutritional consultation, physiological wellness education, and clinical dietary structuring. Our recommendations are formulated to support long-term metabolic health and do not substitute for in-person emergency care, prescription pharmacotherapy, or oncological treatments. We strictly reject false certifications, instant cure promises, or unverified claims.</p>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
