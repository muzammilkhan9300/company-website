export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  category: "AI & Automation" | "Web & Software" | "Design & Branding" | "Marketing & Growth" | "Data & Analytics";
  benefits: string[];
  useCases: string[];
  technologies: string[];
  problemsSolved: string[];
  whatWeProvide: string[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "seo",
    title: "SEO & Search Growth",
    shortDescription: "Increase your visibility, attract qualified traffic, and build sustainable search growth with data-driven SEO strategies.",
    fullDescription: "Dominating search engine results requires precision data engineering, technical optimization, and content velocity. Our SEO & Search Growth engine is architected to rank high-intent keywords, solve complex site architectures, optimize Core Web Vitals, and generate continuous organic pipeline growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    iconName: "Search",
    category: "Marketing & Growth",
    benefits: [
      "Sustainable organic search traffic expansion",
      "High-intent B2B lead generation",
      "Technical Core Web Vitals optimization",
      "Data-backed keyword ranking strategies",
      "Authority building & backlink architecture",
      "Conversion-focused landing page SEO"
    ],
    useCases: [
      "SaaS product market expansion",
      "E-commerce revenue scale-up",
      "Enterprise digital presence revamp",
      "Local & global multi-region SEO"
    ],
    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Next.js SSG/SSR", "Schema Markup"],
    problemsSolved: [
      "Low organic traffic volume and conversion",
      "Penalized or indexing-blocked websites",
      "Poor technical site performance and speed",
      "Lack of topical authority in competitive niches"
    ],
    whatWeProvide: [
      "Full Technical SEO Audit & Remediation",
      "Competitor Keyword Gap Analysis",
      "On-Page Content Architecture & Optimization",
      "Programmatic SEO Strategy",
      "Monthly Growth Analytics & ROI Reporting"
    ],
    process: [
      { step: "01", title: "Comprehensive Audit", description: "In-depth crawl analysis covering technical health, indexability, and backlink profile." },
      { step: "02", title: "Keyword Intelligence", description: "Identifying high-intent, lucrative keyword targets with strong business value." },
      { step: "03", title: "Technical & On-Page Execution", description: "Refactoring meta, speed, structural schema, and content hierarchy." },
      { step: "04", title: "Authority Growth & Tracking", description: "Building high-quality backlinks and continually measuring search rank improvements." }
    ],
    faqs: [
      { question: "How long until we see SEO results?", answer: "Noticeable indexation and ranking improvements start within 4 to 8 weeks, with compounding organic lead volume taking off around months 3 to 6." },
      { question: "Do you offer technical SEO for custom React/Next.js frameworks?", answer: "Yes! Next.js and headless SSR/SSG sites are our speciality, ensuring server rendering and meta schemas are flawless." }
    ]
  },
  {
    slug: "web-development",
    title: "Website Development",
    shortDescription: "High-performance, responsive websites designed to represent your brand and convert visitors into customers.",
    fullDescription: "We engineer lightning-fast, visually breathtaking, high-converting digital platforms using modern tech stacks such as Next.js, React, TypeScript, and Tailwind CSS. Built with modular component architecture, smooth dynamic micro-interactions, and enterprise-grade code standards.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
    iconName: "Globe",
    category: "Web & Software",
    benefits: [
      "Ultra-fast loading speed & sub-second page loads",
      "Fully responsive across all screen viewports",
      "Conversion-rate optimized dynamic layouts",
      "Enterprise security and clean scalable code",
      "Seamless API integrations with CRMs & automation",
      "Integrated SEO foundation"
    ],
    useCases: [
      "Corporate tech agency web portals",
      "High-converting SaaS product websites",
      "Custom web dashboards and web apps",
      "Interactive marketing platforms"
    ],
    technologies: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    problemsSolved: [
      "Slow, outdated, legacy websites with poor UX",
      "Low lead conversion rates",
      "Mobile responsiveness issues across devices",
      "Difficult to maintain or expand tech architectures"
    ],
    whatWeProvide: [
      "Custom Web Application Architecture",
      "Responsive UI/UX Engineering",
      "Headless CMS Integration",
      "Performance & Speed Tuning (100 Lighthouse score)",
      "Ongoing Technical Maintenance & Support"
    ],
    process: [
      { step: "01", title: "Wireframing & UX Architecture", description: "Mapping core conversion paths and user flows." },
      { step: "02", title: "UI Design & Component System", description: "Designing pixel-perfect aesthetic components." },
      { step: "03", title: "Frontend Engineering", description: "Writing clean, modular Next.js & React TypeScript code." },
      { step: "04", title: "Deployment & Optimization", description: "Vercel/AWS cloud deployment, security setup, and launch." }
    ],
    faqs: [
      { question: "Will our team be able to update content easily?", answer: "Yes, we integrate intuitive CMS systems or structured data models so updating content takes seconds." },
      { question: "Is the site mobile-friendly?", answer: "Every pixel is thoroughly tested across mobile, tablet, and ultra-wide monitor devices." }
    ]
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    shortDescription: "Autonomous AI agents that understand tasks, use tools, connect with systems, and automate complex business workflows.",
    fullDescription: "Empower your organization with autonomous multi-agent systems designed to execute multi-step workflows, reason over real-time data, integrate with internal APIs, and execute complex business operational tasks with minimum human oversight.",
    image: "/ai-agents-card.jpg",
    iconName: "Bot",
    category: "AI & Automation",
    benefits: [
      "24/7 autonomous workflow execution",
      "90% reduction in manual repetitive operations",
      "Intelligent decision making powered by custom LLMs",
      "Full API, CRM, and database tool integration",
      "Human-in-the-loop oversight guardrails",
      "Rapid scalability without overhead costs"
    ],
    useCases: [
      "Autonomous B2B outbound lead qualification",
      "Automated financial reconciliation & auditing",
      "Customer support triage & autonomous resolution",
      "Market research synthesis and auto-reporting"
    ],
    technologies: ["LangChain", "LangGraph", "Python", "FastAPI", "OpenAI / Claude APIs", "n8n", "Vector DBs"],
    problemsSolved: [
      "Expensive manual operational overhead",
      "Human error in multi-step administrative tasks",
      "Slow response times to client leads & data queries",
      "Disconnected siloed software applications"
    ],
    whatWeProvide: [
      "Custom AI Agent Architecture & Logic Blueprint",
      "Tooling & API Action Hooks Development",
      "LLM Fine-Tuning & Vector Store Setup",
      "Security, Guardrails & Human Handoff Setup",
      "Production Deployment & Agent Analytics Dashboard"
    ],
    process: [
      { step: "01", title: "Workflow Discovery", description: "Deconstructing manual business workflows into deterministic agent steps." },
      { step: "02", title: "Agent Logic Design", description: "Configuring system prompts, tool usage, and memory vector DBs." },
      { step: "03", title: "API Integration", description: "Connecting agents to CRMs, Slack, WhatsApp, and databases." },
      { step: "04", title: "Testing & Guardrails", description: "Enforcing safety guardrails, human fallback, and production deployment." }
    ],
    faqs: [
      { question: "How do AI agents differ from standard chatbots?", answer: "Standard chatbots follow rigid decision trees. AI agents independently reason, call APIs, use tools, and solve dynamic multi-step objectives." },
      { question: "Can AI agents integrate with our existing CRM?", answer: "Yes, our agents connect with Hubspot, Salesforce, Zendesk, WhatsApp, custom SQL databases, and custom REST APIs." }
    ]
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Intelligent conversational systems that answer questions, qualify leads, support customers, and work around the clock.",
    fullDescription: "Transform customer engagement with context-aware conversational AI chatbots trained specifically on your company's proprietary knowledge base, documents, and product manuals.",
    image: "/ai-chatbots-card.png",
    iconName: "MessageSquare",
    category: "AI & Automation",
    benefits: [
      "Instant 24/7 customer response rate",
      "Trained on proprietary company knowledge",
      "Automated lead capture & CRM syncing",
      "Multi-channel support (Web, WhatsApp, Slack)",
      "Multi-lingual capability across 50+ languages",
      "Seamless escalation to live agents"
    ],
    useCases: [
      "E-commerce customer service & tracking",
      "SaaS onboarding assistant",
      "Real estate lead qualification",
      "Internal HR and IT helpdesk bot"
    ],
    technologies: ["OpenAI Embeddings", "Pinecone Vector DB", "React Chat Components", "Node.js", "Python"],
    problemsSolved: [
      "Overwhelmed support teams during peak hours",
      "High bounce rates due to delayed customer inquiries",
      "Inconsistent product information delivery"
    ],
    whatWeProvide: [
      "Custom Knowledge-Base RAG Ingestion Pipeline",
      "Branded Chat Widget Development",
      "CRM & Lead Capture Routing Integration",
      "Conversation Analytics & Monitoring"
    ],
    process: [
      { step: "01", title: "Data Collection", description: "Ingesting websites, PDFs, manuals, and FAQs into vector databases." },
      { step: "02", title: "Model Tuning", description: "Customizing tone, branding, and response accuracy rules." },
      { step: "03", title: "Widget & Channel Setup", description: "Deploying chat widget to website and WhatsApp API." },
      { step: "04", title: "Launch & Optimization", description: "Refining responses based on real user conversations." }
    ],
    faqs: [
      { question: "Can the chatbot answer specific technical documentation questions?", answer: "Yes! Using Retrieval-Augmented Generation (RAG), it pulls exact answers directly from your official documents." },
      { question: "What happens if the AI doesn't know an answer?", answer: "It smoothly transfers the conversation or creates a ticket for your human support team." }
    ]
  },
  {
    slug: "ai-assistants",
    title: "AI Assistants",
    shortDescription: "Personalized AI assistants that help teams work faster, access information, and automate repetitive tasks.",
    fullDescription: "Deploy tailored internal AI co-pilots that act as instant knowledge engines for your employees—empowering them to summarize long documents, write emails, generate code, and query company databases in plain natural language.",
    image: "/ai-assistants-card.jpg",
    iconName: "Cpu",
    category: "AI & Automation",
    benefits: [
      "Boost team productivity by up to 40%",
      "Instant internal company knowledge search",
      "Automated document summarization & draft generation",
      "Strict data privacy and enterprise encryption",
      "Custom workflow automation shortcuts"
    ],
    useCases: [
      "Legal contract & document analysis co-pilot",
      "Executive email & schedule management",
      "Internal tech documentation assistant",
      "Sales proposal auto-generation tool"
    ],
    technologies: ["OpenAI Enterprise API", "Claude 3.5 Sonnet", "LangChain", "React", "FastAPI"],
    problemsSolved: [
      "Employees wasting hours searching internal folders",
      "Manual drafting of repetitive reports & emails",
      "Information silos across teams"
    ],
    whatWeProvide: [
      "Enterprise Knowledge Vector Engine",
      "Custom Internal Web App Assistant Portal",
      "Role-Based Access Control & Security Encryption",
      "Employee Training & Workflow Integration"
    ],
    process: [
      { step: "01", title: "Needs Assessment", description: "Identifying bottlenecks in daily employee operations." },
      { step: "02", title: "Architecture & Security", description: "Setting up private, encrypted AI environments." },
      { step: "03", title: "Custom Co-Pilot Build", description: "Developing custom web interfaces tailored to team roles." },
      { step: "04", title: "Team Onboarding", description: "Training employees for maximum workflow productivity." }
    ],
    faqs: [
      { question: "Is our internal company data safe and confidential?", answer: "Absolutely. We enforce strict enterprise zero-data-retention APIs and enterprise encryption standards." }
    ]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    shortDescription: "AI-powered vision systems that understand images, documents, objects, video, and real-world environments.",
    fullDescription: "Leverage cutting-edge deep learning models to extract actionable visual intelligence from images, video feeds, and complex physical documents. From automated quality inspection to OCR document digitization.",
    image: "/computer-vision-card.png",
    iconName: "Eye",
    category: "AI & Automation",
    benefits: [
      "Real-time visual processing & object recognition",
      "Automated optical character recognition (OCR)",
      "High accuracy quality assurance in manufacturing",
      "Reduction in manual visual inspection labor",
      "Real-time video analytics alert triggers"
    ],
    useCases: [
      "Automated document digitization (receipts, invoices)",
      "Defect detection in manufacturing assembly lines",
      "Security & facial verification systems",
      "Medical image analysis assistance"
    ],
    technologies: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Tesseract OCR", "Python"],
    problemsSolved: [
      "Slow, manual document data entry",
      "Defects slipping through manual inspection lines",
      "Inability to analyze video monitoring footage automatically"
    ],
    whatWeProvide: [
      "Custom Computer Vision Model Training",
      "Edge Computer Vision Deployment Architecture",
      "Document Processing OCR Pipeline",
      "Integration with Camera Feeds & Hardware"
    ],
    process: [
      { step: "01", title: "Data Annotation", description: "Gathering and labeling dataset images for high accuracy model training." },
      { step: "02", title: "Model Training & Tuning", description: "Training convolutional networks and vision transformers." },
      { step: "03", title: "System Pipeline Integration", description: "Connecting vision inferencing directly into software apps." },
      { step: "04", title: "Validation & Deployment", description: "Deploying on cloud servers or edge devices with real-time logging." }
    ],
    faqs: [
      { question: "Can computer vision process scanned PDF invoices?", answer: "Yes, our OCR vision pipelines extract structured JSON data from messy scanned documents with over 99% accuracy." }
    ]
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortDescription: "Modern Android and iOS applications built for usability, performance, and scalable growth.",
    fullDescription: "We build intuitive, fluid, and scalable mobile apps for iOS and Android using React Native and Flutter frameworks. Engineered with pristine mobile UI, offline-first sync capability, and seamless cloud backend APIs.",
    image: "/mobile-apps-card.jpg",
    iconName: "Smartphone",
    category: "Web & Software",
    benefits: [
      "Single codebase for native iOS & Android apps",
      "Fluid 60FPS UI rendering and animations",
      "Push notification & location service integration",
      "Offline data synchronization",
      "App Store & Google Play Store publishing management"
    ],
    useCases: [
      "On-demand service booking apps",
      "E-commerce customer shopping apps",
      "Fintech & wallet applications",
      "Enterprise employee field management tools"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase", "REST / GraphQL APIs"],
    problemsSolved: [
      "Outdated mobile user interface",
      "Slow app performance causing user churn",
      "High cost of maintaining separate iOS & Android codebases"
    ],
    whatWeProvide: [
      "Mobile App UI/UX Wireframing & Prototyping",
      "Cross-Platform Native Development",
      "Backend Cloud API Integration",
      "App Store Optimization (ASO) & Submission"
    ],
    process: [
      { step: "01", title: "App Prototype", description: "Creating clickable Figma interactive prototypes." },
      { step: "02", title: "Cross-Platform Build", description: "Writing clean React Native / TypeScript code." },
      { step: "03", title: "API & Auth Integration", description: "Setting up push notifications, authentication, and payments." },
      { step: "04", title: "App Store Publishing", description: "Publishing to Apple App Store and Google Play." }
    ],
    faqs: [
      { question: "Do you publish the app to our developer accounts?", answer: "Yes, we handle the entire submission, app store compliance, and release approval process." }
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Branding",
    shortDescription: "Creative branding, visual identity, social media graphics, and marketing designs that make businesses memorable.",
    fullDescription: "Craft a distinct, high-end visual identity that instills confidence and elevates your business above competitors. We create comprehensive branding guidelines, visual identity systems, typography, color palettes, marketing collateral, and digital asset kits.",
    image: "/graphic-design-card.jpg",
    iconName: "Palette",
    category: "Design & Branding",
    benefits: [
      "Cohesive, high-end brand visual identity",
      "Comprehensive digital brand guidelines book",
      "Vector logos, icon sets, and typography kits",
      "High-impact social media and pitch deck assets",
      "Instant brand recognition in target markets"
    ],
    useCases: [
      "New tech startup brand identity launch",
      "Established business rebrand makeover",
      "Investor pitch deck creation",
      "Social media marketing graphic kits"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Brand Guidelines Systems"],
    problemsSolved: [
      "Inconsistent visual image across platforms",
      "Unprofessional brand appearance scaring away enterprise clients",
      "Lack of design assets for sales and marketing campaigns"
    ],
    whatWeProvide: [
      "Brand Strategy & Positioning",
      "Logo System & Visual Identity Package",
      "Typography & Color Palette System",
      "Marketing Collateral & Pitch Deck Design",
      "Social Media Graphic Asset Kits"
    ],
    process: [
      { step: "01", title: "Brand Exploration", description: "Analyzing brand core values, audience, and market positioning." },
      { step: "02", title: "Concept Directions", description: "Presenting multiple logo and visual direction concepts." },
      { step: "03", title: "Systemization", description: "Fleshing out typography, color rules, and design guidelines." },
      { step: "04", title: "Asset Delivery", description: "Exporting all vector formats, guideline PDFs, and asset packages." }
    ],
    faqs: [
      { question: "Do we receive vector source files?", answer: "Yes! All SVG, AI, EPS, and Figma source files belong 100% to you." }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven marketing strategies designed to increase awareness, engagement, leads, and revenue.",
    fullDescription: "Scale your revenue pipeline with target marketing campaigns engineered for quantifiable ROI. We manage performance advertising across Meta, Google, LinkedIn, combined with targeted content marketing, conversion rate optimization, and email lead nurturing.",
    image: "/digital-marketing-card.png",
    iconName: "TrendingUp",
    category: "Marketing & Growth",
    benefits: [
      "Predictable client acquisition pipeline",
      "Highly targeted PPC ad campaign management",
      "Omni-channel marketing strategy",
      "Conversion Rate Optimization (CRO) tuning",
      "Transparent ROI and attribution dashboards"
    ],
    useCases: [
      "B2B software client acquisition",
      "E-commerce sales scaling",
      "Lead generation campaigns for service businesses",
      "Brand awareness product launches"
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "HubSpot", "Google Analytics 4"],
    problemsSolved: [
      "Wasted advertising spend with zero leads",
      "Inability to track actual ad campaign ROI",
      "Stagnant traffic and growth plateaus"
    ],
    whatWeProvide: [
      "PPC Advertising (Google, LinkedIn, Meta)",
      "Conversion Rate Optimization (CRO)",
      "Email Nurturing & Automated Sequences",
      "Growth Marketing Analytics Setup"
    ],
    process: [
      { step: "01", title: "Audience Targeting", description: "Mapping customer demographics, pain points, and ad channels." },
      { step: "02", title: "Ad Creative & Copy", description: "Designing high-converting ad visuals and persuasive copy." },
      { step: "03", title: "Campaign Launch", description: "Deploying campaigns with multi-variate A/B testing." },
      { step: "04", title: "Optimization & Scaling", description: "Cutting non-performing ads and scaling high-ROI channels." }
    ],
    faqs: [
      { question: "How do you track campaign performance?", answer: "We implement custom analytics tracking so you see exact Cost Per Lead (CPL) and Return On Ad Spend (ROAS)." }
    ]
  },
  {
    slug: "automation",
    title: "Business Automation",
    shortDescription: "Automate repetitive workflows, connect your tools, reduce manual work, and improve operational efficiency.",
    fullDescription: "Connect your software tech stack into an integrated, frictionless machine. We eliminate tedious copy-pasting, data synchronization gaps, manual approvals, and human error through automated workflow orchestrations.",
    image: "/automation-card.png",
    iconName: "Zap",
    category: "AI & Automation",
    benefits: [
      "Save hundreds of team operational hours weekly",
      "Eliminate human data transfer errors",
      "Instant cross-platform database synchronization",
      "Automated lead routing & customer alerts",
      "Scalable operations without extra hiring"
    ],
    useCases: [
      "Automated client onboarding workflow",
      "Invoice generation & payment reconciliation",
      "Cross-app data synchronization (Slack, CRM, Sheets)",
      "Automated inventory management updates"
    ],
    technologies: ["n8n", "Make / Zapier", "Python Scripts", "REST Webhooks", "AWS Lambda", "SQL"],
    problemsSolved: [
      "Manual data entry eating up valuable team hours",
      "Dropped customer leads due to delayed response times",
      "Disconnected tools causing data inconsistency"
    ],
    whatWeProvide: [
      "Business Workflow Audit & Process Mapping",
      "Custom Integration & Webhook Architecture",
      "Automated Notification & Escalation Systems",
      "Maintenance & Workflow Monitoring"
    ],
    process: [
      { step: "01", title: "Process Audit", description: "Identifying manual bottlenecks across operations." },
      { step: "02", title: "Workflow Mapping", description: "Designing step-by-step automated logic sequences." },
      { step: "03", title: "Integration Build", description: "Configuring n8n / Python webhooks and custom API connectors." },
      { step: "04", title: "Testing & Hand-off", description: "Rigorously stress-testing webhooks and operational hand-off." }
    ],
    faqs: [
      { question: "Can you automate workflows between custom software APIs?", answer: "Yes! We build custom webhook endpoints and Python scripts for any software with an API." }
    ]
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Transform business data into clear insights, dashboards, reports, and better decisions.",
    fullDescription: "Unlock the hidden revenue opportunities inside your raw enterprise data. We build centralized data warehouses, real-time business intelligence dashboards, and predictive analytics pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    iconName: "BarChart3",
    category: "Data & Analytics",
    benefits: [
      "Centralized single source of truth for metrics",
      "Real-time visual BI dashboards",
      "Predictive revenue and customer churn trends",
      "Automated weekly executive reporting",
      "Data-backed strategic decision making"
    ],
    useCases: [
      "Executive KPI dashboards",
      "Sales performance tracking portal",
      "Customer lifetime value & churn analytics",
      "Supply chain tracking"
    ],
    technologies: ["Google Looker Studio", "Power BI", "Tableau", "Python (Pandas, NumPy)", "PostgreSQL", "BigQuery"],
    problemsSolved: [
      "Decision making based on guesswork instead of hard data",
      "Siloed metrics scattered across 10+ software tools",
      "Manual compiling of weekly management Excel sheets"
    ],
    whatWeProvide: [
      "Data Pipeline & ETL Engineering",
      "Interactive BI Dashboard Design",
      "Custom KPI Definition & Metric Mapping",
      "Predictive Analytics Model Integration"
    ],
    process: [
      { step: "01", title: "Data Ingestion", description: "Connecting databases, CRMs, and ad platforms into a unified pipeline." },
      { step: "02", title: "ETL & Cleaning", description: "Structuring, filtering, and normalizing data streams." },
      { step: "03", title: "Dashboard Engineering", description: "Designing intuitive real-time visual reports." },
      { step: "04", title: "Team Training", description: "Empowering stakeholders to navigate and interpret BI reports." }
    ],
    faqs: [
      { question: "Can we connect our SQL database and Google Analytics?", answer: "Yes, we build custom unified pipelines merging SQL, Google Analytics, Stripe, CRM, and ad network data." }
    ]
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    shortDescription: "Beautiful and intuitive digital experiences designed around users, usability, and business goals.",
    fullDescription: "Design digital experiences that users fall in love with. We combine deep behavioral user research, wireframing, interactive prototyping, and visual micro-interactions to build software that feels intuitive and premium.",
    image: "/ui-ux-card.jpg",
    iconName: "Layers",
    category: "Design & Branding",
    benefits: [
      "Higher user engagement and retention rates",
      "Reduced user friction and customer support tickets",
      "Pixel-perfect Design Systems for developer hand-off",
      "Aesthetic visual distinction in crowded markets",
      "Accessible & WCAG compliant interfaces"
    ],
    useCases: [
      "Complex SaaS web application interface redesign",
      "Mobile app UX flow optimization",
      "E-commerce checkout friction reduction",
      "Enterprise portal visual modernization"
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research", "WCAG Accessibility"],
    problemsSolved: [
      "Confusing user journeys causing user drop-offs",
      "Outdated software look and feel",
      "Inconsistent UI components across screens"
    ],
    whatWeProvide: [
      "User Research & Journey Mapping",
      "Low-fidelity & High-fidelity Wireframes",
      "Clickable Interactive Figma Prototypes",
      "Complete Scalable Design System",
      "Developer Hand-off Documentation"
    ],
    process: [
      { step: "01", title: "User Research", description: "Understanding user behavior, goals, and interface friction." },
      { step: "02", title: "Wireframing", description: "Mapping low-fidelity structural layouts and screen flows." },
      { step: "03", title: "Visual Design & System", description: "Designing beautiful UI elements, tokens, and dark/light modes." },
      { step: "04", title: "Prototyping & Test", description: "Validating micro-interactions with real user feedback." }
    ],
    faqs: [
      { question: "Will developers receive full design specs?", answer: "Yes, we build full Figma component libraries with auto-layout and detailed handoff notes." }
    ]
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription: "Custom software solutions built around unique business requirements, workflows, and growth goals.",
    fullDescription: "Turn tailored operational requirements into high-grade custom enterprise software applications. We build secure cloud backends, microservice architectures, SaaS platforms, and internal business platforms.",
    image: "/software-dev-card.jpg",
    iconName: "Code",
    category: "Web & Software",
    benefits: [
      "Software 100% customized to your exact business logic",
      "High scalability supporting millions of requests",
      "Full IP code ownership with zero licensing fees",
      "Enterprise security compliance and encryption",
      "Modular architecture for long-term evolution"
    ],
    useCases: [
      "Custom ERP & CRM platforms",
      "Multi-tenant SaaS products",
      "Proprietary industry software tools",
      "API microservices layer development"
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "Docker", "AWS / Vercel", "GraphQL / REST"],
    problemsSolved: [
      "Off-the-shelf software tools not fitting business needs",
      "Legacy software systems crashing under load",
      "Inability to scale infrastructure"
    ],
    whatWeProvide: [
      "Custom Backend & API Architecture",
      "Database Modeling & Optimization",
      "DevOps, CI/CD, and Cloud Infrastructure",
      "Rigorous Automated Testing & Security"
    ],
    process: [
      { step: "01", title: "System Architecture", description: "Designing database schemas, API contracts, and cloud topology." },
      { step: "02", title: "Agile Development", description: "Sprint-based engineering iterations with continuous delivery." },
      { step: "03", title: "QA & Security Testing", description: "Automated unit, integration, and security penetration testing." },
      { step: "04", title: "Deployment & Monitoring", description: "Configuring auto-scaling cloud servers and 24/7 logging." }
    ],
    faqs: [
      { question: "Who owns the code repository?", answer: "You own 100% of the code, IP rights, and repository access from day one." }
    ]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription: "High-converting online stores and commerce systems designed to help businesses sell and scale online.",
    fullDescription: "Accelerate online revenue with modern headless and custom e-commerce web applications engineered for speed, smooth checkout, mobile optimization, and seamless inventory management integrations.",
    image: "/ecommerce-card.png",
    iconName: "ShoppingBag",
    category: "Web & Software",
    benefits: [
      "Ultra-fast checkout experience reducing cart abandonment",
      "Custom storefront designs tailored to your brand identity",
      "Seamless payment gateway integration (Stripe, PayPal, Local)",
      "Automated inventory and order sync with ERP systems",
      "Optimized mobile shopping conversion funnel"
    ],
    useCases: [
      "Direct-to-Consumer (D2C) brand storefronts",
      "B2B wholesale commerce portals",
      "Headless Shopify / Next.js stores",
      "Digital subscription & membership platforms"
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Stripe API", "Tailwind CSS", "PostgreSQL"],
    problemsSolved: [
      "High cart abandonment rates on mobile",
      "Slow store load times on traditional platforms",
      "Restricted customization options on standard templates"
    ],
    whatWeProvide: [
      "Headless Storefront Development",
      "Payment & Shipping Gateway Setup",
      "Custom Product Configurator Build",
      "E-Commerce Analytics & Conversion Optimization"
    ],
    process: [
      { step: "01", title: "Store UX Mapping", description: "Designing intuitive product discovery and fast checkout paths." },
      { step: "02", title: "Storefront Engineering", description: "Building custom Next.js storefronts connected to Shopify/Stripe." },
      { step: "03", title: "Payment & Logistics Setup", description: "Integrating secure payment gateways and tax calculators." },
      { step: "04", title: "Launch & CRO Tuning", description: "Optimizing conversion metrics post-launch." }
    ],
    faqs: [
      { question: "Can you migrate our existing store to Next.js Headless?", answer: "Yes, we migrate your products, customer data, and SEO links seamlessly without downtime." }
    ]
  }
];
