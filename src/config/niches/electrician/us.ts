import { demoPhone } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_US", "(515) 555-0124");

export const electricianUs: RegionDetails = {
  region: "us",
  regionLabel: "United States",
  currency: "USD",
  locale: "en-US",
  timeZone: "America/Chicago",
  business: {
    name: "BrightWire Electric",
    shortName: "BrightWire",
    tagline: "Safe, tidy electrical work for Des Moines homes.",
    description:
      "A fictional Des Moines electrician built to demonstrate a calm, safety-first approach to repairs, panels, lighting and EV chargers.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    email: "hello@brightwire.example",
    city: "Des Moines",
    state: "Iowa",
    stateCode: "IA",
    country: "United States",
    countryCode: "US",
    hours: "Mon–Sat, 7am–7pm",
    emergencyHours: "Electrical safety triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Des+Moines%2C+IA",
  },
  hero: {
    eyebrow: "Des Moines electrical",
    title: "Power that behaves.",
    subtitle:
      "Fault-finding, panel work and clean installations with a clear scope and a safety-first handover. This is a fully interactive demo site.",
    primaryLabel: "Book an electrician",
    secondaryLabel: "See electrical services",
  },
  trustPoints: [
    "Clear fault explanations",
    "Safety-first isolation",
    "Neat, labelled work",
    "Written scope before work",
  ],
  areas: [
    {
      slug: "des-moines",
      name: "Des Moines",
      state: "Iowa",
      stateCode: "IA",
      featured: true,
      description:
        "Older homes near downtown and newer builds on the edges have very different electrical foundations. The demo assessment starts with the board, earthing and the circuit you actually use.",
      neighborhoods: ["Sherman Hill", "Drake", "East Village", "Beaverdale"],
      postalCodes: ["50309", "50311", "50314", "50316"],
    },
    {
      slug: "west-des-moines",
      name: "West Des Moines",
      state: "Iowa",
      stateCode: "IA",
      featured: true,
      description:
        "Growing families and newer appliances often mean panel capacity questions. The demo checks load and spare ways before recommending an upgrade.",
      neighborhoods: ["Valley Junction", "Jordan Creek", "Clive border"],
      postalCodes: ["50265", "50266", "50325"],
    },
    {
      slug: "urbandale",
      name: "Urbandale",
      state: "Iowa",
      stateCode: "IA",
      description:
        "A mix of established and newer homes. Lighting updates, EV chargers and panel labelling are common demo requests.",
      neighborhoods: ["Downtown Urbandale", "Northpark", "Waterford"],
      postalCodes: ["50322", "50323"],
    },
    {
      slug: "ankeny",
      name: "Ankeny",
      state: "Iowa",
      stateCode: "IA",
      description:
        "New construction and first-time upgrades. The demo team plans outages carefully and explains what the new circuit will and will not support.",
      neighborhoods: ["Uptown Ankeny", "Prairie Trail", "Saylorville"],
      postalCodes: ["50021", "50023"],
    },
    {
      slug: "johnston",
      name: "Johnston",
      state: "Iowa",
      stateCode: "IA",
      description:
        "Family homes with growing electrical demand. The demo assessment looks at panel capacity before adding a charger or a major appliance.",
      neighborhoods: ["Johnston", "Beaver Creek", "Camp Dodge"],
      postalCodes: ["50131"],
    },
    {
      slug: "clive",
      name: "Clive",
      state: "Iowa",
      stateCode: "IA",
      description:
        "A central metro location with a mix of housing styles. The office confirms access and parking before the visit.",
      neighborhoods: ["Clive", "Greenbelt", "University Ave"],
      postalCodes: ["50325"],
    },
  ],
  plans: [
    {
      name: "Safety check",
      price: "$89",
      period: "one visit",
      description:
        "A visual electrical safety inspection with a prioritized written summary.",
      features: [
        "Panel and earthing check",
        "Outlet and switch inspection",
        "Visible wiring review",
        "Priority list and next steps",
      ],
      cta: "Book a safety check",
      note: "Demo price. Not a regulated compliance certificate.",
    },
    {
      name: "Home Electric Care",
      price: "$16",
      period: "per month",
      description:
        "An annual check and priority booking for the small electrical issues that should not wait.",
      features: [
        "Annual safety check",
        "Priority booking window",
        "10% demo discount on repairs",
        "Fixture and load review",
      ],
      highlighted: true,
      cta: "Join Home Care",
      note: "Demo plan. Cancel before the next billing period.",
    },
    {
      name: "Panel upgrade consult",
      price: "$0",
      period: "demo consult",
      description:
        "A no-obligation demo assessment and written scope for a panel or service upgrade.",
      features: [
        "Load and circuit review",
        "Protection recommendations",
        "Outage plan",
        "Written scope",
      ],
      cta: "Request a consult",
      note: "Demo consultation only. No real work is booked.",
    },
  ],
  reviews: [
    {
      name: "Kara B.",
      location: "Sherman Hill, Des Moines",
      quote:
        "The outlet had been getting warm for weeks. They found a loose connection, explained the risk and fixed it properly instead of just replacing the faceplate.",
      service: "Electrical repair",
      date: "Sample review · 2026",
    },
    {
      name: "Ivan P.",
      location: "Ankeny",
      quote:
        "They planned the panel upgrade around our work-from-home schedule and labelled every circuit. The handover was genuinely useful.",
      service: "Panel upgrade",
      date: "Sample review · 2026",
    },
    {
      name: "Sophie L.",
      location: "West Des Moines",
      quote:
        "The EV charger install was neat, the cable route was better than I expected and they explained the charging limits clearly.",
      service: "EV charger",
      date: "Sample review · 2026",
    },
    {
      name: "Grant M.",
      location: "Urbandale",
      quote:
        "They told me the flickering was a dimmer compatibility issue, not a reason to rewire the house. Honest and simple.",
      service: "Lighting",
      date: "Sample review · 2026",
    },
    {
      name: "Dana C.",
      location: "Johnston",
      quote:
        "The safety check was calm and practical. A short list of things to fix, nothing dramatic, no pressure.",
      service: "Safety inspection",
      date: "Sample review · 2026",
    },
    {
      name: "Owen R.",
      location: "Clive",
      quote:
        "Clear arrival window, clean work area and a proper test before they left. Exactly what I wanted.",
      service: "Electrical repair",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Electrical work with visible care",
    intro:
      "BrightWire is a fictional Des Moines electrician created to show how a safety-first, clearly explained service visit can feel.",
    paragraphs: [
      "Electrical problems can be invisible, which makes trust matter. The demo is built around showing the evidence, explaining the risk and quoting before work begins.",
      "The business, team, reviews and prices are fictional. The forms and automation are real and testable.",
    ],
    values: [
      {
        icon: "shield",
        title: "Safety first",
        description:
          "Isolate circuits properly, test before touching and never skip the protective checks.",
      },
      {
        icon: "message",
        title: "Explain the fault",
        description:
          "Show what failed and why it matters in plain language.",
      },
      {
        icon: "clipboard",
        title: "Scope before work",
        description:
          "Agree the work, the outage window and the price before starting.",
      },
      {
        icon: "check",
        title: "Label and test",
        description:
          "Leave a clear board, test the circuit and hand over the result.",
      },
    ],
    team: [
      {
        name: "Miles Foster",
        role: "Master electrician",
        initials: "MF",
        bio: "Sample profile. Fault-finding, panel work and homeowner walkthroughs.",
      },
      {
        name: "Talia Brooks",
        role: "Installation electrician",
        initials: "TB",
        bio: "Sample profile. Lighting, EV chargers and clean finish work.",
      },
      {
        name: "Reed Olson",
        role: "Office coordinator",
        initials: "RO",
        bio: "Sample profile. Scheduling, outage planning and follow-up.",
      },
    ],
    credentials: [
      "State electrical licence: DEMO-IA-EL-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "EV charger certification: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "electrician-us-1",
      title: "Overloaded circuit",
      description:
        "Illustrative panel detail showing a warm breaker and an unlabeled, crowded board.",
      tag: "Panel",
      scene: { niche: "electrician", state: "before" },
    },
    {
      id: "electrician-us-2",
      title: "Clear, labelled board",
      description:
        "A tidy panel with separated circuits, protection and labels that make sense.",
      tag: "Panel upgrade",
      scene: { niche: "electrician", state: "after" },
    },
    {
      id: "electrician-us-3",
      title: "Charger ready",
      description:
        "A dedicated EV charging point with a protected circuit and a clean cable route.",
      tag: "EV charger",
      scene: { niche: "electrician", state: "after" },
    },
    {
      id: "electrician-us-4",
      title: "Before the repair",
      description:
        "A loose connection and a discoloured outlet — the kind of issue a safety check looks for.",
      tag: "Safety",
      scene: { niche: "electrician", state: "before" },
    },
  ],
  emergencyNote:
    "If there is smoke, fire, a burning smell or someone has received an electric shock, keep people away and call emergency services. Do not touch wet or damaged electrical equipment.",
  legalNote:
    "Licence and insurance details on this site are placeholders. Verify credentials directly before hiring any electrician. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Des Moines business · No real bookings or dispatches",
    disclaimer:
      "BrightWire Electric is a fictional demo business. Names, team profiles, reviews, prices, licence details and service claims are sample content. The form is connected to a demonstration automation, not a real electrical office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "BrightWire Electric — Des Moines Electrical Demo",
    description:
      "A fictional Des Moines electrician demo with repairs, panel upgrades, EV chargers, safety checks and a working lead-capture flow.",
  },
  schemaType: "Electrician",
  servicePricing: {
    "electrical-repair": { priceFrom: "$89 diagnostic", priceNote: "Credited toward approved repair." },
    "panel-upgrade": { priceFrom: "Custom quote", priceNote: "Written scope after assessment." },
    "lighting-installation": { priceFrom: "From $129", priceNote: "Fixture cost separate." },
    "ev-charger": { priceFrom: "From $649", priceNote: "Depends on cable route and panel." },
    "safety-inspection": { priceFrom: "$89", priceNote: "Written priority list included." },
  },
};
