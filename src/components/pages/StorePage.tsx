import img18 from "@/assets/photos/img18.jpg.asset.json";
import img19 from "@/assets/photos/img19.jpg.asset.json";
import img20 from "@/assets/photos/img20.jpg.asset.json";
import img21 from "@/assets/photos/img21.jpg.asset.json";
import img22 from "@/assets/photos/img22.jpg.asset.json";
import img23 from "@/assets/photos/img23.jpg.asset.json";
import img24 from "@/assets/photos/img24.png.asset.json";

export function StorePage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg w-full pt-space-lg pb-space-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-gutter pb-space-md">
            <div className="flex flex-col max-w-xl">
              <div className="flex items-center gap-space-xs text-secondary mb-1">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-md text-label-md tracking-wider uppercase font-semibold">Pharmaceutical-Grade Dispensary</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">Pure Lab Formulation Store</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Clean-label bio-active nutraceuticals, verified 3rd-party batch reports, online dispatch & flagship dispensary walk-ins.</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-md">
              <div className="relative w-full sm:w-72">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-4 py-2.5 rounded-full font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" id="store-search-input" placeholder="Search protein, omega, tests..." type="text" />
              </div>
              <div className="relative group cursor-pointer flex items-center gap-space-sm bg-surface-container-lowest px- space-md py-2.5 px-4 rounded-full shadow-sm hover:shadow-md transition-all" id="cart-drawer-trigger">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center text-[10px]" id="cart-counter">2</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Bag Subtotal</span>
                  <span className="font-title-md text-title-md text-primary leading-tight mt-0.5" id="cart-subtotal">₹3,748</span>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px] ml-1 group-hover:translate-x-0.5 transition-transform">arrow_forward_ios</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar mb-space-lg">
            <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shrink-0 shadow-sm transition-all hover:opacity-90">All Formulations</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Whey Isolate</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Plant Protein</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Creatine</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Omega-3 EPA/DHA</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Clinical Probiotics</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Electrolytes & Hydration</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">Micronutrient Kits</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter bg-surface-container-low rounded-2xl p-space-md lg:p-space-lg mb-space-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />
            <div className="lg:col-span-6 flex flex-col justify-between space-y-space-md pr-0 lg:pr-space-md">
              <div className="space-y-space-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                  <span>Express Cold-Chain Network</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">Shop Online with Doorstep Delivery</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Pan-India air dispatch with hermetically sealed temperature controls. Guaranteed authentic tamper-evident seal on every container.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm pt-2">
                <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-xl text-on-surface shadow-sm font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                  <span>100% Third-Party Lab Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-xl text-on-surface shadow-sm font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
                  <span>Same-Day Dispatch before 2 PM</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest p-space-md lg:p-space-md rounded-xl shadow-sm space-y-space-md">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-wide text-tertiary-fixed-dim bg-tertiary-container px-2.5 py-0.5 rounded-full font-bold">Flagship Clinic & Dispensary</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Open 9:00 AM - 8:30 PM
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-primary">Offline Walk-ins & Direct WhatsApp Triage</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Speak directly with licensed dispensary nutritionists for bulk clinic orders, immediate counter pickups, or custom stack inquiries.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                <a className="flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group" href="https://wa.me/917404114816?text=Hi%20Muskaan,%20I%20would%20like%20to%20enquire%20about%20offline%20supplements" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface leading-tight">Muskaan</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">+91 74041 14816</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-110 transition-transform">open_in_new</span>
                </a>
                <a className="flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group" href="https://wa.me/918168147733?text=Hi%20Nishan,%20I%20would%20like%20to%20enquire%20about%20offline%20supplements" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface leading-tight">Nishan Mann</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">+91 81681 47733</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[20px] group-hover:scale-110 transition-transform">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <aside className="lg:col-span-3 bg-surface-container-lowest p-space-md rounded-2xl shadow-sm space-y-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-title-md text-title-md text-primary">Refine Protocols</span>
                <button className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer" id="reset-filters">Reset All</button>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block font-bold">Product Categories</label>
                <div className="space-y-1 font-body-sm text-body-sm text-on-surface">
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Whey Protein</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">14</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Plant-Based Protein</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">8</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Creatine Monohydrate</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">6</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Multivitamins</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">11</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Omega-3 EPA/DHA</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">5</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Vitamin D3 & K2</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">4</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Calcium & Magnesium</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">3</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Iron Supplements</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">2</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Probiotics</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">7</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Electrolytes</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">5</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>Sports Nutrition</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">12</span>
                  </label>
                  <label className="flex items-center justify-between py-1 cursor-pointer hover:text-secondary group">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4 rounded text-primary-container focus:ring-secondary accent-primary" type="checkbox" />
                      <span>General Wellness</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">19</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Max Price (₹)</label>
                  <span className="font-label-lg text-label-lg font-semibold text-primary" id="price-val">₹3,500</span>
                </div>
                <input className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary" id="price-range" max="5000" min="500" step="100" type="range" defaultValue="3500" />
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>₹500</span>
                  <span>₹5,000</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block font-bold">Clinical Standard</label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer hover:text-secondary">
                    <input className="w-4 h-4 rounded accent-primary" type="checkbox" />
                    <span>100% Vegan Certified</span>
                  </label>
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer hover:text-secondary">
                    <input className="w-4 h-4 rounded accent-primary" type="checkbox" />
                    <span>Gluten-Free & Celiac Safe</span>
                  </label>
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer hover:text-secondary">
                    <input defaultChecked className="w-4 h-4 rounded accent-primary" type="checkbox" />
                    <span>Lab Verified (Zero Heavy Metals)</span>
                  </label>
                  <label className="flex items-center gap-2 text-body-sm font-body-sm cursor-pointer hover:text-secondary">
                    <input className="w-4 h-4 rounded accent-primary" type="checkbox" />
                    <span>Informed-Choice Tested</span>
                  </label>
                </div>
              </div>
              <div className="pt-2">
                <label className="flex items-center justify-between p-2.5 bg-surface-container rounded-xl cursor-pointer">
                  <span className="font-label-lg text-label-lg text-on-surface">In Stock Only</span>
                  <input defaultChecked className="w-4 h-4 accent-secondary rounded" type="checkbox" />
                </label>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant space-y-1">
                <div className="flex items-center gap-1.5 text-primary font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-[18px] text-secondary">storefront</span>
                  <span>Chandigarh Dispensary</span>
                </div>
                <p className="font-label-sm text-label-sm leading-normal">Sector 8C Inner Market. Ready for instant drive-through pickup.</p>
              </div>
            </aside>
            <section className="lg:col-span-9 flex flex-col space-y-space-md">
              <div className="flex items-center justify-between bg-surface-container-lowest px-space-md py-3 rounded-xl shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-title-md text-title-md text-primary">6 Formulations Available</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Certified Batch Release 2025</span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>Sort by:</span>
                  <select className="bg-surface-container py-1 px-2.5 rounded-lg text-on-surface font-label-sm text-label-sm focus:outline-none">
                    <option>Clinical Priority</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">Cold-Filtered</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">4.9</span>
                        <span className="text-on-surface-variant ml-0.5">(148)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img18.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">1kg Canister</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">100% Whey Protein Isolate 1kg</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">27g Protein • Zero Sugar • Cold-Filtered</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between border-t-0">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹2,899</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹3,499</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary-container bg-primary-container px-2 py-0.5 rounded text-white">Save 17%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('100% Whey Protein Isolate', 2899)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/917404114816?text=Enquiry%20for%20100%25%20Whey%20Protein%20Isolate%201kg%20(₹2,899)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">Molecularly Distilled</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">4.8</span>
                        <span className="text-on-surface-variant ml-0.5">(215)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img19.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">60 Softgels</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">Triple Strength Omega-3 Fish Oil</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">1000mg EPA/DHA • Anti-Reflux Enteric</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹849</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹1,199</span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-0.5 rounded">Save 29%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('Triple Strength Omega-3 Fish Oil', 849)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/918168147733?text=Enquiry%20for%20Triple%20Strength%20Omega-3%20Fish%20Oil%20(₹849)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">100% Plant Bio</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">4.7</span>
                        <span className="text-on-surface-variant ml-0.5">(92)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img20.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">500g Eco-Pouch</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">Organic Plant Protein Greens Blend</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">Pea & Brown Rice • Digestive Enzymes</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹1,499</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹1,899</span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-0.5 rounded">Save 21%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('Organic Plant Protein Greens Blend', 1499)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/917404114816?text=Enquiry%20for%20Organic%20Plant%20Protein%20Greens%20Blend%20(₹1,499)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">Creapure Grade</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">5.0</span>
                        <span className="text-on-surface-variant ml-0.5">(312)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img21.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">250g (83 Servings)</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">Micronized Creatine Monohydrate</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">Ultra-Soluble 200 Mesh • Unflavored Pure</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹999</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹1,299</span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-0.5 rounded">Save 23%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('Micronized Creatine Monohydrate 250g', 999)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/918168147733?text=Enquiry%20for%20Micronized%20Creatine%20Monohydrate%20250g%20(₹999)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">Whole-Food Bio</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">4.8</span>
                        <span className="text-on-surface-variant ml-0.5">(174)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img22.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">60 Tablets</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">Daily Multi-Vitamin & Minerals</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">32 Bioactive Nutrients • Chelated Minerals</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹649</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹899</span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-0.5 rounded">Save 28%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('Daily Multi-Vitamin Complex', 649)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/917404114816?text=Enquiry%20for%20Daily%20Multi-Vitamin%20(₹649)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-secondary bg-secondary-container px-2.5 py-0.5 rounded-full">Delayed-Release</span>
                      <div className="flex items-center text-amber-500 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="ml-1 text-on-surface font-semibold">4.9</span>
                        <span className="text-on-surface-variant ml-0.5">(289)</span>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-xl bg-surface-container-low flex items-center justify-center relative overflow-hidden mb-3">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={`${img23.url}`} alt="" />
                      <span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-medium text-primary">30 Delayed-Capsules</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NutriMaster Pure Lab</span>
                      <h3 className="font-title-md text-title-md text-primary leading-snug">Clinical Probiotics 50 Billion CFU</h3>
                      <p className="font-label-sm text-label-sm text-secondary font-medium">16 Broad-Spectrum Strains + Prebiotic FOS</p>
                    </div>
                    <div className="mt-4 pt-3 flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">₹1,199</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant line-through">₹1,599</span>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-0.5 rounded">Save 25%</span>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button className="w-full py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-onclick="addToBag('Clinical Probiotics 50 Billion CFU', 1199)">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                    <a className="w-full py-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1" href="https://wa.me/918168147733?text=Enquiry%20for%20Clinical%20Probiotics%2050%20Billion%20CFU%20(₹1,199)" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">store</span>
                      <span>Offline Purchase Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container-lowest rounded-2xl shadow-sm gap-space-sm mt-space-md">
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">policy</span>
                  <span>Batch analytical certificates (COA) included in every package dispatched.</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>
                  <span className="px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm">1</span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">2</span>
                  <button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-space-xl bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-6 space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>Dispensary Walk-In Available</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">NutriMaster Chandigarh Dispensary</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Experience our complete clinical apothecary in person. Receive personalized stack counseling, in-body biometric composition scanning, and direct shelf purchases.</p>
                </div>
                <div className="w-full h-44 rounded-xl bg-cover bg-center shadow-sm relative overflow-hidden flex items-end p-3" data-location="Sector 8C Chandigarh, India" style={{ backgroundImage: `url('${img24.url}')` }}>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-lg flex items-center justify-between w-full shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface leading-none">Sector 8C Commercial Hub</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Madhya Marg Inner Circle, Chandigarh</p>
                      </div>
                    </div>
                    <a className="px-3 py-1.5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:bg-secondary transition-colors" href="https://maps.google.com/?q=Sector+8C+Chandigarh" rel="noopener noreferrer" target="_blank">Directions</a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-space-md bg-surface-container-low p-space-md lg:p-space-md rounded-2xl">
                <h3 className="font-title-md text-title-md text-primary">Dispensary Coordinators & Settlement</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div className="p-3 bg-surface-container-lowest rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">M</div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Muskaan</p>
                        <p className="font-label-sm text-label-sm text-secondary">Lead Pharmacotherapy</p>
                      </div>
                    </div>
                    <a className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium" href="https://wa.me/917404114816" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                      <span>+91 74041 14816</span>
                    </a>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">N</div>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface">Nishan Mann</p>
                        <p className="font-label-sm text-label-sm text-secondary">Clinical Operations Head</p>
                      </div>
                    </div>
                    <a className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium" href="https://wa.me/918168147733" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                      <span>+91 81681 47733</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold block">Frictionless Payment Modes</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">contactless</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">UPI & Instant</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">GPay, PhonePe, Paytm</p>
                    </div>
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">qr_code_scanner</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">Dynamic QR</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Instant Counter Tally</p>
                    </div>
                    <div className="p-2.5 bg-surface-container-lowest rounded-xl text-center space-y-1 shadow-xs">
                      <span className="material-symbols-outlined text-secondary text-[22px]">local_shipping</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">Cash On Delivery</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Eligible Postal Codes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300" id="cart-drawer">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" id="cart-backdrop" />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface-container-lowest shadow-2xl p-space-lg flex flex-col justify-between transform translate-x-full transition-transform duration-300 pointer-events-auto" id="cart-panel">
            <div>
              <div className="flex items-center justify-between pb-space-md border-b-0">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">shopping_bag</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">Your Wellness Bag</h2>
                </div>
                <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" id="close-cart">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <div className="space-y-space-sm pt-space-md max-h-[563px] overflow-y-auto pr-1" id="cart-items-container">
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-surface">100% Whey Protein Isolate 1kg</span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">Qty: 1 • ₹2,899</span>
                  </div>
                  <button className="text-error hover:opacity-75" data-onclick="this.parentElement.remove(); recomputeTotal(-2899);">
                    <span className="material-symbols-outlined text-[18px]">delete_outline</span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-surface">Triple Strength Omega-3 Fish Oil</span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">Qty: 1 • ₹849</span>
                  </div>
                  <button className="text-error hover:opacity-75" data-onclick="this.parentElement.remove(); recomputeTotal(-849);">
                    <span className="material-symbols-outlined text-[18px]">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-space-md space-y-space-sm">
              <div className="p-3 bg-surface-container rounded-xl space-y-1.5">
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Standard Express Shipping</span>
                  <span className="text-secondary font-semibold">FREE</span>
                </div>
                <div className="flex justify-between font-title-md text-title-md text-primary font-bold">
                  <span>Payable Amount</span>
                  <span id="drawer-total-display">₹3,748</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2" data-onclick="simulateCheckout()">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Proceed to UPI / QR / COD Checkout</span>
              </button>
              <p className="text-center font-label-sm text-label-sm text-on-surface-variant">Instant WhatsApp billing dispatch supported via Muskaan (+91 74041 14816)</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none bg-primary text-on-primary px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2" id="toast">
          <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
          <span className="font-label-md text-label-md" id="toast-msg">Item added to formulation bag!</span>
        </div>
      </div>
    </>
  );
}
