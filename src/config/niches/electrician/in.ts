import { demoPhone, whatsappHref } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_IN", "+91 90000 00000");

export const electricianIn: RegionDetails = {
  region: "in",
  regionLabel: "India",
  currency: "INR",
  locale: "en-IN",
  timeZone: "Asia/Kolkata",
  business: {
    name: "VoltCare Electricians",
    shortName: "VoltCare",
    tagline: "Safe, tidy electrical work for Nagpur homes.",
    description:
      "A fictional Nagpur electrician built to demonstrate a calm, safety-first approach to repairs, MCB boards, fans, inverter wiring and EV chargers.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    whatsappHref: whatsappHref(phone),
    email: "hello@voltcare.example",
    city: "Nagpur",
    state: "Maharashtra",
    stateCode: "MH",
    country: "India",
    countryCode: "IN",
    hours: "Mon–Sun, 8am–8pm",
    emergencyHours: "Electrical safety triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Nagpur%2C+Maharashtra",
  },
  hero: {
    eyebrow: "Nagpur electrical care",
    title: "Safe wiring. Clear answers.",
    subtitle:
      "Repairs, MCB boards, fans, inverter wiring and EV chargers with a proper fault check and a price before work starts. This is an interactive demo.",
    primaryLabel: "Book an electrician",
    secondaryLabel: "See what we fix",
  },
  trustPoints: [
    "Clear fault explanations",
    "Safety-first isolation",
    "Neat, labelled work",
    "WhatsApp updates",
  ],
  areas: [
    {
      slug: "dharampeth",
      name: "Dharampeth",
      state: "Maharashtra",
      stateCode: "MH",
      featured: true,
      description:
        "Older Nagpur homes often have layered wiring and full boards. The demo assessment starts with the earthing, MCB protection and the circuit you actually use.",
      neighborhoods: ["Dharampeth", "Gokulpeth", "Shivaji Nagar"],
      postalCodes: ["440010", "440012"],
    },
    {
      slug: "sadar",
      name: "Sadar",
      state: "Maharashtra",
      stateCode: "MH",
      featured: true,
      description:
        "A busy central area with homes, shops and mixed-use buildings. Access and working hours are confirmed before the visit.",
      neighborhoods: ["Sadar", "Residency Road", "Civil Lines"],
      postalCodes: ["440001", "440012"],
    },
    {
      slug: "manish-nagar",
      name: "Manish Nagar",
      state: "Maharashtra",
      stateCode: "MH",
      description:
        "Newer residential pockets with growing electrical demand. The demo checks the board and supply capacity before adding a charger or heavy appliance.",
      neighborhoods: ["Manish Nagar", "Besa", "Pipla"],
      postalCodes: ["440037", "441108"],
    },
    {
      slug: "wardha-road",
      name: "Wardha Road",
      state: "Maharashtra",
      stateCode: "MH",
      description:
        "Apartments and independent homes along a long corridor. The office confirms the building, floor and parking before dispatch.",
      neighborhoods: ["Wardha Road", "Chhatrapati Nagar", "Ajni"],
      postalCodes: ["440015", "440025"],
    },
    {
      slug: "mankapur",
      name: "Mankapur",
      state: "Maharashtra",
      stateCode: "MH",
      description:
        "Family homes and rental properties. Fan installation, inverter wiring and safety checks are common demo requests.",
      neighborhoods: ["Mankapur", "Zingabai Takli", "Gorewada"],
      postalCodes: ["440030", "440013"],
    },
    {
      slug: "hudkeshwar",
      name: "Hudkeshwar",
      state: "Maharashtra",
      stateCode: "MH",
      description:
        "A growing eastern suburb with newer construction. The demo team checks the supply and earthing before recommending upgrades.",
      neighborhoods: ["Hudkeshwar", "Khadgaon", "Narendra Nagar"],
      postalCodes: ["440034", "440035"],
    },
  ],
  plans: [
    {
      name: "Single visit",
      price: "₹299",
      period: "one visit",
      description:
        "A diagnostic visit for one electrical issue, with a written repair quote before work.",
      features: [
        "One fault diagnosis",
        "Safety isolation check",
        "Written repair quote",
        "Basic load advice",
      ],
      cta: "Book a visit",
      note: "Demo price. Parts and major work are quoted separately.",
    },
    {
      name: "Home electrical care",
      price: "₹1,499",
      period: "per year",
      description:
        "An annual safety check with priority support for fans, switches and small repairs.",
      features: [
        "Annual safety check",
        "Priority WhatsApp support",
        "10% demo discount on repairs",
        "Fan and fixture inspection",
      ],
      highlighted: true,
      cta: "Choose home care",
      note: "Demo plan for one property.",
    },
    {
      name: "Panel & backup consult",
      price: "₹3,999",
      period: "from",
      description:
        "A planned MCB board, earthing and backup-wiring review with a written scope.",
      features: [
        "Load and circuit review",
        "MCB/RCD protection plan",
        "Inverter backup planning",
        "Written scope and outage plan",
      ],
      cta: "Request a consult",
      note: "Demo starting price. Final scope depends on the property.",
    },
  ],
  reviews: [
    {
      name: "Aarti K.",
      location: "Dharampeth, Nagpur",
      quote:
        "The switchboard was warm and we kept ignoring it. They found a loose connection, showed us the discoloured wire and fixed it properly.",
      service: "Electrical repair",
      date: "Sample review · 2026",
    },
    {
      name: "Nikhil D.",
      location: "Manish Nagar",
      quote:
        "They planned the inverter backup circuit around lights, fans and the router. No oversized system, no confusing sales talk.",
      service: "Inverter wiring",
      date: "Sample review · 2026",
    },
    {
      name: "Shreya M.",
      location: "Wardha Road",
      quote:
        "The fan installation was quick and the electrician checked the mounting properly before hanging it. The old fan had been wobbling for months.",
      service: "Fan installation",
      date: "Sample review · 2026",
    },
    {
      name: "Imran S.",
      location: "Sadar",
      quote:
        "Clear WhatsApp updates, a proper price and a clean work area. The shop was back open before the afternoon rush.",
      service: "Electrical repair",
      date: "Sample review · 2026",
    },
    {
      name: "Pallavi R.",
      location: "Hudkeshwar",
      quote:
        "They checked the earthing before installing the new MCB board and explained what each label meant. That was more detail than I expected.",
      service: "MCB board",
      date: "Sample review · 2026",
    },
    {
      name: "Sagar T.",
      location: "Mankapur",
      quote:
        "The safety check was practical and calm. A short list of priorities and no pressure to do everything at once.",
      service: "Safety inspection",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Electrical care you can see",
    intro:
      "VoltCare is a fictional Nagpur electrician created to show how a safety-first, clearly explained service visit can feel.",
    paragraphs: [
      "Electrical problems can be hidden behind a wall or a cover plate. The demo is built around showing the evidence, explaining the risk and quoting before work starts.",
      "The business, team, reviews and prices are sample content. The form and automation are real and testable.",
    ],
    values: [
      {
        icon: "shield",
        title: "Isolate and test",
        description:
          "Switch off, verify and test before touching any circuit.",
      },
      {
        icon: "message",
        title: "Explain the fault",
        description:
          "Show what failed and what it means for the rest of the installation.",
      },
      {
        icon: "clipboard",
        title: "Quote before work",
        description:
          "Confirm the scope, parts and outage window before starting.",
      },
      {
        icon: "check",
        title: "Label and hand over",
        description:
          "Leave a clear board and a simple explanation of what changed.",
      },
    ],
    team: [
      {
        name: "Pranav Deshmukh",
        role: "Senior electrician",
        initials: "PD",
        bio: "Sample profile. Fault-finding, MCB boards and homeowner walkthroughs.",
      },
      {
        name: "Ritika Joshi",
        role: "Installation electrician",
        initials: "RJ",
        bio: "Sample profile. Fans, lighting, inverter wiring and clean finish work.",
      },
      {
        name: "Sameer Khan",
        role: "Office coordinator",
        initials: "SK",
        bio: "Sample profile. Scheduling, WhatsApp updates and follow-up.",
      },
    ],
    credentials: [
      "Demo electrical contractor registration: DEMO-MH-EL-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Technician ID checks: sample process",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "electrician-in-1",
      title: "Crowded MCB board",
      description:
        "Illustrative board detail with unlabeled circuits, mixed wiring and no clear spare capacity.",
      tag: "MCB board",
      scene: { niche: "electrician", state: "before" },
    },
    {
      id: "electrician-in-2",
      title: "Labelled and protected",
      description:
        "A tidy board with separated circuits, RCD protection and labels that make sense.",
      tag: "MCB board",
      scene: { niche: "electrician", state: "after" },
    },
    {
      id: "electrician-in-3",
      title: "Backup circuit ready",
      description:
        "A dedicated inverter circuit with isolation and clear labeling for essential loads.",
      tag: "Inverter",
      scene: { niche: "electrician", state: "after" },
    },
    {
      id: "electrician-in-4",
      title: "Before the repair",
      description:
        "A discoloured switch plate and loose connection — the kind of issue a safety check looks for.",
      tag: "Safety",
      scene: { niche: "electrician", state: "before" },
    },
  ],
  emergencyNote:
    "If there is smoke, fire, a burning smell or someone has received an electric shock, keep people away and call emergency services. Do not touch wet or damaged electrical equipment.",
  legalNote:
    "Service registration and insurance details on this site are placeholders. Verify credentials directly before hiring any electrician. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Nagpur business · No real bookings or dispatches",
    disclaimer:
      "VoltCare Electricians is a fictional demo business. Names, team profiles, reviews, prices, registrations and service claims are sample content. The form is connected to a demonstration automation, not a real electrical office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "VoltCare Electricians — Nagpur Electrical Demo",
    description:
      "A fictional Nagpur electrician demo with repairs, MCB boards, inverter wiring, fan installation and a working lead-capture flow.",
  },
  schemaType: "Electrician",
  servicePricing: {
    "electrical-repair": { priceFrom: "₹299 visit", priceNote: "Parts quoted separately." },
    "panel-upgrade": { priceFrom: "From ₹3,999", priceNote: "Written scope after assessment." },
    "lighting-installation": { priceFrom: "From ₹199", priceNote: "Fixture cost separate." },
    "ev-charger": { priceFrom: "From ₹4,999", priceNote: "Depends on cable route and board." },
    "safety-inspection": { priceFrom: "₹499", priceNote: "Written priority list included." },
    "inverter-wiring": { priceFrom: "From ₹1,499", priceNote: "Inverter and battery separate." },
    "ceiling-fan": { priceFrom: "₹149", priceNote: "Fan and regulator separate." },
  },
};
