import type { NicheShared } from "@/config/types";

export const pestShared: NicheShared = {
  niche: "pest",
  theme: "pest",
  nicheLabel: "Pest Control",
  services: [
    {
      slug: "general-pest",
      name: "General pest control",
      short: "Ants, cockroaches, spiders and the occasional unwelcome visitor.",
      description:
        "A targeted internal and external treatment with a clear explanation of the activity, the treatment and what to expect afterwards.",
      icon: "bug",
      featured: true,
      highlights: [
        "Activity and entry-point inspection",
        "Targeted internal treatment",
        "External barrier where appropriate",
        "Clear aftercare guidance",
      ],
      faqs: [
        {
          q: "Do I need to leave the house during treatment?",
          a: "It depends on the product and the area treated. The technician will give specific instructions before starting, including how long to stay out and when it is safe to return.",
        },
        {
          q: "Will one visit get rid of everything?",
          a: "Not always. Some pests need a follow-up or a growth-regulator approach. The demo quote explains the expected treatment plan rather than promising a one-visit fix.",
        },
      ],
    },
    {
      slug: "termite-control",
      name: "Termite control",
      short: "Mud tubes, damaged timber and a property that needs protecting.",
      description:
        "Termite inspection and treatment planning, including entry-point assessment, moisture sources and a practical prevention plan.",
      icon: "warehouse",
      featured: true,
      highlights: [
        "Internal and external inspection",
        "Mud tube and damage assessment",
        "Moisture and entry-point review",
        "Treatment and prevention plan",
      ],
      faqs: [
        {
          q: "How do I know if I have termites?",
          a: "Look for mud tubes, hollow-sounding timber, bubbling paint or discarded wings. Do not disturb the area before an inspection — the pattern helps identify the species and extent.",
        },
        {
          q: "Is termite treatment safe for pets?",
          a: "The technician will explain the product, the treated areas and the re-entry time. Keep pets away until the treated area is safe.",
        },
      ],
    },
    {
      slug: "bed-bugs",
      name: "Bed bug treatment",
      short: "Bites, blood spots and a problem that needs a proper plan.",
      description:
        "A room-by-room bed bug assessment with a treatment plan covering the source, the harbourage areas and the preparation needed before the visit.",
      icon: "search",
      featured: true,
      highlights: [
        "Room-by-room inspection",
        "Mattress and furniture checks",
        "Preparation checklist",
        "Follow-up and monitoring plan",
      ],
      faqs: [
        {
          q: "Do I have to throw out my mattress?",
          a: "Not necessarily. A proper inspection and treatment plan can often save the mattress. Discarding items without a plan can spread the problem.",
        },
        {
          q: "Why are follow-up visits needed?",
          a: "Eggs and hidden harbourages can survive an initial treatment. Follow-up timing depends on the product and the life cycle.",
        },
      ],
    },
    {
      slug: "rodent-control",
      name: "Rodent control",
      short: "Scratching in the roof, droppings and chewed packaging.",
      description:
        "Rodent inspection, safe removal and entry-point sealing, with a focus on preventing the next visitor rather than only removing the current one.",
      icon: "home",
      featured: true,
      highlights: [
        "Entry-point inspection",
        "Safe removal and disposal",
        "Sealing and exclusion advice",
        "Sanitation guidance",
      ],
      faqs: [
        {
          q: "Should I use poison inside the house?",
          a: "It is risky around children and pets, and a rodent can die in an inaccessible space. The demo prefers trapping and exclusion, with safe placement away from people and pets.",
        },
        {
          q: "What should I do about droppings?",
          a: "Do not dry-sweep. Wear gloves and a mask, dampen the area, use a disinfectant and dispose of the material safely. The technician can advise on the specific situation.",
        },
      ],
    },
    {
      slug: "mosquito-control",
      name: "Mosquito control",
      short: "A garden that is unusable after dark.",
      description:
        "Mosquito source reduction and targeted treatment for outdoor living areas, with practical advice on standing water and breeding sites.",
      icon: "spray",
      regions: ["in", "us"],
      featured: true,
      highlights: [
        "Standing-water inspection",
        "Targeted outdoor treatment",
        "Breeding-site advice",
        "Seasonal follow-up options",
      ],
      faqs: [
        {
          q: "Will spraying remove every mosquito?",
          a: "No. Outdoor treatment reduces activity, but nearby breeding sites and weather affect the result. Source reduction is the most important long-term step.",
        },
        {
          q: "Is the treatment safe for plants and pets?",
          a: "The technician will explain the product and the re-entry time. Keep pets and children away from treated areas until they are dry.",
        },
      ],
    },
    {
      slug: "commercial-pest",
      name: "Commercial pest control",
      short: "Kitchens, warehouses and offices that need a discreet plan.",
      description:
        "Scheduled pest management for small businesses, with monitoring, reporting and a plan that fits the operation.",
      icon: "building",
      highlights: [
        "Site-specific risk assessment",
        "Discreet scheduled visits",
        "Monitoring and reporting",
        "Staff-friendly recommendations",
      ],
      faqs: [
        {
          q: "Do you work outside normal hours?",
          a: "The demo can schedule visits around opening hours. A real commercial contract would set out response times and out-of-hours terms.",
        },
        {
          q: "Do you provide a service report?",
          a: "Yes. The demo includes a written report with findings, actions and any monitoring recommendations.",
        },
      ],
    },
  ],
  featurePages: [
    {
      slug: "termite-control",
      title: "Termite control",
      description:
        "What to look for, why the source matters and how a proper termite plan protects the property.",
      eyebrow: "Protect the structure",
      blocks: [
        {
          type: "richText",
          eyebrow: "Know the signs",
          title: "Termites are a property problem, not just a pest problem",
          body: [
            "Mud tubes, hollow timber, bubbling paint and discarded wings are common clues. The inspection needs to find the species, the moisture source and the extent of the activity before treatment is chosen.",
            "Treating the visible damage without addressing the entry point or moisture is a short-term fix. The demo plan looks at the whole path: soil, foundation, timber, drainage and ventilation.",
          ],
          bullets: [
            "Mud tubes on walls or foundations",
            "Hollow-sounding skirting and frames",
            "Bubbling or stained paint",
            "Damp patches and poor ventilation",
            "Discarded wings near windows",
          ],
        },
        {
          type: "process",
          eyebrow: "The plan",
          title: "Inspect, identify, treat, monitor",
          steps: [
            {
              title: "Inspect the property",
              description:
                "Check the interior, exterior, roof space and moisture-prone areas for activity and entry points.",
            },
            {
              title: "Identify the species",
              description:
                "The treatment and baiting approach depends on the termite species and the construction.",
            },
            {
              title: "Treat the source",
              description:
                "Use the appropriate local treatment, baiting or barrier approach with clear safety instructions.",
            },
            {
              title: "Monitor and prevent",
              description:
                "Schedule a follow-up and address moisture, drainage and timber-contact issues.",
            },
          ],
        },
        {
          type: "faq",
          title: "Termite questions",
          items: [
            {
              q: "Can I just spray the visible termites?",
              a: "Surface spraying does not address the colony or the entry point and can make the problem harder to assess. A proper inspection and species-specific plan is safer.",
            },
            {
              q: "Is a pre-purchase termite inspection worth it?",
              a: "It can be, especially for older timber-framed properties. The demo inspection is a sample, not a structural or legal report.",
            },
          ],
        },
        {
          type: "cta",
          title: "Seen mud tubes or damaged timber?",
          description:
            "Book a demo inspection and see how the sample flow captures the property details.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "See pest services",
        },
      ],
    },
    {
      slug: "bed-bug-treatment",
      title: "Bed bug treatment",
      description:
        "A calm, practical plan for bites, blood spots and the preparation a proper treatment needs.",
      eyebrow: "Sleep easy again",
      blocks: [
        {
          type: "richText",
          eyebrow: "Before treatment",
          title: "Do not start throwing furniture outside",
          body: [
            "Discarding an infested mattress or sofa without a plan can spread bed bugs through the building. The first step is a room-by-room inspection to confirm the activity and find the harbourages.",
            "Preparation matters as much as the treatment: laundry, clutter reduction, access to bed frames and skirting. The technician should give a clear, written prep list.",
          ],
          bullets: [
            "Inspect the mattress seams and bed frame",
            "Check skirting, sockets and furniture joints",
            "Bag laundry and wash on a hot cycle",
            "Reduce clutter around the bed",
            "Do not move furniture between rooms",
          ],
        },
        {
          type: "checklist",
          eyebrow: "What to expect",
          title: "The treatment plan",
          items: [
            "A confirmed identification, not a guess",
            "A written preparation checklist",
            "A treatment plan for every affected room",
            "A clear re-entry time",
            "A follow-up inspection",
            "Guidance on what to keep, wash or discard",
          ],
          note: "Bed bugs are difficult to treat without a proper plan. The demo does not promise a single-visit cure.",
        },
        {
          type: "faq",
          title: "Bed bug questions",
          items: [
            {
              q: "How did they get in?",
              a: "They can arrive on luggage, second-hand furniture, clothing or bedding. There is no need to assign blame; the priority is containment and treatment.",
            },
            {
              q: "Can I treat them myself?",
              a: "DIY foggers and surface sprays often miss the harbourages and can make the problem worse. A professional inspection and plan is safer and more effective.",
            },
          ],
        },
        {
          type: "cta",
          title: "Bites or blood spots on the sheets?",
          description:
            "Request a demo inspection and get a clear preparation checklist.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
    {
      slug: "rodent-control",
      title: "Rodent control",
      description:
        "How to remove rodents safely and, more importantly, stop them coming back.",
      eyebrow: "Close the entry points",
      blocks: [
        {
          type: "richText",
          eyebrow: "Think exclusion",
          title: "Removal is only half the job",
          body: [
            "Rodents follow food, water and shelter. Trapping removes the current activity; sealing entry points and removing the attraction prevents the next visit.",
            "Check the roof space, garage, kitchen, utility areas and the exterior for gaps, droppings and gnaw marks. Do not dry-sweep droppings — dampen and disinfect the area instead.",
          ],
          bullets: [
            "Gaps around pipes and cables",
            "Open roof spaces and vents",
            "Pet food and stored grains",
            "Clutter and sheltered nesting spots",
            "Droppings, gnaw marks and grease trails",
          ],
        },
        {
          type: "comparison",
          eyebrow: "The difference",
          title: "A plan, not just a trap",
          beforeTitle: "Quick fix",
          afterTitle: "Exclusion plan",
          before: [
            "Traps set with no inspection",
            "Entry points left open",
            "Food sources still accessible",
            "The problem returns",
          ],
          after: [
            "Activity and entry points mapped",
            "Safe trapping and removal",
            "Sealing and sanitation guidance",
            "A follow-up check",
          ],
        },
        {
          type: "faq",
          title: "Rodent questions",
          items: [
            {
              q: "Are poison baits a good idea indoors?",
              a: "They carry risks around children, pets and secondary poisoning, and a rodent may die in an inaccessible space. The demo prefers trapping and exclusion.",
            },
            {
              q: "How do I clean droppings safely?",
              a: "Wear gloves and a mask, avoid dry sweeping, dampen the area with a disinfectant, and dispose of the material in a sealed bag. Wash hands afterwards.",
            },
          ],
        },
        {
          type: "cta",
          title: "Hearing scratching in the roof?",
          description:
            "Send a demo request and describe the activity and access points.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "See pest services",
        },
      ],
    },
    {
      slug: "mosquito-control",
      title: "Mosquito control",
      description:
        "Practical source reduction and targeted treatment for a garden you can actually use.",
      eyebrow: "Take back the evening",
      regions: ["in", "us"],
      blocks: [
        {
          type: "richText",
          eyebrow: "Find the water",
          title: "Most mosquito problems start with standing water",
          body: [
            "Plant saucers, blocked gutters, water tanks, old tyres and uneven paving can all hold enough water for mosquitoes. The inspection looks for breeding sites before treatment.",
            "Targeted outdoor treatment can reduce adult activity, but it is not a permanent barrier. Source reduction and repeat monitoring matter more than a single spray.",
          ],
          bullets: [
            "Empty or cover standing water",
            "Clear blocked gutters and drains",
            "Refresh pet water and bird baths",
            "Keep water tanks sealed",
            "Treat shaded resting areas",
          ],
        },
        {
          type: "faq",
          title: "Mosquito questions",
          items: [
            {
              q: "Is the treatment safe for children and pets?",
              a: "The technician will explain the product, the treated areas and the re-entry time. Keep children and pets away until the area is dry.",
            },
            {
              q: "How long does it last?",
              a: "Outdoor control is temporary and weather-dependent. A seasonal plan with source reduction is more realistic than a one-off promise.",
            },
          ],
        },
        {
          type: "cta",
          title: "Garden unusable after sunset?",
          description:
            "Book a demo outdoor assessment and get a source-reduction checklist.",
          primaryLabel: "Book an assessment",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Are the treatments safe for children and pets?",
      a: "The technician will explain the product, the treated areas and the re-entry time. Keep children and pets away until the area is safe. Always follow the written instructions.",
    },
    {
      q: "Do I need to prepare before a visit?",
      a: "For some treatments, yes. The office should send a clear checklist covering access, laundry, food storage and pets. The demo flow includes a preparation step.",
    },
    {
      q: "How soon will I see results?",
      a: "It depends on the pest and the treatment. Some activity stops quickly; eggs and hidden harbourages may need a follow-up. The demo avoids a single guarantee.",
    },
    {
      q: "Do you offer a guarantee?",
      a: "The demo describes a follow-up window rather than an unconditional guarantee. A real contract should set out the coverage, exclusions and re-treatment terms in writing.",
    },
    {
      q: "Can you treat a rental property?",
      a: "Yes, with coordination between the tenant and the property owner. Access, permission and follow-up responsibilities should be agreed before the visit.",
    },
    {
      q: "What should I do if I see a snake or a dangerous pest?",
      a: "Keep people and pets away, do not corner or handle it, and call the appropriate local wildlife or emergency service. The demo focuses on common household pests.",
    },
  ],
};
