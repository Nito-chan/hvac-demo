import { demoPhone, whatsappHref } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_IN", "+91 90000 00000");

export const plumbingIn: RegionDetails = {
  region: "in",
  regionLabel: "India",
  currency: "INR",
  locale: "en-IN",
  timeZone: "Asia/Kolkata",
  business: {
    name: "AquaFix Plumbing Services",
    shortName: "AquaFix",
    tagline: "Bhopal plumbing with clear pricing and careful work.",
    description:
      "A fictional Bhopal plumbing company built to demonstrate a calm, transparent service experience for leaks, drains, geysers and fittings.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    whatsappHref: whatsappHref(phone),
    email: "hello@aquafix.example",
    city: "Bhopal",
    state: "Madhya Pradesh",
    stateCode: "MP",
    country: "India",
    countryCode: "IN",
    hours: "Mon–Sun, 8am–8pm",
    emergencyHours: "Urgent leaks triaged 24/7 (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Bhopal%2C+Madhya+Pradesh",
  },
  hero: {
    eyebrow: "Bhopal plumbing + drainage",
    title: "Fixed properly. Explained simply.",
    subtitle:
      "Leaks, blocked drains, geysers and fittings handled with a proper diagnosis, a price before work and a clean handover. This is an interactive demo.",
    primaryLabel: "Book a plumber",
    secondaryLabel: "See what we fix",
  },
  trustPoints: [
    "Clear visit windows",
    "Price before work",
    "Protected floors and fittings",
    "WhatsApp updates",
  ],
  areas: [
    {
      slug: "arera-colony",
      name: "Arera Colony",
      state: "Madhya Pradesh",
      stateCode: "MP",
      featured: true,
      description:
        "Older homes in Arera Colony often have mixed pipe materials and compact bathrooms. The demo visit starts with access and isolation checks before any repair.",
      neighborhoods: ["E-7", "E-8", "10 No. Market", "Char Imli"],
      postalCodes: ["462016", "462039"],
    },
    {
      slug: "mp-nagar",
      name: "MP Nagar",
      state: "Madhya Pradesh",
      stateCode: "MP",
      featured: true,
      description:
        "A busy commercial and residential zone where access and timing matter. The office confirms building permissions and the water shut-off point before the visit.",
      neighborhoods: ["Zone I", "Zone II", "Board Office", "Press Complex"],
      postalCodes: ["462011", "462012"],
    },
    {
      slug: "kolar-road",
      name: "Kolar Road",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Newer colonies and apartment buildings often need pressure checks and drainage planning. The demo quote explains the scope before work starts.",
      neighborhoods: ["Kolar", "Danish Nagar", "Nayapura", "Bairagarh side"],
      postalCodes: ["462042", "462016"],
    },
    {
      slug: "hoshangabad-road",
      name: "Hoshangabad Road",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Apartment living and shared walls mean leaks can affect neighbours. The demo flow asks for the floor and the isolation point up front.",
      neighborhoods: ["Misrod", "Bagh Sewania", "Kolar bypass"],
      postalCodes: ["462026", "462047"],
    },
    {
      slug: "ayodhya-bypass",
      name: "Ayodhya Bypass",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Growing residential pockets and new fittings. The demo team checks water pressure and geyser installation before recommending changes.",
      neighborhoods: ["Ayodhya Nagar", "Surendra Landmark", "Karond"],
      postalCodes: ["462041", "462022"],
    },
    {
      slug: "bairagarh",
      name: "Bairagarh",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Older properties and independent houses often have external pipe runs that need a careful visual inspection before a repair.",
      neighborhoods: ["Bairagarh", "Lalghati", "Jahangirabad"],
      postalCodes: ["462030", "462008"],
    },
  ],
  plans: [
    {
      name: "Single visit",
      price: "₹399",
      period: "one visit",
      description:
        "A diagnostic visit for one plumbing issue, with a written repair quote before chargeable work.",
      features: [
        "One issue diagnosis",
        "Leak or blockage check",
        "Written repair quote",
        "Basic prevention advice",
      ],
      cta: "Book a visit",
      note: "Demo price. Parts and major repairs are quoted separately.",
    },
    {
      name: "Home plumbing care",
      price: "₹1,199",
      period: "per year",
      description:
        "An annual whole-home plumbing check with priority booking for the small issues that become leaks.",
      features: [
        "Annual plumbing check",
        "Priority WhatsApp support",
        "10% demo discount on repairs",
        "Water-pressure and leak review",
      ],
      highlighted: true,
      cta: "Choose home care",
      note: "Demo plan for one property.",
    },
    {
      name: "Priority plumber",
      price: "₹2,499",
      period: "per year",
      description:
        "For older homes or rental properties that need a faster demo response and two checks a year.",
      features: [
        "Everything in home care",
        "Two annual checks",
        "Front-of-queue demo booking",
        "Geyser and fitting inspection",
      ],
      cta: "Ask about priority",
      note: "Demo plan. Final coverage is confirmed in writing.",
    },
  ],
  reviews: [
    {
      name: "Sneha K.",
      location: "Arera Colony, Bhopal",
      quote:
        "The tap was dripping for weeks. They found a worn washer, showed it to me and fixed it without trying to replace the whole fitting.",
      service: "Tap repair",
      date: "Sample review · 2026",
    },
    {
      name: "Imran A.",
      location: "MP Nagar, Bhopal",
      quote:
        "A blocked drain in a busy office. They came after hours, protected the floor and cleared it without disrupting the next morning.",
      service: "Drain cleaning",
      date: "Sample review · 2026",
    },
    {
      name: "Pooja N.",
      location: "Kolar Road",
      quote:
        "The geyser was tripping the breaker. They tested it, explained the element problem and gave me a clear choice between repair and replacement.",
      service: "Geyser repair",
      date: "Sample review · 2026",
    },
    {
      name: "Rakesh S.",
      location: "Hoshangabad Road",
      quote:
        "The leak was affecting the flat below. The team coordinated access and fixed the joint properly instead of using a quick sealant.",
      service: "Leak repair",
      date: "Sample review · 2026",
    },
    {
      name: "Farah Q.",
      location: "Ayodhya Bypass",
      quote:
        "WhatsApp updates made the visit easy to plan around work. The price was confirmed before they started.",
      service: "Bathroom fitting",
      date: "Sample review · 2026",
    },
    {
      name: "Manish D.",
      location: "Bairagarh",
      quote:
        "They checked the external pipe run and found the real source of the damp patch. No unnecessary digging.",
      service: "Leak detection",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Plumbing care that respects the home",
    intro:
      "AquaFix is a fictional Bhopal plumbing service created to show how a local business can be clear, careful and easy to reach.",
    paragraphs: [
      "The demo is built for the practical realities of Bhopal homes: mixed plumbing ages, shared walls, monsoon leaks and busy family schedules.",
      "The business, team, reviews and prices are sample content. The form and automation are real and can be tested end to end.",
    ],
    values: [
      {
        icon: "message",
        title: "Explain the cause",
        description:
          "Show the leak or blockage and describe the repair in plain language.",
      },
      {
        icon: "clipboard",
        title: "Quote before work",
        description:
          "Confirm the scope and price, including parts, before starting.",
      },
      {
        icon: "shield",
        title: "Protect the home",
        description:
          "Use floor protection, contain water and leave the work area clean.",
      },
      {
        icon: "badge",
        title: "Test it properly",
        description:
          "Run the fixture and check for leaks before packing up.",
      },
    ],
    team: [
      {
        name: "Rohit Sharma",
        role: "Service plumber",
        initials: "RS",
        bio: "Sample profile. Leak diagnosis, bathroom fittings and homeowner handovers.",
      },
      {
        name: "Ayesha Khan",
        role: "Drainage specialist",
        initials: "AK",
        bio: "Sample profile. Blocked drains, camera checks and prevention planning.",
      },
      {
        name: "Nilesh Verma",
        role: "Office coordinator",
        initials: "NV",
        bio: "Sample profile. Scheduling, WhatsApp updates and follow-up.",
      },
    ],
    credentials: [
      "Demo service registration: DEMO-MP-PL-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Technician ID checks: sample process",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "plumbing-in-1",
      title: "Bathroom leak",
      description:
        "Illustrative joint detail showing a slow leak before a targeted repair.",
      tag: "Leak repair",
      scene: { niche: "plumbing", state: "before" },
    },
    {
      id: "plumbing-in-2",
      title: "Clean joint, tested",
      description:
        "A supported pipe run, a clean joint and a verified pressure check.",
      tag: "Leak repair",
      scene: { niche: "plumbing", state: "after" },
    },
    {
      id: "plumbing-in-3",
      title: "Monsoon drain check",
      description:
        "A drain line cleared and checked before the heavy-rain season.",
      tag: "Drain cleaning",
      scene: { niche: "plumbing", state: "after" },
    },
    {
      id: "plumbing-in-4",
      title: "Before the clear",
      description:
        "Scale, hair and kitchen waste narrowing a drain — the usual repeat-blockage pattern.",
      tag: "Drain cleaning",
      scene: { niche: "plumbing", state: "before" },
    },
  ],
  emergencyNote:
    "For a gas smell, sewage near electrical fittings, or flooding you cannot stop, leave the area and call local emergency services first. Do not wait for a demo plumber.",
  legalNote:
    "Service registration and insurance details on this site are placeholders. Verify credentials directly before hiring any plumber. This is a fictional demo business.",
  demo: {
    banner:
      "Fictional demo · No real bookings or dispatches",
    disclaimer:
      "AquaFix Plumbing Services is a fictional demo business. Names, team profiles, reviews, prices, registrations and service claims are sample content. The form is connected to a demonstration automation, not a real dispatch team.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "AquaFix Plumbing Services — Bhopal Plumbing Demo",
    description:
      "A fictional Bhopal plumbing demo with drain cleaning, leak repair, geyser service and a working lead-capture flow.",
  },
  schemaType: "Plumber",
  servicePricing: {
    "drain-cleaning": { priceFrom: "₹399", priceNote: "Per accessible drain." },
    "leak-repair": { priceFrom: "₹399 visit", priceNote: "Parts quoted separately." },
    "water-heater-repair": { priceFrom: "₹499", priceNote: "Parts quoted separately." },
    "toilet-repair": { priceFrom: "₹299", priceNote: "Parts quoted separately." },
    "sewer-line": { priceFrom: "From ₹999", priceNote: "Camera check where needed." },
    "emergency-plumbing": { priceFrom: "Priority quote", priceNote: "After-hours demo rate applies." },
  },
};
