import type { NicheShared } from "@/config/types";

export const plumbingShared: NicheShared = {
  niche: "plumbing",
  theme: "plumbing",
  nicheLabel: "Plumbing & Drain",
  services: [
    {
      slug: "drain-cleaning",
      name: "Drain cleaning",
      short: "Slow sinks, gurgling showers and drains that keep coming back.",
      description:
        "A proper drain diagnosis before the snake comes out. We look at the blockage, the trap and the surrounding pipework, then clear the cause rather than just the symptom.",
      icon: "waves",
      featured: true,
      highlights: [
        "Kitchen, bathroom and floor drains",
        "Blockage and trap diagnosis",
        "Camera check where needed",
        "Prevention advice after the visit",
      ],
      faqs: [
        {
          q: "Can you clear a drain without removing the toilet?",
          a: "Usually yes. The access point depends on the blockage. The technician will explain the method before starting and protect the surrounding area.",
        },
        {
          q: "Why do my drains keep blocking?",
          a: "Cooking fat, hair, wipes and old pipework are common causes. If the same drain blocks repeatedly, a camera inspection is more useful than another quick clear.",
        },
      ],
    },
    {
      slug: "leak-repair",
      name: "Leak detection & repair",
      short: "Damp patches, dripping joints and water bills that do not add up.",
      description:
        "Leak tracing for visible and hidden pipework, followed by a targeted repair and a clear explanation of what was found.",
      icon: "droplets",
      featured: true,
      highlights: [
        "Visible and hidden leak tracing",
        "Pipe joint and fixture repair",
        "Water damage risk assessment",
        "Repair options explained first",
      ],
      faqs: [
        {
          q: "What should I do before the plumber arrives?",
          a: "If water is flowing, close the nearest isolation valve or the main supply if it is safe to reach. Move valuables away and put a towel down, but do not open ceilings or walls yourself.",
        },
        {
          q: "Can you find a leak under a floor?",
          a: "The demo workflow includes non-invasive tracing and targeted access where needed. A real diagnosis depends on the property and the pipe layout.",
        },
      ],
    },
    {
      slug: "water-heater-repair",
      name: "Water heater & geyser repair",
      short: "No hot water, strange noises or a unit that keeps tripping.",
      description:
        "Repair and replacement guidance for electric, gas and tankless water heaters, including geysers, with safety checks around pressure and electrical connections.",
      icon: "bath",
      featured: true,
      highlights: [
        "Heating element and thermostat checks",
        "Pressure and relief valve inspection",
        "Gas and electrical safety checks",
        "Repair or replace recommendation",
      ],
      faqs: [
        {
          q: "Is it worth repairing an old geyser?",
          a: "It depends on the age, the failed part and the condition of the tank. The technician should compare the repair cost, efficiency and remaining life rather than defaulting to replacement.",
        },
        {
          q: "Why is the water heater tripping the breaker?",
          a: "A faulty element, moisture in the wiring or a thermostat issue can all cause this. Stop resetting it repeatedly and get it checked.",
        },
      ],
    },
    {
      slug: "toilet-repair",
      name: "Toilet & fixture repair",
      short: "Running cisterns, weak flushes and dripping taps.",
      description:
        "Repairs for toilets, taps, showers and visible fixtures. Small jobs are treated with the same care as big ones.",
      icon: "wrench",
      featured: true,
      highlights: [
        "Running and leaking cisterns",
        "Weak flush and fill valve issues",
        "Tap and shower mixer repairs",
        "Seal and fixture replacement",
      ],
      faqs: [
        {
          q: "Do you carry common spare parts?",
          a: "The demo van carries common washers, valves and seals. Exact parts depend on the brand and model; the office may ask for a photo before the visit.",
        },
        {
          q: "Can you fix a dripping tap without replacing it?",
          a: "Often yes. A washer or cartridge replacement may be enough. If the body is damaged, replacement is the more durable option.",
        },
      ],
    },
    {
      slug: "sewer-line",
      name: "Sewer line service",
      short: "Repeated backups, bad smells and tree-root intrusion.",
      description:
        "Sewer camera inspection and clearing for repeated backups, with a clear explanation of the pipe condition and the next step.",
      icon: "search",
      highlights: [
        "Camera inspection",
        "Root and debris clearing",
        "Pipe condition report",
        "Repair or relining options",
      ],
      faqs: [
        {
          q: "How do I know if the problem is my line or the main?",
          a: "Multiple fixtures backing up together often points to a main-line issue. The camera inspection and a conversation with the local authority can confirm responsibility.",
        },
        {
          q: "Do you offer trenchless repair?",
          a: "The demo describes relining as an option where the pipe condition allows. A real recommendation requires a camera assessment.",
        },
      ],
    },
    {
      slug: "emergency-plumbing",
      name: "Emergency plumbing",
      short: "Burst pipes, overflowing toilets and water where it should not be.",
      description:
        "A triage-first response for active leaks, burst pipes and sewage backups, with clear guidance on isolating the water before help arrives.",
      icon: "alert",
      highlights: [
        "Phone triage and isolation guidance",
        "Priority demo scheduling",
        "Leak containment and repair",
        "Clear follow-up recommendations",
      ],
      faqs: [
        {
          q: "Where is my main water shut-off?",
          a: "It is usually near the water meter, at the property boundary or where the supply enters the building. Find it before an emergency and label it clearly.",
        },
        {
          q: "What counts as an emergency?",
          a: "Uncontrolled water, a burst pipe, a sewage backup or no water at all. For flooding near electrical fittings, stay clear and call emergency services.",
        },
      ],
    },
  ],
  featurePages: [
    {
      slug: "emergency-plumbing",
      title: "Emergency plumbing",
      description:
        "What to do in the first five minutes of a leak, and how a calm triage process works.",
      eyebrow: "When water will not wait",
      blocks: [
        {
          type: "richText",
          eyebrow: "First, stop the water",
          title: "A short checklist before anyone arrives",
          body: [
            "Close the nearest isolation valve. If you cannot find one, close the main supply only if it is safe to reach. Move electrical equipment away from water and do not touch wet switches or sockets.",
            "If the water is near wiring, a ceiling or a gas appliance, leave the area and call the appropriate emergency service. A demo plumber should not be your first call for an electrical or gas emergency.",
          ],
          bullets: [
            "Close the nearest valve or main supply",
            "Move valuables and electrical items away",
            "Put a towel or bucket under the leak",
            "Photograph the damage for insurance",
            "Call for help with the location and leak source",
          ],
        },
        {
          type: "process",
          eyebrow: "How the response works",
          title: "Triage, isolate, repair, confirm",
          steps: [
            {
              title: "Phone triage",
              description:
                "The office asks where the water is coming from and whether the supply can be isolated safely.",
            },
            {
              title: "Priority dispatch",
              description:
                "An urgent demo window is offered, with a realistic arrival estimate rather than a vague promise.",
            },
            {
              title: "Contain and repair",
              description:
                "The technician contains the leak, confirms the cause and quotes the repair before chargeable work.",
            },
            {
              title: "Test and dry",
              description:
                "The repair is pressure-tested, the area is checked and next steps for drying or making good are explained.",
            },
          ],
        },
        {
          type: "faq",
          title: "Emergency questions",
          items: [
            {
              q: "Is this a real emergency service?",
              a: "No. This is a fictional demo. The flow shows how a real plumbing business could triage urgent leads; it does not dispatch anyone.",
            },
            {
              q: "Should I use a bucket or turn off the water?",
              a: "Turn off the water first if it is safe. A bucket only manages the symptom. If you cannot isolate the supply, call a professional and keep people away from wet electrical fittings.",
            },
          ],
        },
        {
          type: "cta",
          title: "Water where it should not be?",
          description:
            "Use the demo form to see how an urgent request is captured, tagged and routed.",
          primaryLabel: "Request urgent help",
          secondaryLabel: "Call the demo line",
        },
      ],
    },
    {
      slug: "drain-cleaning",
      title: "Drain cleaning",
      description:
        "Why drains keep blocking, what a proper clear involves, and how to reduce repeat problems.",
      eyebrow: "Clear the cause, not just the clog",
      blocks: [
        {
          type: "richText",
          eyebrow: "The usual suspects",
          title: "What is really going down the drain?",
          body: [
            "Cooking fat cools and coats pipe walls. Hair binds to soap residue. Wet wipes and kitchen paper do not break down quickly. Over time these layers narrow the pipe until a small blockage becomes a backup.",
            "A quick chemical clear can move the problem downstream without removing the cause. A mechanical clear plus a camera check gives a more useful answer, especially if the same drain has blocked before.",
          ],
          bullets: [
            "Let cooking fat cool and bin it",
            "Use a drain strainer in showers and sinks",
            "Keep wipes and kitchen paper out of the toilet",
            "Flush with hot water after washing up",
            "Investigate repeat blockages instead of repeat clearing",
          ],
        },
        {
          type: "comparison",
          eyebrow: "The difference",
          title: "A clear with a diagnosis",
          beforeTitle: "Quick clear only",
          afterTitle: "Diagnose and clear",
          before: [
            "The same drain blocks again within weeks",
            "No idea whether the pipe is damaged",
            "Chemical smells and repeated cost",
            "No record of what was done",
          ],
          after: [
            "The cause is identified before clearing",
            "Camera check when the pattern suggests damage",
            "A written summary and prevention advice",
            "A clear next step if the pipe needs repair",
          ],
        },
        {
          type: "faq",
          title: "Drain questions",
          items: [
            {
              q: "Are chemical drain cleaners a good idea?",
              a: "They can help with a light blockage but may damage older pipes and rarely remove the full cause. Mechanical clearing is safer for repeat problems.",
            },
            {
              q: "How often should drains be cleaned?",
              a: "There is no fixed schedule. A well-used kitchen drain may benefit from an annual clear; a healthy drain with strainers may need nothing. Watch for slow drainage rather than waiting for a backup.",
            },
          ],
        },
        {
          type: "cta",
          title: "Slow drain? Deal with it before it backs up.",
          description:
            "Send a demo request and describe what is draining slowly. The sample flow will capture the details.",
          primaryLabel: "Book a drain visit",
          secondaryLabel: "See all services",
        },
      ],
    },
    {
      slug: "water-heater-repair",
      title: "Water heater & geyser repair",
      description:
        "No hot water, tripping breakers and strange noises — what to check before a repair visit.",
      eyebrow: "Hot water, without the guesswork",
      blocks: [
        {
          type: "richText",
          eyebrow: "Before the visit",
          title: "Three safe checks",
          body: [
            "Confirm the unit has power or gas and that the thermostat has not been turned down. For an electric geyser, check the breaker once. If it trips again, stop and call a professional.",
            "Listen for kettling or rumbling. Sediment can make a tank noisy and less efficient. A dripping pressure-relief valve or water around the base needs attention before it becomes a bigger repair.",
          ],
          bullets: [
            "Check the thermostat setting",
            "Reset the breaker once only",
            "Look for water around the base",
            "Note any rumbling or kettling",
            "Keep the area clear for access",
          ],
        },
        {
          type: "checklist",
          eyebrow: "What gets checked",
          title: "The demo service visit",
          items: [
            "Power, breaker and thermostat operation",
            "Heating element condition",
            "Pressure and relief valve",
            "Anode rod condition where accessible",
            "Gas connections and venting for gas units",
            "Sediment and noise assessment",
            "Repair versus replacement guidance",
          ],
          note: "Gas and electrical work should only be carried out by a competent, insured professional.",
        },
        {
          type: "faq",
          title: "Water heater questions",
          items: [
            {
              q: "How long should a water heater last?",
              a: "It depends on water quality, maintenance and the unit. The demo avoids a single lifespan claim; the technician should assess the tank, parts and repair cost.",
            },
            {
              q: "Is a tankless unit always better?",
              a: "No. It can be a good fit for some homes, but upfront cost, gas supply, electrical capacity and simultaneous hot-water demand all matter.",
            },
          ],
        },
        {
          type: "cta",
          title: "Cold shower? Let’s fix the cause.",
          description:
            "Book a demo water-heater visit and include the make, model and age if you know them.",
          primaryLabel: "Book a repair",
          secondaryLabel: "Compare plans",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you charge a call-out fee?",
      a: "The demo uses a diagnostic visit fee that is credited toward approved repair work. Parts and additional labour are quoted separately.",
    },
    {
      q: "How quickly can you attend?",
      a: "Standard visits are usually scheduled for the same or next working day. Urgent leaks are triaged first, and the office confirms a realistic window before dispatch.",
    },
    {
      q: "Do you work on older pipework?",
      a: "Yes, with care. Older pipes may be fragile or have non-standard fittings. The technician should explain the risks and the repair options before starting.",
    },
    {
      q: "Will you protect the floors and furniture?",
      a: "The demo standard is to use floor protection, contain water and leave the area tidy. If access is difficult, the office will discuss it before the visit.",
    },
    {
      q: "Can I get a written quote?",
      a: "Yes. Chargeable work should be quoted and approved before it starts. The demo flow includes a written summary in the sample automation.",
    },
    {
      q: "What should I do if I smell gas?",
      a: "Leave the property, do not use switches or flames, and call the local gas emergency line or emergency services from a safe place. Do not wait for a demo plumber.",
    },
  ],
};
