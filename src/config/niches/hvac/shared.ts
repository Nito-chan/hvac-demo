import type { NicheShared } from "@/config/types";

const faqs = [
  {
    q: "How quickly can you get to my home?",
    a: "Most demo requests are scheduled for the same or next working day. Urgent no-cooling or no-heat calls are triaged first. The actual arrival window is confirmed by the office before a visit is booked.",
  },
  {
    q: "Do you charge for estimates?",
    a: "Replacement and larger installation estimates are quoted up front. Diagnostic visits carry a demo call-out fee that is credited toward the repair when you approve the work.",
  },
  {
    q: "What brands do you service?",
    a: "The demo covers all major split, window, ducted and heat-pump systems. For unusual or imported equipment, send the model number with your request so the team can confirm parts availability.",
  },
  {
    q: "Will you explain the repair before starting?",
    a: "Yes. The technician should show you the fault, explain the options in plain language and get approval before starting chargeable work.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes. Seasonal tune-ups, priority scheduling and filter reminders are available as demo plans. You can compare the options on the pricing page.",
  },
  {
    q: "What should I do while waiting for a technician?",
    a: "For no cooling, close curtains and use fans if it is safe. For a gas smell, sparks, smoke or flooding, leave the property and call your local emergency number first. Do not open or repair electrical or gas equipment yourself.",
  },
];

export const hvacShared: NicheShared = {
  niche: "hvac",
  theme: "hvac",
  nicheLabel: "Heating & Cooling",
  services: [
    {
      slug: "ac-repair",
      name: "AC repair",
      short: "No cooling, strange noises or water where it should not be.",
      description:
        "A focused diagnostic for split, window, ducted and heat-pump systems. We find the fault, explain the options and quote the repair before work begins.",
      icon: "snowflake",
      featured: true,
      highlights: [
        "Cooling and airflow diagnostics",
        "Electrical and capacitor checks",
        "Drainage and water-leak inspection",
        "Written repair quote before work",
      ],
      faqs: [
        {
          q: "My AC runs but does not cool. Can you fix it the same day?",
          a: "Often yes, if the fault is a common capacitor, thermostat or airflow issue and the required part is on the van. The office confirms the window before dispatch.",
        },
        {
          q: "Should I keep running the AC if it is leaking?",
          a: "Turn it off and place a towel under the indoor unit. A blocked drain or frozen coil can cause water damage if it keeps running.",
        },
      ],
    },
    {
      slug: "ac-installation",
      name: "AC installation",
      short: "A right-sized system, installed cleanly and explained properly.",
      description:
        "Replacement and new-installation quotes based on room size, insulation, usage and the condition of existing ductwork. The demo includes removal, set-up and a handover walkthrough.",
      icon: "wind",
      featured: true,
      highlights: [
        "Room-by-room load discussion",
        "Removal and disposal included",
        "Clean line-set and drain work",
        "Handover with filter and setting guidance",
      ],
      faqs: [
        {
          q: "How do I choose between a split and a ducted system?",
          a: "It depends on the layout, whether you already have ducts and how many rooms you need to treat. The site visit should compare running comfort, noise and installation constraints, not just headline price.",
        },
        {
          q: "Do you help with the old unit?",
          a: "Yes. The demo quote includes safe removal and disposal of the old outdoor and indoor units.",
        },
      ],
    },
    {
      slug: "furnace-repair",
      name: "Furnace & heating repair",
      short: "No heat, short cycling or a system that never settles.",
      description:
        "Heating diagnostics for gas, electric and heat-pump systems, with safety checks around gas connections, venting and electrical components.",
      icon: "flame",
      regions: ["us"],
      featured: true,
      highlights: [
        "Ignition and thermostat checks",
        "Gas and venting safety inspection",
        "Blower and airflow diagnosis",
        "Clear repair-or-replace guidance",
      ],
      faqs: [
        {
          q: "I smell gas. What should I do?",
          a: "Leave the property immediately. Do not switch anything on or off. Call your local gas emergency line or emergency services from a safe place. Do not wait for a demo appointment.",
        },
        {
          q: "Why does the furnace start and stop so often?",
          a: "Short cycling can come from a dirty filter, restricted airflow, a thermostat issue or an oversized system. It needs diagnosis rather than repeated resets.",
        },
      ],
    },
    {
      slug: "heat-pump-service",
      name: "Heat pump service",
      short: "Year-round comfort from one system, checked properly.",
      description:
        "Maintenance and repair for air-source heat pumps, including refrigerant checks, defrost behaviour, reversing valves and backup heat.",
      icon: "thermometer",
      featured: true,
      highlights: [
        "Heating and cooling mode test",
        "Defrost and reversing-valve check",
        "Refrigerant and electrical inspection",
        "Filter and outdoor-unit cleaning",
      ],
      faqs: [
        {
          q: "Why is my heat pump blowing cool air in winter?",
          a: "It may be in defrost mode, low on refrigerant, or relying on backup heat that is not working. The pattern matters: note how long it lasts and whether the outdoor unit is running.",
        },
        {
          q: "How often should a heat pump be serviced?",
          a: "Twice a year is a sensible demo recommendation: once before cooling season and once before heating season.",
        },
      ],
    },
    {
      slug: "duct-cleaning",
      name: "Duct cleaning & airflow",
      short: "Less dust, better balance and fewer rooms left behind.",
      description:
        "Duct and vent inspection with targeted cleaning, airflow balancing and practical advice on filters, returns and furniture placement.",
      icon: "fan",
      highlights: [
        "Supply and return inspection",
        "Targeted debris and dust removal",
        "Airflow balancing conversation",
        "Filter and maintenance guidance",
      ],
      faqs: [
        {
          q: "Will duct cleaning fix allergies?",
          a: "It can reduce accumulated dust, but it is not a medical treatment. Source control, filtration and ventilation matter just as much. The demo does not make health claims.",
        },
        {
          q: "How do I know if my ducts need cleaning?",
          a: "Visible debris around vents, persistent dust after cleaning, or a recent renovation are reasonable reasons to inspect. A quick camera check is better than guessing.",
        },
      ],
    },
    {
      slug: "maintenance-plans",
      name: "Maintenance plans",
      short: "A simple seasonal rhythm instead of emergency-only care.",
      description:
        "Planned tune-ups, filter reminders and priority booking designed to catch small issues before they become uncomfortable ones.",
      icon: "calendar",
      highlights: [
        "Seasonal tune-up visits",
        "Priority booking window",
        "Filter and coil check",
        "Written condition summary",
      ],
      faqs: [
        {
          q: "What is included in a maintenance visit?",
          a: "The demo visit covers filters, coils, drainage, electrical connections, thermostat operation and a written summary. Parts are quoted separately.",
        },
        {
          q: "Can I cancel a plan?",
          a: "Yes. The demo plans are month-to-month and can be cancelled before the next billing period. A real client contract would set out notice terms clearly.",
        },
      ],
    },
  ],
  featurePages: [
    {
      slug: "emergency-ac-repair",
      title: "Emergency AC repair",
      description:
        "What to check, what to switch off, and how to get a fast, honest diagnosis when the cooling stops working.",
      eyebrow: "When comfort cannot wait",
      blocks: [
        {
          type: "richText",
          eyebrow: "Before you call",
          title: "A five-minute check that can save a wasted visit",
          body: [
            "Check the thermostat is set to cool and the fan is on auto. Look for a tripped breaker, a blocked filter or ice on the indoor coil. If you see ice, switch the system off and let it thaw — running it frozen can damage the compressor.",
            "If the outdoor unit is silent, make a note of any hum, click or burning smell. If you smell burning or see smoke, switch off at the breaker only if it is safe to reach, then call an electrician or emergency services.",
          ],
          bullets: [
            "Thermostat mode, set point and batteries",
            "Air filter condition and airflow at vents",
            "Outdoor unit clearance and visible debris",
            "Water near the indoor unit",
          ],
        },
        {
          type: "process",
          eyebrow: "How the visit works",
          title: "From first call to a clear decision",
          steps: [
            {
              title: "Triage with the office",
              description:
                "The team confirms the symptoms, property type and access, then gives the earliest realistic demo window.",
            },
            {
              title: "Diagnose on site",
              description:
                "The technician checks electrical, refrigerant and airflow basics before quoting any repair.",
            },
            {
              title: "Approve the quote",
              description:
                "You see the finding and the price before chargeable work starts. No surprise add-ons.",
            },
            {
              title: "Test and hand over",
              description:
                "The system is run through a full cycle, the workspace is left tidy and the next step is explained.",
            },
          ],
        },
        {
          type: "comparison",
          eyebrow: "The difference",
          title: "Emergency care should feel calmer",
          beforeTitle: "Without a process",
          afterTitle: "With a clear process",
          before: [
            "Vague arrival windows and repeated calls",
            "A diagnosis you cannot see or understand",
            "Pressure to approve work on the spot",
            "No record of what was checked",
          ],
          after: [
            "A realistic window confirmed before dispatch",
            "The fault shown to you on site",
            "A written quote before chargeable work",
            "A short summary and next step",
          ],
        },
        {
          type: "faq",
          title: "Emergency questions",
          items: [
            {
              q: "Is this a real 24/7 emergency service?",
              a: "No. This is a fictional demo site. The emergency flow is a sample of how a real HVAC business could triage urgent requests.",
            },
            {
              q: "What counts as an emergency?",
              a: "No cooling during dangerous heat, no heat in freezing conditions, burning smells, sparks, gas smells or uncontrolled water. Gas, fire and electrical emergencies should go to local emergency services first.",
            },
          ],
        },
        {
          type: "cta",
          title: "Too hot to think straight?",
          description:
            "Send a demo request and the sample intake flow will show how an urgent lead is prioritised.",
          primaryLabel: "Request urgent help",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
    {
      slug: "maintenance-plans",
      title: "Maintenance plans",
      description:
        "A practical seasonal maintenance rhythm for your cooling and heating system, with clear demo pricing.",
      eyebrow: "Prevention over panic",
      regions: ["us", "in"],
      blocks: [
        {
          type: "richText",
          eyebrow: "Why plan ahead",
          title: "Small checks now, fewer surprises later",
          body: [
            "A maintenance visit is not just a filter change. It is a chance to look at drainage, electrical connections, coil condition and airflow while the system is still working normally. That makes it easier to plan a repair instead of reacting to a breakdown.",
            "The demo plan is intentionally simple: a seasonal visit, a written summary and priority booking if something goes wrong between visits.",
          ],
          bullets: [
            "Pre-season cooling and heating checks",
            "Filter and drain guidance",
            "A written condition summary",
            "Priority booking for plan members",
          ],
        },
        {
          type: "checklist",
          eyebrow: "What we check",
          title: "The visit, in plain language",
          items: [
            "Thermostat settings and temperature response",
            "Air filter condition and indoor airflow",
            "Condensate drain and visible water risk",
            "Outdoor unit clearance, fan and coil",
            "Electrical connections and capacitor condition",
            "Refrigerant and heat-pump operating checks where applicable",
            "A short summary of what to watch before the next season",
          ],
          note: "The exact checklist depends on the system type and safe access. The demo does not promise a specific repair outcome.",
        },
        {
          type: "faq",
          title: "Plan questions",
          items: [
            {
              q: "Is a maintenance plan required for a repair?",
              a: "No. Repairs are available without a plan. The plan is for people who want a predictable seasonal check and priority booking.",
            },
            {
              q: "Do plans include parts?",
              a: "No. The demo plan covers labour for the scheduled visit. Parts and additional repairs are quoted separately.",
            },
          ],
        },
        {
          type: "cta",
          title: "Make the next season less reactive",
          description:
            "Compare the demo plans, or ask for a one-off tune-up first.",
          primaryLabel: "Compare plans",
          secondaryLabel: "Book a tune-up",
        },
      ],
    },
    {
      slug: "indoor-air-quality",
      title: "Indoor air quality",
      description:
        "Practical, hype-free ways to reduce dust, manage humidity and improve ventilation at home.",
      eyebrow: "Comfort is also air",
      blocks: [
        {
          type: "richText",
          eyebrow: "Start with the source",
          title: "Better air is usually a sequence, not a gadget",
          body: [
            "Before adding equipment, look at the basics: filtration, moisture, ventilation and the source of the dust. A well-fitted filter changed on time often does more than an expensive add-on with no maintenance plan.",
            "The demo team can inspect the return-air path, check for obvious gaps and talk through humidity and ventilation options. It will not make medical claims or promise allergy relief.",
          ],
          bullets: [
            "Filter fit, rating and change rhythm",
            "Bathroom and kitchen ventilation",
            "Humidity and condensation clues",
            "Duct gaps, returns and furniture blockages",
          ],
        },
        {
          type: "featureGrid",
          eyebrow: "Practical options",
          title: "What might help — and when",
          items: [
            {
              icon: "wind",
              title: "Ventilation",
              description:
                "A controlled path for stale, humid air is often the most overlooked comfort upgrade.",
            },
            {
              icon: "droplets",
              title: "Humidity control",
              description:
                "Keeping indoor moisture in a sensible range helps comfort and reduces condensation risk.",
            },
            {
              icon: "fan",
              title: "Airflow balance",
              description:
                "Closing off rooms or blocking returns can starve the system of air and create hot or cold spots.",
            },
            {
              icon: "clipboard",
              title: "A maintenance rhythm",
              description:
                "Clean filters, clear drains and a seasonal check keep the system working as designed.",
            },
          ],
        },
        {
          type: "faq",
          title: "Air quality questions",
          items: [
            {
              q: "Do you install air purifiers?",
              a: "The demo focuses on filtration, ventilation and humidity conversations. Any specific product recommendation would depend on a site assessment and a clear maintenance plan.",
            },
            {
              q: "Will this help with allergies?",
              a: "The demo does not make health claims. If allergies are a concern, speak to a medical professional and treat indoor air improvements as one part of the picture.",
            },
          ],
        },
        {
          type: "cta",
          title: "Start with a walkthrough, not a sales pitch",
          description:
            "Ask for a demo air-quality inspection and get a plain-language list of priorities.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "See services",
        },
      ],
    },
  ],
  faqs,
};
