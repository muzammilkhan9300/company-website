// TEAM MEMBER DATA

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Zahid Ali",
    role: "AI Engineer",
    description:
      "Building intelligent AI solutions and automated workflows that improve efficiency, streamline business processes, and drive growth.",
    image: "/team/member-1.png",
    linkedin: "https://www.linkedin.com/in/zahid-ali-367b67371",
  },
  {
    id: 2,
    name: "Muhammad Anwar",
    role: "MERN-Stack Web Engineer",
    description:
      "Crafting seamless web experiences with MERN stack -- building robust, scalable full-stack solutions that deliver real business value.",
    image: "/team/member-2.png",
    linkedin: "https://www.linkedin.com/in/m-anwar-85a774202",
  },
  {
    id: 3,
    name: "Muzammil Khan",
    role: "Full-Stack Web Engineer",
    description:
      "Transforming complex business needs into intuitive, high-performance digital solutions across the full web technology stack.",
    image: "/team/member-3.png",
    linkedin: "https://www.linkedin.com/in/muzammil-khan-953b98316",
  },
  {
    id: 4,
    name: "Sayed Babar Ali Shah",
    role: "Digital Marketing & Google Ads Specialist",
    description:
      "Driving targeted traffic, optimizing ad campaigns, and crafting data-driven growth strategies to maximize ROI and scale brand visibility online.",
    image: "/team/member-4.png",
    linkedin: "PASTE_YOUR_LINKEDIN_URL_HERE",
  },
];