export type RegionId = "us" | "in";

export type NicheId = "hvac" | "plumbing" | "roofing" | "electrician" | "pest";

export type ThemeId = NicheId;

export type IconName =
  | "wind"
  | "snowflake"
  | "flame"
  | "droplets"
  | "wrench"
  | "shield"
  | "home"
  | "zap"
  | "plug"
  | "bug"
  | "search"
  | "gauge"
  | "thermometer"
  | "fan"
  | "waves"
  | "bath"
  | "cloudRain"
  | "sun"
  | "lightbulb"
  | "cable"
  | "spray"
  | "clipboard"
  | "calendar"
  | "phone"
  | "mail"
  | "mapPin"
  | "clock"
  | "check"
  | "arrowRight"
  | "menu"
  | "close"
  | "chevronDown"
  | "message"
  | "badge"
  | "alert"
  | "timer"
  | "users"
  | "thumbsUp"
  | "sparkles"
  | "leaf"
  | "building"
  | "hardHat"
  | "layers"
  | "ruler"
  | "warehouse"
  | "price";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  creditUrl?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: IconName;
  regions?: RegionId[];
  highlights: string[];
  faqs: Faq[];
  priceFrom?: string;
  priceNote?: string;
  image?: ImageAsset;
  featured?: boolean;
}

export interface ServiceArea {
  slug: string;
  name: string;
  state: string;
  stateCode?: string;
  description: string;
  neighborhoods: string[];
  postalCodes: string[];
  featured?: boolean;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  note?: string;
}

export interface Review {
  name: string;
  location: string;
  quote: string;
  service: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  image?: ImageAsset;
  scene?: {
    niche: NicheId;
    state: "before" | "after";
  };
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref?: string;
  email: string;
  city: string;
  state: string;
  stateCode?: string;
  country: string;
  countryCode: string;
  hours: string;
  emergencyHours?: string;
  mapHref?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface AboutContent {
  title: string;
  intro: string;
  paragraphs: string[];
  values: FeatureItem[];
  team: TeamMember[];
  credentials: string[];
}

export interface DemoContent {
  banner: string;
  disclaimer: string;
  formNote: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export type SchemaType =
  | "HVACBusiness"
  | "Plumber"
  | "RoofingContractor"
  | "Electrician"
  | "PestControlService";

export type ContentBlock =
  | {
      type: "richText";
      eyebrow?: string;
      title: string;
      body: string[];
      bullets?: string[];
      image?: ImageAsset;
      imageSide?: "left" | "right";
    }
  | {
      type: "featureGrid";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: FeatureItem[];
    }
  | {
      type: "process";
      eyebrow?: string;
      title: string;
      steps: Step[];
    }
  | {
      type: "faq";
      eyebrow?: string;
      title: string;
      items: Faq[];
    }
  | {
      type: "cta";
      title: string;
      description: string;
      primaryLabel?: string;
      secondaryLabel?: string;
    }
  | {
      type: "comparison";
      eyebrow?: string;
      title: string;
      beforeTitle: string;
      afterTitle: string;
      before: string[];
      after: string[];
    }
  | {
      type: "checklist";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: string[];
      note?: string;
    };

export interface FeaturePage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  regions?: RegionId[];
  blocks: ContentBlock[];
}

export interface NicheShared {
  niche: NicheId;
  theme: ThemeId;
  nicheLabel: string;
  services: Service[];
  featurePages: FeaturePage[];
  faqs: Faq[];
}

export interface ServicePricing {
  priceFrom?: string;
  priceNote?: string;
}

export interface RegionDetails {
  region: RegionId;
  regionLabel: string;
  currency: string;
  locale: string;
  timeZone: string;
  business: BusinessInfo;
  contact: ContactInfo;
  hero: HeroContent;
  trustPoints: string[];
  areas: ServiceArea[];
  plans: Plan[];
  reviews: Review[];
  about: AboutContent;
  gallery: GalleryItem[];
  emergencyNote: string;
  legalNote: string;
  demo: DemoContent;
  seo: SeoContent;
  schemaType: SchemaType;
  servicePricing: Record<string, ServicePricing>;
  extraFaqs?: Faq[];
}

export interface NicheConfig extends NicheShared, RegionDetails {
  services: Service[];
  featurePages: FeaturePage[];
  faqs: Faq[];
}

export interface NicheModule {
  shared: NicheShared;
  regions: Record<RegionId, RegionDetails>;
}
