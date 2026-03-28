import type { ServiceItem } from "../../types/content";

export const hardwareCategories: ServiceItem[] = [
  {
    title: "Fasteners",
    summary: "Nails, screws, anchors, and connectors for framing, decking, repairs, and general construction.",
    icon: "Fasten",
    tags: ["Structural", "Finish"],
  },
  {
    title: "Locks",
    summary: "Replacement and upgrade hardware for doors, gates, sheds, and property access points.",
    icon: "Secure",
    tags: ["Entry", "Property upkeep"],
  },
  {
    title: "Hinges",
    summary: "Functional hardware for gates, sheds, doors, and swing applications across residential projects.",
    icon: "Swing",
    tags: ["Gate hardware", "Door hardware"],
  },
  {
    title: "Tools",
    summary: "Daily-use tools and replacement items that keep a crew or weekend project moving.",
    icon: "Tools",
    tags: ["Jobsite basics", "Hand tools"],
  },
  {
    title: "Jobsite Supplies",
    summary: "The extras that get forgotten until the truck is already loaded, handled in the same stop.",
    icon: "Supply",
    tags: ["Blades", "Safety", "Consumables"],
  },
];
