# DELSOLHVACLLC

Mobile-first Angular starter for local service businesses that need a polished marketing site with quote/contact flows.

This template was extracted from a production local-service website and keeps the reusable structure, styling patterns, and conversion-focused sections while remaining easy to customize for future businesses.

## What Is Included

- Mobile-first homepage with hero, trust, reviews, services, FAQ, and CTA sections
- About, Services, Contact, Quote, Success, Confirmation pages
- Reusable Google Reviews component with static/mock data and future Google Places support
- EmailJS-based contact and quote form patterns
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

## Customize For A New Business

Start by updating these areas:

- Business name, tagline, phone, email, and social links in `src/app/app.component.html`
- Homepage copy and metrics in `src/app/home/home.component.ts`
- Homepage layout and section markup in `src/app/home/home.component.html`
- Reviews in `src/app/google-reviews/google-reviews.service.ts`
- Services in `src/app/services/services.ts`
- Quote form service/property options in `src/app/quote/quote.ts`
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

## Recommended Workflow For New Sites

1. Clone this template into a new project folder.
2. Replace the branding, assets, services, and reviews.
3. Configure EmailJS templates and public keys.
4. Update quote/contact recipients.
5. Run a local build check.
6. Deploy to the new domain.

## Notes

- Do not commit real private API keys.
- For production Google Places usage, prefer a backend proxy so the API key is not exposed in client code.
- Keep social links and secondary links in the footer so they support trust without distracting from quote/contact conversion.
