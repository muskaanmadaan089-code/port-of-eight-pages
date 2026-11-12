import { Link } from "@tanstack/react-router";
import img00 from "@/assets/photos/img00.jpg.asset.json";
import img01 from "@/assets/photos/img01.jpg.asset.json";
import img02 from "@/assets/photos/img02.jpg.asset.json";
import img03 from "@/assets/photos/img03.jpg.asset.json";
import img04 from "@/assets/photos/img04.jpg.asset.json";
import img05 from "@/assets/photos/img05.jpg.asset.json";
import img06 from "@/assets/photos/img06.jpg.asset.json";
import img07 from "@/assets/photos/img07.jpg.asset.json";
import img08 from "@/assets/photos/img08.jpg.asset.json";
import img09 from "@/assets/photos/img09.jpg.asset.json";

export function HomePage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />
          <div className="absolute top-80 left-0 w-80 h-80 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none" />
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md mb-space-md">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>CLINICALLY BACKED METABOLIC RESTORATION</span>
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight mb-space-md">Transform Your Health with the Power of Nutrition.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-sm max-w-xl">Personalized Diet Plans, Quality Supplements, and Smarter Nutrition Choices — All Under One Roof.</p>
                <p className="font-title-md text-title-md text-secondary font-semibold tracking-normal mb-space-xl">Your Health, Your Nutrition, Your Transformation.</p>
                <div className="flex flex-wrap items-center gap-space-sm w-full pt-space-xs">
                  <Link to="/registration" className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-secondary transition-all duration-200">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    Book a Consultation
                  </Link>
                  <Link to="/diet-plans" className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-highest text-primary font-label-lg text-label-lg hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-[18px]">nutrition</span>
                    Explore Diet Plans
                  </Link>
                  <Link to="/store" className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-highest text-primary font-label-lg text-label-lg hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    Shop Supplements
                  </Link>
                  <Link to="/nutriscan" className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors">
                    <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                    Try NutriScan AI
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-gutter-sm mt-space-xl pt-space-md w-full max-w-lg">
                  <div>
                    <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">14,200+</p>
                    <p className="font-label-md text-label-md text-on-surface-variant">Active Clinical Patients</p>
                  </div>
                  <div>
                    <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">98.4%</p>
                    <p className="font-label-md text-label-md text-on-surface-variant">Therapeutic Success</p>
                  </div>
                  <div>
                    <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">100%</p>
                    <p className="font-label-md text-label-md text-on-surface-variant">Lab Purity Verified</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container">
                  <img className="w-full h-full object-cover" src={`${img00.url}`} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-label-sm text-label-sm mb-2">
                      <span className="material-symbols-outlined text-[14px]">eco</span>
                      Therapeutic Profile #408
                    </span>
                    <p className="font-title-md text-title-md font-semibold text-white">Gut-Microbiome Rebalancing Bowl</p>
                    <p className="font-body-sm text-body-sm text-surface-variant opacity-90">High prebiotic fiber • Polyphenol dense • Zero added refined sugar</p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-8 bg-surface-container-lowest p-space-md rounded-2xl shadow-xl max-w-[240px] hidden sm:block">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-md text-label-md text-on-surface-variant">NutriScore Index</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">9.8 / 10</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">Macro Balance</span>
                      <span className="font-semibold text-primary">Optimal</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-space-sm pt-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                    <span className="font-label-sm text-label-sm text-on-surface">Verified Clinical Grade</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-space-md rounded-2xl shadow-xl hidden md:flex items-center gap-space-md">
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                      {" "}
                      <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3.5" />
                    </svg>
                    <span className="absolute font-label-sm text-label-sm font-bold text-primary">32g</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-bold text-primary">Clean Protein</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Bio-available isolate</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
              <div>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">End-to-End Care Architecture</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">Integrated Wellness Modalities</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">Four interconnected pillars of precision dietetics, verified bio-compounds, instant optical analysis, and chronic condition remissions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">clinical_notes</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm mb-space-sm">Personalized Triage</span>
                  <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Diet & Nutrition</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Customized clinical diet charts, metabolic re-tuning schedules, and continuous 1-on-1 consultations with registered dietitians.</p>
                </div>
                <Link to="/diet-plans" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-secondary group-hover:text-primary transition-colors">
                  Explore Plans
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">medication</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm mb-space-sm">Tested Purity</span>
                  <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Supplement Store</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Lab-tested authentic whey, clean plant proteins, heavy-metal certified omega-3, and minerals. Seamless Online Checkout & Offline COD.</p>
                </div>
                <Link to="/store" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-secondary group-hover:text-primary transition-colors">
                  Browse Dispensary
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">₹99–₹299/mo</span>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">document_scanner</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-space-sm">Computer Vision</span>
                  <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">NutriScan AI Scanner</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Instant ingredient decoding and clinical nutrition scoring on an evidence-based 1–10 scale to detect hidden chemicals and ultra-processed additives.</p>
                </div>
                <Link to="/nutriscan" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-secondary group-hover:text-primary transition-colors">
                  Launch Scanner
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-space-md group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">cardiology</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm mb-space-sm">Root-Cause Care</span>
                  <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Therapeutic Lifestyle</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Rigorous clinical protocols targeting root insulin resistance, hormonal balance for PCOS, thyroid modulation, and leaky-gut microbial repair.</p>
                </div>
                <Link to="/therapeutic-diets" className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-secondary group-hover:text-primary transition-colors">
                  Clinical Protocols
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl">
            <div className="bg-surface-container-low rounded-3xl p-space-xl lg:p-space-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
                <div className="lg:col-span-6 space-y-space-md">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase">Our Clinical Philosophy</span>
                  <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight">Evidence-Based Nutritional Science vs. Fleeting Fad Diets</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">At NutriMaster Wellness Hub, our mission is to eliminate unscientific deprivation models. We ground every intervention in molecular biochemistry, biomarker testing, and endocrine balance.</p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">We reject extreme calorie cutting, arbitrary cleanses, and generic meal replacements. Instead, our registered clinical nutritionists formulate individualized therapeutic sustenance that respects your cultural culinary roots while driving measurable health biomarkers downward.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl">
                      <div className="flex items-center gap-2 text-primary font-bold font-title-md mb-1">
                        <span className="material-symbols-outlined text-secondary text-[22px]">chips</span>
                        Biomarker-Driven
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Continuous tracking of fasting insulin, HbA1c, lipid subfractions, and inflammatory cytokines.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl">
                      <div className="flex items-center gap-2 text-primary font-bold font-title-md mb-1">
                        <span className="material-symbols-outlined text-secondary text-[22px]">health_and_safety</span>
                        Zero Starvation
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Nourishing micronutrient surplus designed for cellular repair and lifelong metabolic safety.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 relative">
                  <div className="grid grid-cols-2 gap-space-md">
                    <div className="space-y-space-md">
                      <div className="rounded-2xl overflow-hidden shadow-lg h-56 bg-surface-container">
                        <img className="w-full h-full object-cover" src={`${img01.url}`} alt="" />
                      </div>
                      <div className="bg-primary-container text-on-primary p-space-md rounded-2xl shadow-lg">
                        <p className="font-headline-md text-headline-md font-bold text-secondary-fixed">100%</p>
                        <p className="font-label-lg text-label-lg font-semibold mt-1">Peer-Reviewed Foundations</p>
                        <p className="font-body-sm text-body-sm text-on-primary-container mt-1">Guided exclusively by randomized control trials and endocrinological consensus.</p>
                      </div>
                    </div>
                    <div className="space-y-space-md pt-8">
                      <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2 text-tertiary-container font-bold mb-1">
                          <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                          <span className="font-label-lg text-label-lg">Habit Architecture</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Sustainable behavioral routines constructed for perpetual metabolic homeostasis.</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg h-56 bg-surface-container">
                        <img className="w-full h-full object-cover" src={`${img02.url}`} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
              <div>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">Dispensary Assurance</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">Featured Lab-Tested Supplements</h2>
              </div>
              <div className="flex items-center gap-space-md mt-4 md:mt-0">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                  Third-Party Certificate of Analysis Included
                </span>
                <Link to="/store" className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1 font-semibold">
                  View All Store
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden mb-space-md flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={`${img03.url}`} alt="" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Grass-Fed</span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">COD Available</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">4.9</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">(340 reviews)</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold line-clamp-1">100% Whey Protein Isolate</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-sm">Zero lactose, cross-flow microfiltered, 27g protein per scoop.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹2,899</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹3,499</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors text-center shadow-sm" type="button">Add to Cart</button>
                    <a className="w-full py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors text-center flex items-center justify-center gap-1" href="https://wa.me/917404114816?text=Inquiry%20about%20Whey%20Protein%20Isolate" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[14px]">chat</span>
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden mb-space-md flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={`${img04.url}`} alt="" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">Mercury Free</span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">COD Available</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">5.0</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">(512 reviews)</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold line-clamp-1">Triple Strength Omega-3</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-sm">1250mg Fish Oil with high EPA 550mg & DHA 400mg triglyceride form.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹849</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹1,199</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors text-center shadow-sm" type="button">Add to Cart</button>
                    <a className="w-full py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors text-center flex items-center justify-center gap-1" href="https://wa.me/918168147733?text=Inquiry%20about%20Triple%20Strength%20Omega-3" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[14px]">chat</span>
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden mb-space-md flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={`${img05.url}`} alt="" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">100% Vegan</span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">COD Available</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">4.8</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">(198 reviews)</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold line-clamp-1">Plant Protein Greens</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-sm">Organic pea & brown rice isolate with antioxidant spirulina & chlorella.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹1,499</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹1,899</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors text-center shadow-sm" type="button">Add to Cart</button>
                    <a className="w-full py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors text-center flex items-center justify-center gap-1" href="https://wa.me/917404114816?text=Inquiry%20about%20Plant%20Protein%20Greens" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[14px]">chat</span>
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden mb-space-md flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={`${img06.url}`} alt="" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">Chelated Zinc</span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">COD Available</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">4.9</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">(614 reviews)</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary font-bold line-clamp-1">Daily Multivitamin with Zinc</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-sm">Bioactive folate, methylated B12, vitamin D3, K2 MK-7, and zinc bisglycinate.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">₹699</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹899</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors text-center shadow-sm" type="button">Add to Cart</button>
                    <a className="w-full py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors text-center flex items-center justify-center gap-1" href="https://wa.me/918168147733?text=Inquiry%20about%20Daily%20Multivitamin" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[14px]">chat</span>
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
              <div>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">Kitchen Pharmacopeia</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">Popular Therapeutic Recipes</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-2 md:mt-0">Chef-crafted, endocrinologist-audited whole-food meals engineered to keep postprandial glucose surges under 30 mg/dL.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={`${img07.url}`} alt="" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-semibold">Low Glycemic Load</div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md font-bold">240 kcal</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">Methi Oats Moong Cheela</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Rich in fenugreek saponins to increase cellular insulin receptivity and sprouted yellow lentil peptides.</p>
                  </div>
                  <div className="border-t border-surface-variant pt-space-md">
                    <div className="grid grid-cols-3 text-center gap-1 bg-surface-container-low p-2 rounded-xl">
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Protein</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">14g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Carbs</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">28g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Fats</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">6g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={`${img08.url}`} alt="" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-md text-on-secondary font-label-sm text-label-sm font-semibold">Hormone Balancing</div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md font-bold">380 kcal</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">Paneer Quinoa Bowl</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Complete amino acid spectrum, zinc for thyroid peroxidase activation, and complex sustained release energy.</p>
                  </div>
                  <div className="border-t border-surface-variant pt-space-md">
                    <div className="grid grid-cols-3 text-center gap-1 bg-surface-container-low p-2 rounded-xl">
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Protein</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">22g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Carbs</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">34g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Fats</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">12g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={`${img09.url}`} alt="" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Gut Microbiome Fuel</div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md font-bold">240 kcal</div>
                </div>
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-title-md text-title-md text-primary font-bold mb-space-xs">Avocado Moong Salad</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Monounsaturated lipid carriers for fat-soluble vitamins combined with enzyme-rich sprouted mung legume enzymes.</p>
                  </div>
                  <div className="border-t border-surface-variant pt-space-md">
                    <div className="grid grid-cols-3 text-center gap-1 bg-surface-container-low p-2 rounded-xl">
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Protein</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">11g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Carbs</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">22g</p>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Fats</p>
                        <p className="font-label-lg text-label-lg font-bold text-primary">10g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-xl">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-bold">Verified Clinical Trajectories</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">Measurable Biological Recoveries</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Read genuine transformation accounts verified by third-party pathological blood draws before and after our therapeutic interventions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-1 text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Type-2 Protocol</span>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded-xl mb-space-md flex items-center justify-between">
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Baseline HbA1c</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-error">8.9%</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">trending_down</span>
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm text-on-surface-variant">120-Day Result</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-secondary">5.8%</p>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-space-md">“My diabetologist was shocked. By replacing high glycemic grains with tailored moong and seed rotations, my fasting blood glucose stabilized without increasing metformin.”</p>
                </div>
                <div className="flex items-center gap-3 pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">RG</div>
                  <div>
                    <p className="font-label-lg text-label-lg font-bold text-primary">Rajesh Gupta</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Gurugram • Patient ID #NM-8821</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-1 text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">PCOS Care</span>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded-xl mb-space-md flex items-center justify-between">
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Cycle Regularity</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-outline">65+ Days</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">trending_flat</span>
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Normalized</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-secondary">28 Days</p>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-space-md">“Dietitian Muskaan addressed my androgen spikes through clinical seed cycling and anti-inflammatory supplementation. Weight dropped naturally without crash dieting.”</p>
                </div>
                <div className="flex items-center gap-3 pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">PS</div>
                  <div>
                    <p className="font-label-lg text-label-lg font-bold text-primary">Pooja Sharma</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">New Delhi • Patient ID #NM-9340</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-1 text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">Microbiome Repair</span>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded-xl mb-space-md flex items-center justify-between">
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">GI Bloat Index</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-error">Severe (9/10)</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Resolution</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-secondary">Minimal (1/10)</p>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic mb-space-md">“Chronic bloating made work unbearable. Nishan Mann restructured my meal intervals and introduced therapeutic glutamine and polyphenols. I have my life back.”</p>
                </div>
                <div className="flex items-center gap-3 pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">AK</div>
                  <div>
                    <p className="font-label-lg text-label-lg font-bold text-primary">Amitabh K.</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Chandigarh • Patient ID #NM-7104</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg py-space-md">
            <div className="bg-primary-container text-on-primary rounded-3xl p-space-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-lg">
              <div className="space-y-space-xs text-center lg:text-left z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur font-label-sm text-label-sm text-secondary-fixed">
                  <span className="material-symbols-outlined text-[14px]">support_agent</span>
                  Direct WhatsApp Triage Line
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white font-bold">Ready for Clinical Transformation?</h2>
                <p className="font-body-md text-body-md text-on-primary-container max-w-xl">Chat instantly with Muskaan (+91 74041 14816) or Nishan Mann (+91 81681 47733) for personalized intake and plan selection.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm z-10">
                <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold hover:bg-white transition-colors" href="https://wa.me/917404114816?text=Hi%2C%20I%20would%20like%20to%20book%20a%20NutriMaster%20consultation" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  WhatsApp Muskaan
                </a>
                <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-white/10 text-white hover:bg-white/20 font-label-lg text-label-lg transition-colors" href="https://wa.me/918168147733?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20clinical%20diet" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  WhatsApp Nishan Mann
                </a>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-lg pb-space-xl">
            <div className="bg-surface-container-low rounded-2xl p-space-md border border-surface-container flex items-start gap-space-md">
              <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5 shrink-0">info</span>
              <div>
                <h4 className="font-title-md text-title-md text-primary font-bold">Important Medical & Clinical Disclaimer</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">The meal architectures, therapeutic dietary blueprints, and nutritional supplementation recommendations published by NutriMaster Wellness Hub are formulated exclusively for metabolic lifestyle enhancement and supportive clinical care. They do not constitute invasive medical diagnoses, pharmaceutical replacement therapies, or definitive surgical cures. Always consult your attending primary physician or endocrinologist before tapering prescription medications or instituting strict physiological fasting protocols.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
