import { useState } from "react";
import { BookingSection, type PlanSlug } from "@/components/booking/BookingSection";
import img10 from "@/assets/photos/img10.jpg.asset.json";
import img11 from "@/assets/photos/img11.jpg.asset.json";
import img12 from "@/assets/photos/img12.jpg.asset.json";
import img13 from "@/assets/photos/img13.jpg.asset.json";

export function DietPlansPage() {
  const [plan, setPlan] = useState<PlanSlug>("weight-management");
  const choose = (slug: PlanSlug) => {
    setPlan(slug);
    scrollToBooking();
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-lg pb-space-xl">
          <div className="absolute -top-12 right-12 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none -z-10" />
          <section className="mb-space-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mb-space-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  EVIDENCE-BASED METABOLIC CARE • PAN-INDIA
                </div>
                <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Personalized Diet Consultation & Membership Plans</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs max-w-2xl leading-relaxed">Choose the clinical or fitness nutrition plan tailored to your body metrics and daily routine. Certified Dietitians.</p>
              </div>
              <div className="flex items-center gap-space-md bg-surface-container-low p-space-sm rounded-2xl shadow-sm self-start lg:self-auto">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-lowest object-cover" src={`${img10.url}`} alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-lowest object-cover" src={`${img11.url}`} alt="" />
                </div>
                <div className="pr-space-xs">
                  <p className="font-label-lg text-label-lg text-primary leading-tight">Led by Muskaan & Nishan Mann</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">4,800+ Active Clinical Transformations</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-space-xl">
            <div className="flex items-center justify-between mb-space-md">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Single Session Triage</span>
                <h2 className="font-headline-md text-headline-md text-primary">Need an Individual Clinical Evaluation?</h2>
              </div>
              <span className="hidden sm:inline-block font-label-md text-label-md text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">30-Minute Focused Intake</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
              <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div>
                  <div className="flex items-start justify-between mb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">stethoscope</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary">Initial Clinical Assessment</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Comprehensive Deep-Dive Session</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">₹699</span>
                      {" "}
                      <span className="block font-label-sm text-label-sm text-on-surface-variant">/ session</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">Complete baseline review encompassing dietary recall, daily routine mapping, blood biomarker analysis, and initial clinical goal architecture.</p>
                  <ul className="space-y-2 mb-space-lg font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>30-minute private 1-on-1 audio/video triage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>Biometric metabolic baseline review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>Foundational 7-day guidance prescription</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-space-sm flex items-center gap-space-sm">
                  <button className="w-full py-2.5 px-space-md rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary hover:text-on-secondary transition-all text-center" type="button" onClick={() => choose("initial-assessment")}>Book Assessment (₹699)</button>
                </div>
              </div>
              <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div>
                  <div className="flex items-start justify-between mb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">update</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary">Review & Follow-Up</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Maintenance & Macro Adjustment</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">₹399</span>
                      {" "}
                      <span className="block font-label-sm text-label-sm text-on-surface-variant">/ session</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">Designed for existing clients seeking clinical tweaks, bio-feedback troubleshooting, plateaus reassessment, and micro-nutrient optimization.</p>
                  <ul className="space-y-2 mb-space-lg font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>20-minute targeted progress evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>Calorie/Macro fine-tuning & meal swaps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      <span>Continuous metabolic compliance logging</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-space-sm flex items-center gap-space-sm">
                  <button className="w-full py-2.5 px-space-md rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary transition-all text-center" type="button" onClick={() => choose("review-follow-up")}>Schedule Review (₹399)</button>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Structured Programs</span>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Recurring Wellness Memberships</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Continuous physician-backed accountability with personalized protocol revisions, clean recipe guidance, and laboratory telemetry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Foundational</span>
                    <span className="material-symbols-outlined text-outline text-[20px]">nutrition</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Basic Nutrition</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md min-h-[40px]">Lifestyle reset for general health and balanced everyday habits.</p>
                  <div className="mb-space-md pb-space-sm">
                    <span className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">₹1,499</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                  </div>
                  <div className="space-y-3 mb-space-lg pt-space-xs">
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>General nutritional intake assessment</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Personalized weekly diet template</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Healthy eating & hydration guidelines</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Async email query support (48h reply)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-space-sm">
                  <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary hover:text-on-secondary transition-colors" type="button" onClick={() => choose("basic-nutrition")}>Choose Plan</button>
                  <button className="w-full py-1.5 text-center font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={scrollToBooking}>Book Consultation →</button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ring-2 ring-secondary/60">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-3.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold tracking-wide shadow-sm uppercase">Most Popular</div>
                <div>
                  <div className="flex items-center justify-between mb-space-sm mt-1">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Metabolic Focus</span>
                    <span className="material-symbols-outlined text-secondary text-[20px]">monitor_weight</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Weight Management</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md min-h-[40px]">Precision calorie & macro targeting for sustainable body recomp.</p>
                  <div className="mb-space-md pb-space-sm">
                    <span className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">₹2,999</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                  </div>
                  <div className="space-y-3 mb-space-lg pt-space-xs">
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">verified</span>
                      <span>Personalized weight loss or gain protocol</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Gram-level calorie & macro breakdown</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Weekly body metric progress logging</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Bi-weekly chart revisions & grocery lists</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-space-sm">
                  <button className="w-full py-2.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-colors" type="button" onClick={() => choose("weight-management")}>Choose Plan</button>
                  <button className="w-full py-1.5 text-center font-label-sm text-label-sm text-primary font-semibold hover:underline" type="button" onClick={scrollToBooking}>Book Consultation →</button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">High Performance</span>
                    <span className="material-symbols-outlined text-outline text-[20px]">fitness_center</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Fitness & Hypertrophy</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md min-h-[40px]">Tailored energy systems for athletes and strength athletes.</p>
                  <div className="mb-space-md pb-space-sm">
                    <span className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">₹3,999</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                  </div>
                  <div className="space-y-3 mb-space-lg pt-space-xs">
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Hypertrophy lean-mass dietary framework</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Pre & post workout nutrient timing</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Clean supplement stack integration</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                      <span>Weekly recovery & hydration monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-space-sm">
                  <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary hover:text-on-secondary transition-colors" type="button" onClick={() => choose("fitness-muscle")}>Choose Plan</button>
                  <button className="w-full py-1.5 text-center font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={scrollToBooking}>Book Consultation →</button>
                </div>
              </div>
              <div className="bg-primary text-on-primary rounded-2xl p-space-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed px-3.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold tracking-wide shadow-sm uppercase">Best Value • Clinical</div>
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-secondary/15 pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-space-sm mt-1">
                    <span className="px-2.5 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm">Therapeutic Care</span>
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">verified_user</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Premium Wellness</h3>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim mb-space-md min-h-[40px]">Integrated care for Thyroid, PCOS, Diabetes, & Gut dysbiosis.</p>
                  <div className="mb-space-md pb-space-sm">
                    <span className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary font-bold">₹5,999</span>
                    {" "}
                    <span className="font-body-sm text-body-sm text-primary-fixed-dim">/ month</span>
                  </div>
                  <div className="space-y-3 mb-space-lg pt-space-xs text-inverse-on-surface">
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Full clinical pathology & lab review</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Bespoke therapeutic chart (PCOS, Thyroid)</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm font-semibold text-white">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Weekly 1-on-1 private follow-up calls</span>
                    </div>
                    <div className="flex items-start gap-2.5 font-body-sm text-body-sm font-semibold text-white">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Priority WhatsApp direct dietitian access</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-space-sm">
                  <button className="w-full py-2.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg shadow-md hover:bg-secondary-fixed-dim transition-colors" type="button" onClick={() => choose("premium-wellness")}>Choose Plan</button>
                  <button className="w-full py-1.5 text-center font-label-sm text-label-sm text-primary-fixed-dim hover:text-white transition-colors" type="button" onClick={scrollToBooking}>Book Consultation →</button>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-mt-28 mb-space-xl" id="booking-section">
            <div className="bg-surface-container-low rounded-3xl p-space-md sm:p-space-lg lg:p-space-xl shadow-sm">
              <div className="max-w-2xl mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Instant Direct Scheduling</span>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Schedule Your Clinical Consultation</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Book online or clinic visit with our lead practitioners. Instant confirmation with zero consultation lag.</p>
              </div>
              <BookingSection selected={plan} onSelect={setPlan} />
            </div>
          </section>
          <section className="mb-space-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col sm:flex-row items-center gap-space-md">
                <img className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-sm" src={`${img12.url}`} alt="" />
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Muskaan</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">Lead Clinical Nutritionist</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Specializing in PCOS reversal, Gestational Diabetes, and Thyroid hormonal optimization. 8+ years clinical experience.</p>
                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-4 font-label-sm text-label-sm text-on-surface">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[16px]">call</span>
                      +91 74041 14816
                    </span>
                    <span className="text-on-surface-variant">• English, Hindi, Punjabi</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col sm:flex-row items-center gap-space-md">
                <img className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-sm" src={`${img13.url}`} alt="" />
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Nishan Mann</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">Sports & Hypertrophy Lead</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Mastery in competitive athletic peaking, hypertrophy nutrient timing, metabolic rate enhancement, and body recomposition.</p>
                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-4 font-label-sm text-label-sm text-on-surface">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[16px]">call</span>
                      +91 81681 47733
                    </span>
                    <span className="text-on-surface-variant">• English, Hindi, Haryanvi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-space-md">
            <div className="bg-surface-container rounded-2xl p-space-md sm:p-space-lg flex items-start gap-space-md">
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">medical_information</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-title-md text-title-md text-primary">Clinical Service & Prescription Disclaimer</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">NutriMaster Wellness Hub provides nutritional consultation, macronutrient guidance, and lifestyle coaching led by qualified dietetic professionals. Consultations and customized food plans are engineered for physiological optimization, nutritional restoration, and chronic disease support. They are not intended as emergency acute medical care, pharmaceutical substitutions, or surgical recommendations. If you have severe cardiovascular, renal, or unstable metabolic disorders, please coordinate plan changes with your primary attending physician.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function scrollToBooking() {
  document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
