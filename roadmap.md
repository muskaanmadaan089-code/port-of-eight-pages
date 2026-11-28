# NutriMaster Wellness Hub — Roadmap

## Phase 1 — Port Stitch designs
- [x] Design system tokens, fonts, icons
- [x] Shared header (desktop + mobile menu) and footer
- [x] 8 pages: Home, Diet Plans, Therapeutic Diets, Store, NutriScan, Registration, Account, About

## Phase 2 — Functionality repair (brief 2: keep design exactly, make every feature work, no fake data)
- [x] Current request: fix header/menu alignment and right-side clipping without changing the design; verify mobile and desktop
- [ ] End-to-end browser audit, registration field persistence and Save & Next, selected-plan persistence, cart totals, database readback, mobile/desktop verification and truthful report
- [x] Cloud, auth (email + Google), profiles + admin role, tables with RLS
- [ ] Home: every link/CTA works
- [ ] Diet plans: plan selection + consultation booking saved
- [ ] Therapeutic diets: tabs, recipe filters, details, save-to-meal-plan, water calculator
- [ ] Store from database: filters, details, wishlist, cart qty/remove, totals, checkout (COD / UPI reference), order tracking
- [ ] Registration: multi-step form with validation + BMI, saved
- [ ] Auth: signup/login/logout, duplicate accounts, errors
- [ ] My Account: real profile, health stats, logs, appointments, orders, scans — no demo data
- [ ] About/Contact: contact form + UPI reference form saved
- [ ] NutriScan AI (photo + search) via Lovable AI, clear errors, history saved
- [ ] Admin dashboard: users, bookings, products, orders, enquiries
- [ ] Security scan, responsive check on mobile/tablet/desktop, browser test each flow

## Phase 3 — Payments
- [ ] Razorpay (test mode) — blocked on Razorpay Key ID + Key Secret from user
