import { demoPhone, whatsappHref } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_IN", "+91 90000 00000");

export const hvacIn: RegionDetails = {
  region: "in",
  regionLabel: "India",
  currency: "INR",
  locale: "en-IN",
  timeZone: "Asia/Kolkata",
  business: {
    name: "CoolNest AC Care",
    shortName: "CoolNest",
    tagline: "Indore AC service with clear pricing and careful work.",
    description:
      "A fictional Indore air-conditioning company built to demonstrate a calm, transparent service experience for homes and small offices.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    whatsappHref: whatsappHref(phone),
    email: "hello@coolnest.example",
    city: "Indore",
    state: "Madhya Pradesh",
    stateCode: "MP",
    country: "India",
    countryCode: "IN",
    hours: "Mon–Sun, 9am–8pm",
    emergencyHours: "Same-day urgent slots (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Indore%2C+Madhya+Pradesh",
  },
  hero: {
    eyebrow: "Indore AC service, made simple",
    title: "Cool rooms. Clear answers.",
    subtitle:
      "AC service, repairs and installations with a proper diagnosis, a written price and a technician who leaves the space clean. This is an interactive demo.",
    primaryLabel: "Book a service",
    secondaryLabel: "See what we fix",
  },
  trustPoints: [
    "Clear visit windows",
    "Price before work",
    "Clean, careful technicians",
    "WhatsApp updates",
  ],
  areas: [
    {
      slug: "vijay-nagar",
      name: "Vijay Nagar",
      state: "Madhya Pradesh",
      stateCode: "MP",
      featured: true,
      description:
        "Vijay Nagar's mix of apartments and independent homes means access, outdoor-unit placement and drainage need to be checked before a service visit.",
      neighborhoods: ["Scheme 54", "Satya Sai", "Bhawarkuan side", "AB Road"],
      postalCodes: ["452010", "452011"],
    },
    {
      slug: "palasia",
      name: "Palasia",
      state: "Madhya Pradesh",
      stateCode: "MP",
      featured: true,
      description:
        "Older buildings around Palasia often have compact outdoor-unit spaces and shared walls. The demo visit starts with safe access and noise considerations.",
      neighborhoods: ["Old Palasia", "New Palasia", "Sapna Sangeeta"],
      postalCodes: ["452001", "452004"],
    },
    {
      slug: "scheme-54",
      name: "Scheme 54",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "A busy residential pocket with a lot of split systems. Filter cleaning, cooling checks and timely gas-leak diagnosis are common requests.",
      neighborhoods: ["Scheme 54", "Vijay Nagar", "Sudama Nagar"],
      postalCodes: ["452010"],
    },
    {
      slug: "bhawarkuan",
      name: "Bhawarkuan",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Student housing and family homes often need practical, budget-aware advice. The demo flow quotes the repair before any work starts.",
      neighborhoods: ["Bhawarkuan", "Khandwa Road", "Teen Imli"],
      postalCodes: ["452001", "452016"],
    },
    {
      slug: "rau",
      name: "Rau",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "Newer construction in and around Rau often benefits from a first-season installation check, drainage review and filter guidance.",
      neighborhoods: ["Rau", "Mhow Road", "Rajendra Nagar"],
      postalCodes: ["453331", "452020"],
    },
    {
      slug: "mhow",
      name: "Mhow",
      state: "Madhya Pradesh",
      stateCode: "MP",
      description:
        "For Mhow and nearby towns, the demo office confirms travel and the earliest realistic window before confirming a visit.",
      neighborhoods: ["Mhow", "Dr. Ambedkar Nagar", "Simrol Road"],
      postalCodes: ["453441"],
    },
  ],
  plans: [
    {
      name: "Single service visit",
      price: "₹499",
      period: "one visit",
      description:
        "A diagnostic and basic service visit for one indoor unit, with a written summary.",
      features: [
        "Cooling and airflow check",
        "Filter and coil cleaning guidance",
        "Drainage inspection",
        "Written repair quote if needed",
      ],
      cta: "Book a visit",
      note: "Demo price. Parts, gas and major repairs are quoted separately.",
    },
    {
      name: "Annual AC care",
      price: "₹1,499",
      period: "per year",
      description:
        "Two preventive visits a year for one unit, timed before summer and after the monsoon.",
      features: [
        "Two scheduled service visits",
        "Filter and drain checks",
        "Priority WhatsApp support",
        "10% demo discount on repairs",
      ],
      highlighted: true,
      cta: "Choose annual care",
      note: "Demo plan for one indoor + outdoor unit.",
    },
    {
      name: "Home comfort+",
      price: "₹2,999",
      period: "per year",
      description:
        "For homes with two or more ACs, with coordinated visits and a priority slot during peak season.",
      features: [
        "Up to three units covered",
        "Two visits per unit",
        "Priority peak-season booking",
        "Annual efficiency walkthrough",
      ],
      cta: "Ask about Home comfort+",
      note: "Demo plan. Final coverage is confirmed in writing.",
    },
  ],
  reviews: [
    {
      name: "Ritu S.",
      location: "Vijay Nagar, Indore",
      quote:
        "The technician explained the drainage problem with the indoor unit instead of just saying it needed a gas refill. That honesty made the decision easy.",
      service: "AC service",
      date: "Sample review · 2026",
    },
    {
      name: "Aman J.",
      location: "Palasia, Indore",
      quote:
        "Booked on WhatsApp, got a clear time, and the work was done without spreading dust through the room. Very easy experience.",
      service: "Split AC repair",
      date: "Sample review · 2026",
    },
    {
      name: "Neha D.",
      location: "Scheme 54, Indore",
      quote:
        "The annual plan reminder came at the right time, before the first hot week. The service was quick and the price was explained up front.",
      service: "Annual AC care",
      date: "Sample review · 2026",
    },
    {
      name: "Rahul M.",
      location: "Bhawarkuan, Indore",
      quote:
        "I was worried it would be a gas top-up sales pitch. They tested first, found a blocked filter and showed me the difference in airflow.",
      service: "AC repair",
      date: "Sample review · 2026",
    },
    {
      name: "Shalini P.",
      location: "Rau",
      quote:
        "The new installation was neat, the outdoor unit was placed properly and the team explained the remote settings before leaving.",
      service: "AC installation",
      date: "Sample review · 2026",
    },
    {
      name: "Vikram T.",
      location: "Mhow",
      quote:
        "Clear communication about the travel window, and no surprise charge at the end. The demo flow feels like a real local business.",
      service: "AC service",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Air-conditioning care that explains itself",
    intro:
      "CoolNest is a fictional Indore AC service created to show how a local business can be clear, responsive and careful on site.",
    paragraphs: [
      "The demo is designed for the realities of Indian homes: compact outdoor-unit spaces, long cooling seasons, monsoon humidity and busy family schedules.",
      "The business, team, reviews and prices are sample content. The lead form and the automation behind it are real and can be tested end to end.",
    ],
    values: [
      {
        icon: "message",
        title: "Explain in plain language",
        description:
          "Show the fault, describe the options and avoid pressure or confusing technical claims.",
      },
      {
        icon: "clipboard",
        title: "Quote before work",
        description:
          "Share the price and scope before chargeable work begins, including parts and gas.",
      },
      {
        icon: "home",
        title: "Leave it clean",
        description:
          "Use a drop sheet, keep dust contained and leave the room ready to use.",
      },
      {
        icon: "badge",
        title: "Stay reachable",
        description:
          "Confirm the visit, share updates and follow up if the first repair does not solve the problem.",
      },
    ],
    team: [
      {
        name: "Arjun Mehta",
        role: "Service lead",
        initials: "AM",
        bio: "Sample profile. Focuses on diagnostics, clear repair options and customer walkthroughs.",
      },
      {
        name: "Sana Qureshi",
        role: "Installation lead",
        initials: "SQ",
        bio: "Sample profile. Plans installations around access, drainage and quiet operation.",
      },
      {
        name: "Kabir Rao",
        role: "Office coordinator",
        initials: "KR",
        bio: "Sample profile. Handles scheduling, WhatsApp updates and follow-up.",
      },
    ],
    credentials: [
      "Demo service registration: DEMO-MP-AC-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Technician ID checks: sample process",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "hvac-in-1",
      title: "Monsoon drainage check",
      description:
        "Illustrative indoor-unit detail showing a clear drain line and a protected wall position.",
      tag: "Maintenance",
      scene: { niche: "hvac", state: "after" },
    },
    {
      id: "hvac-in-2",
      title: "Before the service",
      description:
        "Dust, blocked filters and poor outdoor clearance — the issues a preventive visit looks for.",
      tag: "Maintenance",
      scene: { niche: "hvac", state: "before" },
    },
    {
      id: "hvac-in-3",
      title: "Cooling restored",
      description:
        "An illustrated cooling cycle with clean airflow and a verified indoor temperature.",
      tag: "AC repair",
      scene: { niche: "hvac", state: "after" },
    },
    {
      id: "hvac-in-4",
      title: "Airflow reset",
      description:
        "A visual comparison of restricted and balanced airflow in a compact apartment layout.",
      tag: "Airflow",
      scene: { niche: "hvac", state: "before" },
    },
  ],
  emergencyNote:
    "For a gas smell, sparks, smoke or flooding you cannot stop, leave the property and call local emergency services first. Do not wait for a demo appointment.",
  legalNote:
    "Service registration and insurance details on this site are placeholders. Verify credentials directly before hiring any technician. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Indore business · No real bookings or dispatches",
    disclaimer:
      "CoolNest AC Care is a fictional demo business. Names, team profiles, reviews, prices, registrations and service claims are sample content. The form is connected to a demonstration automation, not a real dispatch team.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "CoolNest AC Care — Indore AC Service Demo",
    description:
      "A fictional Indore AC service demo with repairs, installations, annual care plans and a working lead-capture flow.",
  },
  schemaType: "HVACBusiness",
  servicePricing: {
    "ac-repair": { priceFrom: "₹499 visit", priceNote: "Parts and gas quoted separately." },
    "ac-installation": { priceFrom: "Custom quote", priceNote: "Based on the site assessment." },
    "furnace-repair": { priceFrom: "₹499 visit", priceNote: "Heating is less common in Indore; demo service." },
    "heat-pump-service": { priceFrom: "₹699", priceNote: "Cooling and heating check." },
    "duct-cleaning": { priceFrom: "From ₹1,999", priceNote: "Depends on access and scope." },
    "maintenance-plans": { priceFrom: "₹1,499/yr", priceNote: "Demo plan pricing." },
  },
};
