export type CTA = {
  label: string;
  href: string;
};

export type SectionKey =
  | "hero"
  | "services"
  | "contractorServices"
  | "testimonials"
  | "cta"
  | "location"
  | "hours"
  | "gallery"
  | "menu"
  | "team"
  | "trustBadges"
  | "expertise"
  | "caseStudies"
  | "locationsPreview"
  | "quotePreview";

export type ServiceItem = {
  title: string;
  summary: string;
  description?: string;
  icon?: string;
  tags?: string[];
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type GalleryItem = {
  title: string;
  subtitle?: string;
  image?: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
};

export type CaseStudy = {
  title: string;
  summary: string;
  outcome: string;
};

export type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
};

export type LocationItem = {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode?: string;
  phone?: string;
  description: string;
  mapEmbedUrl: string;
  hours?: { label: string; value: string }[];
  isPrimary?: boolean;
};
