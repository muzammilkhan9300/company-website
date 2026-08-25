export interface FAQItem {
  id: string;
  category: "General" | "AI & Automation" | "Web Development" | "Marketing" | "Projects" | "Pricing" | "Support";
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "1",
    category: "General",
    question: "What services do you provide?",
    answer: "Brother Solutions provides full-spectrum intelligent technology services, including AI Agents, AI Chatbots, AI Assistants, Computer Vision, Custom Software Development, Next.js Web Development, Mobile Apps, Business Automation, SEO & Search Growth, Digital Marketing, Graphic Design & Branding, UI/UX Design, Data Analytics, and E-Commerce platforms."
  },
  {
    id: "2",
    category: "AI & Automation",
    question: "How can AI help my business?",
    answer: "AI automates repetitive manual processes, reduces labor costs, speeds up lead qualification, delivers 24/7 autonomous customer service, parses enterprise documents, and extracts real-time actionable insights from your business data."
  },
  {
    id: "3",
    category: "Web Development",
    question: "Can you build custom software?",
    answer: "Yes, we architect custom enterprise web platforms, multi-tenant SaaS products, internal workflow tools, REST/GraphQL APIs, and complex web apps tailored specifically to your business logic."
  },
  {
    id: "4",
    category: "AI & Automation",
    question: "Can you build AI agents?",
    answer: "Yes! We specialize in autonomous multi-agent systems built with frameworks like LangChain, LangGraph, and Python. Our agents independently reason, execute multi-step workflows, query databases, and call REST APIs."
  },
  {
    id: "5",
    category: "AI & Automation",
    question: "Can you automate WhatsApp?",
    answer: "Yes, using official WhatsApp Cloud APIs integrated with AI models and CRMs like HubSpot or Salesforce, we automate customer support, lead qualification, and appointment booking."
  },
  {
    id: "6",
    category: "General",
    question: "Can you integrate APIs?",
    answer: "We seamlessly connect custom REST APIs, GraphQL endpoints, webhooks, databases, and third-party software applications (Stripe, HubSpot, Slack, Shopify, n8n) to create frictionless data flows."
  },
  {
    id: "7",
    category: "Projects",
    question: "How long does a project take?",
    answer: "Project timelines depend on technical scope. Standard high-performance websites take 2 to 4 weeks, while complex custom AI agent workflows and enterprise software builds typically range from 4 to 8 weeks."
  },
  {
    id: "8",
    category: "Support",
    question: "Do you provide maintenance?",
    answer: "Yes, we offer ongoing strategic support, 24/7 server monitoring, performance tuning, security updates, and iterative feature scaling packages."
  },
  {
    id: "9",
    category: "Pricing",
    question: "How do I start a project?",
    answer: "Simply click 'Start a Project' or contact us through our form, email, or WhatsApp. We will schedule a discovery call to review your goals and deliver a tailored technical architecture proposal."
  }
];
