# Del Sol HVAC LLC

Mobile-first Angular site for Del Sol HVAC LLC, focused on A/C installation, repair, preventive maintenance, and residential and commercial HVAC service.

The site includes service, contact, trust, and WhatsApp-first conversion sections tailored to Del Sol HVAC LLC.

## What Is Included

- Mobile-first homepage with hero, trust, services, FAQ, and CTA sections
- About, Services, Contact, Quote, Success, Confirmation pages
- Reusable Google Reviews component retained for future use
- EmailJS-based contact and quote form patterns retained for future use
- Dark/light theme toggle
- Shared responsive header and footer
- Social links with inline SVG icons
- Angular standalone components

## First-Time Setup

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Project References

Primary business references live in these areas:

- Business name, tagline, phone, and footer details in `src/app/app.component.html`
- Homepage copy and metrics in `src/app/home/home.component.ts`
- Homepage layout and section markup in `src/app/home/home.component.html`
- Future reviews in `src/app/google-reviews/google-reviews.service.ts`
- Services in `src/app/services/services.ts`
- Future quote form service/property options in `src/app/quote/quote.ts`
- EmailJS IDs in `src/app/contact/contact.component.ts` and `src/app/quote/quote.ts`
- Logo and hero assets in `src/assets/`
- Theme variables in `src/styles.css`

## Google Reviews

The reviews component works with static data by default.

To use Google Places later, update `src/environments/environment.ts`:

```ts
googleReviews: {
  mode: "google-places",
  placeId: "YOUR_GOOGLE_PLACE_ID",
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  googleBusinessUrl: "YOUR_PUBLIC_GOOGLE_MAPS_URL",
  mockDelayMs: 250,
}
```

Until live API setup is ready, keep `mode: "mock"` and edit the static review data.

## Build

```bash
npm run build
```

Production output is generated in `dist/`.

## Notes

- Do not commit real private API keys.
- For production Google Places usage, prefer a backend proxy so the API key is not exposed in client code.
- Add official social links only after the business profiles are ready.
