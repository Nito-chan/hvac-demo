export interface DemoPhone {
  display: string;
  href: string;
  whatsappHref?: string;
}

/**
 * Public demo numbers may be overridden per environment. The fallbacks use
 * reserved fictional ranges; the India number is supplied by the site owner and
 * is never committed to this repository.
 */
export function demoPhone(envKey: string, fallbackDisplay: string): DemoPhone {
  const override = process.env[envKey]?.trim();
  const display = override || fallbackDisplay;
  const digits = display.replace(/[^\d+]/g, "");

  return {
    display,
    href: `tel:${digits}`,
  };
}

export function whatsappHref(phone: DemoPhone): string | undefined {
  const digits = phone.href.replace(/^tel:/, "").replace(/^\+/, "");
  return digits ? `https://wa.me/${digits}` : undefined;
}
