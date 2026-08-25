export interface SiteConfig {
  agencyName: string;
  tagline: string;
  subTagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
    github: string;
  };
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export const siteConfig: SiteConfig = {
  agencyName: "Brother Solutions",
  tagline: "Building Intelligent Digital Solutions That Move Businesses Forward.",
  subTagline: "We help ambitious businesses automate operations, build intelligent products, strengthen their digital presence, and turn ideas into scalable solutions.",
  email: "hr@brothersolutions.online",
  phone: "+92 331 4790014",
  whatsapp: "923314790014",
  whatsappMessage: "Hello Brother Solutions, I would like to discuss a project.",
  address: "International Technology Center, Technology Park, Floor 8",
  socials: {
    linkedin: "https://www.linkedin.com/in/brother-solutions-b676a6430",
    instagram: "https://www.instagram.com/brothersolution6/",
    facebook: "https://www.facebook.com/profile.php?id=61593408045251",
    twitter: "https://x.com",
    github: "https://github.com",
  },
  stats: [
    {
      value: "50+",
      label: "Projects Delivered",
      description: "Successful global enterprise and startup deployments",
    },
    {
      value: "20+",
      label: "Businesses Supported",
      description: "Empowered across multiple technology domains",
    },
    {
      value: "10+",
      label: "Digital Solutions",
      description: "Proprietary AI and automation architectural frameworks",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Dedicated monitoring and strategic technical assistance",
    },
  ],
};
