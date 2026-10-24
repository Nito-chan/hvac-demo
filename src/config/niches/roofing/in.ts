import { demoPhone, whatsappHref } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_IN", "+91 90000 00000");

export const roofingIn: RegionDetails = {
  region: "in",
  regionLabel: "India",
  currency: "INR",
  locale: "en-IN",
  timeZone: "Asia/Kolkata",
  business: {
    name: "SafeTop Roofing & Waterproofing",
    shortName: "SafeTop",
    tagline: "Terrace waterproofing and roof repair for Jaipur homes.",
    description:
      "A fictional Jaipur roofing and waterproofing company built to demonstrate a documented, monsoon-ready approach to terrace leaks and roof repairs.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    whatsappHref: whatsappHref(phone),
    email: "hello@safetop.example",
    city: "Jaipur",
    state: "Rajasthan",
    stateCode: "RJ",
    country: "India",
    countryCode: "IN",
    hours: "Mon–Sat, 8am–8pm",
    emergencyHours: "Monsoon leak triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Jaipur%2C+Rajasthan",
  },
  hero: {
    eyebrow: "Jaipur roofing + waterproofing",
    title: "Dry rooms. Stronger terrace.",
    subtitle:
      "Terrace waterproofing, leak repair and heat-proof coatings with a proper surface inspection and a clear scope before work starts. This is a demo site.",
    primaryLabel: "Book an inspection",
    secondaryLabel: "See waterproofing",
  },
  trustPoints: [
    "Documented surface inspection",
    "Price before work",
    "Monsoon-ready detailing",
    "Clean, tidy handover",
  ],
  areas: [
    {
      slug: "vaishali-nagar",
      name: "Vaishali Nagar",
      state: "Rajasthan",
      stateCode: "RJ",
      featured: true,
      description:
        "Independent homes and apartments with a mix of older terraces and newer waterproofing systems. The demo inspection checks the surface, joints and drainage before recommending a coating.",
      neighborhoods: ["Vaishali Nagar", "Chitrakoot", "Ajmer Road side"],
      postalCodes: ["302021", "302019"],
    },
    {
      slug: "malviya-nagar",
      name: "Malviya Nagar",
      state: "Rajasthan",
      stateCode: "RJ",
      featured: true,
      description:
        "A busy residential area with many older terraces. Damp walls, cracked parapets and blocked drains are common demo requests.",
      neighborhoods: ["Malviya Nagar", "Jagatpura side", "Sitapura"],
      postalCodes: ["302017", "302022"],
    },
    {
      slug: "mansarovar",
      name: "Mansarovar",
      state: "Rajasthan",
      stateCode: "RJ",
      description:
        "A large residential zone with a mix of independent houses and colony-style buildings. The demo quote sets out surface preparation and curing time.",
      neighborhoods: ["Mansarovar", "Kunal Nagar", "Shipra Path"],
      postalCodes: ["302020", "302029"],
    },
    {
      slug: "jagatpura",
      name: "Jagatpura",
      state: "Rajasthan",
      stateCode: "RJ",
      description:
        "Newer construction and growing families. The demo team checks terrace slope, drain outlets and heat gain before recommending a system.",
      neighborhoods: ["Jagatpura", "Sitapura", "Tonk Road"],
      postalCodes: ["302017", "302022"],
    },
    {
      slug: "tonk-road",
      name: "Tonk Road",
      state: "Rajasthan",
      stateCode: "RJ",
      description:
        "A long corridor with apartments, schools and commercial buildings. Access and working hours are confirmed before the visit.",
      neighborhoods: ["Tonk Road", "Durgapura", "Sanganer"],
      postalCodes: ["302018", "302029", "303902"],
    },
    {
      slug: "ajmer-road",
      name: "Ajmer Road",
      state: "Rajasthan",
      stateCode: "RJ",
      description:
        "Rapidly developing residential pockets with new terraces and first monsoon checks. The demo flow captures the property type and leak history.",
      neighborhoods: ["Ajmer Road", "Vaishali Nagar", "Bhankrota"],
      postalCodes: ["302019", "302026"],
    },
  ],
  plans: [
    {
      name: "Terrace inspection",
      price: "₹999",
      period: "one inspection",
      description:
        "A documented terrace and roof inspection with photos and a prioritized repair or waterproofing plan.",
      features: [
        "Surface and joint inspection",
        "Drainage and slope check",
        "Photo record",
        "Written next steps",
      ],
      cta: "Book an inspection",
      note: "Demo price. Credited toward approved waterproofing work.",
    },
    {
      name: "Monsoon Shield",
      price: "₹4,999",
      period: "from",
      description:
        "A prepared terrace waterproofing system for a typical residential terrace, with a clear scope.",
      features: [
        "Surface preparation",
        "Crack and joint treatment",
        "Waterproof coating",
        "Drainage detailing",
      ],
      highlighted: true,
      cta: "Request a quote",
      note: "Demo starting price. Final price depends on area and condition.",
    },
    {
      name: "Annual roof care",
      price: "₹2,999",
      period: "per year",
      description:
        "A pre-monsoon check and minor maintenance visit to catch small leaks before they spread.",
      features: [
        "Pre-monsoon inspection",
        "Minor joint touch-ups",
        "Drain clearing",
        "Photo report",
      ],
      cta: "Ask about annual care",
      note: "Demo plan. Major repairs are quoted separately.",
    },
  ],
  reviews: [
    {
      name: "Kavita J.",
      location: "Vaishali Nagar, Jaipur",
      quote:
        "The damp patch on the bedroom ceiling had been blamed on the bathroom twice. SafeTop traced it to the terrace parapet joint and fixed the actual source.",
      service: "Terrace waterproofing",
      date: "Sample review · 2026",
    },
    {
      name: "Rohit B.",
      location: "Malviya Nagar",
      quote:
        "They explained why a coating over the old cracked surface would fail. The preparation took longer, but the result has held through the monsoon.",
      service: "Waterproofing",
      date: "Sample review · 2026",
    },
    {
      name: "Meera P.",
      location: "Mansarovar",
      quote:
        "The team covered the terrace, kept the dust down and cleaned up each day. The written scope matched the final bill.",
      service: "Roof repair",
      date: "Sample review · 2026",
    },
    {
      name: "Arvind S.",
      location: "Jagatpura",
      quote:
        "The heat-proof coating made the top floor more usable in the afternoon. They were honest that it would not replace insulation.",
      service: "Heat-proof coating",
      date: "Sample review · 2026",
    },
    {
      name: "Nisha G.",
      location: "Tonk Road",
      quote:
        "Clear WhatsApp updates and a proper photo report. I could share it with the housing society without explaining everything myself.",
      service: "Roof inspection",
      date: "Sample review · 2026",
    },
    {
      name: "Yash T.",
      location: "Ajmer Road",
      quote:
        "A small leak after the first rain. They found a blocked drain outlet and a failed joint, not a reason to redo the whole terrace.",
      service: "Leak repair",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Waterproofing with evidence, not guesswork",
    intro:
      "SafeTop is a fictional Jaipur roofing and waterproofing company created to show how a documented, surface-first process can prevent repeat leaks.",
    paragraphs: [
      "Terrace leaks are frustrating because water travels. The demo is built around finding the path, preparing the surface properly and explaining what the coating can and cannot do.",
      "The business, team, reviews and prices are sample content. The form and automation are real and testable.",
    ],
    values: [
      {
        icon: "search",
        title: "Trace the water",
        description:
          "Inspect joints, drains and penetrations before blaming the surface.",
      },
      {
        icon: "layers",
        title: "Prepare properly",
        description:
          "A durable coating needs a clean, sound surface and correct drainage.",
      },
      {
        icon: "clipboard",
        title: "Write the scope",
        description:
          "Explain the system, the curing time and what is excluded before work starts.",
      },
      {
        icon: "home",
        title: "Protect the home",
        description:
          "Contain dust, cover belongings and leave the terrace usable.",
      },
    ],
    team: [
      {
        name: "Vikram Singh",
        role: "Waterproofing lead",
        initials: "VS",
        bio: "Sample profile. Terrace inspections, surface preparation and coating systems.",
      },
      {
        name: "Anita Sharma",
        role: "Roof repair specialist",
        initials: "AS",
        bio: "Sample profile. Leak tracing, parapet repairs and drainage corrections.",
      },
      {
        name: "Faizan Ali",
        role: "Project coordinator",
        initials: "FA",
        bio: "Sample profile. Scheduling, material delivery and handover checks.",
      },
    ],
    credentials: [
      "Demo service registration: DEMO-RJ-RF-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Applicator certification: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "roofing-in-1",
      title: "Terrace leak path",
      description:
        "Illustrative terrace detail showing a cracked parapet joint and water tracking under the surface.",
      tag: "Waterproofing",
      scene: { niche: "roofing", state: "before" },
    },
    {
      id: "roofing-in-2",
      title: "Monsoon-ready",
      description:
        "A prepared terrace with treated joints, a continuous coating and clear drainage.",
      tag: "Waterproofing",
      scene: { niche: "roofing", state: "after" },
    },
    {
      id: "roofing-in-3",
      title: "Cooler top floor",
      description:
        "A reflective coating and clean terrace surface designed to reduce heat gain.",
      tag: "Heat-proofing",
      scene: { niche: "roofing", state: "after" },
    },
    {
      id: "roofing-in-4",
      title: "Before the repair",
      description:
        "Blistered coating, blocked drainage and open joints — the pattern behind a repeat leak.",
      tag: "Inspection",
      scene: { niche: "roofing", state: "before" },
    },
  ],
  emergencyNote:
    "If a ceiling is sagging, water is near electrical wiring, or a terrace wall is moving, leave the area and call the appropriate emergency service. Stay off a wet roof.",
  legalNote:
    "Service registration and insurance details on this site are placeholders. Verify credentials directly before hiring any contractor. This is a fictional demo business.",
  demo: {
    banner:
      "Fictional demo · No real bookings or dispatches",
    disclaimer:
      "SafeTop Roofing & Waterproofing is a fictional demo business. Names, team profiles, reviews, prices, registrations and service claims are sample content. The form is connected to a demonstration automation, not a real roofing office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "SafeTop Roofing & Waterproofing — Jaipur Demo",
    description:
      "A fictional Jaipur roofing demo with terrace waterproofing, leak repair, heat-proof coating and a working lead-capture flow.",
  },
  schemaType: "RoofingContractor",
  servicePricing: {
    "roof-inspection": { priceFrom: "₹999", priceNote: "Photo report included." },
    "roof-repair": { priceFrom: "From ₹1,499", priceNote: "Scope confirmed after inspection." },
    "roof-replacement": { priceFrom: "Custom quote", priceNote: "Written scope before work." },
    "storm-damage": { priceFrom: "Triage quote", priceNote: "Temporary protection where safe." },
    "terrace-waterproofing": { priceFrom: "From ₹4,999", priceNote: "Depends on area and condition." },
    "heat-proof-coating": { priceFrom: "From ₹3,999", priceNote: "Surface preparation included." },
  },
};
