import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FinalCTA from "@/components/FinalCTA";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Brother Solutions' complete suite: AI Agents, Automation, Web Development, Mobile Apps, Digital Marketing, SEO, and Software Engineering.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Our Services — Brother Solutions",
    description:
      "AI agents, automation systems, web & mobile development, digital marketing, and SEO — all under one roof.",
    url: `${BASE_URL}/services`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Brother Solutions Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Brother Solutions",
    description: "AI agents, automation, web & mobile development, digital marketing and SEO.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* HERO */}
      <section className="bg-pureWhite py-16 border-b border-border-custom text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-grid-pattern opacity-40" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            OUR EXPERTISE
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText mt-4 mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Intelligent Digital Services
          </h1>
          <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From autonomous AI agents and web apps to data analytics and search growth, we build enterprise solutions tailored around your business requirements.
          </p>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
