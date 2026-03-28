import type { CTA, PageMeta, SectionKey } from "../types/content";

const directionsCta: CTA = {
  label: "Get Directions",
  href: "/locations",
};

const quoteCta: CTA = {
  label: "Request a Quote",
  href: "/quote",
};

const estimateCta: CTA = {
  label: "Estimate Your Materials",
  href: "/quote",
};

const contactCta: CTA = {
  label: "Call the Florence Yard",
  href: "tel:843-292-9300",
};

export const site = {
  verticalLabel: "Lumber Yard / Building Supply",
  deploymentTargets: ["Cloudflare Pages", "Netlify", "Vercel"],
  home: {
    sectionOrder: [
      "hero",
      "services",
      "contractorServices",
      "testimonials",
      "locationsPreview",
      "quotePreview",
      "cta",
    ] as SectionKey[],
    hero: {
      eyebrow: "Florence SC Lumber Yard",
      title: "Florence's Contractor-Friendly Lumber & Building Supply Yard",
      description:
        "Quality lumber, hardware, and building materials for contractors and homeowners across Florence County.",
      primaryCta: directionsCta,
      secondaryCta: quoteCta,
      tertiaryCta: estimateCta,
      highlights: [
        "Framing packages, treated stock, and sheet goods ready for pickup",
        "Hardware, fasteners, paint, and jobsite essentials in one yard",
        "Support for contractors, builders, DIY homeowners, and property owners",
      ],
      visualImage: "/images/county-supply-hero.svg",
      visualAlt:
        "Illustrated stacks of lumber, construction materials, and County Supply branding",
    },
    sectionContent: {
      services: {
        eyebrow: "Featured Categories",
        title: "Material categories built for fast estimates and confident buying",
        description:
          "County Supply makes it easier to source framing lumber, treated stock, decking, panels, fasteners, and finishes without bouncing between multiple stores.",
      },
      contractorServices: {
        eyebrow: "Contractor Services",
        title: "Supply support that keeps crews moving",
        description:
          "From recurring material runs to special orders, the Florence team is positioned to help builders and trade partners stay stocked and on schedule.",
      },
      testimonials: {
        eyebrow: "Built For Local Jobs",
        title: "A better first impression for your Florence SC lumber yard",
        description:
          "This demo positions County Supply as a modern local source for builders, contractors, and homeowners instead of a bare-bones placeholder website.",
      },
      locationsPreview: {
        eyebrow: "Locations",
        title: "Two locations serving Florence County and the surrounding Pee Dee",
        description:
          "Use the Florence yard for day-to-day material pickup and lean on the Lake City connection for broader sourcing support.",
      },
      quotePreview: {
        eyebrow: "Quick Quote",
        title: "Estimate a deck, fence, or shed package before you call",
        description:
          "The estimator turns common project dimensions into a ready-to-send material list so County Supply can follow up with pricing and availability.",
        features: ["Deck builder", "Fence builder", "Shed framing calculator"],
      },
      cta: {
        eyebrow: "Local Quote Support",
        title: "Need a Florence SC building supply partner that can move quickly?",
        description:
          "Start with the material estimator, send a quote request, or call the Florence location directly for project support.",
        primaryCta: quoteCta,
        secondaryCta: contactCta,
      },
    },
  },
  pages: {
    home: {
      title: "Florence SC Lumber Yard",
      description:
        "County Supply is a contractor-friendly Florence SC lumber yard offering building materials, hardware, paint, and quote support for local projects.",
      keywords: [
        "Florence SC lumber yard",
        "Florence SC building supply",
        "contractor supply Florence SC",
      ],
    } as PageMeta,
    lumber: {
      title: "Lumber & Building Materials",
      description:
        "Shop framing lumber, pressure treated lumber, plywood, OSB, decking, and trim from a Florence SC building supply yard built for contractors and homeowners.",
      keywords: [
        "Florence SC lumber yard",
        "Florence SC building supply",
        "framing lumber Florence SC",
      ],
    } as PageMeta,
    hardware: {
      title: "Hardware & Tools",
      description:
        "County Supply stocks fasteners, locks, hinges, tools, and jobsite supplies for contractors and DIY homeowners in Florence, South Carolina.",
      keywords: [
        "Florence hardware store",
        "contractor supply Florence SC",
        "jobsite supplies Florence SC",
      ],
    } as PageMeta,
    paint: {
      title: "Paint Department",
      description:
        "Find interior paint, exterior paint, primers, brushes, and rollers at County Supply in Florence SC.",
      keywords: [
        "paint Florence SC",
        "Florence hardware store",
        "building supply Florence SC",
      ],
    } as PageMeta,
    contractorServices: {
      title: "Contractor Services",
      description:
        "Bulk ordering, jobsite delivery coordination, contractor pricing, and special order materials from County Supply in Florence SC.",
      keywords: [
        "contractor supply Florence SC",
        "bulk building materials Florence SC",
        "jobsite delivery Florence SC",
      ],
    } as PageMeta,
    locations: {
      title: "Locations",
      description:
        "Visit County Supply in Florence, SC or the Lake City Lumber division location in Lake City, SC for building material support.",
      keywords: [
        "Florence SC lumber yard",
        "Lake City lumber",
        "Florence SC building supply",
      ],
    } as PageMeta,
    quote: {
      title: "Project Material Estimator",
      description:
        "Use the County Supply material estimator to build a deck, fence, or shed framing list and send it directly for a quote.",
      keywords: [
        "material estimator",
        "deck material calculator Florence SC",
        "contractor supply Florence SC",
      ],
    } as PageMeta,
    contact: {
      title: "Contact County Supply",
      description:
        "Contact County Supply for Florence SC lumber yard support, quick quotes, directions, and building material questions.",
      keywords: [
        "contact County Supply",
        "Florence SC building supply",
        "Florence hardware store",
      ],
    } as PageMeta,
  },
  pageHeroes: {
    lumber: {
      eyebrow: "Florence SC Building Supply",
      title: "Lumber & Building Materials for framing, decking, and daily yard pickups",
      description:
        "County Supply gives contractors and homeowners a cleaner way to shop core materials in Florence, SC, with stock categories organized around real project needs.",
      primaryCta: quoteCta,
      secondaryCta: directionsCta,
      highlights: ["Framing packages", "Treated lumber", "Panels and trim"],
      imageSrc: "/images/county-supply-lumber.svg",
      imageAlt: "Framing lumber, panels, and decking illustration",
    },
    hardware: {
      eyebrow: "Florence Hardware Store",
      title: "Fasteners, tools, and jobsite hardware without the big-box friction",
      description:
        "From daily replenishment runs to finish work details, the hardware wall is positioned to support active crews and serious DIY projects.",
      primaryCta: quoteCta,
      secondaryCta: directionsCta,
      highlights: ["Fasteners", "Locks and hinges", "Jobsite tools"],
      imageSrc: "/images/county-supply-hardware.svg",
      imageAlt: "Hardware and jobsite tools illustration",
    },
    paint: {
      eyebrow: "Paint Department",
      title: "Interior and exterior paint support that stays connected to the rest of your material list",
      description:
        "County Supply rounds out project packages with primers, finishes, brushes, rollers, and paint department guidance for home and property work.",
      primaryCta: quoteCta,
      secondaryCta: directionsCta,
      highlights: ["Interior paint", "Exterior paint", "Primers and tools"],
      imageSrc: "/images/county-supply-paint.svg",
      imageAlt: "Paint department illustration",
    },
    contractorServices: {
      eyebrow: "Contractor Supply Florence SC",
      title: "Contractor services built for repeat jobs, material planning, and easier procurement",
      description:
        "This page positions County Supply as more than a yard. It shows a supply partner that can coordinate quotes, recurring orders, and special-order needs.",
      primaryCta: quoteCta,
      secondaryCta: contactCta,
      highlights: ["Bulk ordering", "Special orders", "Contractor pricing"],
      imageSrc: "/images/county-supply-contractor.svg",
      imageAlt: "Delivery truck and contractor service illustration",
    },
    locations: {
      eyebrow: "Locations",
      title: "Visit County Supply in Florence or connect through Lake City Lumber",
      description:
        "The Florence yard is the main local pickup point, while the Lake City division reinforces sourcing depth and regional support.",
      primaryCta: directionsCta,
      secondaryCta: quoteCta,
      highlights: ["Florence", "Lake City", "Pee Dee coverage"],
      imageSrc: "/images/county-supply-locations.svg",
      imageAlt: "Florence and Lake City location illustration",
    },
    quote: {
      eyebrow: "Quick Quote",
      title: "Project Material Estimator",
      description:
        "Estimate the materials needed for common building projects and send the list directly to County Supply for a quote.",
      primaryCta: quoteCta,
      secondaryCta: contactCta,
      highlights: ["Decks", "Fences", "Shed framing"],
      imageSrc: "/images/county-supply-quote.svg",
      imageAlt: "Blueprint and estimating illustration",
    },
    contact: {
      eyebrow: "Contact County Supply",
      title: "Talk with the Florence SC yard about pricing, availability, and pickup planning",
      description:
        "Use the quick quote flow for material estimates or contact the Florence location directly for directions, product questions, and contractor support.",
      primaryCta: quoteCta,
      secondaryCta: directionsCta,
      highlights: ["Phone support", "Local pickup", "Quote-ready follow-up"],
      imageSrc: "/images/county-supply-contact.svg",
      imageAlt: "Phone, map pin, and lumberyard contact illustration",
    },
  },
  trustBadges: [
    { label: "Primary Market", value: "Florence SC Lumber Yard" },
    { label: "Core Audience", value: "Contractors + Homeowners" },
    { label: "Specialty", value: "Building Materials + Hardware" },
    { label: "Lead Funnel", value: "Estimator + Quote Request" },
  ],
};
