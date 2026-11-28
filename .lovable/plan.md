# Header alignment and clipping fix

## What is wrong

At the screenshot's desktop width, the brand area, eight navigation links, NutriScan button, consultation button and account button need more horizontal space than the header provides. The account button is pushed against the right edge and clipped.

The preview also has an unrelated Registration page syntax error that currently prevents a fresh build. I will make only the minimal text-markup correction needed to restore the preview; I will not change registration behavior or design as part of this task.

## Plan of action

1. **Protect the existing design**
   - Limit the menu work to the shared header and its responsive spacing/breakpoints.
   - Keep all eight menu items, the active-page styling, NutriScan, Book Consultation, account access, admin access and the mobile menu.
   - Do not change page content, colors, fonts, footer, forms or database logic.

2. **Make the header fit each screen**
   - Give the brand, navigation and action areas explicit shrinking rules so they cannot force the right-side controls off-screen.
   - Show the full horizontal navigation only when there is enough room for every link and action.
   - Use the existing hamburger menu at narrower desktop/tablet widths instead of compressing or clipping links.
   - Show the longer brand tagline only on extra-wide screens where it fits safely.
   - Avoid `overflow-hidden` or horizontal scrolling as a cosmetic cover-up.

3. **Verify before calling it fixed**
   - Check the production build and existing automated tests.
   - Browser-test the header at mobile, tablet, the current preview width, the screenshot width and wide desktop sizes.
   - Confirm there is no horizontal page overflow and the consultation/account controls remain fully visible.
   - Open the compact menu, follow a link, close it, and confirm active-page highlighting still works.
   - Check both signed-out and signed-in/admin header variants where available.
   - Compare screenshots before and after to confirm the visual design remains unchanged apart from the alignment fix.

## Technical details

- Primary file: `src/components/site/SiteHeader.tsx`.
- Shared menu items remain in `src/components/site/nav.ts` unchanged.
- Prerequisite only: correct the invalid literal `>` characters reported in `src/components/pages/RegistrationPage.tsx` so the preview can build.
- Validation: existing Vitest suite plus Playwright screenshots and measurements at approximately 390, 768, 889, 1280, 1356, 1440, 1536 and 1920 pixels wide.
- I will report the exact sizes and interactions tested and any remaining limitation separately.
