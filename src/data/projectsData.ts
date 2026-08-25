export interface ProjectItem {
  slug: string;
  title: string;
  category: "AI & Automation" | "Web & Software" | "Mobile Apps" | "E-Commerce";
  description: string;
  clientOverview: string;
  problem: string;
  solution: string;
  image: string;
  technologies: string[];
  features: string[];
  results: Array<{
    metric: string;
    label: string;
  }>;
  gallery: string[];
  relatedServices: string[];
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    slug: "muzammil-khan-portfolio",
    title: "Muzammil Khan -- Developer Portfolio",
    category: "Web & Software",
    description: "Modern, responsive full-stack MERN developer portfolio web application featuring dynamic project showcases, smooth motion animations, and interactive tech stack displays.",
    clientOverview: "Muzammil Khan -- A MERN Stack & Full-Stack Web Developer specialising in React, Node.js, Express, and MongoDB, engineering scalable web applications for clients worldwide.",
    problem: "The developer required an ultra-fast, modern personal portfolio web app to showcase full-stack projects, demonstrate MERN architecture expertise, and capture client inquiry leads globally.",
    solution: "Engineered a slick single-page React portfolio application using Framer Motion animations, clean typography, structured JSON-LD SEO schema, and sub-second Surge cloud deployment.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://muzammil-khan-portfolio.surge.sh",
    features: [
      "Dynamic interactive MERN stack project showcase grid",
      "Framer Motion page transition effects & micro-interactions",
      "Structured JSON-LD Person & WebSite schema markup for developer SEO",
      "Responsive mobile-first layout with smooth navigation",
      "Integrated direct client inquiry contact system"
    ],
    results: [
      { metric: "100%", label: "Mobile Responsiveness Score" },
      { metric: "0.6s", label: "Average Initial Render Time" },
      { metric: "MERN", label: "Full-Stack Technology Architecture" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["web-development", "software-development", "ui-ux"]
  },
  {
    slug: "resume-iq",
    title: "ResumeIQ -- AI Resume Builder & ATS Checker",
    category: "AI & Automation",
    description: "AI-powered resume optimization platform using Groq LLaMA models for sub-second ATS keyword matching, missing skill identification, and automated bullet point rewrites.",
    clientOverview: "An intelligent career technology SaaS platform designed to help job seekers instantly optimize their resumes against job descriptions with AI-driven ATS scoring algorithms.",
    problem: "Job applicants struggled to get interview callbacks due to automated Applicant Tracking Systems (ATS) filtering out unoptimized resumes lacking targeted job description keywords.",
    solution: "Engineered a high-speed AI analysis engine powered by Groq LLaMA models to parse PDF resumes, extract missing hard & soft skills, generate match scores, and rewrite resume bullet points in sub-500ms.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Groq AI", "React", "TypeScript", "Tailwind CSS", "PDF.js Parsing", "Vercel"],
    liveUrl: "https://project2-gamma-one.vercel.app",
    features: [
      "Sub-500ms real-time AI ATS resume compatibility scoring",
      "Automated job description keyword gap & skills analysis",
      "AI-powered impact-driven bullet point re-writer with quantitative metric suggestions",
      "PDF document upload parsing & instant visual breakdown",
      "One-click PDF resume export with ATS-friendly layout"
    ],
    results: [
      { metric: "< 500ms", label: "Groq AI Analysis Latency" },
      { metric: "3.2x", label: "Increase in Interview Callback Rate" },
      { metric: "98%", label: "ATS Keyword Parsing Accuracy" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b6f74?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["ai-agents", "ai-assistants", "web-development"]
  },
  {
    slug: "afnan-property-care",
    title: "Afnan Residential Property Care Platform",
    category: "Web & Software",
    description: "High-performance property maintenance web application built for a licensed Dubai home care company with automated service quotes, WhatsApp booking integration, and mobile speed optimization.",
    clientOverview: "Muhammad Afnan Residential Property Care Services L.L.C -- A licensed home maintenance provider (Trade License No. 1571076) delivering AC cleaning, plumbing, electrical, painting, and villa maintenance across Dubai, UAE.",
    problem: "The client needed a high-converting, lightning-fast digital platform to showcase certified maintenance services across competitive Dubai real estate areas while enabling one-touch WhatsApp booking and instant quote requests.",
    solution: "Engineered a high-performance web platform featuring optimized asset loading, custom interactive service cards, DEWA-certified service highlights, responsive mobile navigation, and seamless 1-click WhatsApp lead routing.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Vite", "Tailwind CSS", "SEO Schema Markup", "WhatsApp API", "PWA Manifest"],
    liveUrl: "https://maresidentialpropertycareservicellc.com/",
    features: [
      "90+ Google Lighthouse performance optimization for Dubai mobile users",
      "Instant 1-click WhatsApp & direct phone lead generation booking system",
      "Structured JSON-LD Schema markup for local SEO rankings in Dubai & UAE",
      "Interactive service catalog covering AC, Plumbing, Electrical, and Painting",
      "Integrated Dubai Trade License No. 1571076 trust verification badges"
    ],
    results: [
      { metric: "90+", label: "Google Mobile Speed Score" },
      { metric: "3.5x", label: "Increase in Daily Quote Requests" },
      { metric: "< 1s", label: "Average Page Load Time in Dubai" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["web-development", "seo", "automation"]
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support Platform",
    category: "AI & Automation",
    description: "Autonomous multi-agent enterprise customer support platform with real-time vector RAG and CRM synchronization.",
    clientOverview: "Global SaaS provider struggling with 24-hour response latency and rising customer service operation costs.",
    problem: "Support teams were inundated with thousands of repetitive technical queries daily, leading to customer churn and low team morale.",
    solution: "We engineered a custom AI autonomous support agent capable of ingesting product documentation, resolving standard technical tickets, and executing CRM updates directly.",
    image: "/projects/ai-customer-support.png",
    technologies: ["LangGraph", "Python", "FastAPI", "Pinecone", "Next.js", "Tailwind CSS"],
    features: [
      "Sub-second vector semantic search over 50,000 document pages",
      "Automated ticket classification & priority tagging",
      "Human agent hand-off with live transcript memory",
      "Multi-channel support (Web, Email, Slack)"
    ],
    results: [
      { metric: "78%", label: "Reduction in Support Ticket Latency" },
      { metric: "$140K", label: "Annual Operational Savings" },
      { metric: "94%", label: "First Contact Resolution Rate" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553775927-a071d5a6a39a?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["ai-agents", "ai-chatbots", "business-automation"]
  },
  {
    slug: "whatsapp-business-automation",
    title: "WhatsApp Business Automation",
    category: "AI & Automation",
    description: "End-to-end intelligent WhatsApp sales automation bot for lead qualification, appointment booking, and CRM sync.",
    clientOverview: "Fast-growing real estate agency receiving over 500 daily inbound inquiry messages via WhatsApp.",
    problem: "Delayed sales response times caused qualified buyers to reach out to competing agencies before sales reps could respond.",
    solution: "Built a customized WhatsApp Cloud API bot integrated with OpenAI and HubSpot CRM to instantly qualify buyers and schedule viewings automatically.",
    image: "/projects/whatsapp-automation.png",
    technologies: ["WhatsApp Cloud API", "Node.js", "OpenAI GPT-4o", "HubSpot API", "n8n"],
    features: [
      "Automated 24/7 lead qualification dialogue",
      "Real-time calendar booking integration",
      "Instant notification triggers for human sales agents",
      "Multi-language conversational capabilities"
    ],
    results: [
      { metric: "< 30s", label: "Average Initial Lead Response Time" },
      { metric: "3.2x", label: "Increase in Qualified Property Viewings" },
      { metric: "100%", label: "HubSpot CRM Auto Data Sync" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["automation", "ai-chatbots", "digital-marketing"]
  },
  {
    slug: "ai-document-processing-system",
    title: "AI Document Processing System",
    category: "AI & Automation",
    description: "Enterprise OCR and Computer Vision document extraction pipeline converting unstructured PDFs into database JSON records.",
    clientOverview: "International logistics firm processing over 10,000 paper bills of lading and customs invoices weekly.",
    problem: "Manual data entry teams caused bottleneck delays in shipping clearance and introduced costly keying errors.",
    solution: "Designed an OCR vision pipeline utilizing vision transformer models to parse, extract, validate, and write document fields directly into their ERP.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1200&auto=format&fit=crop",
    technologies: ["PyTorch", "Tesseract OCR", "Python", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Automated table structure and key-value field extraction",
      "Built-in mathematical validation check rules",
      "High accuracy scanning for blurry or low-quality documents",
      "Scalable microservices infrastructure"
    ],
    results: [
      { metric: "99.4%", label: "Data Field Accuracy Rate" },
      { metric: "15x", label: "Faster Processing Speed per Document" },
      { metric: "90%", label: "Manual Data Entry Time Elimination" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616628188540-925618b98318?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["computer-vision", "software-development", "data-analytics"]
  },
  {
    slug: "e-commerce-platform",
    title: "Headless E-Commerce Platform",
    category: "E-Commerce",
    description: "Ultra-fast headless Next.js online store for a luxury retail brand with custom product configurators and sub-second navigation.",
    clientOverview: "High-end apparel brand experiencing slow store loading speeds and high checkout drop-offs on standard templates.",
    problem: "Mobile loading times averaged 6 seconds, leading to a high 72% cart abandonment rate.",
    solution: "Rebuilt the entire digital shopping storefront using Next.js, Shopify Storefront API, and Tailwind CSS for instant page transitions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js App Router", "Shopify Storefront GraphQL", "Tailwind CSS", "Framer Motion", "Stripe"],
    features: [
      "Instant sub-second page transitions & image optimization",
      "Custom 3D product preview visualizer",
      "One-click mobile express checkout",
      "100/100 Google Lighthouse mobile speed score"
    ],
    results: [
      { metric: "+45%", label: "Increase in Mobile Conversion Rate" },
      { metric: "0.8s", label: "Average Page Load Time" },
      { metric: "2.1x", label: "Growth in Average Order Value (AOV)" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["ecommerce", "web-development", "ui-ux"]
  },
  {
    slug: "lead-generation-automation",
    title: "Lead Generation & Outreach Engine",
    category: "AI & Automation",
    description: "Data-driven automated B2B outbound lead research, email enrichment, and automated campaign tracking pipeline.",
    clientOverview: "B2B tech consultancy aiming to double corporate client pipeline without scaling sales headcount.",
    problem: "Sales representatives spent 60% of their workday manually researching prospect leads on LinkedIn and finding emails.",
    solution: "Built an automated enrichment engine that identifies target decision-makers, validates email addresses, and auto-populates targeted outreach campaigns.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Python", "n8n", "Apollo API", "Hunter.io", "HubSpot", "Google Sheets API"],
    features: [
      "Automated prospect ICP scoring and email verification",
      "Custom personalized message snippet generation with AI",
      "CRM deal stage auto-creation",
      "Unsubscribe compliance and domain deliverability monitoring"
    ],
    results: [
      { metric: "1,200+", label: "Qualified B2B Prospect Leads Generated / Mo" },
      { metric: "4.8x", label: "Increase in Booked Discovery Meetings" },
      { metric: "25 hrs", label: "Saved per Sales Rep every week" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["digital-marketing", "automation", "seo"]
  },
  {
    slug: "computer-vision-system",
    title: "Industrial Inspection Computer Vision",
    category: "AI & Automation",
    description: "Edge-deployed AI camera vision system executing real-time defect detection on high-speed industrial assembly lines.",
    clientOverview: "Electronics manufacturer seeking automated zero-defect quality control for printed circuit board assembly.",
    problem: "Manual microscopic inspection under high speeds led to fatigue, human error, and costly product returns.",
    solution: "Deployed custom vision models to camera feeds over edge hardware devices for sub-10ms defect classification.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    technologies: ["YOLOv8", "OpenCV", "PyTorch", "NVIDIA Jetson Edge", "Python", "MQTT"],
    features: [
      "Sub-10 millisecond real-time defect recognition",
      "Automated robotic arm reject signal triggering",
      "Cloud telemetry dashboard with defect heatmaps",
      "Robust performance in dynamic factory lighting"
    ],
    results: [
      { metric: "99.9%", label: "Defect Detection Accuracy" },
      { metric: "0", label: "Defective Units Shipped to Customers" },
      { metric: "5x", label: "Assembly Line Speed Increase" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop"
    ],
    relatedServices: ["computer-vision", "software-development", "data-analytics"]
  }
];
