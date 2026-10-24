import { describe, expect, it } from "vitest";
import { leadFormSchema } from "./lead-schema";

const validLead = {
  name: "Jordan Lee",
  phone: "+1 (816) 555-0142",
  email: "jordan@example.com",
  location: "Kansas City, MO",
  service: "AC repair",
  message: "The upstairs unit is not cooling.",
  preferredTime: "morning" as const,
  urgency: "standard" as const,
  consent: true,
  company_website: "",
  startedAt: 1_700_000_000_000,
  formType: "quote" as const,
  niche: "hvac" as const,
  region: "us" as const,
  page: "/services/ac-repair",
  utm_source: "demo",
};

describe("leadFormSchema", () => {
  it("accepts a complete lead and trims text fields", () => {
    const result = leadFormSchema.safeParse({
      ...validLead,
      name: "  Jordan Lee  ",
      phone: " +1 (816) 555-0142 ",
      location: "  Kansas City, MO ",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Jordan Lee");
      expect(result.data.phone).toBe("+1 (816) 555-0142");
      expect(result.data.location).toBe("Kansas City, MO");
    }
  });

  it("allows an empty optional email", () => {
    expect(
      leadFormSchema.safeParse({ ...validLead, email: "" }).success,
    ).toBe(true);
    expect(
      leadFormSchema.safeParse({ ...validLead, email: undefined }).success,
    ).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = leadFormSchema.safeParse({
      ...validLead,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
  });

  it("requires consent", () => {
    const result = leadFormSchema.safeParse({ ...validLead, consent: false });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toContain("confirm");
    }
  });

  it("rejects letters in the phone number", () => {
    expect(
      leadFormSchema.safeParse({ ...validLead, phone: "call me maybe" }).success,
    ).toBe(false);
  });

  it("rejects phone numbers outside the digit range", () => {
    expect(
      leadFormSchema.safeParse({ ...validLead, phone: "12345" }).success,
    ).toBe(false);
    expect(
      leadFormSchema.safeParse({
        ...validLead,
        phone: "+1234567890123456",
      }).success,
    ).toBe(false);
  });

  it("rejects an unknown niche or region", () => {
    expect(
      leadFormSchema.safeParse({ ...validLead, niche: "cleaning" }).success,
    ).toBe(false);
    expect(
      leadFormSchema.safeParse({ ...validLead, region: "uk" }).success,
    ).toBe(false);
  });

  it("rejects an overlong message and a non-numeric timestamp", () => {
    expect(
      leadFormSchema.safeParse({
        ...validLead,
        message: "x".repeat(1001),
      }).success,
    ).toBe(false);
    expect(
      leadFormSchema.safeParse({
        ...validLead,
        startedAt: String(Date.now()),
      }).success,
    ).toBe(false);
  });

  it("accepts every supported niche, region and form type", () => {
    const niches = ["hvac", "plumbing", "roofing", "electrician", "pest"] as const;
    const regions = ["us", "in"] as const;
    const formTypes = ["quote", "contact", "callback"] as const;

    for (const niche of niches) {
      for (const region of regions) {
        for (const formType of formTypes) {
          expect(
            leadFormSchema.safeParse({ ...validLead, niche, region, formType })
              .success,
          ).toBe(true);
        }
      }
    }
  });
});
