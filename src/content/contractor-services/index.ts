import type { ServiceItem } from "../../types/content";

export const contractorServices: ServiceItem[] = [
  {
    title: "Bulk Ordering",
    summary: "Line up recurring material lists for framing, repairs, maintenance, and staged project work.",
    icon: "Volume",
    tags: ["Repeat jobs", "Planned pickups"],
  },
  {
    title: "Jobsite Delivery",
    summary: "Coordinate larger material runs for active jobs when hauling everything yourself slows down the crew.",
    icon: "Delivery",
    tags: ["Crew support", "Scheduled drops"],
  },
  {
    title: "Special Order Materials",
    summary: "Source harder-to-find items and longer lead materials through the County Supply and Lake City Lumber network.",
    icon: "Source",
    tags: ["Expanded sourcing", "Project planning"],
  },
  {
    title: "Contractor Pricing",
    summary: "Create a stronger reason for trade partners to keep buying local instead of defaulting to generic retail channels.",
    icon: "Pricing",
    tags: ["Trade accounts", "Volume pricing"],
  },
];
