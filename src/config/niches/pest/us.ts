import { demoPhone } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_US", "(316) 555-0191");

export const pestUs: RegionDetails = {
  region: "us",
  regionLabel: "United States",
  currency: "USD",
  locale: "en-US",
  timeZone: "America/Chicago",
  business: {
    name: "ClearNest Pest Control",
    shortName: "ClearNest",
    tagline: "Calm, practical pest control for Wichita homes.",
    description:
      "A fictional Wichita pest-control company built to demonstrate a clear, prevention-first approach for common household pests.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    email: "hello@clearnest.example",
    city: "Wichita",
    state: "Kansas",
    stateCode: "KS",
    country: "United States",
    countryCode: "US",
    hours: "Mon–Sat, 8am–6pm",
    emergencyHours: "Urgent pest triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Wichita%2C+KS",
  },
  hero: {
    eyebrow: "Wichita pest control",
    title: "A calmer home, inside and out.",
    subtitle:
      "Clear inspections, targeted treatment and practical prevention — without fear tactics or a mystery spray. This is a fully interactive demo.",
    primaryLabel: "Book an inspection",
    secondaryLabel: "See pest services",
  },
  trustPoints: [
    "Clear activity assessment",
    "Targeted treatment",
    "Written aftercare",
    "Follow-up planning",
  ],
  areas: [
    {
      slug: "wichita",
      name: "Wichita",
      state: "Kansas",
      stateCode: "KS",
      featured: true,
      description:
        "Older homes, mature trees and a mix of garden styles create plenty of pest pressure. The demo inspection looks for entry points and moisture, not just the pest you can see.",
      neighborhoods: ["Riverside", "College Hill", "Delano", "East Wichita"],
      postalCodes: ["67203", "67208", "67212", "67214"],
    },
    {
      slug: "derby",
      name: "Derby",
      state: "Kansas",
      stateCode: "KS",
      featured: true,
      description:
        "Family homes and newer subdivisions. The demo team checks the exterior perimeter, garage and roof space for activity and entry points.",
      neighborhoods: ["Downtown Derby", "Spring Creek", "High Park"],
      postalCodes: ["67037"],
    },
    {
      slug: "andover",
      name: "Andover",
      state: "Kansas",
      stateCode: "KS",
      description:
        "Larger lots and newer construction. The demo plan includes outdoor source reduction and a clear explanation of the treatment area.",
      neighborhoods: ["Andover", "Redbud", "Crescent Lakes"],
      postalCodes: ["67002"],
    },
    {
      slug: "maize",
      name: "Maize",
      state: "Kansas",
      stateCode: "KS",
      description:
        "A growing northwest community with family homes and open land nearby. Rodent and general pest exclusion are common demo requests.",
      neighborhoods: ["Maize", "Eisenhower", "Providence"],
      postalCodes: ["67101"],
    },
    {
      slug: "goddard",
      name: "Goddard",
      state: "Kansas",
      stateCode: "KS",
      description:
        "Newer homes and larger gardens. The demo assessment checks the exterior perimeter and any outbuildings before recommending a plan.",
      neighborhoods: ["Goddard", "Kellogg", "Sunflower"],
      postalCodes: ["67052"],
    },
    {
      slug: "haysville",
      name: "Haysville",
      state: "Kansas",
      stateCode: "KS",
      description:
        "A smaller community south of Wichita. The office confirms travel and the earliest realistic window before booking.",
      neighborhoods: ["Haysville", "Riverview", "South Wichita"],
      postalCodes: ["67060"],
    },
  ],
  plans: [
    {
      name: "One-time treatment",
      price: "$149",
      period: "one visit",
      description:
        "A targeted treatment for one covered pest issue, with a clear aftercare summary.",
      features: [
        "Activity and entry-point inspection",
        "Targeted treatment",
        "Written aftercare",
        "Follow-up options",
      ],
      cta: "Book a treatment",
      note: "Demo price. Additional pests or follow-ups are quoted separately.",
    },
    {
      name: "Home Shield",
      price: "$29",
      period: "per month",
      description:
        "Ongoing exterior protection and monitoring for common household pests.",
      features: [
        "Quarterly exterior visits",
        "Interior treatment if activity appears",
        "Entry-point recommendations",
        "Priority booking",
      ],
      highlighted: true,
      cta: "Join Home Shield",
      note: "Demo plan. Cancel before the next billing period.",
    },
    {
      name: "Complete Home",
      price: "$49",
      period: "per month",
      description:
        "Expanded coverage for homes with termite, rodent or recurring pest pressure.",
      features: [
        "Everything in Home Shield",
        "Termite monitoring option",
        "Rodent exclusion planning",
        "Two interior checks a year",
      ],
      cta: "Ask about Complete",
      note: "Demo plan. Final coverage is confirmed in writing.",
    },
  ],
  reviews: [
    {
      name: "Beth A.",
      location: "College Hill, Wichita",
      quote:
        "They found the entry point behind the dishwasher and sealed it instead of just spraying the ants. That made the difference.",
      service: "General pest",
      date: "Sample review · 2026",
    },
    {
      name: "Marcus J.",
      location: "Derby",
      quote:
        "The termite inspection was thorough and calm. They showed me the photos and explained the options without trying to scare me.",
      service: "Termite control",
      date: "Sample review · 2026",
    },
    {
      name: "Tina R.",
      location: "Andover",
      quote:
        "Clear prep instructions, a realistic follow-up window and no mystery charges. The whole process felt considered.",
      service: "Bed bug treatment",
      date: "Sample review · 2026",
    },
    {
      name: "Caleb W.",
      location: "Maize",
      quote:
        "They explained why poison in the roof was a bad idea and used traps plus exclusion instead. The scratching stopped and stayed stopped.",
      service: "Rodent control",
      date: "Sample review · 2026",
    },
    {
      name: "Renee S.",
      location: "Goddard",
      quote:
        "The mosquito treatment reduced the evening activity, but they were honest that standing water would bring them back. The checklist was useful.",
      service: "Mosquito control",
      date: "Sample review · 2026",
    },
    {
      name: "Dale H.",
      location: "Haysville",
      quote:
        "A straightforward exterior visit and a clear report. No upselling, no pressure to sign a year-long contract.",
      service: "Home Shield",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Pest control without the fear tactics",
    intro:
      "ClearNest is a fictional Wichita pest-control company created to show how a calm, prevention-first service can feel.",
    paragraphs: [
      "Pests are unsettling, but the response does not need to be dramatic. The demo is built around a clear inspection, a targeted treatment and a practical plan for keeping the problem from returning.",
      "The business, team, reviews and prices are fictional. The forms and automation are real and testable.",
    ],
    values: [
      {
        icon: "search",
        title: "Inspect first",
        description:
          "Identify the pest, the activity and the entry point before choosing a treatment.",
      },
      {
        icon: "shield",
        title: "Treat safely",
        description:
          "Explain the product, protect people and pets, and give clear re-entry instructions.",
      },
      {
        icon: "clipboard",
        title: "Write it down",
        description:
          "Aftercare, follow-up timing and prevention steps should not live only in a text message.",
      },
      {
        icon: "leaf",
        title: "Prevent the return",
        description:
          "Entry points, moisture and food sources matter as much as the spray.",
      },
    ],
    team: [
      {
        name: "Evan Cole",
        role: "Field lead",
        initials: "EC",
        bio: "Sample profile. Inspections, general pest treatment and exclusion planning.",
      },
      {
        name: "Maya Singh",
        role: "Termite specialist",
        initials: "MS",
        bio: "Sample profile. Termite inspections, moisture assessment and treatment plans.",
      },
      {
        name: "Drew Palmer",
        role: "Office coordinator",
        initials: "DP",
        bio: "Sample profile. Scheduling, prep instructions and follow-up.",
      },
    ],
    credentials: [
      "State pest-control licence: DEMO-KS-PC-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Applicator certification: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "pest-us-1",
      title: "Open entry point",
      description:
        "Illustrative exterior detail showing a gap that lets pests into a wall cavity.",
      tag: "Exclusion",
      scene: { niche: "pest", state: "before" },
    },
    {
      id: "pest-us-2",
      title: "Sealed perimeter",
      description:
        "A protected exterior line with entry points sealed and a clear maintenance zone.",
      tag: "Exclusion",
      scene: { niche: "pest", state: "after" },
    },
    {
      id: "pest-us-3",
      title: "Termite inspection",
      description:
        "A documented check of timber, moisture and foundation contact points.",
      tag: "Termite",
      scene: { niche: "pest", state: "after" },
    },
    {
      id: "pest-us-4",
      title: "Before treatment",
      description:
        "Clutter, moisture and an unsealed gap — the conditions that invite household pests.",
      tag: "Inspection",
      scene: { niche: "pest", state: "before" },
    },
  ],
  emergencyNote:
    "If you see a snake, a wasp nest near a walkway or any pest that poses an immediate danger, keep people and pets away and call the appropriate local service. Do not handle it yourself.",
  legalNote:
    "Licence and insurance details on this site are placeholders. Verify credentials directly before hiring any pest-control provider. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Wichita business · No real bookings or dispatches",
    disclaimer:
      "ClearNest Pest Control is a fictional demo business. Names, team profiles, reviews, prices, licence details and service claims are sample content. The form is connected to a demonstration automation, not a real pest-control office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "ClearNest Pest Control — Wichita Pest Demo",
    description:
      "A fictional Wichita pest-control demo with general pest, termite, rodent and mosquito services plus a working lead-capture flow.",
  },
  schemaType: "PestControlService",
  servicePricing: {
    "general-pest": { priceFrom: "$149", priceNote: "One targeted treatment." },
    "termite-control": { priceFrom: "From $299", priceNote: "Inspection and scope first." },
    "bed-bugs": { priceFrom: "From $349", priceNote: "Preparation and follow-up included." },
    "rodent-control": { priceFrom: "From $199", priceNote: "Exclusion quoted separately." },
    "mosquito-control": { priceFrom: "From $129", priceNote: "Seasonal plan available." },
    "commercial-pest": { priceFrom: "Custom quote", priceNote: "Scheduled plan." },
  },
};
