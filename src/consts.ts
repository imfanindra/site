import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Fanindra Maharana",
  EMAIL: "imfanindra@gmail.com",

  NUM_PROJECTS_ON_HOMEPAGE: 20,
};

export const HOME: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Fanindra Maharana is an Interaction Design student at JKLU, Jaipur",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Read more about me",
};

export const LAB: Metadata = {
  TITLE: "Lab",
  DESCRIPTION: "Checkout some of my design explorations",
};

export const SOCIALS: Socials = [
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/fanindra-m/",
  },
  { 
    NAME: "Medium",
    HREF: "https://imfanindra.medium.com/"
  },
  { 
    NAME: "Behance",
    HREF: "https://www.behance.net/imfanindra",
  },
  {
    NAME: "CV",
    HREF: "https://read.cv/fanindra_maharana",
  }
];