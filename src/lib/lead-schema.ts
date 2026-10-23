import { z } from "zod";

export const REGION_VALUES = ["us", "in"] as const;
export const NICHE_VALUES = [
  "hvac",
  "plumbing",
  "roofing",
  "electrician",
  "pest",
] as const;
export const FORM_TYPE_VALUES = ["quote", "contact", "callback"] as const;
export const URGENCY_VALUES = ["standard", "emergency"] as const;
export const PREFERRED_TIME_VALUES = [
  "asap",
  "morning",
  "afternoon",
  "evening",
  "this_week",
  "flexible",
] as const;

export const PREFERRED_TIME_LABELS: Record<
  (typeof PREFERRED_TIME_VALUES)[number],
  string
> = {
  asap: "As soon as possible",
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  this_week: "This week",
  flexible: "I’m flexible",
};

const phonePattern = /^[+()\d\s.-]{7,25}$/;

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(25, "Please use a shorter phone number.")
    .regex(phonePattern, "Please use digits, spaces, brackets, + or -.")
    .refine((value) => {
      const digits = digitsOnly(value).length;
      return digits >= 7 && digits <= 15;
    }, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .max(120, "Please keep your email under 120 characters.")
    .email("Please enter a valid email address.")
    .or(z.literal(""))
    .optional(),
  location: z
    .string()
    .trim()
    .min(2, "Please add a city, ZIP or PIN.")
    .max(120, "Please keep this under 120 characters."),
  service: z
    .string()
    .trim()
    .min(1, "Please choose the service you need.")
    .max(120),
  message: z
    .string()
    .trim()
    .max(1000, "Please keep your message under 1,000 characters.")
    .optional(),
  preferredTime: z.enum(PREFERRED_TIME_VALUES),
  urgency: z.enum(URGENCY_VALUES),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please confirm that the demo team can contact you.",
  }),
  company_website: z.string().max(200).optional(),
  startedAt: z.number().int().nonnegative(),
  formType: z.enum(FORM_TYPE_VALUES),
  niche: z.enum(NICHE_VALUES),
  region: z.enum(REGION_VALUES),
  page: z.string().max(300).optional(),
  utm_source: z.string().max(120).optional(),
  utm_medium: z.string().max(120).optional(),
  utm_campaign: z.string().max(120).optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export interface LeadPayload {
  lead_id: string;
  submitted_at: string;
  received_at: string;
  site: string;
  niche: string;
  region: "US" | "IN";
  business_name: string;
  form_type: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
  preferred_time: string;
  consent: boolean;
  company_website: string;
  page_url: string;
  source_page: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  status: "New";
  owner_notified_at: string;
  autoreply_sent_at: string;
  followup_sent_at: string;
  review_link: string;
  review_requested_at: string;
  notes: string;
}
