export const SITE = {
  name: "REDe Interiors & Construction",
  tagline: "Luxury interiors • architecture • turnkey building",
  email: "redeinterior.ap@gmail.com",
  phones: ["+91 94401 54507", "+91 99087 00756"],
  whatsapp: "919908700756",

  cities: ["Hyderabad", "Tirupati", "Nandyal", "Kurnool", "Bangalore"],

  stats: [
    { value: "20+", label: "years of experience" },
    { value: "300+", label: "projects delivered" },
    { value: "5", label: "key service cities" },
  ],

  services: [
    {
      title: "Interior Design",
      text: "Luxury residential and commercial interiors tailored for elegance, comfort and practicality.",
    },
    {
      title: "Architecture",
      text: "Concept planning, structural layouts, 3D visualization and approvals for modern spaces.",
    },
    {
      title: "Turnkey Construction",
      text: "Seamless execution from planning to finishing, all managed under one trusted team.",
    },
    {
      title: "Renovation & Remodeling",
      text: "Smart transformations for homes and commercial spaces with minimal disruption and maximum value.",
    },
  ],

  projects: [
    {
      name: "Luxury Living Room",
      image: "/images/project-1.jpg",
    },
    {
      name: "Modern Kitchen",
      image: "/images/project-2.jpg",
    },
    {
      name: "Luxury Bedroom",
      image: "/images/project-3.jpg",
    },
    {
      name: "Modern Office",
      image: "/images/project-4.jpg",
    },
    {
      name: "Contemporary Living Space",
      image: "/images/project-5.jpg",
    },
    {
      name: "Premium Interior",
      image: "/images/luxury/marble-living.jpg",
    },
  ],

  projectTypes: [
    "Home interiors",
    "Office interiors",
    "Architecture",
    "Turnkey construction",
    "Renovation",
  ],
};

export const tel = (p: string) => "tel:" + p.replace(/\s/g, "");

export const mailto = (email: string) => `mailto:${email}`;
