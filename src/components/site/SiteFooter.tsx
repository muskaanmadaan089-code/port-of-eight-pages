import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-space-xl shadow-[0_-1px_12px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-lg pb-space-xl">
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">spa</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary">NutriMaster Wellness Hub</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Your Health, Your Nutrition, Your Transformation. Clinical-grade nutritional programs, preventive therapeutic protocols, and certified clean supplementation for mindful metabolic vitality.</p>
            <div className="pt-space-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                Certified Clinical Nutritionists
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-space-sm">
            <h3 className="font-title-md text-title-md text-primary tracking-tight">Hub Directory</h3>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home Overview</Link>
              </li>
              <li>
                <Link to="/diet-plans" className="hover:text-primary transition-colors">Tailored Diet Plans</Link>
              </li>
              <li>
                <Link to="/therapeutic-diets" className="hover:text-primary transition-colors">Therapeutic Clinical Diets</Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-primary transition-colors">Verified Supplement Store</Link>
              </li>
              <li>
                <Link to="/nutriscan" className="hover:text-primary transition-colors">NutriScan AI Analysis</Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-primary transition-colors">Patient Registration</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-primary transition-colors">My Patient Portal & Plan</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us & Inquiries</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-space-sm">
            <h3 className="font-title-md text-title-md text-primary tracking-tight">Direct Consultations</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Connect instantly with lead dietary specialists via WhatsApp for intake triage and ongoing support:</p>
            <div className="space-y-2.5 pt-space-xs">
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mr-2">
                  <span className="material-symbols-outlined text-[16px]">support_agent</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Muskaan</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    WhatsApp:{" "}
                    <a className="font-semibold text-secondary hover:underline" href="https://wa.me/917404114816" target="_blank" rel="noopener noreferrer">+91 74041 14816</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mr-2">
                  <span className="material-symbols-outlined text-[16px]">support_agent</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Nishan Mann</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    WhatsApp:{" "}
                    <a className="font-semibold text-secondary hover:underline" href="https://wa.me/918168147733" target="_blank" rel="noopener noreferrer">+91 81681 47733</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-space-sm">
            <h3 className="font-title-md text-title-md text-primary tracking-tight">Payment Modes</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Safe and instantaneous domestic checkout:</p>
            <div className="flex flex-wrap gap-1.5 pt-space-xs">
              <span className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm">UPI Instant</span>
              <span className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm">QR Code</span>
              <span className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm">COD (Cash on Delivery)</span>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant pt-2">Supported across pan-India clinics and dispatch network.</p>
          </div>
        </div>
        <div className="pt-space-lg bg-surface-container rounded-2xl p-space-md mb-space-lg">
          <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed text-justify">
            <strong className="text-on-surface font-semibold">Medical Disclaimer:</strong>
            {" "}The nutritional information, meal recommendations, and supplement catalog provided by NutriMaster Wellness Hub are formulated for lifestyle enrichment and supportive physiological care. They do not substitute for formal medical evaluation, surgical intervention, or prescription medications. Always consult your primary physician prior to initiating novel clinical diets or supplement protocols.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 NutriMaster Wellness Hub. All rights reserved.</p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm text-on-surface-variant">
            <Link to="/about" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-primary transition-colors">Terms of Clinical Service</Link>
            <Link to="/about" className="hover:text-primary transition-colors">Support Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
