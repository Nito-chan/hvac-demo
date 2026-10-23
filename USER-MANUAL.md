# User Manual — Home-Service Demo Kit

> **Read this first.** This file is the single source of truth for where the project stands.
> It is updated before and after every working step, and before any pause.
> It never contains secrets, webhook URLs, API keys, or private phone numbers.

## Status board

| Field | Value |
| --- | --- |
| **Last updated** | 2026-10-23 |
| **Current phase** | Phase 1 — Foundation |
| **Status** | 🟡 In progress |
| **Last commit** | Foundation commit in progress |
| **Next action** | Finish the shared UI components, then build the HVAC page routes |
| **Blocked on** | Nothing technical |

### ✅ Completed

- Plan approved by the client.
- Project folder created and git repository initialised.
- Base scaffold files written and dependencies installed.
- Config + region engine for all five niches (US + India) with typed content.
- Design foundation: five palettes, four Google fonts, motion and accessibility base.
- Site shell: demo banner, header, mobile navigation, footer, mobile call bar.
- Custom SVG art for every niche (hero, before/after).
- Lead pipeline: zod contract, rate limiting, honeypot, time trap, demo/live mode, Make forwarding.
- `npx tsc --noEmit` passes.

### 🟡 In progress

- Phase 1: remaining shared UI components (cards, heroes, FAQ, gallery, CTA).
- Phase 2: lead pipeline is coded but not yet exercised end to end.

### ⬜ Up next

1. Shared UI components and the block renderer.
2. HVAC demo pages (US + India), then browser QA.
3. Remaining four niches.
4. Make scenarios, deployment, final QA.

### ⛔ Blocked / waiting on the client

- Approval to back up and repurpose the two existing Make scenarios.
- Gmail connection authorisation.
- Telegram bot token and chat ID.
- Google Sheet URL (optional; one can be created during Make setup).

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
npm run typecheck
npm run lint
npm run test
npm run build
npm run build:all   # builds all five niches with NEXT_PUBLIC_NICHE
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
- [ ] Phase 2 — Lead form, validation, rate limit, Make forwarding (coded, needs E2E test)
- [ ] Phase 3 — HVAC demo (US + India) and QA
- [ ] Phase 4 — Plumbing demo
- [ ] Phase 5 — Roofing demo
- [ ] Phase 6 — Electrician demo
- [ ] Phase 7 — Pest control demo
- [ ] Phase 8 — Make scenarios and live end-to-end test
- [ ] Phase 9 — Final accessibility, performance and deployment QA

## 6. Make automation status

- Existing scenarios: **not yet backed up**.
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

## 9. Session log / changelog

| Date | Entry |
| --- | --- |
| 2026-10-23 | Project created. Repository initialised. Base scaffold written. |
| 2026-10-23 | Config engine, five niche content sets, design foundation, app shell, SVG art and lead pipeline written. Typecheck passes. |

## 10. Handoff / resume here

If work stops mid-phase:

1. Read the status board at the top.
2. Run `git status` to see uncommitted work.
3. Read the **Next action** line and the latest changelog entry.
4. Start the dev server with `npm run dev` and open the route named there.

No secrets belong in this document. Ask the project owner for credentials through
a secure channel.
