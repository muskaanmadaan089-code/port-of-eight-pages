

export function RegistrationPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wide">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Clinical Onboarding Dossier • Step 1 of 4
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
              <form className="space-y-space-lg" id="intake-form" data-onsubmit="event.preventDefault(); handleRegistrationSubmit();">
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
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="fullName" placeholder="e.g. Aarav Sharma" required type="text" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="exactAge">Exact Age (Years)</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">cake</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="exactAge" max="115" min="1" required type="number" defaultValue="32" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">Gender</label>
                      <div className="grid grid-cols-3 gap-2" role="radiogroup">
                        <button className="gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all bg-primary-container text-on-primary shadow-sm" data-gender="Male" type="button">Male</button>
                        <button className="gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" data-gender="Female" type="button">Female</button>
                        <button className="gender-btn py-2.5 text-center rounded-xl font-label-md text-label-md transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" data-gender="Other" type="button">Other</button>
                      </div>
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-label-lg text-label-lg text-on-surface">Age Cohort</label>
                      <div className="flex flex-wrap gap-2" id="age-group-container">
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">Below 18</button>
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">18–25</button>
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary shadow-sm transition-colors" type="button">26–35</button>
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">36–45</button>
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">46–60</button>
                        <button className="age-pill px-3.5 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">Above 60</button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="contactPhone">Contact Number</label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md select-none shrink-0">+91 (IN)</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="contactPhone" pattern="[0-9]{10}" placeholder="98765 43210" required type="tel" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="emailAddr">Email Address</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">alternate_email</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="emailAddr" placeholder="aarav.sharma@example.com" required type="email" />
                      </div>
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="cityRegion">City / Region (Pan-India or International)</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">pin_drop</span>
                        <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="cityRegion" placeholder="e.g. Chandigarh, Punjab / Gurugram, Haryana" required type="text" />
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
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="userHeight" max="230" min="100" data-oninput="calculateWeightDifferential()" step="0.5" type="number" defaultValue="175" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant">cm</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="currentWeight">Current Weight</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="currentWeight" max="250" min="30" data-oninput="calculateWeightDifferential()" step="0.5" type="number" defaultValue="82.5" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant">kg</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="targetWeight">Target Weight</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-on-surface font-headline-sm text-headline-sm px-4 py-2.5 rounded-xl focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner" id="targetWeight" max="250" min="30" data-oninput="calculateWeightDifferential()" step="0.5" type="number" defaultValue="75.0" />
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
                          <span className="text-secondary" id="diffValueDisplay">-7.5 kg</span>
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
                      <div className="activity-card cursor-pointer p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all flex items-start gap-space-sm" data-onclick="selectActivityCard(this)">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">chair</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Sedentary</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Desk job, minimal active walking, under 4k steps/day</p>
                        </div>
                      </div>
                      <div className="activity-card cursor-pointer p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all flex items-start gap-space-sm" data-onclick="selectActivityCard(this)">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">nordic_walking</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Lightly Active</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Light exercise or yoga 1–3 days/week, 6k-8k steps</p>
                        </div>
                      </div>
                      <div className="activity-card cursor-pointer p-space-md rounded-2xl bg-primary-container text-on-primary shadow-md flex items-start gap-space-sm" data-onclick="selectActivityCard(this)">
                        <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-primary font-semibold leading-tight">Moderately Active</h4>
                          <p className="font-body-sm text-body-sm text-on-primary-container">Moderate training / cardio 3–5 days/week</p>
                        </div>
                      </div>
                      <div className="activity-card cursor-pointer p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all flex items-start gap-space-sm" data-onclick="selectActivityCard(this)">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">sprint</span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Very Active</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Hard exertion, intense athletics or sports 6–7 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Primary Health Goal</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-sm" id="goals-group">
                      <div className="goal-pill cursor-pointer p-3.5 rounded-xl bg-primary-container text-on-primary shadow-sm flex items-center gap-space-sm transition-all" data-onclick="selectGoalPill(this)">
                        <span className="material-symbols-outlined text-[20px]">monitor_weight</span>
                        <span className="font-label-md text-label-md font-semibold">Weight Loss & Metabolic Reset</span>
                      </div>
                      <div className="goal-pill cursor-pointer p-3.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-space-sm transition-all" data-onclick="selectGoalPill(this)">
                        <span className="material-symbols-outlined text-[20px]">trending_up</span>
                        <span className="font-label-md text-label-md font-semibold">Healthy Weight Gain</span>
                      </div>
                      <div className="goal-pill cursor-pointer p-3.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-space-sm transition-all" data-onclick="selectGoalPill(this)">
                        <span className="material-symbols-outlined text-[20px]">sports_gymnastics</span>
                        <span className="font-label-md text-label-md font-semibold">Muscle Hypertrophy</span>
                      </div>
                      <div className="goal-pill cursor-pointer p-3.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-space-sm transition-all" data-onclick="selectGoalPill(this)">
                        <span className="material-symbols-outlined text-[20px]">energy_savings_leaf</span>
                        <span className="font-label-md text-label-md font-semibold">General Vitality & Energy</span>
                      </div>
                      <div className="goal-pill cursor-pointer p-3.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-space-sm transition-all sm:col-span-2 md:col-span-2" data-onclick="selectGoalPill(this)">
                        <span className="material-symbols-outlined text-[20px]">healing</span>
                        <span className="font-label-md text-label-md font-semibold">Therapeutic Disease & Hormone Management (PCOS/Thyroid)</span>
                      </div>
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
                      <button className="diet-pill px-4 py-2 rounded-full font-label-md text-label-md bg-primary-container text-on-primary shadow-sm transition-all" type="button">Vegetarian</button>
                      <button className="diet-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all" type="button">Non-Vegetarian</button>
                      <button className="diet-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all" type="button">Vegan (100% Plant-Based)</button>
                      <button className="diet-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all" type="button">Eggetarian (Ovo-Vegetarian)</button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface">Existing Health Conditions / Diagnostics</label>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Select all that apply</span>
                    </div>
                    <div className="flex flex-wrap gap-2" id="conditions-container">
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Diabetes Type 1 / 2</button>
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-secondary-container text-on-secondary-container font-semibold transition-colors" data-selected="true" type="button">PCOS / PCOD</button>
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Thyroid / Hypothyroid</button>
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Hypertension (High BP)</button>
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Fatty Liver (Grade 1/2)</button>
                      <button className="condition-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">None / Good General Health</button>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Known Food Allergies or Intolerances</label>
                    <div className="flex flex-wrap gap-2" id="allergies-container">
                      <button className="allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-secondary-container text-on-secondary-container font-semibold transition-colors" data-selected="true" type="button">Lactose / Dairy</button>
                      <button className="allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Gluten / Celiac Sensitivity</button>
                      <button className="allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Tree Nuts / Peanuts</button>
                      <button className="allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">Soy & Legumes</button>
                      <button className="allergy-chip px-3.5 py-1.5 rounded-xl font-body-sm text-body-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-selected="false" type="button">None / No Known Allergies</button>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="space-y-1 text-center sm:text-left">
                      <p className="font-title-md text-title-md text-primary font-semibold">Ready to generate your personalized dossier?</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Redirects directly to Home & Wellness Dashboard upon verification.</p>
                    </div>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary font-title-md text-title-md shadow-lg hover:bg-secondary transition-all transform hover:-translate-y-0.5" type="submit">
                      <span>Submit & Explore NutriMaster</span>
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
