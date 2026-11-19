import { ContactForm, CopyButton, UtrForm } from "@/components/about/ContactForms";
import { PaymentStatusList } from "@/components/about/PaymentStatusList";
import img29 from "@/assets/photos/img29.jpg.asset.json";
import img30 from "@/assets/photos/img30.png.asset.json";

export function AboutPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden bg-surface pb-space-xl">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="absolute top-80 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-7 space-y-space-md">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[16px]">eco</span>
                  <span>Refined Organic Modernism & Nutrition Science</span>
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">Bridging Evidence-Based Clinical Nutrition with Clean Wellness.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">NutriMaster Wellness Hub is a comprehensive nutrition and supplement platform dedicated to promoting healthier, resilient lifestyles. We integrate personalized diet frameworks, certified clean supplementation, and actionable health literacy so everyday individuals and clinical clients can make lifelong, mindful transformations.</p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-secondary transition-all duration-200" href="#direct-connect">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Direct WhatsApp Access</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="#payment-channels">
                    <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                    <span>UPI & Payment Desk</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-xl bg-surface-container-high">
                  <img className="w-full h-full object-cover" src={`${img29.url}`} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">NutriMaster Dispensary & Hub</p>
                    <h2 className="font-headline-sm text-headline-sm text-on-primary">Chandigarh Care Desk & Consultation Suites</h2>
                    <p className="font-body-sm text-body-sm text-on-primary-container mt-1">Grounded in clinical empathy, backed by empirical nutritional biochemistry.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Our Guiding Ethos</span>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mt-1">Five Pillars of NutriMaster Care</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">A structured holistic mandate crafted to build long-term metabolic health without unverified claims or extreme fads.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">restaurant</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">01 • Nutrition</span>
                  <h3 className="font-title-md text-title-md text-primary">Promote Healthy Eating Habits</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Cultivating sustainable, nutrient-dense dietary patterns rooted in whole foods and metabolic bio-individuality.</p>
                </div>
                <div className="pt-space-md">
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>Whole Food Protocol</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[26px]">clinical_notes</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">02 • Personalization</span>
                  <h3 className="font-title-md text-title-md text-primary">Personalized Nutrition Guidance</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Custom therapeutic meal regimens mapped strictly around individual metabolic profiles, allergies, and lifestyles.</p>
                </div>
                <div className="pt-space-md">
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>Bio-Individuality</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">verified</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">03 • Quality</span>
                  <h3 className="font-title-md text-title-md text-primary">Accessible Clean Supplements</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Delivering lab-verified, third-party tested therapeutic formulations directly to clients at transparent value.</p>
                </div>
                <div className="pt-space-md">
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>Pure Formulations</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">fitness_center</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">04 • Vitality</span>
                  <h3 className="font-title-md text-title-md text-primary">Fitness & Wellness Awareness</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Fostering active physical conditioning alongside restorative sleep and mindful stress reduction techniques.</p>
                </div>
                <div className="pt-space-md">
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>Complete Harmony</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                    <span className="material-symbols-outlined text-[26px]">psychology_alt</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">05 • Autonomy</span>
                  <h3 className="font-title-md text-title-md text-primary">Informed Health Decisions</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Demystifying complex metabolic chemistry with honest science, giving clients real sovereignty over their health.</p>
                </div>
                <div className="pt-space-md">
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
                    <span>Clear Knowledge</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl" id="direct-connect">
            <div className="bg-surface-container-low rounded-3xl p-space-lg shadow-sm">
              <div className="max-w-2xl mb-space-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-2">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  Instant Consultation Channels
                </div>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">Direct Contact & Payment Options</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Reach out directly for dietary queries, consultations, or swift instant UPI settlement.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-primary tracking-tight">Muskaan</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-[18px] text-secondary">phone</span>
                          <a className="font-title-md text-title-md text-on-surface font-semibold hover:text-secondary transition-colors" href="tel:7404114816">+91 74041 14816</a>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined text-[24px]">person</span>
                      </div>
                    </div>
                    <div className="mt-space-md">
                      <a className="w-full inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all" href="https://wa.me/917404114816?text=Hello%20Muskaan,%20I%20would%20like%20to%20enquire%20about%20NutriMaster%20diet%20consultations%20and%20services." rel="noopener noreferrer" target="_blank">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                        <span>Chat on WhatsApp with Muskaan</span>
                      </a>
                    </div>
                    <div className="mt-space-md p-space-md bg-surface-container-low rounded-xl">
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">UPI Payment Desk</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Instant Credit</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center">
                        <div className="sm:col-span-5 flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl shadow-inner">
                          <svg className="w-28 h-28 text-primary" fill="currentColor" viewBox="0 0 100 100">
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="10" y="10" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="14" y="14" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="18" y="18" />
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="66" y="10" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="70" y="14" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="74" y="18" />
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="10" y="66" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="14" y="70" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="18" y="74" />
                            {" "}
                            <rect fill="#006c48" height="18" width="6" x="42" y="12" />
                            {" "}
                            <rect fill="#1b4332" height="12" width="6" x="52" y="18" />
                            {" "}
                            <rect fill="#1b4332" height="20" rx="3" width="20" x="40" y="42" />
                            {" "}
                            <rect fill="#ffffff" height="8" width="8" x="46" y="48" />
                            {" "}
                            <rect fill="#006c48" height="6" width="18" x="12" y="42" />
                            {" "}
                            <rect fill="#1b4332" height="6" width="18" x="70" y="42" />
                            {" "}
                            <rect fill="#1b4332" height="18" width="6" x="42" y="70" />
                            {" "}
                            <rect fill="#006c48" height="10" width="10" x="66" y="66" />
                            {" "}
                            <rect fill="#1b4332" height="10" width="10" x="80" y="80" />
                          </svg>
                          <span className="font-label-sm text-label-sm text-outline mt-1 text-center">Scan with any UPI App</span>
                        </div>
                        <div className="sm:col-span-7 space-y-space-sm">
                          <div>
                            <p className="font-label-sm text-label-sm text-outline">Verified VPA / UPI ID</p>
                            <div className="flex items-center gap-2 mt-1 bg-surface-container-lowest p-2 rounded-lg">
                              <span className="font-mono font-semibold text-on-surface text-body-sm truncate" id="upi-muskaan">muskaan.nutrimaster@upi</span>
                              <CopyButton text="muskaan.nutrimaster@upi" label="Copy UPI ID" />
                            </div>
                          </div>
                          <a className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-colors" href="upi://pay?pa=muskaan.nutrimaster@upi&pn=Muskaan&cu=INR">
                            <span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
                            <span>Pay via UPI</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-primary tracking-tight">Nishan Mann</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-[18px] text-secondary">phone</span>
                          <a className="font-title-md text-title-md text-on-surface font-semibold hover:text-secondary transition-colors" href="tel:8168147733">+91 81681 47733</a>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined text-[24px]">person</span>
                      </div>
                    </div>
                    <div className="mt-space-md">
                      <a className="w-full inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all" href="https://wa.me/918168147733?text=Hello%20Nishan%20Mann,%20I%20would%20like%20to%20enquire%20about%20NutriMaster%20diet%20consultations%20and%20services." rel="noopener noreferrer" target="_blank">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                        <span>Chat on WhatsApp with Nishan Mann</span>
                      </a>
                    </div>
                    <div className="mt-space-md p-space-md bg-surface-container-low rounded-xl">
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">UPI Payment Desk</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Instant Credit</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center">
                        <div className="sm:col-span-5 flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl shadow-inner">
                          <svg className="w-28 h-28 text-primary" fill="currentColor" viewBox="0 0 100 100">
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="10" y="10" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="14" y="14" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="18" y="18" />
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="66" y="10" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="70" y="14" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="74" y="18" />
                            {" "}
                            <rect fill="#1b4332" height="24" rx="3" width="24" x="10" y="66" />
                            {" "}
                            <rect fill="#ffffff" height="16" rx="2" width="16" x="14" y="70" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="8" x="18" y="74" />
                            {" "}
                            <rect fill="#1b4332" height="12" width="6" x="42" y="14" />
                            {" "}
                            <rect fill="#006c48" height="14" width="6" x="52" y="24" />
                            {" "}
                            <rect fill="#006c48" height="20" rx="3" width="20" x="40" y="42" />
                            {" "}
                            <rect fill="#ffffff" height="8" width="8" x="46" y="48" />
                            {" "}
                            <rect fill="#1b4332" height="6" width="16" x="12" y="44" />
                            {" "}
                            <rect fill="#006c48" height="6" width="16" x="72" y="44" />
                            {" "}
                            <rect fill="#1b4332" height="20" width="6" x="44" y="68" />
                            {" "}
                            <rect fill="#1b4332" height="8" width="12" x="66" y="72" />
                            {" "}
                            <rect fill="#006c48" height="12" width="12" x="78" y="66" />
                          </svg>
                          <span className="font-label-sm text-label-sm text-outline mt-1 text-center">Scan with any UPI App</span>
                        </div>
                        <div className="sm:col-span-7 space-y-space-sm">
                          <div>
                            <p className="font-label-sm text-label-sm text-outline">Verified VPA / UPI ID</p>
                            <div className="flex items-center gap-2 mt-1 bg-surface-container-lowest p-2 rounded-lg">
                              <span className="font-mono font-semibold text-on-surface text-body-sm truncate" id="upi-nishan">nishan.nutrimaster@upi</span>
                              <CopyButton text="nishan.nutrimaster@upi" label="Copy UPI ID" />
                            </div>
                          </div>
                          <a className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-colors" href="upi://pay?pa=nishan.nutrimaster@upi&pn=Nishan%20Mann&cu=INR">
                            <span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
                            <span>Pay via UPI</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm">
                <div className="mb-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Inquiry & Intake</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">Send a Detailed Message</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Have a medical query, need dietary assistance, or seeking custom supplement orders? Fill out the form and our clinical desk will respond within 4 business hours.</p>
                </div>
                <ContactForm />
              </div>
              <div className="lg:col-span-5 space-y-space-md">
                <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm space-y-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Walk-in Hub & Care Center</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-1">Dispensary Location</h3>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                      </div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Offline Dispensary & Clinic</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Sector 8C Commercial Hub, Madhya Marg Inner Circle, Chandigarh, 160009</p>
                        <p className="font-label-sm text-label-sm text-secondary mt-1">Hours: Mon – Sat: 9:30 AM – 7:30 PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Official Business Email</p>
                        <a className="font-body-sm text-body-sm text-secondary font-medium hover:underline" href="mailto:contact@nutrimasterwellness.com">contact@nutrimasterwellness.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[18px]">share</span>
                      </div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Social & Community</p>
                        <div className="flex items-center gap-space-sm mt-1">
                          <a className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full" href="https://instagram.com" rel="noopener" target="_blank">
                            <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                            <span>Instagram</span>
                          </a>
                          <a className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full" href="https://linkedin.com" rel="noopener" target="_blank">
                            <span className="material-symbols-outlined text-[14px]">business_center</span>
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-3xl p-space-md shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Location Snapshot: Chandigarh</span>
                    <a className="text-secondary font-label-sm text-label-sm hover:underline flex items-center gap-1" href="https://maps.google.com/?q=Sector+8C+Chandigarh" rel="noopener" target="_blank">
                      <span>Open in Maps</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                  <div className="w-full h-56 bg-cover bg-center rounded-2xl relative shadow-inner overflow-hidden" data-location="Sector 8C Commercial Hub, Madhya Marg Inner Circle, Chandigarh, India" style={{ backgroundImage: `url('${img30.url}')` }}>
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="bg-surface-container-lowest/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">NutriMaster Dispensary • Sector 8C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl" id="payment-channels">
            <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-space-lg pb-space-md border-b-0">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Transaction Framework</span>
                  <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mt-1">Payment Verification & Reconciliation</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">Supported modes include Instant UPI (Google Pay, PhonePe, Paytm, BHIM), direct Static QR scanning, and Cash on Delivery (COD) for eligible domestic supplement orders.</p>
                </div>
                <div className="mt-4 lg:mt-0 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Zero Platform Convenience Fee
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
                <div className="lg:col-span-5 space-y-space-md">
                  <div className="p-space-md bg-surface-container-low rounded-2xl">
                    <h3 className="font-title-md text-title-md text-primary mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
                      1. Domestic UPI Instant Gateway
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Transfer fees or supplement purchase amounts directly to our listed accounts using any UPI application. Our desk verifies each payment and confirms it on WhatsApp.</p>
                    <div className="flex flex-wrap gap-2 mt-space-sm">
                      <span className="px-2.5 py-1 rounded bg-surface-container font-mono text-label-sm text-on-surface">Google Pay</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container font-mono text-label-sm text-on-surface">PhonePe</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container font-mono text-label-sm text-on-surface">Paytm UPI</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container font-mono text-label-sm text-on-surface">BHIM 2.0</span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-2xl">
                    <h3 className="font-title-md text-title-md text-primary mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                      2. Cash On Delivery (COD)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Available for unsealed supplement dispensations and clinical nutrition kits across verified pan-India pincodes up to &rupee;5,000. Consultation fees require prepaid UPI confirmation.</p>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-2xl">
                    <h3 className="font-title-md text-title-md text-primary mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">receipt_long</span>
                      3. Invoice & GST Receipts
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Clinical GST tax invoices are generated automatically and sent via WhatsApp and registered email within 2 hours of payment reconciliation.</p>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container rounded-2xl p-space-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <h3 className="font-title-md text-title-md text-primary">Payment Confirmation & UTR Lookup</h3>
                      <span className="font-label-sm text-label-sm text-outline">Manual verification</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Submitted your payment via UPI? Provide your 12-digit UTR or Transaction ID below so our desk can match it to your appointment or order.</p>
                    <UtrForm />
                    <PaymentStatusList />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl">
            <div className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
                <div className="lg:col-span-1 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[32px]">format_image_left</span>
                  </div>
                </div>
                <div className="lg:col-span-11 space-y-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Ethical Integrity, Evidence-Based Truth & Zero Misleading Claims</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify">At NutriMaster Wellness Hub, our practices are bound strictly to verifiable nutritional science, biochemical balance, and certified honest sourcing. We reject fabricated credentials, unverified clinical trials, instant miracle cure assertions, and pseudo-scientific trends. Nutritional counseling and curated supplements are formulated as adjunctive physiological support for balanced living, not replacements for licensed medical intervention, acute trauma care, or prescribed pharmaceuticals. Patients under active medication must retain oversight from their primary physician.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {" "}
    </>
  );
}
