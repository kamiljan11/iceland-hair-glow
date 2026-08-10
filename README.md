# Nordik Salon — Hair Salon Demo

**Status:** sales demo · **Built by** [Kamil Jan](https://kamiljan.com)

Demo site for a premium Reykjavík hair salon — Nordic minimalism, a clear service menu,
and booking as the single obvious next action.

## What this repo is — and is not

This is a **demonstration site**, not a live business. Nordik Salon is a fictional hair salon invented
to show a specific kind of prospective client what their own site could look and feel like,
before they commit to anything.

The commercial context: [Reykjawwwik](https://reykjawwwik.is) sells small Icelandic businesses
a designed, unique website. Sending a link beats describing a mockup, so each target trade
gets a finished demo it can recognise itself in — a salon owner sees a salon site, not a generic template.

No real customer data, no real bookings, no payment integration. Any names, prices, reviews
and photos are placeholders.

## What it shows

- Service and price list for cuts, colour and styling
- Stylist profiles
- Booking call-to-action kept in reach on every scroll position
- Gallery-led design, since this trade sells on visuals

## Stack

React + TypeScript · Vite · React Router · Tailwind CSS · Playwright for E2E · hosted on
Lovable. No backend — a demo has nothing to persist.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npx playwright test
```

## How security is handled

Nothing sensitive lives here by design: no backend, no database, no keys, no real personal
data. Even so, the repo runs the same gates as the production systems in this account — each
push triggers build, lint, typecheck, Playwright E2E, Semgrep static analysis and a Gitleaks
secret scan, and a pre-commit hook blocks credential-shaped strings. A demo repo is exactly
where standards quietly slip, so it does not get an exemption.

## Licence

Proprietary. Published for reference, not for reuse.
