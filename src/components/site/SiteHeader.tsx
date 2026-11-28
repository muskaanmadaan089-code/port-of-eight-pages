import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { NAV_ITEMS } from "./nav";

const linkBase =
  "px-2 2xl:px-2.5 py-space-xs rounded-full transition-colors whitespace-nowrap";
const linkIdle =
  "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container";
const linkActive =
  "bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_2px_8px_rgba(1,45,29,0.12)]";

export function SiteHeader() {
  const { user, isAdmin } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  const desktopNavVisibility = isAdmin ? "min-[1900px]:flex" : "xl:flex";
  const compactMenuVisibility = isAdmin ? "min-[1900px]:hidden" : "xl:hidden";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] min-[1800px]:max-w-[1840px] mx-auto px-margin-sm md:px-margin-md xl:px-6 min-[1800px]:px-margin-md flex items-center justify-between gap-space-xs">
        <div className="flex min-w-0 shrink-0 items-center gap-space-lg">
          <Link to="/" className="flex items-center gap-space-sm group">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-[24px]">spa</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none">NutriMaster</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal leading-tight mt-0.5">Wellness Hub</span>
            </div>
          </Link>
          <div className="hidden min-[1800px]:block h-6 w-[1px] bg-surface-variant" />
          <p className="hidden min-[1800px]:block font-label-sm text-label-sm text-on-surface-variant max-w-[200px] leading-tight">Your Health, Your Nutrition, Your Transformation</p>
        </div>
        <nav className={`hidden ${desktopNavVisibility} min-w-0 items-center gap-0.5 bg-surface-container-low px-space-xs py-space-xs rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]`} aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={linkBase}
              activeProps={{ className: linkActive, "aria-current": "page" }}
              inactiveProps={{ className: linkIdle }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-space-sm md:gap-space-md xl:gap-space-sm min-[1800px]:gap-space-md">
          <Link to="/nutriscan" className={`hidden md:inline-flex ${isAdmin ? "" : "xl:max-[1799px]:hidden"} items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wide whitespace-nowrap`}>
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            NutriScan AI
          </Link>
          <Link
            to="/diet-plans"
            hash="booking-section"
            className="hidden md:inline-flex items-center justify-center px-space-lg xl:px-space-md min-[1800px]:px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_16px_rgba(27,67,50,0.18)] hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Book Consultation
          </Link>
          {isAdmin && (
            <Link to="/admin" className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm" title="Admin dashboard">
              <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              <span>Admin</span>
            </Link>
          )}
          <Link to={user ? "/account" : "/auth"} className="shrink-0 transition-transform hover:scale-105" aria-label={user ? "My account" : "Sign in"}>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[18px]">{user ? "person" : "login"}</span>
            </div>
          </Link>
          <button
            type="button"
            className={`${compactMenuVisibility} w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className={`${compactMenuVisibility} border-t border-surface-variant bg-surface-container-lowest shadow-float animate-fade`}>
          <nav className="max-w-[1320px] mx-auto px-margin-sm md:px-margin-md py-space-md grid grid-cols-1 sm:grid-cols-2 gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-center gap-3 px-space-md py-3 rounded-xl font-label-lg text-label-lg"
                activeProps={{ className: "bg-primary-container text-on-primary" }}
                inactiveProps={{ className: "text-on-surface hover:bg-surface-container" }}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <Link to="/admin" className="flex items-center gap-3 px-space-md py-3 rounded-xl font-label-lg text-label-lg text-on-surface hover:bg-surface-container">
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                Admin Dashboard
              </Link>
            )}
            <Link to="/diet-plans" hash="booking-section" className="sm:col-span-2 mt-2 inline-flex items-center justify-center px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
