import img25 from "@/assets/photos/img25.jpg.asset.json";

export function NutriScanPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl">
          <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-7 space-y-space-md">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Paid Premium Feature
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                    Powered by Clinical AI
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">NutriScan — Understand Your Food, Improve Your Health!</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Evaluate meals with clinical biometric precision. Instantly decode calories, micronutrient density, glycemic impact, and ultra-processed food markers with actionable smart swap recommendations.</p>
                <div className="flex flex-wrap items-center gap-space-lg pt-space-xs text-on-surface">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <span className="font-label-lg text-label-lg">Inverse Clinical Scale (1–10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    </div>
                    <span className="font-label-lg text-label-lg">Vision + Barcode Neural Engine</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-xl">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Membership Status</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Active Plan
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">Pro Scanner Tier</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Renews on Oct 28, 2025 • UPI Auto-Pay</p>
                    </div>
                    <span className="font-headline-md text-headline-md text-primary">
                      ₹199
                      <span className="font-body-sm text-body-sm text-on-surface-variant">/mo</span>
                    </span>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Scans Utilized This Billing Cycle</p>
                      <p className="font-title-md text-title-md text-primary font-bold">142 Scans (Unlimited Tier)</p>
                    </div>
                    <button className="px-space-md py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors" type="button">Manage</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Tailored Subscriptions</span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mt-1">Choose Your Clinical Scanning Level</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Cancel or upgrade anytime. Integrated seamlessly into your NutriMaster clinical record and dietitian portal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Tier A</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Essential</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Basic Scanner</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Perfect for casual calorie counters and daily meal audits.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">₹99</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                </div>
                <ul className="space-y-2.5 pt-space-sm font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    30 meal photo / search scans per month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Macronutrient breakdown (P/C/F + fiber)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Clinical score ratings 1–10
                  </li>
                  <li className="flex items-center gap-2 text-on-surface-variant opacity-60">
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                    Micronutrient & vitamin bio-analysis
                  </li>
                  <li className="flex items-center gap-2 text-on-surface-variant opacity-60">
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                    Clinical dietitian human review
                  </li>
                </ul>
              </div>
              <button className="mt-space-lg w-full py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-surface-variant transition-colors" type="button">Switch to Basic</button>
            </div>
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wide shadow-sm">MOST POPULAR • ACTIVE</div>
              <div className="space-y-space-md pt-1">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Tier B</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Recommended</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Pro Scanner</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Full autonomous neural vision analysis with intelligent ingredient swaps.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">₹199</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                </div>
                <ul className="space-y-2.5 pt-space-sm font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <span className="font-semibold">Unlimited</span>
                    meal vision & barcode scans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    AI food image auto-segmentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Micronutrient vitamins & mineral density index
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Healthier alternative smart swap engine
                  </li>
                  <li className="flex items-center gap-2 text-on-surface-variant opacity-60">
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                    Bi-weekly licensed dietitian log audit
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm">
                <span className="material-symbols-outlined text-[18px]">task_alt</span>
                Current Active Plan
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Tier C</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">Full Care</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Comprehensive Care</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Complete nutritional supervision integrated directly with certified dietitians.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">₹299</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                </div>
                <ul className="space-y-2.5 pt-space-sm font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Everything included in Pro Scanner tier
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Automated daily meal log & glycemic timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    <span className="font-semibold">Clinical Dietitian Review</span>
                    (Muskaan / Nishan)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Direct WhatsApp triage priority channel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Supplement stack contraindication check
                  </li>
                </ul>
              </div>
              <button className="mt-space-lg w-full py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-sm transition-all duration-150" type="button">Upgrade to Care (₹299/mo)</button>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-md w-full">
          <div className="mb-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Clinical Scanning Sandbox</span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mt-1">Live Nutrition Analysis Engine</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 1: Input Food</span>
                <h3 className="font-title-md text-title-md text-primary mt-0.5">Upload Meal Photo or Search</h3>
              </div>
              <div className="relative group cursor-pointer bg-surface-container-low rounded-xl p-space-lg flex flex-col items-center justify-center text-center transition-all duration-200 hover:bg-surface-container" id="dropzone">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm mb-2 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">photo_camera</span>
                </div>
                <p className="font-title-md text-title-md text-primary font-semibold">Drop meal photo here or browse</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">Supports high-res plating snapshots, packaging barcodes, or meal prep bowls (JPEG, PNG, HEIC)</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">barcode_scanner</span>
                    Barcode Mode
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Live Camera</span>
                </div>
              </div>
              <div className="space-y-space-sm">
                <label className="block font-label-lg text-label-lg text-primary">Search Food Item / Recipe</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                  <input className="w-full bg-surface-container-low text-on-surface pl-11 pr-4 py-2.5 rounded-full font-body-md text-body-md focus:bg-surface-container-lowest outline-none transition-colors" id="foodInput" placeholder="e.g. Avocado Toast with Poached Egg, Paneer Butter Masala..." type="text" defaultValue="Avocado Toast with Poached Egg" />
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Presets:</span>
                  <button className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-variant" data-onclick="setFood('Avocado Toast with Poached Egg', '1 slice / 165g', 2)" type="button">Avocado Toast</button>
                  <button className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-variant" data-onclick="setFood('Paneer Butter Masala', '1 bowl / 220g', 7)" type="button">Paneer Butter Masala</button>
                  <button className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-variant" data-onclick="setFood('Deep Fried Samosa & Chutney', '2 pieces / 180g', 9)" type="button">Deep Fried Samosa</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="space-y-1">
                  <label className="block font-label-lg text-label-lg text-primary">Serving Size</label>
                  <input className="w-full bg-surface-container-low text-on-surface px-4 py-2 rounded-lg font-body-sm text-body-sm focus:bg-surface-container-lowest outline-none transition-colors" id="servingInput" type="text" defaultValue="1 thick slice (165g)" />
                </div>
                <div className="space-y-1">
                  <label className="block font-label-lg text-label-lg text-primary">Preparation Method</label>
                  <select className="w-full bg-surface-container-low text-on-surface px-3 py-2 rounded-lg font-body-sm text-body-sm focus:bg-surface-container-lowest outline-none transition-colors">
                    <option>Artisan Sourdough + EVOO</option>
                    <option>White Bread + Salted Butter</option>
                    <option>Gluten-Free Seed Bread</option>
                  </select>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-surface-container-low relative">
                <div className="flex items-center justify-between p-3 pb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Meal Photo Sample</span>
                  <span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">auto_fix_high</span>
                    Auto-Identified
                  </span>
                </div>
                <div className="px-3 pb-3">
                  <img className="w-full h-40 object-cover rounded-lg shadow-sm" src={`${img25.url}`} alt="" />
                </div>
              </div>
              <button className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-secondary hover:text-on-secondary shadow-md transition-all" data-onclick="triggerAnalyze()" type="button">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
                Analyze Food Biometrics
              </button>
            </div>
            <div className="lg:col-span-7 space-y-space-md">
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Clinical Biometric Evaluation</span>
                    <h3 className="font-headline-md text-headline-md text-primary mt-0.5" id="analyzedTitle">Avocado Toast with Poached Egg</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Validated on:</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">ICMR & USDA Tables</span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-space-lg grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                  <div className="md:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                        <circle className="text-surface-container-highest" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeWidth="10" />
                        {" "}
                        <circle className="text-secondary transition-all duration-700 ease-out" cx="60" cy="60" fill="transparent" id="scoreMeterCircle" r="50" stroke="currentColor" strokeDasharray="314.159" strokeDashoffset="62.8" strokeLinecap="round" strokeWidth="10" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-none" id="scoreNumber">2</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">/ 10</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold" id="scoreBadge">GOOD CHOICE</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Inverse Clinical Scale: Lower score = superior metabolic value</p>
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="flex items-center justify-between pb-1">
                      <span className="font-title-md text-title-md text-primary font-semibold">Visual Score Legend</span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">info</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest flex items-start gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-secondary mt-0.5 shrink-0" />
                      <div className="text-left">
                        <p className="font-label-lg text-label-lg text-primary font-semibold">1 – 3: GOOD CHOICE (Green)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Nutritious, high micronutrient density, unrefined carbohydrates, and wholesome lipids. Ideal for regular inclusion.</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest flex items-start gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-tertiary-fixed-dim mt-0.5 shrink-0" />
                      <div className="text-left">
                        <p className="font-label-lg text-label-lg text-primary font-semibold">4 – 7: CAN BE IMPROVED (Yellow / Amber)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Moderate nutritional viability. Can be elevated to prime clinical status through smart ingredient or oil swaps.</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest flex items-start gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-error mt-0.5 shrink-0" />
                      <div className="text-left">
                        <p className="font-label-lg text-label-lg text-primary font-semibold">8 – 10: AVOID (Red)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Substantial ultra-processed components, excessive free sugars, refined seed oils, or profound glycemic spikes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-title-md text-title-md text-primary">Macronutrient Profile</h4>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Per 165g Serving</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm">
                    <div className="bg-surface-container-low rounded-xl p-3 text-center">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Energy</span>
                      <p className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">310</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">kcal</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Protein</span>
                      <p className="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5">14g</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Bioavailable</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Net Carbs</span>
                      <p className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">22g</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Slow release</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Fats</span>
                      <p className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">18g</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">MUFA / PUFA</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                      <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Dietary Fiber</span>
                      <p className="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5">6.2g</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Prebiotic</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-space-sm pt-space-xs">
                  <h4 className="font-title-md text-title-md text-primary">Transparent Criteria Breakdown</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                    <div className="bg-surface-container-low rounded-xl p-space-sm flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-primary">Healthy Monounsaturated Lipids (+3.2 pts)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Avocado oleic acid supports LDL reduction and enhances lipid-soluble vitamin absorption.</p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-sm flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-primary">Complete Amino Acid Index (+2.5 pts)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Poached egg supplies 9 essential aminos with minimal thermal denaturation.</p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-sm flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-primary">Low Glycemic Load & Slow Digestion (+2.0 pts)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Fermented sourdough combined with viscous fiber blunts post-prandial glucose excursions.</p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-sm flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">adjust</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-primary">Sodium Balance (Neutral)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Under 380mg total sodium; keeps systolic vascular strain low.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-secondary-container/30 p-space-md space-y-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">swap_horizontal_circle</span>
                    <h4 className="font-title-md text-title-md text-primary">Smart Swaps & Clinical Optimization</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                    <div className="bg-surface-container-lowest rounded-xl p-3">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Elevate Micronutrients (+10% Folate)</span>
                      <p className="font-title-md text-title-md text-primary mt-1">Add 20g Microgreens / Arugula</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Boosts sulforaphane intake and adds antioxidant enzymatic action without calories.</p>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl p-3">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Lower Glycemic Index further</span>
                      <p className="font-title-md text-title-md text-primary mt-1">Switch to Sprouted Rye Sourdough</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Increases beta-glucans and maintains insulin stability for up to 4 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Continuous Clinical Dossier</span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mt-1">Daily Food Tracking & Nutrition Score History</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-variant" type="button">Export Clinical PDF</button>
              <button className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container" type="button">Log New Meal</button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  <th className="py-3 px-4 rounded-l-xl">Meal & Time</th>
                  <th className="py-3 px-4">Item Breakdown</th>
                  <th className="py-3 px-4">Estimated Macros</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Classification</th>
                  <th className="py-3 px-4 rounded-r-xl text-right">Dietitian Note</th>
                </tr>
              </thead>
              <tbody className="text-on-surface divide-y-0">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-primary">
                    Breakfast • 08:30 AM{" "}
                    <span className="block font-label-sm text-label-sm text-on-surface-variant font-normal">Today, Oct 24</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Avocado Toast + 1 Poached Egg (165g)</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">310 kcal • 14P • 22C • 18F</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container font-bold font-label-sm text-label-sm">2</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Good Choice</span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-on-surface-variant">Approved by Muskaan</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-primary">
                    Lunch • 01:15 PM{" "}
                    <span className="block font-label-sm text-label-sm text-on-surface-variant font-normal">Yesterday, Oct 23</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Quinoa Bowl + Grilled Chicken & Steamed Broccoli</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">440 kcal • 38P • 42C • 12F</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container font-bold font-label-sm text-label-sm">1</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Good Choice</span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-on-surface-variant">Optimal Amino Distribution</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-primary">
                    Snack • 05:40 PM{" "}
                    <span className="block font-label-sm text-label-sm text-on-surface-variant font-normal">Yesterday, Oct 23</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                      <span>Masala Chai + 3 Refined Wheat Biscuits</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">260 kcal • 3P • 39C • 9F</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold font-label-sm text-label-sm">6</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Can Be Improved</span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-on-surface-variant">Swap biscuits for roasted makhana</td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-primary">
                    Dinner • 09:10 PM{" "}
                    <span className="block font-label-sm text-label-sm text-on-surface-variant font-normal">Oct 22, 2025</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                      <span>Paneer Butter Masala + 2 Butter Naan</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">780 kcal • 21P • 68C • 44F</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold font-label-sm text-label-sm">7</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Can Be Improved</span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-on-surface-variant">High saturated fats; swap with Tofu Palak</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pb-space-xl w-full">
          <div className="bg-surface-container rounded-2xl p-space-lg flex flex-col md:flex-row items-start gap-space-md">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">medical_information</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-title-md text-title-md text-primary font-bold">Clinical Estimation Disclaimer</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify">NutriScan AI algorithm calculates nutritional densities, macronutrient estimates, and clinical score tierings based upon standardized food composition databases (including ICMR-NIN and USDA) combined with visual volume estimates. These outputs serve exclusively for dietary awareness, habit refinement, and supportive nutritional coaching. They do not constitute formal medical diagnoses, prescription advice, or glycemic indices for acute clinical emergencies. Always confirm your clinical plans with your primary physician or NutriMaster clinical nutritionists (Muskaan & Nishan Mann).</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
