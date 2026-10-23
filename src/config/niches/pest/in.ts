import { demoPhone, whatsappHref } from "@/config/phone";
import type { RegionDetails } from "@/config/types";

const phone = demoPhone("DEMO_PHONE_IN", "+91 90000 00000");

export const pestIn: RegionDetails = {
  region: "in",
  regionLabel: "India",
  currency: "INR",
  locale: "en-IN",
  timeZone: "Asia/Kolkata",
  business: {
    name: "SafeHome Pest Solutions",
    shortName: "SafeHome",
    tagline: "Calm, practical pest control for Lucknow homes.",
    description:
      "A fictional Lucknow pest-control company built to demonstrate a clear, prevention-first approach for termites, rodents, bed bugs and everyday pests.",
  },
  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    whatsappHref: whatsappHref(phone),
    email: "hello@safehome.example",
    city: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    country: "India",
    countryCode: "IN",
    hours: "Mon–Sun, 8am–8pm",
    emergencyHours: "Urgent pest triage (demo)",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Lucknow%2C+Uttar+Pradesh",
  },
  hero: {
    eyebrow: "Lucknow pest control",
    title: "A healthier home, without the worry.",
    subtitle:
      "Termite, rodent, bed bug and general pest care with a proper inspection, safe treatment and a clear follow-up plan. This is an interactive demo.",
    primaryLabel: "Book an inspection",
    secondaryLabel: "See pest services",
  },
  trustPoints: [
    "Clear activity assessment",
    "Safe, targeted treatment",
    "Written aftercare",
    "WhatsApp updates",
  ],
  areas: [
    {
      slug: "gomti-nagar",
      name: "Gomti Nagar",
      state: "Uttar Pradesh",
      stateCode: "UP",
      featured: true,
      description:
        "Apartments and independent homes near the river can face termite, rodent and mosquito pressure. The demo inspection checks moisture, entry points and the exterior perimeter.",
      neighborhoods: ["Vibhuti Khand", "Viraj Khand", "Patrakarpuram", "Gomti Nagar Extension"],
      postalCodes: ["226010", "226016", "226018"],
    },
    {
      slug: "hazratganj",
      name: "Hazratganj",
      state: "Uttar Pradesh",
      stateCode: "UP",
      featured: true,
      description:
        "Older central properties often have hidden gaps and mixed construction. The demo assessment looks at timber contact, drainage and kitchen entry points.",
      neighborhoods: ["Hazratganj", "Lalbagh", "Sapru Marg"],
      postalCodes: ["226001"],
    },
    {
      slug: "aliganj",
      name: "Aliganj",
      state: "Uttar Pradesh",
      stateCode: "UP",
      description:
        "A mix of family homes and older buildings. The demo team checks the roof space, store rooms and exterior for rodent and termite activity.",
      neighborhoods: ["Aliganj", "Jankipuram", "Mahanagar"],
      postalCodes: ["226024", "226021"],
    },
    {
      slug: "indira-nagar",
      name: "Indira Nagar",
      state: "Uttar Pradesh",
      stateCode: "UP",
      description:
        "A large residential zone with apartments and independent houses. The office confirms access and treatment areas before the visit.",
      neighborhoods: ["Indira Nagar", "Munshipulia", "Bhootnath"],
      postalCodes: ["226016", "226010"],
    },
    {
      slug: "jankipuram",
      name: "Jankipuram",
      state: "Uttar Pradesh",
      stateCode: "UP",
      description:
        "Growing residential pockets with a mix of new and older homes. The demo plan includes prevention advice for kitchens, stores and drainage.",
      neighborhoods: ["Jankipuram", "Aliganj", "Sitapur Road"],
      postalCodes: ["226021", "226031"],
    },
    {
      slug: "alambagh",
      name: "Alambagh",
      state: "Uttar Pradesh",
      stateCode: "UP",
      description:
        "Busy family neighborhoods and commercial streets. The demo team plans discreet visits and clear preparation instructions.",
      neighborhoods: ["Alambagh", "Aashiana", "Krishna Nagar"],
      postalCodes: ["226005", "226012"],
    },
  ],
  plans: [
    {
      name: "One-time treatment",
      price: "₹899",
      period: "one visit",
      description:
        "A targeted treatment for one covered pest issue, with a written aftercare summary.",
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
      price: "₹1,999",
      period: "per year",
      description:
        "Scheduled general pest protection with priority support for common household pests.",
      features: [
        "Quarterly scheduled visits",
        "Interior treatment if activity appears",
        "Entry-point recommendations",
        "Priority WhatsApp support",
      ],
      highlighted: true,
      cta: "Join Home Shield",
      note: "Demo plan for one property.",
    },
    {
      name: "Complete Home",
      price: "₹3,499",
      period: "per year",
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
      name: "Anjali M.",
      location: "Gomti Nagar, Lucknow",
      quote:
        "They found the termite trail near the skirting and explained why the damp patch mattered. The inspection was careful, not dramatic.",
      service: "Termite control",
      date: "Sample review · 2026",
    },
    {
      name: "Ramesh K.",
      location: "Hazratganj",
      quote:
        "The kitchen had a cockroach problem that kept coming back. This time they checked the drain and sealed the entry points as well as treating.",
      service: "General pest",
      date: "Sample review · 2026",
    },
    {
      name: "Sana P.",
      location: "Aliganj",
      quote:
        "Clear preparation instructions for the bed bug treatment. They did not make us throw out half the bedroom, which was a relief.",
      service: "Bed bugs",
      date: "Sample review · 2026",
    },
    {
      name: "Vivek S.",
      location: "Indira Nagar",
      quote:
        "The rodent issue in the roof space was handled with traps and exclusion, not poison. The team explained every step.",
      service: "Rodent control",
      date: "Sample review · 2026",
    },
    {
      name: "Farah A.",
      location: "Jankipuram",
      quote:
        "They treated the outdoor sitting area and gave us a simple checklist for standing water. The mosquito pressure dropped noticeably.",
      service: "Mosquito control",
      date: "Sample review · 2026",
    },
    {
      name: "Deepak R.",
      location: "Alambagh",
      quote:
        "The visit was discreet, the price was clear and the follow-up happened when they said it would. Exactly what a local service should feel like.",
      service: "Home Shield",
      date: "Sample review · 2026",
    },
  ],
  about: {
    title: "Pest care that protects the household",
    intro:
      "SafeHome is a fictional Lucknow pest-control company created to show how a calm, prevention-first service can feel.",
    paragraphs: [
      "Pests are unsettling, but the response does not need to be dramatic. The demo is built around a clear inspection, a safe targeted treatment and a practical plan for keeping the problem from returning.",
      "The business, team, reviews and prices are sample content. The form and automation are real and testable.",
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
          "Explain the product, protect children and pets, and give clear re-entry instructions.",
      },
      {
        icon: "clipboard",
        title: "Write it down",
        description:
          "Aftercare, follow-up timing and prevention steps should be clear and easy to find.",
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
        name: "Amit Srivastava",
        role: "Field lead",
        initials: "AS",
        bio: "Sample profile. Inspections, general pest treatment and exclusion planning.",
      },
      {
        name: "Nazia Khan",
        role: "Termite specialist",
        initials: "NK",
        bio: "Sample profile. Termite inspections, moisture assessment and treatment plans.",
      },
      {
        name: "Harsh Vardhan",
        role: "Office coordinator",
        initials: "HV",
        bio: "Sample profile. Scheduling, WhatsApp updates and follow-up.",
      },
    ],
    credentials: [
      "Demo pest-control registration: DEMO-UP-PC-0000 (placeholder)",
      "Liability insurance: demo certificate available on request",
      "Applicator certification: demo placeholder",
      "All team profiles and credentials are sample content",
    ],
  },
  gallery: [
    {
      id: "pest-in-1",
      title: "Termite path",
      description:
        "Illustrative skirting detail showing a termite trail and a damp patch that needs attention.",
      tag: "Termite",
      scene: { niche: "pest", state: "before" },
    },
    {
      id: "pest-in-2",
      title: "Protected perimeter",
      description:
        "A sealed exterior line and a dry, monitored foundation zone.",
      tag: "Exclusion",
      scene: { niche: "pest", state: "after" },
    },
    {
      id: "pest-in-3",
      title: "Kitchen entry sealed",
      description:
        "A clean kitchen drain and sealed service penetration after treatment.",
      tag: "General pest",
      scene: { niche: "pest", state: "after" },
    },
    {
      id: "pest-in-4",
      title: "Before treatment",
      description:
        "Clutter, moisture and an open service gap — the conditions that invite pests indoors.",
      tag: "Inspection",
      scene: { niche: "pest", state: "before" },
    },
  ],
  emergencyNote:
    "If you see a snake, a wasp nest near a walkway or any pest that poses an immediate danger, keep people and pets away and call the appropriate local service. Do not handle it yourself.",
  legalNote:
    "Service registration and insurance details on this site are placeholders. Verify credentials directly before hiring any pest-control provider. This is a fictional demo business.",
  demo: {
    banner:
      "Demo site · Fictional Lucknow business · No real bookings or dispatches",
    disclaimer:
      "SafeHome Pest Solutions is a fictional demo business. Names, team profiles, reviews, prices, registrations and service claims are sample content. The form is connected to a demonstration automation, not a real pest-control office.",
    formNote:
      "Demo form: your request is validated and sent to a sample lead workflow. It does not create a real booking.",
  },
  seo: {
    title: "SafeHome Pest Solutions — Lucknow Pest Demo",
    description:
      "A fictional Lucknow pest-control demo with termite, bed bug, rodent and mosquito services plus a working lead-capture flow.",
  },
  schemaType: "PestControlService",
  servicePricing: {
    "general-pest": { priceFrom: "₹899", priceNote: "One targeted treatment." },
    "termite-control": { priceFrom: "From ₹1,999", priceNote: "Inspection and scope first." },
    "bed-bugs": { priceFrom: "From ₹2,499", priceNote: "Preparation and follow-up included." },
    "rodent-control": { priceFrom: "From ₹1,299", priceNote: "Exclusion quoted separately." },
    "mosquito-control": { priceFrom: "From ₹999", priceNote: "Seasonal plan available." },
    "commercial-pest": { priceFrom: "Custom quote", priceNote: "Scheduled plan." },
  },
};
