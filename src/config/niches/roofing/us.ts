import { demoPhone } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_US", "(918) 555-0136");

export const roofingUs: RegionDetails = {
  region: "us",
  regionLabel: "United States",
  currency: "USD",
  locale: "en-US",
  timeZone: "America/Chicago",
  business: {
    name: "Ridgeback Roofing Co.",
    shortName: "Ridgeback",
    tagline: "Roofing and storm repair for Tulsa homes.",
    description:
      "A fictional Tulsa roofing company built to demonstrate a documented, no-pressure approach to inspections, repairs and replacements.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    email: "hello@ridgeback.example",
    city: "Tulsa",
    state: "Oklahoma",
    stateCode: "OK",
    country: "United States",
    countryCode: "US",
    hours: "Mon–Sat, 7am–7pm",
    emergencyHours: "Storm damage triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Tulsa%2C+OK",
  },
  hero: {
    eyebrow: "Tulsa roofing + storm repair",
    title: "A roof you can stop worrying about.",
    subtitle:
      "Documented inspections, honest repair advice and a clear scope before work starts. This is a fully interactive demo site.",
    primaryLabel: "Book an inspection",
    secondaryLabel: "See roofing services",
  },
  trustPoints: [
    "Photo-documented inspections",
    "Repair-first advice",
    "Written scope before work",
    "Clean, magnet-swept site",
  ],
  areas: [
    {
      slug: "tulsa",
      name: "Tulsa",
      state: "Oklahoma",
      stateCode: "OK",
      featured: true,
      description:
        "Tulsa's older neighborhoods and mature tree canopy create a mix of shingle wear, flashing leaks and storm-related damage. The demo inspection starts with the water path, not a sales pitch.",
      neighborhoods: ["Brookside", "Maple Ridge", "Midtown", "East Tulsa"],
      postalCodes: ["74105", "74114", "74104", "74135"],
    },
    {
      slug: "broken-arrow",
      name: "Broken Arrow",
      state: "Oklahoma",
      stateCode: "OK",
      featured: true,
      description:
        "Newer subdivisions and growing families. The demo team checks ventilation, flashing details and the condition of builder-grade materials.",
      neighborhoods: ["Rose District", "Forest Ridge", "Aspen Park"],
      postalCodes: ["74012", "74014", "74011"],
    },
    {
      slug: "jenks",
      name: "Jenks",
      state: "Oklahoma",
      stateCode: "OK",
      description:
        "Hail and wind events are a recurring concern. The inspection documents impact damage and separates cosmetic marks from functional problems.",
      neighborhoods: ["Downtown Jenks", "South Tulsa", "Winchester"],
      postalCodes: ["74037", "74008"],
    },
    {
      slug: "bixby",
      name: "Bixby",
      state: "Oklahoma",
      stateCode: "OK",
      description:
        "Larger lots and new construction often need drainage and gutter checks as much as roof surface work.",
      neighborhoods: ["Downtown Bixby", "Bentley", "South Bixby"],
      postalCodes: ["74008", "74010"],
    },
    {
      slug: "owasso",
      name: "Owasso",
      state: "Oklahoma",
      stateCode: "OK",
      description:
        "A growing north-Tulsa market with a mix of new roofs and first-time storm claims. The demo explains the documentation without insurance jargon.",
      neighborhoods: ["Downtown Owasso", "Stone Canyon", "Highlands"],
      postalCodes: ["74055", "74019"],
    },
    {
      slug: "sand-springs",
      name: "Sand Springs",
      state: "Oklahoma",
      stateCode: "OK",
      description:
        "Older homes near the river can have layered roofing and previous repairs. The inspection looks at the full assembly, not just the top layer.",
      neighborhoods: ["Downtown", "Prattville", "Keystone"],
      postalCodes: ["74063", "74036"],
    },
  ],
  plans: [
    {
      name: "Roof check",
      price: "$149",
      period: "one inspection",
      description:
        "A documented roof and drainage inspection with photos and a prioritized findings report.",
      features: [
        "Roof surface and flashing check",
        "Gutter and drainage review",
        "Photo record",
        "Repair priorities and next steps",
      ],
      cta: "Book a roof check",
      note: "Demo price. Credited toward approved repair work.",
    },
    {
      name: "Storm Shield",
      price: "$29",
      period: "per month",
      description:
        "An annual inspection plus priority storm-response booking and a documented maintenance history.",
      features: [
        "Annual roof inspection",
        "Priority storm-response booking",
        "Gutter check",
        "Photo history",
      ],
      highlighted: true,
      cta: "Join Storm Shield",
      note: "Demo plan. Cancel before the next billing period.",
    },
    {
      name: "Replacement consult",
      price: "$0",
      period: "demo consult",
      description:
        "A no-obligation demo consultation and written scope for a planned roof replacement.",
      features: [
        "On-site condition review",
        "Material options conversation",
        "Written scope and price",
        "Questions checklist",
      ],
      cta: "Request a consult",
      note: "Demo consultation only. No real work is booked.",
    },
  ],
  reviews: [
    {
      name: "Dana W.",
      location: "Brookside, Tulsa",
      quote:
        "They climbed up, took photos and showed me the actual flashing problem. The repair quote was smaller than the replacement quote I had been given elsewhere.",
      service: "Roof repair",
      date: "Sample review · 2026",
    },
    {
      name: "Jared L.",
      location: "Broken Arrow",
      quote:
        "After the hail, they documented everything clearly and explained what was cosmetic versus what actually needed repair. No fear tactics.",
      service: "Storm damage",
      date: "Sample review · 2026",
    },
    {
      name: "Mona S.",
      location: "Jenks",
      quote:
        "The crew protected the garden, swept for nails twice and walked me around the finished work. That was the difference.",
      service: "Roof replacement",
      date: "Sample review · 2026",
    },
    {
      name: "Chris A.",
      location: "Owasso",
      quote:
        "The inspection report was clear enough to share with my insurer without rewriting it. That saved a lot of back-and-forth.",
      service: "Roof inspection",
      date: "Sample review · 2026",
    },
    {
      name: "Paula G.",
      location: "Bixby",
      quote:
        "They found the downspout was dumping water near the foundation. A simple fix and a clear explanation.",
      service: "Gutters",
      date: "Sample review · 2026",
    },
    {
      name: "Nate R.",
      location: "Sand Springs",
      quote:
        "The roof was layered from an old repair. They explained why another patch would not last and gave me options without pressure.",
      service: "Roof replacement",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Roofing advice you can actually check",
    intro:
      "Ridgeback is a fictional Tulsa roofing company created to show how a documented, repair-first process can replace guesswork and pressure.",
    paragraphs: [
      "Roofing is expensive and hard to see from the ground. The demo is built around photos, plain-language findings and a scope that a homeowner can compare with another quote.",
      "The business, team, reviews and prices are fictional. The forms and automation are real and testable.",
    ],
    values: [
      {
        icon: "search",
        title: "Show the evidence",
        description:
          "Photos, measurements and a clear description of the water path, not just a verdict.",
      },
      {
        icon: "wrench",
        title: "Repair first",
        description:
          "If a targeted repair is safe and durable, recommend it before a full replacement.",
      },
      {
        icon: "clipboard",
        title: "Scope it clearly",
        description:
          "Write down what is included, what is excluded and how unexpected deck damage is handled.",
      },
      {
        icon: "home",
        title: "Leave it clean",
        description:
          "Protect the garden and driveway, control debris and sweep for nails.",
      },
    ],
    team: [
      {
        name: "Wes Carter",
        role: "Roofing lead",
        initials: "WC",
        bio: "Sample profile. Inspections, repair planning and homeowner walkthroughs.",
      },
      {
        name: "Elena Ruiz",
        role: "Storm specialist",
        initials: "ER",
        bio: "Sample profile. Storm documentation, temporary protection and scope writing.",
      },
      {
        name: "Trent Bailey",
        role: "Project coordinator",
        initials: "TB",
        bio: "Sample profile. Scheduling, material delivery and final cleanup checks.",
      },
    ],
    credentials: [
      "State roofing registration: DEMO-OK-RF-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Manufacturer certification: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "roofing-us-1",
      title: "Storm-hit roof",
      description:
        "Illustrative roof detail showing lifted shingles and exposed underlay after wind damage.",
      tag: "Storm damage",
      scene: { niche: "roofing", state: "before" },
    },
    {
      id: "roofing-us-2",
      title: "Sealed and documented",
      description:
        "A repaired roof plane with renewed flashing and a clean, documented finish.",
      tag: "Roof repair",
      scene: { niche: "roofing", state: "after" },
    },
    {
      id: "roofing-us-3",
      title: "Drainage corrected",
      description:
        "Gutters and downspouts moving water away from the foundation.",
      tag: "Gutters",
      scene: { niche: "roofing", state: "after" },
    },
    {
      id: "roofing-us-4",
      title: "Before the inspection",
      description:
        "A roof surface with weathered sealant, blocked drainage and small failures that add up.",
      tag: "Inspection",
      scene: { niche: "roofing", state: "before" },
    },
  ],
  emergencyNote:
    "After a storm, stay off the roof. If water is near electrical wiring or the ceiling is sagging, leave the area and call the appropriate emergency service.",
  legalNote:
    "Licence, registration and insurance details on this site are placeholders. Verify credentials directly before hiring any roofer. This is a fictional demo business.",
  demo: {
    banner:
      "Fictional demo · No real bookings or dispatches",
    disclaimer:
      "Ridgeback Roofing Co. is a fictional demo business. Names, team profiles, reviews, prices, credentials and service claims are sample content. The form is connected to a demonstration automation, not a real roofing office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "Ridgeback Roofing Co. — Tulsa Roofing Demo",
    description:
      "A fictional Tulsa roofing demo with inspections, storm damage repair, replacement planning and a working lead-capture flow.",
  },
  schemaType: "RoofingContractor",
  servicePricing: {
    "roof-inspection": { priceFrom: "$149", priceNote: "Photo report included." },
    "roof-repair": { priceFrom: "From $249", priceNote: "Scope confirmed after inspection." },
    "roof-replacement": { priceFrom: "Custom quote", priceNote: "Written scope before work." },
    "storm-damage": { priceFrom: "Triage quote", priceNote: "Temporary protection available." },
    gutters: { priceFrom: "From $129", priceNote: "Depends on length and access." },
  },
};
