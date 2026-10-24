# User Manual — Home-Service Demo Kit

> **Read this first.** This file is the single source of truth for where the project stands.
> It is updated before and after every working step, and before any pause.
> It never contains secrets, webhook URLs, API keys, or private phone numbers.

## Status board

| Field | Value |
| --- | --- |
| **Last updated** | 2026-10-24 |
| **Current phase** | Phase 1 complete — HVAC built, QA'd, and verified |
| **Status** | 🟢 Foundation complete |
| **Last commit** | `679e76d` (`feat: add config engine, niche content, and lead pipeline foundation`) |
| **Uncommitted** | Page/UI/assets/tests work after `679e76d` — ready to commit |
| **Next action** | Commit page/UI/assets/tests work; QA remaining four niches; build Make scenarios; deploy five builds |
| **Blocked on** | Client confirmation to back up/repurpose two Make scenarios; Gmail OAuth; Telegram token/chat ID |

### ✅ Completed

- Plan approved by the client.
- Project folder created and git repository initialised.
- Config + region engine for all five niches (US + India) with typed content.
- Design foundation: five palettes, four Google fonts, motion and accessibility base.
- Site shell: demo banner, header, mobile navigation, footer, mobile call bar.
- Custom SVG art for every niche (hero, before/after).
- Lead pipeline: zod contract, rate limiting, honeypot, time trap, demo/live mode, Make forwarding.
- All core pages: home, services + detail, areas + detail, pricing, reviews, about, gallery, contact, thank-you, privacy, custom 404, `/[page]` catch-all.
- Niche feature pages via typed block registry.
- Placeholder social image (`public/og.png`) and favicon (`public/favicon.ico`) generated.
- `npx tsc --noEmit` passes.
- `npm run build` succeeds (all routes).
- `npm run lint` — 0 errors, 2 pre-existing warnings.
- `npm test` — 24/24 vitest pass.
- `npx playwright test` — 33/33 pass (3 skipped intentionally: mobile form and mobile axe run once on desktop).
- Lead form end-to-end validated in demo mode at 375/768/1440.

### 🟡 In progress

- Uncommitted work needs to be committed (do not push without asking).

### ⬜ Up next

1. Commit page/UI/assets/tests work with a clear message.
2. QA remaining four niches at 375/768/1440.
3. Add curated free photos (only with licence + attribution).
4. Back up and repurpose existing Make scenarios (client approval needed).
5. Build Make Scenario 1 and Scenario 2.
6. Deploy five builds (one Vercel project per niche).
7. Run Lighthouse mobile targets (Performance ≥90, Accessibility ≥95, SEO ≥95).
8. Final QA.

### ⛔ Blocked / waiting on the client

- Approval to back up and repurpose the two existing Make scenarios (IDs `5086081` and `5248901`).
- Gmail connection authorisation.
- Telegram bot token and chat ID.
- `.env.local` missing `DEMO_PHONE_IN` locally (fallback fictional number used).

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
- [ ] Phase 4 — Plumbing demo (QA remaining niches)
- [ ] Phase 5 — Roofing demo (QA remaining niches)
- [ ] Phase 6 — Electrician demo (QA remaining niches)
- [ ] Phase 7 — Pest control demo (QA remaining niches)
- [ ] Phase 8 — Make scenarios and live end-to-end test
- [ ] Phase 9 — Final accessibility, performance and deployment QA

## 6. Make automation status

- Existing scenarios: **not yet backed up** (client approval pending).
- Scenario 1 (new lead): not built.
- Scenario 2 (daily follow-up): not built.
- Sheet: not created.
- Connections: Google Sheets/Drive available; Gmail and Telegram still needed.

## 7. Deployment status

Not deployed yet. One Vercel project per niche is planned, each with
`NEXT_PUBLIC_NICHE` set at build time.

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
