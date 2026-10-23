import { demoPhone } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_US", "(402) 555-0178");

export const plumbingUs: RegionDetails = {
  region: "us",
  regionLabel: "United States",
  currency: "USD",
  locale: "en-US",
  timeZone: "America/Chicago",
  business: {
    name: "BlueLine Plumbing & Drain",
    shortName: "BlueLine",
    tagline: "Straightforward plumbing for Omaha homes.",
    description:
      "A fictional Omaha plumbing company built to demonstrate a calm, transparent service experience for leaks, drains and water heaters.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    email: "hello@blueline.example",
    city: "Omaha",
    state: "Nebraska",
    stateCode: "NE",
    country: "United States",
    countryCode: "US",
    hours: "Mon–Sat, 7am–7pm",
    emergencyHours: "Urgent leaks triaged 24/7 (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Omaha%2C+NE",
  },
  hero: {
    eyebrow: "Omaha plumbing + drain",
    title: "The leak stops here.",
    subtitle:
      "Clear explanations, protected floors and a repair quote before the work begins. Built for homeowners who want the problem solved, not sold.",
    primaryLabel: "Book a plumber",
    secondaryLabel: "See services",
  },
  trustPoints: [
    "Clear arrival windows",
    "Quote before work",
    "Floor and furniture protection",
    "Clean, tidy handover",
  ],
  areas: [
    {
      slug: "omaha",
      name: "Omaha",
      state: "Nebraska",
      stateCode: "NE",
      featured: true,
      description:
        "From older Dundee homes to newer west Omaha builds, pipe age, water pressure and access all shape the right repair. The demo visit starts with a proper look, not a guess.",
      neighborhoods: ["Dundee", "Benson", "Midtown", "West Omaha", "Aksarben"],
      postalCodes: ["68105", "68106", "68114", "68116", "68144"],
    },
    {
      slug: "bellevue",
      name: "Bellevue",
      state: "Nebraska",
      stateCode: "NE",
      featured: true,
      description:
        "Bellevue's mix of older and newer homes often means different pipe materials from street to street. The team checks access and shut-off locations before work.",
      neighborhoods: ["Olde Towne", "Twin Ridge", "Fontenelle"],
      postalCodes: ["68005", "68123", "68147"],
    },
    {
      slug: "papillion",
      name: "Papillion",
      state: "Nebraska",
      stateCode: "NE",
      description:
        "Growing families and newer builds often call about drain patterns, water pressure and water-heater performance. The demo quote explains the options clearly.",
      neighborhoods: ["Shadow Lake", "Granite Falls", "Tara Hills"],
      postalCodes: ["68046", "68133"],
    },
    {
      slug: "la-vista",
      name: "La Vista",
      state: "Nebraska",
      stateCode: "NE",
      description:
        "Compact lots and finished basements can make access tricky. The office asks about the layout before the visit so the right tools arrive.",
      neighborhoods: ["Central La Vista", "Southport", "Portal"],
      postalCodes: ["68128", "68138"],
    },
    {
      slug: "millard",
      name: "Millard",
      state: "Nebraska",
      stateCode: "NE",
      description:
        "Millard's established neighborhoods have a lot of mature trees and older service lines. Root intrusion and repeat drain blockages are common demo requests.",
      neighborhoods: ["Old Millard", "Millard West", "Applewood"],
      postalCodes: ["68135", "68137", "68154"],
    },
    {
      slug: "council-bluffs",
      name: "Council Bluffs",
      state: "Iowa",
      stateCode: "IA",
      description:
        "Across the river, the demo team confirms travel and the service window before booking. Older housing stock may need a camera check before a sewer repair.",
      neighborhoods: ["Downtown", "Lewis Central", "East Manawa"],
      postalCodes: ["51501", "51503"],
    },
  ],
  plans: [
    {
      name: "Drain clear",
      price: "$99",
      period: "one drain",
      description:
        "A single accessible drain clear with a practical prevention conversation before leaving.",
      features: [
        "One accessible drain",
        "Blockage diagnosis",
        "Mechanical clear",
        "Prevention advice",
      ],
      cta: "Clear a drain",
      note: "Demo price. Camera inspection or difficult access is quoted separately.",
    },
    {
      name: "Home Plumbing Care",
      price: "$14",
      period: "per month",
      description:
        "An annual plumbing check and priority booking for the small issues that become expensive ones.",
      features: [
        "Annual whole-home check",
        "Priority booking window",
        "10% demo discount on repairs",
        "Water-pressure and leak review",
      ],
      highlighted: true,
      cta: "Join Home Care",
      note: "Demo plan. Cancel before the next billing period.",
    },
    {
      name: "Priority Plumber",
      price: "$29",
      period: "per month",
      description:
        "For older homes or busy households that want the fastest available demo response.",
      features: [
        "Everything in Home Care",
        "Front-of-queue demo booking",
        "Two annual checks",
        "Sewer camera discount",
      ],
      cta: "Ask about Priority",
      note: "Demo plan. Final coverage is confirmed in writing.",
    },
  ],
  reviews: [
    {
      name: "Laura M.",
      location: "Dundee, Omaha",
      quote:
        "The leak was under the kitchen sink and I expected a mess. They used a mat, explained the cracked fitting and had it fixed in under an hour.",
      service: "Leak repair",
      date: "Sample review · 2026",
    },
    {
      name: "Eric T.",
      location: "Papillion",
      quote:
        "No pressure to replace the whole water heater. They replaced the element and told me what to watch. That was two winters ago in demo years.",
      service: "Water heater repair",
      date: "Sample review · 2026",
    },
    {
      name: "Nina P.",
      location: "Bellevue",
      quote:
        "The drain had blocked twice before. This time they put a camera down and showed me the root intrusion instead of just clearing it again.",
      service: "Sewer line service",
      date: "Sample review · 2026",
    },
    {
      name: "Mark S.",
      location: "Millard",
      quote:
        "Clear quote, clear arrival window, and they cleaned up better than they found it. The small details matter.",
      service: "Drain cleaning",
      date: "Sample review · 2026",
    },
    {
      name: "Anita R.",
      location: "La Vista",
      quote:
        "I appreciated the call before arrival and the explanation of what not to flush. Practical, not preachy.",
      service: "Toilet repair",
      date: "Sample review · 2026",
    },
    {
      name: "Devon C.",
      location: "Council Bluffs",
      quote:
        "The urgent leak was triaged quickly and the technician talked me through shutting off the water while I waited.",
      service: "Emergency plumbing",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "A plumbing team that explains the repair",
    intro:
      "BlueLine is a fictional Omaha plumbing company created to show how a clear, respectful service visit should feel.",
    paragraphs: [
      "Plumbing is often urgent and always personal. The demo is built around protecting the home, explaining the cause and quoting before work begins.",
      "The business, team, reviews and prices are fictional. The forms, region switching and automation are real and testable.",
    ],
    values: [
      {
        icon: "message",
        title: "Show the cause",
        description:
          "Use a camera or a simple demonstration so the repair makes sense before you approve it.",
      },
      {
        icon: "shield",
        title: "Protect the home",
        description:
          "Floor protection, contained water and a tidy finish are part of the job, not extras.",
      },
      {
        icon: "clipboard",
        title: "Quote first",
        description:
          "No chargeable work starts without an approved scope and price.",
      },
      {
        icon: "badge",
        title: "Test the fix",
        description:
          "Run the fixture, check for leaks and confirm pressure before packing up.",
      },
    ],
    team: [
      {
        name: "Cole Bennett",
        role: "Service plumber",
        initials: "CB",
        bio: "Sample profile. Focuses on leak diagnosis, drain work and clear homeowner handovers.",
      },
      {
        name: "Rosa Kim",
        role: "Sewer specialist",
        initials: "RK",
        bio: "Sample profile. Camera inspections, root intrusion and repair planning.",
      },
      {
        name: "Jamie Ortiz",
        role: "Office coordinator",
        initials: "JO",
        bio: "Sample profile. Scheduling, arrival updates and follow-up.",
      },
    ],
    credentials: [
      "State plumbing licence: DEMO-NE-PL-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Backflow testing: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "plumbing-us-1",
      title: "Under-sink leak",
      description:
        "Illustrative pipe detail showing a cracked joint before a targeted repair.",
      tag: "Leak repair",
      scene: { niche: "plumbing", state: "before" },
    },
    {
      id: "plumbing-us-2",
      title: "Pressure restored",
      description:
        "Clean joints, a supported pipe run and a verified pressure test.",
      tag: "Leak repair",
      scene: { niche: "plumbing", state: "after" },
    },
    {
      id: "plumbing-us-3",
      title: "Drain line check",
      description:
        "A camera-first approach to a repeat blockage, with the cause documented.",
      tag: "Sewer",
      scene: { niche: "plumbing", state: "after" },
    },
    {
      id: "plumbing-us-4",
      title: "Before the clear",
      description:
        "Grease, hair and scale narrowing a drain — the pattern behind repeat backups.",
      tag: "Drain cleaning",
      scene: { niche: "plumbing", state: "before" },
    },
  ],
  emergencyNote:
    "For gas smells, sewage near electrical fittings, or flooding you cannot stop, leave the area and call the appropriate emergency service first. Do not wait for a demo plumber.",
  legalNote:
    "Licence and insurance details on this site are placeholders. Verify credentials directly before hiring any plumber. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Omaha business · No real bookings or dispatches",
    disclaimer:
      "BlueLine Plumbing & Drain is a fictional demo business. Names, team profiles, reviews, prices, licence details and service claims are sample content. The form is connected to a demonstration automation, not a real dispatch team.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "BlueLine Plumbing & Drain — Omaha Plumbing Demo",
    description:
      "A fictional Omaha plumbing demo with drain cleaning, leak repair, water heaters and a working lead-capture flow.",
  },
  schemaType: "Plumber",
  servicePricing: {
    "drain-cleaning": { priceFrom: "$99", priceNote: "Per accessible drain." },
    "leak-repair": { priceFrom: "$119 diagnostic", priceNote: "Credited toward approved repair." },
    "water-heater-repair": { priceFrom: "$129", priceNote: "Parts quoted separately." },
    "toilet-repair": { priceFrom: "$99", priceNote: "Parts quoted separately." },
    "sewer-line": { priceFrom: "From $249", priceNote: "Camera inspection included where needed." },
    "emergency-plumbing": { priceFrom: "Priority quote", priceNote: "After-hours demo rate applies." },
  },
};
