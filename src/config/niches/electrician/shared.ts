import type { NicheShared } from "@/config/types";

export const electricianShared: NicheShared = {
  niche: "electrician",
  theme: "electrician",
  nicheLabel: "Electrical",
  services: [
    {
      slug: "electrical-repair",
      name: "Electrical repair",
      short: "Dead outlets, tripping breakers, flickering lights and burning smells.",
      description:
        "Safe fault-finding for outlets, circuits, switches and fixtures, with a clear explanation of the cause and the repair scope.",
      icon: "zap",
      featured: true,
      highlights: [
        "Circuit and outlet fault-finding",
        "Breaker trip diagnosis",
        "Switch and fixture repair",
        "Safety check after the repair",
      ],
      faqs: [
        {
          q: "My breaker keeps tripping. Can I just reset it?",
          a: "Reset it once. If it trips again, stop and get it checked. Repeated tripping means the circuit is overloaded or there is a fault.",
        },
        {
          q: "I smell burning near an outlet. What should I do?",
          a: "Switch off the circuit at the breaker only if it is safe to reach, and keep people away. If there is smoke or fire, leave and call emergency services. Do not keep using the outlet.",
        },
      ],
    },
    {
      slug: "panel-upgrade",
      name: "Panel & DB upgrade",
      short: "An older board that is full, noisy or hard to isolate safely.",
      description:
        "Electrical panel and distribution-board assessment and upgrade planning, with proper labelling, circuit separation and safety testing.",
      icon: "gauge",
      featured: true,
      highlights: [
        "Load and circuit assessment",
        "Board replacement planning",
        "RCD/GFCI protection review",
        "Clear circuit labelling",
      ],
      faqs: [
        {
          q: "How do I know if my panel needs an upgrade?",
          a: "Common signs include a full board with no space for new circuits, repeated tripping, warm or discoloured breakers, or a lack of modern residual-current protection. It needs an on-site assessment.",
        },
        {
          q: "Will I lose power during the upgrade?",
          a: "Yes, for part of the day. The electrician should explain the planned outage and test the new board before restoring supply.",
        },
      ],
    },
    {
      slug: "lighting-installation",
      name: "Lighting installation",
      short: "New fixtures, recessed lights and better room-by-room lighting.",
      description:
        "Lighting design conversations and installation for indoor and outdoor fixtures, with attention to load, dimming compatibility and safe access.",
      icon: "lightbulb",
      featured: true,
      highlights: [
        "Fixture and location planning",
        "Dimmer compatibility check",
        "Indoor and outdoor installation",
        "Clean ceiling and wall finish",
      ],
      faqs: [
        {
          q: "Can I use any dimmer with LED lights?",
          a: "No. Dimmer and LED compatibility matters. The wrong pairing can cause flicker, buzz or a limited dimming range.",
        },
        {
          q: "Do you repair the ceiling after installation?",
          a: "The demo scope includes neat cut-outs and basic making good. Plastering and painting can be quoted separately where needed.",
        },
      ],
    },
    {
      slug: "ev-charger",
      name: "EV charger installation",
      short: "A safe, dedicated charging point instead of an extension lead.",
      description:
        "Home EV charger installation planning, including supply capacity, cable route, protection and the practical charging location.",
      icon: "plug",
      featured: true,
      highlights: [
        "Supply and load assessment",
        "Dedicated circuit and protection",
        "Cable route planning",
        "Charger commissioning and handover",
      ],
      faqs: [
        {
          q: "Can I charge an EV from a normal socket?",
          a: "It is slow and not ideal for regular charging. A dedicated circuit with the correct protection is safer and more practical. The installation must match the charger and the supply.",
        },
        {
          q: "Do I need a permit?",
          a: "Requirements vary by location and property type. A real installer should confirm the local rules before work starts.",
        },
      ],
    },
    {
      slug: "safety-inspection",
      name: "Electrical safety inspection",
      short: "A room-by-room check before a renovation, purchase or new appliance.",
      description:
        "A documented visual inspection of outlets, switches, the board, earthing and visible wiring, with a prioritized list of concerns.",
      icon: "shield",
      featured: true,
      highlights: [
        "Board and earthing check",
        "Outlet and switch inspection",
        "Visible wiring review",
        "Written priority list",
      ],
      faqs: [
        {
          q: "Is this the same as a formal electrical certificate?",
          a: "No. The demo inspection is a practical visual assessment, not a regulated compliance certificate. Requirements vary by jurisdiction.",
        },
        {
          q: "How often should a home be inspected?",
          a: "A sensible demo recommendation is every few years, after a major renovation, or before adding a high-load appliance. Local rules may require more.",
        },
      ],
    },
    {
      slug: "inverter-wiring",
      name: "Inverter & backup wiring",
      short: "A safer backup supply for the appliances that matter.",
      description:
        "Inverter and UPS wiring for selected circuits, with proper isolation, ventilation and load planning.",
      icon: "cable",
      regions: ["in"],
      highlights: [
        "Backup circuit planning",
        "Inverter and battery placement",
        "Isolation and changeover check",
        "Load and ventilation review",
      ],
      faqs: [
        {
          q: "Can one inverter run the whole house?",
          a: "Usually not without a much larger system. A dedicated backup circuit for lights, fans and a few key appliances is more practical.",
        },
        {
          q: "Why does the inverter wiring need a separate breaker?",
          a: "Proper isolation and protection make maintenance safer and help prevent back-feed. The exact arrangement depends on the installation.",
        },
      ],
    },
    {
      slug: "ceiling-fan",
      name: "Fan & fixture installation",
      short: "Fans, exhausts and heavy fixtures mounted safely.",
      description:
        "Installation of ceiling fans, exhaust fans and heavier light fixtures with secure mounting and correct electrical connections.",
      icon: "fan",
      regions: ["in"],
      highlights: [
        "Secure ceiling mounting",
        "Regulator and switch wiring",
        "Exhaust fan installation",
        "Balance and noise check",
      ],
      faqs: [
        {
          q: "Why is my ceiling fan wobbling?",
          a: "It may be an unbalanced blade, a loose mount or a bent blade. Stop using it if the mount feels loose and get it checked.",
        },
        {
          q: "Can you install a fan where there is only a light point?",
          a: "Often yes, if the point is correctly rated and the ceiling can support the fan. The electrician should check both before installing.",
        },
      ],
    },
  ],
  featurePages: [
    {
      slug: "panel-upgrades",
      title: "Panel & DB upgrades",
      description:
        "Signs your board is overdue, what an upgrade involves and the questions to ask before the power goes off.",
      eyebrow: "A safer foundation",
      blocks: [
        {
          type: "richText",
          eyebrow: "Know the signs",
          title: "When a board stops being merely old",
          body: [
            "Age alone is not the whole story. A board that is full, has warm or discoloured breakers, trips repeatedly, or cannot isolate circuits clearly is a practical concern. So is a lack of modern residual-current protection.",
            "An upgrade is not just a bigger box. It is a chance to separate circuits properly, label them clearly, test the earthing and make future maintenance safer.",
          ],
          bullets: [
            "No spare ways for new circuits",
            "Warm or discoloured breakers",
            "Repeated unexplained tripping",
            "Unclear or missing labels",
            "No RCD/GFCI protection",
          ],
        },
        {
          type: "process",
          eyebrow: "The work",
          title: "Assess, plan, isolate, test",
          steps: [
            {
              title: "Load and circuit assessment",
              description:
                "Document the existing board, circuits and high-load appliances before specifying the replacement.",
            },
            {
              title: "Plan the outage",
              description:
                "Agree a safe working window and what will be without power while the board is changed.",
            },
            {
              title: "Install and label",
              description:
                "Fit the new board, separate circuits, add protection and label every way clearly.",
            },
            {
              title: "Test and hand over",
              description:
                "Test protection, restore supply and walk through the new layout with the homeowner.",
            },
          ],
        },
        {
          type: "faq",
          title: "Panel questions",
          items: [
            {
              q: "Can I add a circuit without upgrading the panel?",
              a: "Sometimes, if there is spare capacity and the existing protection is suitable. That must be confirmed on site, not assumed.",
            },
            {
              q: "Is a bigger panel always better?",
              a: "No. The right size depends on the load, the circuits you need and the space available. A well-planned smaller board can be better than an oversized one.",
            },
          ],
        },
        {
          type: "cta",
          title: "Board full? Plan the upgrade before it fails.",
          description:
            "Book a demo electrical assessment and get a clear, prioritized scope.",
          primaryLabel: "Book an assessment",
          secondaryLabel: "See electrical services",
        },
      ],
    },
    {
      slug: "ev-charger-installation",
      title: "EV charger installation",
      description:
        "What a safe home charging setup needs, from supply capacity to cable route and protection.",
      eyebrow: "Charge at home, safely",
      blocks: [
        {
          type: "richText",
          eyebrow: "Start with the supply",
          title: "A charger is only as good as its circuit",
          body: [
            "The charger is the visible part; the circuit and protection do the real work. The assessment needs to confirm available capacity, the cable route, the charger location and how the cable will be protected.",
            "A dedicated circuit avoids overloading existing outlets and gives the charger the right protection. The installer should commission the charger and explain the charging limits.",
          ],
          bullets: [
            "Supply capacity and load check",
            "Dedicated protected circuit",
            "Cable route and mounting point",
            "Charger commissioning",
            "Clear handover on charging limits",
          ],
        },
        {
          type: "checklist",
          eyebrow: "Before you buy",
          title: "Practical questions",
          items: [
            "Where will the car normally park?",
            "How long is the cable, and can it reach?",
            "Is the charger compatible with the vehicle?",
            "Is there capacity for the charging load?",
            "Does the cable route need conduit or trenching?",
            "What protection and isolation will be fitted?",
            "Who handles commissioning and warranty?",
          ],
          note: "The demo does not provide a permit or compliance determination. Local rules apply.",
        },
        {
          type: "cta",
          title: "Planning a home charger?",
          description:
            "Send a demo request with your vehicle and parking setup so the sample flow captures the right details.",
          primaryLabel: "Request a quote",
          secondaryLabel: "Compare plans",
        },
      ],
    },
    {
      slug: "safety-inspections",
      title: "Electrical safety inspections",
      description:
        "A practical, room-by-room look at outlets, switches, earthing and the board — without alarmist language.",
      eyebrow: "Before something feels wrong",
      blocks: [
        {
          type: "richText",
          eyebrow: "What gets checked",
          title: "A visual inspection with a priority list",
          body: [
            "The inspection looks at what can be seen safely: outlets, switches, visible wiring, the board, earthing and the condition of high-load appliance connections. It does not replace a regulated compliance test.",
            "The output is a short report with clear priorities: what needs attention now, what can be monitored and what is fine. That is more useful than a page of jargon.",
          ],
          bullets: [
            "Warm, discoloured or damaged outlets",
            "Loose switches and fixtures",
            "Board labels and spare capacity",
            "Visible cable damage",
            "Earthing and protection basics",
            "High-load appliance connections",
          ],
        },
        {
          type: "comparison",
          eyebrow: "The difference",
          title: "A report you can act on",
          beforeTitle: "A vague warning",
          afterTitle: "A clear priority",
          before: [
            "Everything is dangerous, replace it all",
            "No photos or measurements",
            "No distinction between urgent and cosmetic",
            "Pressure to decide on the spot",
          ],
          after: [
            "Findings separated by urgency",
            "Photos and a plain-language summary",
            "A clear next step for each concern",
            "Time to compare options",
          ],
        },
        {
          type: "cta",
          title: "Buying, renovating or adding a big appliance?",
          description:
            "A demo inspection captures the property details and the reason for the check.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
    {
      slug: "inverter-wiring",
      title: "Inverter & backup wiring",
      description:
        "How to plan a backup circuit for lights, fans and essential appliances without overloading the system.",
      eyebrow: "Power that stays on",
      regions: ["in"],
      blocks: [
        {
          type: "richText",
          eyebrow: "Plan the circuits",
          title: "Back up what matters, not everything",
          body: [
            "A backup system is easier to size when you separate essential loads from the rest of the house. Lights, fans, a router and a few key appliances are a sensible starting point; an air-conditioner or geyser usually needs a much larger system.",
            "The wiring needs proper isolation and a changeover arrangement so the inverter cannot back-feed the mains. Battery placement, ventilation and cable sizing all matter.",
          ],
          bullets: [
            "List essential appliances and their load",
            "Create a dedicated backup circuit",
            "Use proper isolation and changeover",
            "Ventilate the battery location",
            "Label the backup circuits clearly",
          ],
        },
        {
          type: "faq",
          title: "Inverter questions",
          items: [
            {
              q: "Can I add an inverter to the existing wiring?",
              a: "Only with a properly planned backup circuit and isolation. Back-feeding a whole board is unsafe. The installation must be assessed on site.",
            },
            {
              q: "How long will the battery last?",
              a: "That depends on the battery capacity, age, load and depth of discharge. The demo avoids a single runtime promise.",
            },
          ],
        },
        {
          type: "cta",
          title: "Planning backup power?",
          description:
            "Send a demo request with the appliances you want to keep running.",
          primaryLabel: "Request a callback",
          secondaryLabel: "See electrical services",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you handle both repairs and new installations?",
      a: "Yes. The demo covers fault-finding, fixture installation, panel work and selected upgrades. The scope is confirmed after an assessment.",
    },
    {
      q: "Are your electricians licensed?",
      a: "Licence details are placeholders in this demo. A real business should publish verifiable licence and insurance information.",
    },
    {
      q: "What should I do in an electrical emergency?",
      a: "If there is smoke, fire, a burning smell or someone has received a shock, keep people away and call emergency services. Do not touch wet or damaged electrical equipment.",
    },
    {
      q: "Do you provide written quotes?",
      a: "Yes. Chargeable work is quoted and approved before it starts. The demo flow includes a written scope.",
    },
    {
      q: "Can you work in an occupied home?",
      a: "Yes, with planning. The electrician should explain outage windows, protect the work area and keep walkways clear.",
    },
    {
      q: "Do you install smart switches?",
      a: "The demo covers compatible smart switches and dimmers where the wiring and neutral arrangement support them. Compatibility is checked before purchase.",
    },
  ],
};
