import img26 from "@/assets/photos/img26.jpg.asset.json";
import img27 from "@/assets/photos/img27.jpg.asset.json";
import img28 from "@/assets/photos/img28.jpg.asset.json";

export function AccountPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-lg space-y-space-xl">
          <div className="relative overflow-hidden rounded-3xl bg-surface-container p-space-xl shadow-sm">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
              <div className="flex items-start gap-space-md">
                <div className="relative">
                  <img className="w-20 h-20 rounded-2xl object-cover shadow-sm bg-surface-container-high" src={`${img26.url}`} alt="" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase bg-surface-container-lowest px-2.5 py-0.5 rounded-full font-semibold">Client Portal</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">ID #NM-84920</span>
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Synchronized with Clinician Desk
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">Priya Sharma</h1>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Active Plan:{" "}
                    <span className="font-semibold text-primary">Weight Management & Metabolic Protocol</span>
                    {" "}• Cycle 2 of 4 (Week 7)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap xl:self-center">
                <button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary transition-all">
                  <span className="material-symbols-outlined text-[18px]">camera</span>
                  Log Today's Meal / NutriScan
                </button>
                <button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-lg mt-space-lg">
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                <div className="flex items-center justify-between text-on-surface-variant mb-1">
                  <span className="font-label-sm text-label-sm tracking-wide font-medium">CURRENT WEIGHT</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary">scale</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary">
                    61.2{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">kg</span>
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded-full font-semibold">-7.3 kg lost</span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">Start: 68.5 kg • Target: 58.0 kg</p>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                <div className="flex items-center justify-between text-on-surface-variant mb-1">
                  <span className="font-label-sm text-label-sm tracking-wide font-medium">DAILY CALORIC INTAKE</span>
                  <span className="material-symbols-outlined text-[18px] text-primary">local_fire_department</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary">
                    1,640{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">kcal</span>
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">/ 1,750 target</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "93%" }} />
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                <div className="flex items-center justify-between text-on-surface-variant mb-1">
                  <span className="font-label-sm text-label-sm tracking-wide font-medium">DAILY HYDRATION</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary">water_drop</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary">
                    2.6{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">L</span>
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">87% of 3.0L goal</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-secondary-fixed-dim h-full rounded-full" style={{ width: "87%" }} />
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                <div className="flex items-center justify-between text-on-surface-variant mb-1">
                  <span className="font-label-sm text-label-sm tracking-wide font-medium">NUTRISCAN AVG</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary">auto_awesome</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary">2.4</span>
                  <span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded-full font-semibold">GOOD CHOICE</span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">Lower score indicates higher clinical density</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-7 space-y-space-lg">
              <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Metabolic Fuel Record</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Today's Nutrition Log</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-low rounded-full px-3 py-1 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">event</span>
                    <span>Today, Oct 24</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold text-body-sm">
                        <span className="material-symbols-outlined text-[20px]">wb_twilight</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-title-md text-title-md text-primary leading-tight">Breakfast</h3>
                          <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">NutriScan 1.8</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Sprouted Moong Cheela + Curd & Chia Seeds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm self-end md:self-auto">
                      <div className="text-right">
                        <span className="block font-semibold text-primary font-body-sm text-body-sm">380 kcal</span>
                        {" "}
                        <span>P: 22g • C: 42g • F: 8g</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold text-body-sm">
                        <span className="material-symbols-outlined text-[20px]">light_mode</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-title-md text-title-md text-primary leading-tight">Lunch</h3>
                          <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">NutriScan 2.1</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Grilled Paneer, Quinoa Tabbouleh, Steamed Greens</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm self-end md:self-auto">
                      <div className="text-right">
                        <span className="block font-semibold text-primary font-body-sm text-body-sm">520 kcal</span>
                        {" "}
                        <span>P: 34g • C: 48g • F: 14g</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold text-body-sm">
                        <span className="material-symbols-outlined text-[20px]">cookie</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-title-md text-title-md text-primary leading-tight">Afternoon Refuel</h3>
                          <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant font-semibold">NutriScan 3.2</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Roasted Makhana & Raw Almonds (30g)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm self-end md:self-auto">
                      <div className="text-right">
                        <span className="block font-semibold text-primary font-body-sm text-body-sm">180 kcal</span>
                        {" "}
                        <span>P: 6g • C: 16g • F: 10g</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold text-body-sm">
                        <span className="material-symbols-outlined text-[20px]">bedtime</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-title-md text-title-md text-primary leading-tight">Dinner</h3>
                          <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">NutriScan 2.3</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Yellow Lentil Soup, Sautéed Tofu & Zucchini</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm self-end md:self-auto">
                      <div className="text-right">
                        <span className="block font-semibold text-primary font-body-sm text-body-sm">560 kcal</span>
                        {" "}
                        <span>P: 38g • C: 44g • F: 12g</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  <span>
                    Total Macro Balance:{" "}
                    <strong className="text-primary">100g Protein (Target Achieved)</strong>
                  </span>
                  <button className="text-secondary font-label-lg text-label-lg font-semibold hover:underline inline-flex items-center gap-1">
                    Add Extra Entry
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Clinical Biometrics</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Weight Loss & Goal Trajectory</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="w-3 h-1 bg-secondary rounded-full" />
                      Actual Weight
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="w-3 h-1 bg-outline-variant rounded-full" />
                      Clinician Goal
                    </span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-low/40 rounded-2xl p-space-md">
                  <div className="h-56 w-full">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 180">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#006c48" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#006c48" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {" "}
                      <line stroke="#c1c8c2" strokeDasharray="4 4" strokeWidth="1.5" x1="30" x2="510" y1="140" y2="140" />
                      {" "}
                      <text fill="#717973" fontFamily="Plus Jakarta Sans" fontSize="10" x="515" y="144">58kg</text>
                      {" "}
                      {" "}
                      <line stroke="#dee4df" strokeWidth="0.5" x1="30" x2="30" y1="20" y2="160" />
                      {" "}
                      <line stroke="#dee4df" strokeWidth="0.5" x1="150" x2="150" y1="20" y2="160" />
                      {" "}
                      <line stroke="#dee4df" strokeWidth="0.5" x1="270" x2="270" y1="20" y2="160" />
                      {" "}
                      <line stroke="#dee4df" strokeWidth="0.5" x1="390" x2="390" y1="20" y2="160" />
                      {" "}
                      <line stroke="#dee4df" strokeWidth="0.5" x1="510" x2="510" y1="20" y2="160" />
                      {" "}
                      {" "}
                      <polygon fill="url(#chartGradient)" points="30,30 150,58 270,82 390,115 390,160 30,160" />
                      {" "}
                      {" "}
                      <path d="M 30 30 L 150 58 L 270 82 L 390 115" fill="none" stroke="#006c48" strokeLinecap="round" strokeWidth="3" />
                      {" "}
                      {" "}
                      <path d="M 390 115 L 510 140" fill="none" stroke="#006c48" strokeDasharray="4 4" strokeWidth="2" />
                      {" "}
                      {" "}
                      <circle cx="30" cy="30" fill="#012d1d" r="4.5" />
                      {" "}
                      <circle cx="150" cy="58" fill="#012d1d" r="4.5" />
                      {" "}
                      <circle cx="270" cy="82" fill="#012d1d" r="4.5" />
                      {" "}
                      <circle cx="390" cy="115" fill="#006c48" r="5.5" stroke="#ffffff" strokeWidth="2" />
                      {" "}
                      <circle cx="510" cy="140" fill="#a5d0b9" r="4" />
                      {" "}
                      {" "}
                      <text fill="#171d1a" fontSize="11" fontWeight="600" textAnchor="middle" x="30" y="20">68.5kg</text>
                      {" "}
                      <text fill="#171d1a" fontSize="11" fontWeight="600" textAnchor="middle" x="150" y="50">66.1kg</text>
                      {" "}
                      <text fill="#171d1a" fontSize="11" fontWeight="600" textAnchor="middle" x="270" y="74">63.8kg</text>
                      {" "}
                      <text fill="#006c48" fontSize="11" fontWeight="700" textAnchor="middle" x="390" y="105">61.2kg (Now)</text>
                      {" "}
                      <text fill="#717973" fontSize="10" textAnchor="middle" x="510" y="132">Target 58kg</text>
                      {" "}
                      {" "}
                      <text fill="#717973" fontSize="10" textAnchor="middle" x="30" y="175">Aug 1</text>
                      {" "}
                      <text fill="#717973" fontSize="10" textAnchor="middle" x="150" y="175">Sep 1</text>
                      {" "}
                      <text fill="#717973" fontSize="10" textAnchor="middle" x="270" y="175">Oct 1</text>
                      {" "}
                      <text fill="#006c48" fontSize="10" fontWeight="600" textAnchor="middle" x="390" y="175">Oct 24</text>
                      {" "}
                      <text fill="#717973" fontSize="10" textAnchor="middle" x="510" y="175">Dec 1 Est.</text>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-1 text-center">
                  <div className="bg-surface-container-low p-2.5 rounded-xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Visceral Fat Index</span>
                    {" "}
                    <span className="font-title-md text-title-md text-primary">
                      Level 6{" "}
                      <span className="text-secondary text-xs">(-2)</span>
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Fasting Blood Sugar</span>
                    {" "}
                    <span className="font-title-md text-title-md text-primary">92 mg/dL</span>
                  </div>
                  <div className="bg-surface-container-low p-2.5 rounded-xl">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Lean Muscle Ratio</span>
                    {" "}
                    <span className="font-title-md text-title-md text-primary">28.4%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest rounded-3xl p-space-md shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary">Circadian Protocols</h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">3/3 DONE</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                        <span className="font-body-sm text-body-sm text-on-surface">8 Glasses Water Logged</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">2.6L</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                        <span className="font-body-sm text-body-sm text-on-surface">10k Daily Steps Goal</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">10,480</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                        <span className="font-body-sm text-body-sm text-on-surface">Sleep Window (11PM - 7AM)</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">7h 45m</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-3xl p-space-md shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary">NutriScan Telemetry</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Last 48 Hrs</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">Greek Yogurt with Berries</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Optimal gut probiotics</p>
                      </div>
                      <span className="px-2 py-1 rounded-lg text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-bold">1.4 EXCELLENT</span>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">Store Multigrain Crackers</p>
                        <p className="font-label-sm text-label-sm text-tertiary font-medium">High sodium detected</p>
                      </div>
                      <span className="px-2 py-1 rounded-lg text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold">4.2 MODERATE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-space-lg">
              <div className="relative overflow-hidden bg-primary-container text-on-primary rounded-3xl p-space-lg shadow-md space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold tracking-wide">UPCOMING CONSULTATION</span>
                  <span className="material-symbols-outlined text-[20px] text-primary-fixed">videocam</span>
                </div>
                <div className="flex items-start gap-space-sm pt-1">
                  <img className="w-14 h-14 rounded-2xl object-cover shadow-sm bg-surface-container" src={`${img27.url}`} alt="" />
                  <div className="space-y-0.5">
                    <h3 className="font-title-md text-title-md text-on-primary">Muskaan, Senior Clinical Nutritionist</h3>
                    <p className="font-body-sm text-body-sm text-on-primary-container">Metabolic & Lifestyle Management Lead</p>
                    <div className="flex items-center gap-1 text-primary-fixed font-label-sm text-label-sm pt-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      <span>Tuesday, Oct 28, 2025 at 11:30 AM IST</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/40 rounded-2xl p-space-sm space-y-1 text-on-primary font-body-sm text-body-sm">
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">Session Objective</span>
                  <p className="text-on-primary-container leading-relaxed">Mid-cycle metabolic recalibration, carbohydrate re-introduction assessment, and review of fasting blood sugar levels.</p>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-1">
                  <button className="w-full py-2.5 px-space-sm rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-semibold hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">video_call</span>
                    Join Video Call
                  </button>
                  <button className="w-full py-2.5 px-space-sm rounded-full bg-surface-container-lowest/10 text-on-primary font-label-lg text-label-lg font-medium hover:bg-surface-container-lowest/20 transition-colors flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                    Reschedule
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">NutriScan Pro Tier</h3>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">Active • Unlimited AI Ingredient Audits</span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-primary">
                    ₹199
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/mo</span>
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Includes real-time glycemic index breakdown, micronutrient profiling, and clinician desk sync. Auto-renews on Nov 15, 2025.</p>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Payment method:{" "}
                    <strong className="text-primary">UPI AutoPay (HDFC)</strong>
                  </span>
                  <button className="text-secondary font-semibold hover:underline">Manage Tier</button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Active Protocols</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Supplement Dispatch</h3>
                  </div>
                  <a className="font-label-sm text-label-sm text-secondary font-semibold hover:underline" href="#">Store</a>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <img className="w-16 h-16 rounded-xl object-cover bg-surface-container" src={`${img28.url}`} alt="" />
                    <div className="space-y-0.5">
                      <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">Dispatched • BlueDart Air</span>
                      <h4 className="font-title-md text-title-md text-primary leading-tight">100% Whey Protein Isolate (1kg)</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Order #NM-ORD-9281 • ₹2,899 (UPI Paid)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-medium">
                      <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                      Arriving Tomorrow by 2:00 PM
                    </span>
                    <button className="text-primary font-semibold text-label-sm hover:underline">Track Delivery</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Session Archive</h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Past 90 Days</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-surface-container-low/60 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Sep 28, 2025</span>
                      {" "}
                      <span className="font-body-sm text-body-sm font-semibold text-primary">Nishan Mann (Senior Dietitian)</span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Metabolic Baseline & Calorie Target Reset</span>
                    </div>
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      PDF
                    </button>
                  </div>
                  <div className="p-3 bg-surface-container-low/60 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Aug 26, 2025</span>
                      {" "}
                      <span className="font-body-sm text-body-sm font-semibold text-primary">Muskaan (Lead Clinician)</span>
                      {" "}
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Initial Intake, Food Sensitivity Assessment</span>
                    </div>
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container rounded-3xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary">Direct Clinical Inquiries & WhatsApp Triage</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Immediate diet adjustment or supplement dosage queries are routed to your primary nutritionist desk.</p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap">
              <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container-high transition-colors" href="https://wa.me/917404114816" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                WhatsApp Muskaan (+91 74041 14816)
              </a>
              <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container-high transition-colors" href="https://wa.me/918168147733" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                WhatsApp Nishan (+91 81681 47733)
              </a>
            </div>
          </div>
          <div className="pt-space-sm border-t border-surface-container">
            <div className="p-space-md bg-surface-container-low/70 rounded-2xl space-y-1">
              <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                <strong className="text-primary font-semibold">NutriMaster Telehealth & Metric Integrity Notice:</strong>
                {" "}All biometric progressions, body composition metrics, and NutriScan ingredient audit ratios represented in this portal are compiled via patient daily logs and clinical consultations. They are intended solely for metabolic health supervision and therapeutic dietary enhancement under the care of certified nutritionists. If you experience severe gastrointestinal distress, extreme fatigue, or sudden physiological changes, promptly request an emergency medical triage or visit your local hospital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
