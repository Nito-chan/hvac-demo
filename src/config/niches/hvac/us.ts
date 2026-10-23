import { demoPhone } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_US", "(816) 555-0142");

export const hvacUs: RegionDetails = {
  region: "us",
  regionLabel: "United States",
  currency: "USD",
  locale: "en-US",
  timeZone: "America/Chicago",
  business: {
    name: "NorthPeak Heating & Air",
    shortName: "NorthPeak",
    tagline: "Heating, cooling and cleaner air for Kansas City homes.",
    description:
      "A fictional Kansas City HVAC company built to demonstrate a clear, trustworthy service experience — from the first request to the follow-up.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    email: "hello@northpeak.example",
    city: "Kansas City",
    state: "Missouri",
    stateCode: "MO",
    country: "United States",
    countryCode: "US",
    hours: "Mon–Sat, 8am–8pm",
    emergencyHours: "Urgent requests triaged 24/7 (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Kansas+City%2C+MO",
  },
  hero: {
    eyebrow: "Kansas City heating + cooling",
    title: "Your home, comfortable again.",
    subtitle:
      "Straight answers, clear quotes and tidy work from a local team that treats your home like its own. This is a fully interactive demo site.",
    primaryLabel: "Book a visit",
    secondaryLabel: "Explore services",
  },
  trustPoints: [
    "Clear arrival windows",
    "Upfront, written quotes",
    "Respectful, tidy techs",
    "Follow-up after the visit",
  ],
  areas: [
    {
      slug: "kansas-city",
      name: "Kansas City",
      state: "Missouri",
      stateCode: "MO",
      featured: true,
      description:
        "From older homes near the plaza to new builds in the Northland, Kansas City properties ask different things of an HVAC system. The demo team plans around access, ductwork and how each room is actually used.",
      neighborhoods: ["Plaza", "Brookside", "Northland", "Waldo", "Downtown"],
      postalCodes: ["64111", "64112", "64113", "64114", "64116"],
    },
    {
      slug: "overland-park",
      name: "Overland Park",
      state: "Kansas",
      stateCode: "KS",
      featured: true,
      description:
        "Overland Park has a mix of family homes, townhomes and newer builds. Zoning, upstairs comfort and summer humidity are common conversation starters.",
      neighborhoods: ["Downtown OP", "Deer Creek", "Blue Valley", "Lionsgate"],
      postalCodes: ["66210", "66212", "66213", "66221"],
    },
    {
      slug: "leawood",
      name: "Leawood",
      state: "Kansas",
      stateCode: "KS",
      description:
        "Larger homes and mature trees can mean complex duct runs and shaded outdoor units. The demo visit includes airflow and outdoor clearance checks.",
      neighborhoods: ["Leawood West", "Hallbrook", "Ironwoods"],
      postalCodes: ["66206", "66209", "66211"],
    },
    {
      slug: "olathe",
      name: "Olathe",
      state: "Kansas",
      stateCode: "KS",
      description:
        "Newer subdivisions and growing families often need right-sized replacements rather than a like-for-like swap. The demo quote starts with room-by-room comfort needs.",
      neighborhoods: ["Cedar Creek", "Ravenwood", "Forest View"],
      postalCodes: ["66061", "66062", "66063"],
    },
    {
      slug: "independence",
      name: "Independence",
      state: "Missouri",
      stateCode: "MO",
      description:
        "Older housing stock and finished basements can hide ductwork quirks. The team checks access and existing equipment before recommending a path.",
      neighborhoods: ["Historic Independence", "Blue Springs border", "Selsa"],
      postalCodes: ["64050", "64052", "64055", "64057"],
    },
    {
      slug: "shawnee",
      name: "Shawnee",
      state: "Kansas",
      stateCode: "KS",
      description:
        "From older ranch homes to newer two-storeys, Shawnee requests often centre on uneven temperatures and ageing equipment.",
      neighborhoods: ["Old Shawnee", "Monticello", "Clear Creek"],
      postalCodes: ["66203", "66216", "66226"],
    },
  ],
  plans: [
    {
      name: "Seasonal tune-up",
      price: "$89",
      period: "one visit",
      description:
        "A focused pre-season check for one system, with a written summary of anything worth watching.",
      features: [
        "Filter, coil and drain check",
        "Electrical and thermostat basics",
        "Outdoor unit clearance check",
        "Written condition summary",
      ],
      cta: "Book a tune-up",
      note: "Demo price. Parts and repairs are quoted separately.",
    },
    {
      name: "Comfort Club",
      price: "$19",
      period: "per month",
      description:
        "Two seasonal visits and priority booking — a simple rhythm for one heating and cooling system.",
      features: [
        "Two seasonal maintenance visits",
        "Priority booking window",
        "Filter reminder",
        "10% demo discount on repairs",
      ],
      highlighted: true,
      cta: "Join Comfort Club",
      note: "Demo plan. Cancel before the next billing period.",
    },
    {
      name: "Priority Comfort",
      price: "$39",
      period: "per month",
      description:
        "For multi-system homes or anyone who wants the fastest available demo window when something fails.",
      features: [
        "Everything in Comfort Club",
        "Two systems covered",
        "Front-of-queue demo booking",
        "Annual efficiency walkthrough",
      ],
      cta: "Ask about Priority",
      note: "Demo plan. Final coverage is confirmed in writing.",
    },
  ],
  reviews: [
    {
      name: "Maya R.",
      location: "Brookside, Kansas City",
      quote:
        "The technician showed me the failed capacitor, explained the price and had the AC running again before lunch. No pressure, no mystery line items.",
      service: "AC repair",
      date: "Sample review · 2026",
    },
    {
      name: "Daniel K.",
      location: "Overland Park",
      quote:
        "Our upstairs never cooled properly. Instead of selling us a bigger unit, they found a return-air problem and fixed that first. That honesty earned the replacement job later.",
      service: "Airflow + AC installation",
      date: "Sample review · 2026",
    },
    {
      name: "Priya S.",
      location: "Leawood",
      quote:
        "Clear text updates, shoe covers, and a tidy work area. The small things made the visit feel considered.",
      service: "Heat pump service",
      date: "Sample review · 2026",
    },
    {
      name: "Tom W.",
      location: "Olathe",
      quote:
        "The maintenance visit caught a cracked drain pan before it became a ceiling repair. The report was plain English and the next step was obvious.",
      service: "Maintenance plan",
      date: "Sample review · 2026",
    },
    {
      name: "Renee L.",
      location: "Independence",
      quote:
        "I appreciated being told what did not need replacing. The quote for the furnace repair was lower than I expected.",
      service: "Furnace repair",
      date: "Sample review · 2026",
    },
    {
      name: "Chris B.",
      location: "Shawnee",
      quote:
        "Booked online, got a realistic window, and the tech called before arriving. The demo flow is exactly what I want from a local service business.",
      service: "AC tune-up",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "A local HVAC team, without the hard sell",
    intro:
      "NorthPeak is a fictional Kansas City heating and cooling company created to demonstrate how a clear service process can feel.",
    paragraphs: [
      "The demo is built around a simple idea: most homeowners do not want a lecture about equipment. They want to know what is wrong, what it will cost, and when someone will arrive.",
      "Every page is sample content. The business, team, reviews and prices are fictional, but the lead form, region switching and automation behind the scenes are real and testable.",
    ],
    values: [
      {
        icon: "message",
        title: "Explain the why",
        description:
          "Show the fault, describe the options and leave room for questions before asking for a decision.",
      },
      {
        icon: "clipboard",
        title: "Quote before work",
        description:
          "No chargeable work starts without an approved, written scope and price.",
      },
      {
        icon: "home",
        title: "Respect the home",
        description:
          "Use floor protection, keep the work area tidy and leave the property as found.",
      },
      {
        icon: "badge",
        title: "Follow through",
        description:
          "Confirm the visit, call before arrival and check that the fix actually solved the problem.",
      },
    ],
    team: [
      {
        name: "Alex Mercer",
        role: "Service lead",
        initials: "AM",
        bio: "Sample profile. Focuses on diagnostics, clear repair options and homeowner walkthroughs.",
      },
      {
        name: "Jordan Hale",
        role: "Installation lead",
        initials: "JH",
        bio: "Sample profile. Plans replacements around airflow, access and the way each home is used.",
      },
      {
        name: "Sam Rivera",
        role: "Office coordinator",
        initials: "SR",
        bio: "Sample profile. Handles scheduling, arrival windows and follow-up after the visit.",
      },
    ],
    credentials: [
      "State licence: DEMO-MO-HVAC-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Refrigerant handling: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "hvac-us-1",
      title: "Airflow reset",
      description:
        "Illustrative diagram of a restricted return path before and after a balanced airflow check.",
      tag: "Airflow",
      scene: { niche: "hvac", state: "before" },
    },
    {
      id: "hvac-us-2",
      title: "Cooling restored",
      description:
        "A clean outdoor unit, clear service access and a verified cooling cycle.",
      tag: "AC repair",
      scene: { niche: "hvac", state: "after" },
    },
    {
      id: "hvac-us-3",
      title: "Tidy condensate line",
      description:
        "Illustrative drainage detail showing a clear line and a protected indoor install.",
      tag: "Maintenance",
      scene: { niche: "hvac", state: "after" },
    },
    {
      id: "hvac-us-4",
      title: "Before the tune-up",
      description:
        "A visual reminder of the dust, blocked filters and clearance issues a seasonal visit looks for.",
      tag: "Maintenance",
      scene: { niche: "hvac", state: "before" },
    },
  ],
  emergencyNote:
    "For a gas smell, smoke, sparks or flooding you cannot stop, leave the property and call your local emergency number first. Do not wait for a demo appointment.",
  legalNote:
    "Licence and insurance details on this site are placeholders. Verify credentials directly before hiring any contractor. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Kansas City business · No real bookings or dispatches",
    disclaimer:
      "NorthPeak Heating & Air is a fictional demo business. Names, team profiles, reviews, prices, licence details and service claims are sample content. The form is connected to a demonstration automation, not a real dispatch team.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "NorthPeak Heating & Air — Kansas City HVAC Demo",
    description:
      "A fictional Kansas City HVAC demo with AC repair, heating service, maintenance plans and a working lead-capture flow.",
  },
  schemaType: "HVACBusiness",
  servicePricing: {
    "ac-repair": { priceFrom: "$89 diagnostic", priceNote: "Credited toward approved repair." },
    "ac-installation": { priceFrom: "Custom quote", priceNote: "Based on a site assessment." },
    "furnace-repair": { priceFrom: "$89 diagnostic", priceNote: "Parts quoted separately." },
    "heat-pump-service": { priceFrom: "$129", priceNote: "Heating and cooling check." },
    "duct-cleaning": { priceFrom: "From $249", priceNote: "Depends on access and scope." },
    "maintenance-plans": { priceFrom: "$19/mo", priceNote: "Demo plan pricing." },
  },
};
