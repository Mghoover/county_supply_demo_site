import type { LocationItem } from "../types/content";

const florenceHours = [
  { label: "Monday", value: "7:00 AM - 5:30 PM" },
  { label: "Tuesday", value: "7:00 AM - 5:30 PM" },
  { label: "Wednesday", value: "7:00 AM - 5:30 PM" },
  { label: "Thursday", value: "7:00 AM - 5:30 PM" },
  { label: "Friday", value: "7:00 AM - 5:30 PM" },
  { label: "Saturday", value: "7:30 AM - 12:00 PM" },
  { label: "Sunday", value: "Closed" },
];

const locations: LocationItem[] = [
  {
    name: "Florence",
    streetAddress: "4417 Pamplico Hwy",
    city: "Florence",
    state: "SC",
    postalCode: "29505",
    phone: "843-292-9300",
    description:
      "Primary contractor yard with framing lumber, treated stock, fasteners, paint, and quick pickup support for Florence County jobs.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=4417+Pamplico+Hwy+Florence+SC+29505&output=embed",
    hours: florenceHours,
    isPrimary: true,
  },
  {
    name: "Lake City",
    streetAddress: "769 S Ron McNair Blvd",
    city: "Lake City",
    state: "SC",
    postalCode: "29560",
    description:
      "Division location connected to Lake City Lumber for regional coverage, special-order sourcing, and support across the Pee Dee.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=769+S+Ron+McNair+Blvd+Lake+City+SC&output=embed",
  },
];

export const business = {
  vertical: "building-supply",
  schemaType: "HomeAndConstructionBusiness",
  name: "County Supply",
  divisionOf: "Lake City Lumber",
  tagline: "Contractor-friendly lumber, hardware, and building materials in Florence County.",
  description:
    "County Supply is a Florence SC lumber yard and building supply location serving contractors, builders, DIY homeowners, and property owners with lumber, hardware, paint, and quote-ready material support.",
  phone: "843-292-9300",
  email: "sales@countysupplysc.com",
  address: locations[0].streetAddress,
  city: locations[0].city,
  state: locations[0].state,
  postalCode: locations[0].postalCode ?? "",
  websiteUrl: "https://countysupplysc.com",
  hours: florenceHours,
  social: {
    facebook: "https://facebook.com/countysupplysc",
    instagram: "https://instagram.com/countysupplysc",
    google: "https://www.google.com/search?q=County+Supply+Florence+SC",
  },
  mapEmbedUrl: locations[0].mapEmbedUrl,
  serviceAreas: [
    "Florence, SC",
    "Florence County",
    "Lake City, SC",
    "Pamplico, SC",
    "Timmonsville, SC",
  ],
  locations,
};
