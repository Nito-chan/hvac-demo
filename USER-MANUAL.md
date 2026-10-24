# User Manual — Home-Service Demo Kit

> **Read this first.** This file is the single source of truth for where the project stands.
> It is updated before and after every working step, and before any pause.
> It never contains secrets, webhook URLs, API keys, or private phone numbers.

## Status board

| Field | Value |
| --- | --- |
| **Last updated** | 2026-10-24 |
| **Current phase** | Phase 1 complete — all five niches deployed to Vercel |
| **Status** | 🟢 Foundation complete |
| **Last commit** | `d07c65d` (`feat: complete HVAC demo with full page suite, assets, and QA`) |
| **Uncommitted** | `.env.local` with `DEMO_PHONE_IN` (not committed — gitignored); USER-MANUAL.md updated with deployment URLs |
| **Next action** | Commit USER-MANUAL.md deployment updates; build Make scenarios; run Lighthouse; final QA |
| **Blocked on** | Gmail OAuth authorisation; Telegram bot token and chat ID for Make scenarios |

### ✅ Completed

- All five niches (HVAC, plumbing, roofing, electrician, pest) build successfully with `npm run build:all`.
- `DEMO_PHONE_IN=9244760460` added to `.env.local` (not committed).
- Client confirmed existing Make scenarios may be repurposed.
- All config data verified: business names, cities, regions correct for all 10 variants.

### 🟡 In progress

- Deploying five Vercel builds (one per niche with `NEXT_PUBLIC_NICHE`).

### ⬜ Up next

1. Add curated free photos (only with licence + attribution).
2. Build Make Scenario 1 and Scenario 2 (needs Gmail OAuth + Telegram credentials).
3. Run Lighthouse mobile targets (Performance ≥90, Accessibility ≥95, SEO ≥95).
4. Final QA.

### ⛔ Blocked / waiting on the client

- Gmail connection authorisation for Make.
- Telegram bot token and chat ID for Make.
- `DEMO_WEBHOOK_KEY` and `MAKE_WEBHOOK_URL` for Vercel env vars (live lead mode).

> Nothing above blocks local development. The lead form runs in demo mode until
> `MAKE_WEBHOOK_URL` and `DEMO_WEBHOOK_KEY` are present.

---

## 1. What this project is

A config-driven Next.js demo kit for fictional home-service businesses in the
United States and India. One codebase produces five niche-specific sites:

| Niche | United States | India |
| --- | --- | --- |
| HVAC | NorthPeak Heating & Air (Kansas City) | CoolNest AC Care (Indore) |
| Plumbing | BlueLine Plumbing & Drain (Omaha) | AquaFix Plumbing Services (Bhopal) |
| Roofing | Ridgeback Roofing Co. (Tulsa) | SafeTop Roofing & Waterproofing (Jaipur) |
| Electrician | BrightWire Electric (Des Moines) | VoltCare Electricians (Nagpur) |
| Pest control | ClearNest Pest Control (Wichita) | SafeHome Pest Solutions (Lucknow) |

The active niche is selected at build time with `NEXT_PUBLIC_NICHE`. The region is
selected at request time with `?region=in` (US is the default), so a single
deployment can show both regional variants.

## 2. Safety rules for these demos

- Every business, person, address, licence and review is fictional.
- Reviews are labelled as sample content. No aggregate rating is published.
- A dismissible demo banner and a footer disclaimer are always visible.
- All routes send `noindex, nofollow`.
- No paid APIs, fonts, images or services.
- Secrets live in `.env.local` or Vercel environment variables only.

## 3. How to run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Add `?region=in` for the India variant.

Useful commands:

```bash
npm run typecheck   # npx tsc --noEmit
npm run lint
npm run test        # vitest
npm run build
npm run build:all   # builds all five niches with NEXT_PUBLIC_NICHE
npx playwright test # Playwright E2E
```

## 4. Environment variables

Copy `.env.example` to `.env.local` and fill in values locally. Never commit
`.env.local`.

| Variable | Purpose | Required |
| --- | --- | --- |
| `DEMO_MODE` | `demo` disables outbound Make calls | No (default `demo`) |
| `MAKE_WEBHOOK_URL` | Make Scenario 1 custom webhook | For live leads |
| `DEMO_WEBHOOK_KEY` | Shared secret sent as `x-demo-key` | For live leads |
| `DEMO_PHONE_IN` | Public India demo phone override | No |
| `DEMO_PHONE_US` | Public US demo phone override | No |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for metadata | No |

## 5. Phase checklist

- [x] Phase 0 — Scaffold and toolchain
- [x] Phase 1 — Config, region switching, design tokens, app shell
- [x] Phase 2 — Lead form, validation, rate limit, Make forwarding (coded + E2E tested)
- [x] Phase 3 — HVAC demo (US + India) and QA
- [x] Phase 4 — Plumbing demo (builds successfully)
- [x] Phase 5 — Roofing demo (builds successfully)
- [x] Phase 6 — Electrician demo (builds successfully)
- [x] Phase 7 — Pest control demo (builds successfully)
- [ ] Phase 8 — Make scenarios and live end-to-end test
- [ ] Phase 9 — Final accessibility, performance and deployment QA

## 6. Make automation status

- Existing scenarios: **approved for repurposing** (IDs `5086081` and `5248901`).
- Scenario 1 (new lead): not built — needs Gmail OAuth + Telegram.
- Scenario 2 (daily follow-up): not built — needs Gmail OAuth + Telegram.
- Sheet: not created.
- Connections: Google Sheets/Drive available; Gmail and Telegram still needed.

## 7. Deployment status

All five niches deployed to Vercel (one project per niche, each with
`NEXT_PUBLIC_NICHE` set at build time). Vercel auth confirmed (user `nito-chan`, hobby plan).

| Niche | Project | Production URL | NEXT_PUBLIC_NICHE |
| --- | --- | --- | --- |
| HVAC | home-service-demos | https://home-service-demos-phi.vercel.app | hvac |
| Plumbing | plumbing-demo | https://plumbing-demo-sooty.vercel.app | plumbing |
| Roofing | roofing-demo | https://roofing-demo-steel.vercel.app | roofing |
| Electrician | electrician-demo | https://electrician-demo-teal.vercel.app | electrician |
| Pest | pest-demo | https://pest-demo-five.vercel.app | pest |

Note: Deployments have `vercel_authentication` protection enabled. To disable, run
`vercel domains inspect <domain>` or toggle in the Vercel project dashboard.

## 8. Decisions made

- Next.js App Router with server components; region read from async `searchParams`.
- No middleware/proxy. Every internal link preserves the `region` query.
- Niche config is split into `us`, `in`, and shared files.
- Design tokens are CSS variables scoped by `[data-niche]`.
- Core pages have dedicated routes; niche feature pages render through a typed block registry.
- US numbers use the reserved fictional `555-01xx` range.
- The India demo phone comes from an environment variable.
- Form-first section: heading above, form first in DOM and on mobile.
- `BeforeAfter` renders after as base, before clipped from the left, fixed badges.
- OG/favicon are niche-neutral placeholders; per-niche images can replace them later.
- `ProcessSteps` has a `columns` prop; home uses 2 columns.
- Header hides region switcher below `sm` and exposes it inside mobile nav; logo shows full business name at 375.

## 9. Session log / changelog

| Date | Entry |
| --- | --- |
| 2026-10-23 | Project created. Repository initialised. Base scaffold written. |
| 2026-10-23 | Config engine, five niche content sets, design foundation, app shell, SVG art and lead pipeline written. Typecheck passes. |
| 2026-10-24 | All core pages built, assets generated, build-all script added, vitest + Playwright tests added, form-first section restructured, before/after badges fixed, region aria-labels improved, footer colors fixed, accessibility contrast fixed, all QA complete at 375/768/1440. |

## 10. Handoff / resume here

If work stops mid-phase:

1. Read the status board at the top.
2. Run `git status` to see uncommitted work.
3. Read the **Next action** line and the latest changelog entry.
4. Start the dev server with `npm run dev` and open the route named there.
5. Run `npm run build`, `npm run lint`, `npm test`, and `npx playwright test` to verify.

No secrets belong in this document. Ask the project owner for credentials through
a secure channel.
