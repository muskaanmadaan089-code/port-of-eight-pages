import img14 from "@/assets/photos/img14.jpg.asset.json";
import img15 from "@/assets/photos/img15.jpg.asset.json";
import img16 from "@/assets/photos/img16.jpg.asset.json";
import img17 from "@/assets/photos/img17.jpg.asset.json";

export function TherapeuticDietsPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-lg pb-space-xl">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-secondary-container/25 rounded-full blur-[110px] pointer-events-none -z-10" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
            <div className="max-w-3xl space-y-space-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                Clinical Nutritional Science • Module 04
              </div>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Therapeutic Diets & Healthy Lifestyle Library</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Condition-targeted nutritional protocols, evidence-based meal blueprints, and whole-food culinary science curated by senior clinical nutritionists.</p>
            </div>
            <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">vital_signs</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">Target Outcome</span>
                {" "}
                <span className="font-title-md text-title-md text-primary font-bold">Metabolic Equilibrium</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface-container-low p-1.5 rounded-2xl shadow-sm mb-space-xl overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max" id="protocolTabs">
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 bg-primary-container text-on-primary shadow-sm" id="tab-diabetes" data-onclick="switchProtocol('diabetes')" type="button">
                <span className="material-symbols-outlined text-[18px]">bloodtype</span>
                Diabetes Management
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-pcos" data-onclick="switchProtocol('pcos')" type="button">
                <span className="material-symbols-outlined text-[18px]">female</span>
                PCOS / PCOD Management
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-thyroid" data-onclick="switchProtocol('thyroid')" type="button">
                <span className="material-symbols-outlined text-[18px]">shield_with_heart</span>
                Thyroid Support
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-cardio" data-onclick="switchProtocol('cardio')" type="button">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
                Heart-Healthy
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-renal" data-onclick="switchProtocol('renal')" type="button">
                <span className="material-symbols-outlined text-[18px]">water_drop</span>
                Kidney-Friendly
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-gluten" data-onclick="switchProtocol('gluten')" type="button">
                <span className="material-symbols-outlined text-[18px]">grain</span>
                Gluten-Free
              </button>
              <button className="protocol-tab px-space-md py-2.5 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-weight" data-onclick="switchProtocol('weight')" type="button">
                <span className="material-symbols-outlined text-[18px]">scale</span>
                Weight Management
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch mb-space-xl" id="protocolContentArea">
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-sm border border-outline-variant/20 flex flex-col justify-between" id="protocol-panel-diabetes">
              <div>
                <div className="flex items-center justify-between gap-4 mb-space-md">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Clinical Target: HbA1c ≤ 6.2%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">GI Threshold ≤ 55</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-space-xs">Glycemic Index & Carbohydrate Pacing Protocol</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">Mitigate postprandial glucose spikes via dual-action pacing: combining soluble beta-glucan fibers with slow-digesting resistant starches to steady insulin secretion across 4-hour metabolic windows.</p>
                <div className="bg-surface-container-low rounded-2xl p-space-md mb-space-lg">
                  <h3 className="font-title-md text-title-md text-primary mb-space-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">swap_horiz</span>
                    High-Impact Glycemic Swaps
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-error font-label-sm text-label-sm line-through block">Polished White Rice (GI 73)</span>
                        {" "}
                        <span className="text-secondary font-label-lg text-label-lg font-bold">Foxtail / Barnyard Millet (GI 46)</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-error font-label-sm text-label-sm line-through block">Refined Sugar & Syrups</span>
                        {" "}
                        <span className="text-secondary font-label-lg text-label-lg font-bold">Organic Ceylon Cinnamon Bark</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-error font-label-sm text-label-sm line-through block">Refined Maida Rotis</span>
                        {" "}
                        <span className="text-secondary font-label-lg text-label-lg font-bold">Sprouted Moong & Fenugreek Flour</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-error font-label-sm text-label-sm line-through block">Processed Breakfast Flakes</span>
                        {" "}
                        <span className="text-secondary font-label-lg text-label-lg font-bold">Steel-Cut Oats with Chia Slurry</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Recommended Daily Glycemic Load Allocation:</span>
                    <span className="font-bold text-primary">62 / 100 max safe unit threshold</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden flex">
                    <div className="h-full bg-secondary-fixed-dim" style={{ width: "55%" }} />
                    <div className="h-full bg-secondary" style={{ width: "15%" }} />
                    <div className="h-full bg-error-container" style={{ width: "30%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-on-surface-variant pt-1">
                    <span>0-50 (Optimal Low-GI Buffer)</span>
                    <span>55-69 (Medium Buffer)</span>
                    <span>70+ (Critical Spike Zone)</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Clinical Evidence: ADA / ICMR Consensus Guidelines</span>
                </div>
                <button className="text-secondary font-label-lg text-label-lg flex items-center gap-1 hover:underline" type="button">
                  Download Clinical Guide
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-sm border border-outline-variant/20 flex flex-col justify-between" id="protocol-panel-pcos">
              <div>
                <div className="flex items-center justify-between gap-4 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Endocrine Support</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Target Fiber {">"} 35g/day</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-space-xs">PCOS Seed-Cycling & Hormonal Balance</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">Synchronize follicular and luteal phases using bioactive lignans and zinc-rich phytonutrients to regulate LH/FSH ratios and clear excess androgen metabolites.</p>
                <div className="space-y-space-sm mb-space-md">
                  <div className="p-space-md rounded-2xl bg-surface-container-low border-l-4 border-secondary">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-title-md text-title-md text-primary font-bold">Phase 1: Follicular Days 1–14</span>
                      <span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded-full font-bold">Estrogen Support</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">1 tbsp Ground Organic Flax Seeds + 1 tbsp Raw Pumpkin Seeds daily.</p>
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                      <span>• High Lignans</span>
                      <span>• Bioavailable Zinc</span>
                      <span>• Omega-3 Fatty Acids</span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-2xl bg-surface-container-low border-l-4 border-tertiary-container">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-title-md text-title-md text-primary font-bold">Phase 2: Luteal Days 15–28</span>
                      <span className="font-label-sm text-label-sm text-tertiary-container bg-surface-container-lowest px-2 py-0.5 rounded-full font-bold">Progesterone Boost</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">1 tbsp Unhulled White Sesame Seeds + 1 tbsp Sunflower Seeds daily.</p>
                    <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                      <span>• Natural Selenium</span>
                      <span>• Vitamin E Tocopherols</span>
                      <span>• Calcium Balance</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-space-xs rounded-xl bg-surface-container">
                    <span className="block font-headline-sm text-headline-sm text-primary">38g</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Daily Prebiotic Fiber Target</span>
                  </div>
                  <div className="p-space-xs rounded-xl bg-surface-container">
                    <span className="block font-headline-sm text-headline-sm text-primary">40:1</span>
                    {" "}
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Myo- to D-Chiro Inositol Ratio</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Validated with pelvic ultrasonography</span>
                <button className="text-secondary font-label-lg text-label-lg flex items-center gap-1 hover:underline" type="button">
                  View Protocol Details
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-space-xs uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[14px]">restaurant_menu</span>
                  Whole-Food Formulation
                </div>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Chef-Crafted Therapeutic Recipe Library</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Clinically titrated recipes calculated for accurate macro balances, gut microbiome diversity, and effortless home culinary preparation.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Active Filter:</span>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold" id="activeFilterBadge">All Recipes (4)</span>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-space-sm mb-space-lg">
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-primary-container text-on-primary shadow-sm whitespace-nowrap" data-onclick="filterRecipes('all')" type="button">All Blueprints</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('diabetes')" type="button">Diabetes-Friendly</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('pcos')" type="button">PCOS-Friendly</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('high-protein')" type="button">High-Protein</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('weight-loss')" type="button">Weight-Loss</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('breakfast')" type="button">Healthy Breakfast</button>
              <button className="recipe-filter-btn px-4 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest whitespace-nowrap" data-onclick="filterRecipes('snacks')" type="button">Healthy Snacks</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter-lg" id="recipeGrid">
              <div className="recipe-card group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/20" data-tags="diabetes,breakfast,weight-loss">
                <div className="relative h-56 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`${img14.url}`} alt="" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold shadow-xs">Low Glycemic • GI 41</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    15 min
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">Breakfast / Snack</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        240{" "}
                        <span className="text-xs font-normal text-on-surface-variant">kcal</span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2 group-hover:text-secondary transition-colors">Methi Oats Moong Cheela</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">Split yellow moong dal paste blended with rolled oats and tender fresh fenugreek leaves for glucose buffering.</p>
                    <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-surface-container-low text-center mb-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Protein</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">14g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Carbs</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">32g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fats</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">4.5g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fibre</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-secondary font-bold">7g</span>
                      </div>
                    </div>
                    <details className="text-xs group/details mb-2">
                      <summary className="cursor-pointer font-label-sm text-label-sm text-secondary flex items-center justify-between list-none py-1">
                        <span>Ingredients & Quick Prep</span>
                        <span className="material-symbols-outlined text-[16px] group-open/details:rotate-180 transition-transform">expand_more</span>
                      </summary>
                      <div className="pt-2 text-on-surface-variant space-y-1 bg-surface-container-low/50 p-2 rounded-lg">
                        <p>• 50g Yellow Moong Dal (soaked)</p>
                        <p>• 20g Rolled Oats Powder</p>
                        <p>• 1/2 cup Fresh Fenugreek (Methi)</p>
                        <p>• Ginger, Green Chili, Cumin & Salt</p>
                        <p className="pt-1 font-semibold text-primary">Method: Grind moong into smooth batter, fold oats & methi, cast onto cast-iron griddle with 0.5 tsp cold-pressed mustard oil.</p>
                      </div>
                    </details>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-on-surface transition-colors flex items-center justify-center gap-1.5 mt-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Save to Daily Meal Plan
                  </button>
                </div>
              </div>
              <div className="recipe-card group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/20" data-tags="pcos,breakfast,snacks">
                <div className="relative h-56 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`${img15.url}`} alt="" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-tertiary font-label-sm text-label-sm font-semibold shadow-xs">PCOS • Phase 1 Sync</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    10 min prep
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-tertiary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">Hormone Balancer</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        210{" "}
                        <span className="text-xs font-normal text-on-surface-variant">kcal</span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2 group-hover:text-secondary transition-colors">Cinnamon Seed-Cycling Chia Pudding</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">Overnight soaked black chia seeds suspended in homemade almond milk with Ceylon cinnamon and freshly crushed raw pumpkin seeds.</p>
                    <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-surface-container-low text-center mb-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Protein</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">8g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Carbs</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">11g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fats</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">14g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fibre</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-secondary font-bold">9g</span>
                      </div>
                    </div>
                    <details className="text-xs group/details mb-2">
                      <summary className="cursor-pointer font-label-sm text-label-sm text-secondary flex items-center justify-between list-none py-1">
                        <span>Ingredients & Quick Prep</span>
                        <span className="material-symbols-outlined text-[16px] group-open/details:rotate-180 transition-transform">expand_more</span>
                      </summary>
                      <div className="pt-2 text-on-surface-variant space-y-1 bg-surface-container-low/50 p-2 rounded-lg">
                        <p>• 2.5 tbsp Organic Black Chia Seeds</p>
                        <p>• 180ml Unsweetened Almond Milk</p>
                        <p>• 1 tbsp Crushed Raw Pumpkin & Flax</p>
                        <p>• 1/2 tsp Pure Ceylon Cinnamon</p>
                        <p className="pt-1 font-semibold text-primary">Method: Whisk chia in milk with cinnamon, refrigerate overnight (6 hrs), top with freshly ground raw seeds right before consumption.</p>
                      </div>
                    </details>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-on-surface transition-colors flex items-center justify-center gap-1.5 mt-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Save to Daily Meal Plan
                  </button>
                </div>
              </div>
              <div className="recipe-card group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/20" data-tags="high-protein,snacks,weight-loss">
                <div className="relative h-56 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`${img16.url}`} alt="" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold shadow-xs">Muscle Repair • High-Pro</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    25 min
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">Lean Protein</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        360{" "}
                        <span className="text-xs font-normal text-on-surface-variant">kcal</span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2 group-hover:text-secondary transition-colors">Paneer & Tofu High-Protein Tikka</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">Equal-ratio blend of artisanal A2 cow paneer and organic sprouted soybean tofu marinated in probiotic hung curd and turmeric.</p>
                    <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-surface-container-low text-center mb-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Protein</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-secondary font-bold">28g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Carbs</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">8g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fats</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">24g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fibre</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">3g</span>
                      </div>
                    </div>
                    <details className="text-xs group/details mb-2">
                      <summary className="cursor-pointer font-label-sm text-label-sm text-secondary flex items-center justify-between list-none py-1">
                        <span>Ingredients & Quick Prep</span>
                        <span className="material-symbols-outlined text-[16px] group-open/details:rotate-180 transition-transform">expand_more</span>
                      </summary>
                      <div className="pt-2 text-on-surface-variant space-y-1 bg-surface-container-low/50 p-2 rounded-lg">
                        <p>• 80g Organic Firm Tofu + 60g Low-Fat A2 Paneer</p>
                        <p>• 2 tbsp Thick Hung Curd / Greek Yogurt</p>
                        <p>• Ajwain, Kashmiri Deghi Mirch, Kasuri Methi</p>
                        <p>• Diced Bell Peppers and Purple Onions</p>
                        <p className="pt-1 font-semibold text-primary">Method: Toss cubes in spiced yogurt rub, marinate 20 min, air-fry or bake at 200°C for 12-14 minutes until gently charred.</p>
                      </div>
                    </details>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-on-surface transition-colors flex items-center justify-center gap-1.5 mt-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Save to Daily Meal Plan
                  </button>
                </div>
              </div>
              <div className="recipe-card group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/20" data-tags="diabetes,weight-loss,snacks">
                <div className="relative h-56 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`${img17.url}`} alt="" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold shadow-xs">Gut Microbiome Fuel</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    18 min
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">Antioxidant Rich</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        280{" "}
                        <span className="text-xs font-normal text-on-surface-variant">kcal</span>
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-2 group-hover:text-secondary transition-colors">Quinoa Moong Sprout Warm Salad</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">Enzyme-active sprouted green moong steamed lightly with Andean quinoa, fresh baby spinach, and cold-pressed olive-lemon vinaigrette.</p>
                    <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-surface-container-low text-center mb-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Protein</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">16g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Carbs</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">38g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fats</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-primary font-bold">6g</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Fibre</span>
                        {" "}
                        <span className="font-label-lg text-label-lg text-secondary font-bold">8g</span>
                      </div>
                    </div>
                    <details className="text-xs group/details mb-2">
                      <summary className="cursor-pointer font-label-sm text-label-sm text-secondary flex items-center justify-between list-none py-1">
                        <span>Ingredients & Quick Prep</span>
                        <span className="material-symbols-outlined text-[16px] group-open/details:rotate-180 transition-transform">expand_more</span>
                      </summary>
                      <div className="pt-2 text-on-surface-variant space-y-1 bg-surface-container-low/50 p-2 rounded-lg">
                        <p>• 50g Cooked Tricolor Quinoa</p>
                        <p>• 75g Steam-Sprouted Green Gram (Moong)</p>
                        <p>• 2 tbsp Pomegranate Arils + Baby Spinach</p>
                        <p>• Lemon Juice, Rock Salt & Crushed Black Pepper</p>
                        <p className="pt-1 font-semibold text-primary">Method: Steam sprouts 3 minutes to activate amylase without degrading heat-labile vitamins; fold into warm quinoa and toss with fresh dressing.</p>
                      </div>
                    </details>
                  </div>
                  <button className="w-full py-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-on-surface transition-colors flex items-center justify-center gap-1.5 mt-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Save to Daily Meal Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-space-xl pt-space-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
              <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-space-sm text-secondary">
                    <span className="material-symbols-outlined text-[24px]">water_full</span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Hydration Science</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-2">Physiological Fluid Calculator</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                    Clinical equation benchmark:{" "}
                    <strong className="text-on-surface">35ml per 1kg body mass</strong>
                    {" "}baseline requirement for optimal glomerular filtration and nutrient cellular transport.
                  </p>
                  <div className="space-y-space-sm mb-space-md bg-surface-container-low p-space-md rounded-2xl">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface font-semibold" htmlFor="weightInput">Your Body Weight</label>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        <span id="weightDisplay">68</span>
                        {" "}kg
                      </span>
                    </div>
                    <input className="w-full accent-primary h-2 bg-surface-container-high rounded-lg cursor-pointer" id="weightInput" max="120" min="40" data-oninput="updateHydration(this.value)" step="1" type="range" defaultValue="68" />
                    <div className="flex justify-between text-xs text-on-surface-variant">
                      <span>40 kg</span>
                      <span>80 kg</span>
                      <span>120 kg</span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-2xl bg-surface-container flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Calculated Daily Intake</span>
                      {" "}
                      <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary font-bold tracking-tight" id="waterLiterDisplay">2.38 Liters</span>
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant block" id="waterGlassDisplay">Approx. 9.5 glasses of 250ml</span>
                    </div>
                    <div className="w-14 h-24 rounded-2xl bg-surface-container-highest p-1 flex flex-col justify-end overflow-hidden relative border border-outline-variant/30">
                      <div className="w-full bg-secondary-fixed-dim rounded-xl transition-all duration-300" id="waterMeterBar" style={{ height: "65%" }} />
                      <span className="absolute inset-0 flex items-center justify-center font-label-sm text-label-sm text-primary font-bold">H₂O</span>
                    </div>
                  </div>
                </div>
                <div className="pt-space-md text-xs text-on-surface-variant mt-space-md border-t border-outline-variant/30 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
                  <span>Add 350ml per 30 minutes of high-intensity aerobic activity.</span>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">light_mode</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-1">Pillar 01</span>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-2">Circadian Nutrition</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Consume 70% of caloric intake while the sun is elevated. Insular sensitivity drops progressively as melatonin levels increase post-sunset.</p>
                  </div>
                  <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                      Peak: 8 AM – 3 PM
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">bedtime</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-1">Pillar 02</span>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-2">12-Hr Gut Fast</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">A clean overnight 12-hour fasting window allows the Migrating Motor Complex (MMC) to cleanse GI transit and reset microbial biodiversity.</p>
                  </div>
                  <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">hourglass_empty</span>
                      Window: 8 PM – 8 AM
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">directions_walk</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-1">Pillar 03</span>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-2">10-Min Walk Pacing</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Light ambulatory strolling within 20 minutes post-prandial activates GLUT-4 transporters without insulin, blunting blood glucose amplitude by 28%.</p>
                  </div>
                  <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">trending_down</span>
                      −28% Glucose Spike
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-space-xl">
            <div className="bg-primary text-on-primary rounded-3xl p-space-lg lg:p-space-xl relative overflow-hidden shadow-xl">
              <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
              <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 space-y-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]">biotech</span>
                    Lab Report Review Protocol
                  </span>
                  <h3 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary tracking-tight">Need a tailored therapeutic protocol for your diagnostic blood reports?</h3>
                  <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl leading-relaxed">Upload your HbA1c, lipid profile, thyroid panel, or hormonal blood panels. Our registered dietitians craft individual macro-pacing blueprints within 24 hours.</p>
                  <div className="pt-space-sm flex flex-wrap gap-4 text-xs text-primary-fixed-dim">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
                      Certified Clinical Nutritionists
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
                      Encrypted Patient Data Safety
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
                      Direct WhatsApp Follow-ups
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button className="w-full px-space-lg py-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-title-md text-title-md font-bold shadow-lg hover:bg-secondary-fixed-dim transition-all text-center flex items-center justify-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                    Request Therapeutic Diet Consultation
                  </button>
                  <p className="font-label-sm text-label-sm text-primary-fixed-dim/80 text-center">Covers comprehensive metabolic & symptom intake triage.</p>
                </div>
              </div>
              <div className="relative z-10 mt-space-lg pt-space-md border-t border-primary-container text-xs text-primary-fixed-dim/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Nutritional therapy works synergistically with primary medical oversight and never replaces physician guidance.</span>
                <span className="text-secondary-fixed font-semibold">ICMR • ADA • FSSAI Compliant Formulations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
