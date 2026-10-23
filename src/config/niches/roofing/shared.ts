import type { NicheShared } from "@/config/types";

export const roofingShared: NicheShared = {
  niche: "roofing",
  theme: "roofing",
  nicheLabel: "Roofing & Waterproofing",
  services: [
    {
      slug: "roof-inspection",
      name: "Roof inspection",
      short: "A clear picture of what is sound, what is worn and what can wait.",
      description:
        "A documented roof check covering surface condition, flashing, drainage, penetrations and visible signs of water entry.",
      icon: "search",
      featured: true,
      highlights: [
        "Surface and flashing inspection",
        "Drainage and ponding review",
        "Photo record of findings",
        "Repair and maintenance priorities",
      ],
      faqs: [
        {
          q: "Do I need to be home for the inspection?",
          a: "Access to the property and any attic or ceiling areas is helpful. The office will confirm what is needed when booking.",
        },
        {
          q: "Will I get photos?",
          a: "The demo process includes a photo record of the key findings so you can see the issue and keep it for your records.",
        },
      ],
    },
    {
      slug: "roof-repair",
      name: "Roof repair",
      short: "Missing shingles, cracked tiles, failed flashing and small leaks.",
      description:
        "Targeted repair for roof coverings, flashing and penetrations, with a focus on finding the source of the water rather than patching the ceiling stain.",
      icon: "wrench",
      featured: true,
      highlights: [
        "Leak source tracing",
        "Shingle, tile and metal repairs",
        "Flashing and penetration sealing",
        "Repair vs replacement guidance",
      ],
      faqs: [
        {
          q: "Can you repair a leak without replacing the roof?",
          a: "Often yes, if the issue is local and the surrounding roof is sound. If the underlay or decking is degraded, a patch may not last.",
        },
        {
          q: "Why does the ceiling stain keep coming back?",
          a: "Water can travel along framing before it drips. The visible stain is not always below the entry point, so the inspection needs to trace the path.",
        },
      ],
    },
    {
      slug: "roof-replacement",
      name: "Roof replacement",
      short: "A planned replacement with clear scope, sequencing and cleanup.",
      description:
        "Full roof replacement planning, including tear-off, deck inspection, underlay, ventilation and a written scope before work starts.",
      icon: "layers",
      featured: true,
      highlights: [
        "Detailed scope and material options",
        "Deck and underlay inspection",
        "Ventilation and flashing plan",
        "Cleanup and final walkthrough",
      ],
      faqs: [
        {
          q: "How long does a replacement take?",
          a: "It depends on the roof size, access and weather. The demo quote includes a realistic working window instead of a one-line promise.",
        },
        {
          q: "Can we stay in the house during the work?",
          a: "Usually yes, but noise and access will be affected. The crew should explain the daily plan and protect the driveway and garden.",
        },
      ],
    },
    {
      slug: "storm-damage",
      name: "Storm damage repair",
      short: "Wind, hail and fallen-branch damage documented properly.",
      description:
        "Emergency roof checks and repairs after a storm, with clear photo documentation and practical guidance for insurance conversations.",
      icon: "cloudRain",
      featured: true,
      highlights: [
        "Emergency tarp and containment",
        "Wind and impact damage assessment",
        "Photo documentation",
        "Insurance-ready scope",
      ],
      faqs: [
        {
          q: "Should I file an insurance claim?",
          a: "That is your decision. The demo can document the damage and explain the repair scope, but it does not give legal or insurance advice.",
        },
        {
          q: "What should I do after a storm?",
          a: "Stay off the roof. Check ceilings for active leaks, move valuables away and call for a professional inspection if you see damage or water entry.",
        },
      ],
    },
    {
      slug: "terrace-waterproofing",
      name: "Terrace waterproofing",
      short: "Monsoon leaks, damp walls and terraces that hold water.",
      description:
        "Terrace and balcony waterproofing with surface preparation, drainage correction and a clear maintenance plan.",
      icon: "droplets",
      regions: ["in"],
      featured: true,
      highlights: [
        "Surface and drainage inspection",
        "Crack and joint treatment",
        "Waterproof coating system",
        "Monsoon-ready handover",
      ],
      faqs: [
        {
          q: "How long does terrace waterproofing last?",
          a: "It depends on the system, surface condition, drainage and maintenance. The demo avoids a single lifespan promise and explains the expected service rhythm.",
        },
        {
          q: "Can it be done during the monsoon?",
          a: "Dry weather is strongly preferred. A temporary emergency treatment may be possible, but a durable coating needs a dry surface.",
        },
      ],
    },
    {
      slug: "gutters",
      name: "Gutters & drainage",
      short: "Overflowing gutters, stained fascia and water at the foundation.",
      description:
        "Gutter cleaning, repair and drainage improvements that move water away from the roof and foundation.",
      icon: "waves",
      regions: ["us"],
      highlights: [
        "Gutter and downspout clearing",
        "Fascia and hanger checks",
        "Downspout extension planning",
        "Foundation water-risk review",
      ],
      faqs: [
        {
          q: "How often should gutters be cleaned?",
          a: "At least twice a year in most tree-heavy neighborhoods, and more often after heavy storms. The demo recommends a check rather than a fixed promise.",
        },
        {
          q: "Can gutters cause foundation problems?",
          a: "Yes. Water that pools near the foundation can increase damp and movement risk. Extending downspouts and correcting the slope are simple first steps.",
        },
      ],
    },
    {
      slug: "heat-proof-coating",
      name: "Heat-proof coating",
      short: "A cooler terrace and a more comfortable top floor.",
      description:
        "Reflective terrace coatings and surface preparation designed to reduce heat gain and improve the usability of the top floor.",
      icon: "sun",
      regions: ["in"],
      highlights: [
        "Surface preparation and cleaning",
        "Reflective coating application",
        "Drainage and edge detailing",
        "Maintenance guidance",
      ],
      faqs: [
        {
          q: "Does heat-proof coating replace waterproofing?",
          a: "No. They solve different problems. Some systems combine both, but the surface and drainage still need to be assessed separately.",
        },
        {
          q: "How much cooler will the room be?",
          a: "The demo does not promise a specific temperature drop. Performance depends on the coating, building, insulation, ventilation and sun exposure.",
        },
      ],
    },
  ],
  featurePages: [
    {
      slug: "storm-damage-repair",
      title: "Storm damage repair",
      description:
        "What to do after wind, hail or a fallen branch, and how to document roof damage without guesswork.",
      eyebrow: "After the weather",
      blocks: [
        {
          type: "richText",
          eyebrow: "Safety first",
          title: "Do not climb the roof to investigate",
          body: [
            "Stay inside and look for active drips, cracked ceilings or water near light fittings. Move valuables away from the leak. If water is near electrical wiring, switch off the circuit only if it is safe to reach and call an electrician.",
            "From the ground, note displaced tiles, missing shingles, fallen branches and dented gutters. Photograph what you can see safely. These notes help the inspection and any insurance conversation.",
          ],
          bullets: [
            "Keep off the roof",
            "Contain active drips and move valuables",
            "Photograph damage from the ground",
            "Avoid wet electrical fittings",
            "Call for a professional inspection",
          ],
        },
        {
          type: "process",
          eyebrow: "The response",
          title: "Contain, document, repair",
          steps: [
            {
              title: "Phone triage",
              description:
                "The office checks whether the roof is safe to access and whether temporary containment is needed.",
            },
            {
              title: "Document the damage",
              description:
                "Photos, measurements and a written scope make the repair and insurance conversation clearer.",
            },
            {
              title: "Make it safe",
              description:
                "Temporary tarping or containment stops further water entry where conditions allow.",
            },
            {
              title: "Plan the permanent repair",
              description:
                "The team explains the repair options, timing and any areas that need monitoring.",
            },
          ],
        },
        {
          type: "faq",
          title: "Storm questions",
          items: [
            {
              q: "Does insurance cover storm damage?",
              a: "It depends on your policy and the cause. The demo provides documentation but does not give insurance or legal advice.",
            },
            {
              q: "Can you tarp a roof in the rain?",
              a: "Sometimes, if it is safe. The priority is to prevent further damage without putting anyone at risk. The office will explain what is possible.",
            },
          ],
        },
        {
          type: "cta",
          title: "Storm left a mark?",
          description:
            "Request a documented demo inspection and see how a clear repair scope is built.",
          primaryLabel: "Request an inspection",
          secondaryLabel: "See roofing services",
        },
      ],
    },
    {
      slug: "roof-replacement",
      title: "Roof replacement",
      description:
        "What a fair replacement scope includes, and the questions to ask before signing.",
      eyebrow: "Plan the big job",
      regions: ["us", "in"],
      blocks: [
        {
          type: "richText",
          eyebrow: "The scope",
          title: "A roof is a system, not just a surface",
          body: [
            "A replacement quote should cover more than the visible covering. Deck condition, underlay, flashing, ventilation and drainage all affect how long the new roof performs.",
            "Ask what will be removed, what will be inspected once the old covering is off, how unexpected deck damage is priced, and how the property will be protected during the work.",
          ],
          bullets: [
            "Tear-off and disposal",
            "Deck inspection and repair allowance",
            "Underlay and flashing details",
            "Ventilation and drainage",
            "Daily cleanup and final walkthrough",
          ],
        },
        {
          type: "checklist",
          eyebrow: "Questions to ask",
          title: "Before you approve the quote",
          items: [
            "What is the exact material and warranty?",
            "Is deck repair included or billed separately?",
            "How will the crew protect the garden and driveway?",
            "What happens if it rains mid-job?",
            "Who handles permits and inspections?",
            "What is the payment schedule?",
            "What does the final walkthrough cover?",
          ],
          note: "The demo quote is sample content. A real contract should be reviewed carefully.",
        },
        {
          type: "comparison",
          eyebrow: "The difference",
          title: "Cheap patch vs planned replacement",
          beforeTitle: "Reactive patching",
          afterTitle: "Planned replacement",
          before: [
            "Repeated leaks in different spots",
            "No record of the deck condition",
            "Mismatched materials and short-term fixes",
            "Surprise costs once work starts",
          ],
          after: [
            "A documented scope and material choice",
            "Deck and underlay inspected during tear-off",
            "Flashing and ventilation planned together",
            "A clear handover and maintenance rhythm",
          ],
        },
        {
          type: "cta",
          title: "Thinking about a replacement?",
          description:
            "Start with a demo inspection and a written scope, not a pressure sale.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "Compare plans",
        },
      ],
    },
    {
      slug: "terrace-waterproofing",
      title: "Terrace waterproofing",
      description:
        "A practical guide to terrace leaks, surface preparation and monsoon-ready waterproofing.",
      eyebrow: "Dry rooms below",
      regions: ["in"],
      blocks: [
        {
          type: "richText",
          eyebrow: "Find the path",
          title: "The leak is rarely right below the crack",
          body: [
            "Water can travel under the surface, along a slope or through a joint before it appears on the ceiling. A proper inspection looks at the terrace surface, parapet joints, drain outlets, pipe penetrations and the condition of the previous coating.",
            "A durable system starts with a clean, sound surface and correct drainage. Coating over loose material or a ponding area is a short-term fix at best.",
          ],
          bullets: [
            "Surface cracks and blistering",
            "Parapet and wall joints",
            "Drain outlets and slopes",
            "Pipe and tank penetrations",
            "Previous coating condition",
          ],
        },
        {
          type: "process",
          eyebrow: "The work",
          title: "Prepare, repair, coat, test",
          steps: [
            {
              title: "Inspect and plan",
              description:
                "Confirm the surface condition, drainage and the right system for the terrace.",
            },
            {
              title: "Prepare the surface",
              description:
                "Clean, remove loose material and repair cracks and joints before coating.",
            },
            {
              title: "Apply the system",
              description:
                "Build up the waterproof layer with attention to edges, drains and penetrations.",
            },
            {
              title: "Test and hand over",
              description:
                "Check drainage and curing, then explain the maintenance rhythm before the monsoon.",
            },
          ],
        },
        {
          type: "faq",
          title: "Waterproofing questions",
          items: [
            {
              q: "How long does the work take?",
              a: "It depends on the area, surface preparation and curing time. The demo quote sets out the working days and weather constraints.",
            },
            {
              q: "Can I walk on the terrace afterwards?",
              a: "Wait for the system to cure fully. The handover should explain when it is safe and how to protect the surface.",
            },
          ],
        },
        {
          type: "cta",
          title: "Monsoon is coming. Get ahead of it.",
          description:
            "Book a demo terrace inspection before the first heavy rain.",
          primaryLabel: "Book an inspection",
          secondaryLabel: "See roofing services",
        },
      ],
    },
    {
      slug: "roof-insurance-claims",
      title: "Roof insurance claims",
      description:
        "How clear photos and a proper scope make a roofing insurance conversation easier.",
      eyebrow: "Document it well",
      regions: ["us"],
      blocks: [
        {
          type: "richText",
          eyebrow: "The record",
          title: "Good documentation beats a dramatic story",
          body: [
            "Insurers need to see the cause, the extent and the proposed repair. Wide photos show the context; close photos show the damage; measurements and a written scope connect the two.",
            "The demo process creates a photo record and a repair scope. It does not negotiate the claim or promise a coverage outcome. Read your policy and ask your insurer directly.",
          ],
          bullets: [
            "Date-stamped wide and close photos",
            "Cause and extent described clearly",
            "Temporary protection documented",
            "Repair scope separated from betterment",
            "No staged or exaggerated damage",
          ],
        },
        {
          type: "checklist",
          eyebrow: "Before you file",
          title: "A simple claim checklist",
          items: [
            "Check your policy and deductible",
            "Photograph the damage from the ground",
            "Keep receipts for temporary repairs",
            "Avoid permanent repairs before the inspection if safe",
            "Ask the roofer for a clear, itemised scope",
            "Keep communication in writing",
          ],
          note: "This is general demo information, not insurance or legal advice.",
        },
        {
          type: "cta",
          title: "Need a documented roof inspection?",
          description:
            "The demo flow captures the request and shows how the sample team would follow up.",
          primaryLabel: "Request an inspection",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I know if I need a repair or a replacement?",
      a: "Local damage on a sound roof can often be repaired. Widespread wear, repeated leaks, soft decking or failed underlay point toward replacement. A proper inspection should show you the evidence.",
    },
    {
      q: "Do you provide written quotes?",
      a: "Yes. The demo process includes a written scope and price before chargeable work begins.",
    },
    {
      q: "Can you inspect a roof in the rain?",
      a: "A full inspection may need dry conditions for safety. An active leak can still be triaged and contained where it is safe to do so.",
    },
    {
      q: "Will the crew protect my garden and driveway?",
      a: "The demo standard includes ground protection, controlled debris removal and a magnet sweep for nails.",
    },
    {
      q: "How long will the work take?",
      a: "The quote should give a realistic working window based on the scope, access and weather. Small repairs may be same-day; replacements take longer.",
    },
    {
      q: "Do you handle insurance documentation?",
      a: "The demo can provide photos and a repair scope. It does not give legal or insurance advice or guarantee a claim outcome.",
    },
  ],
};
