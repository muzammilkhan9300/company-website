import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { faqData } from "@/data/faqData";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import StatisticsSection from "@/components/StatisticsSection";
import FinalCTA from "@/components/FinalCTA";
import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";
import WhyAndProcessSections from "@/components/WhyAndProcessSections";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import HomepageContactSection from "@/components/HomepageContactSection";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
  description:
    "Brother Solutions is a premium international AI & software agency. We build AI agents, automation systems, web applications, and intelligent digital solutions for ambitious businesses worldwide.",
  keywords: [
    "AI Agency Pakistan",
    "AI Automation Agency",
    "Software Development Agency",
    "Web Development",
    "Mobile Apps",
    "AI Agents",
    "Business Automation",
    "Digital Marketing",
    "Brother Solutions",
    "Machine Learning Agency",
    "LangChain Development",
    "Next.js Agency",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
    description:
      "Premium AI & software agency building intelligent automation systems, web apps, and AI agents for ambitious businesses.",
    siteName: siteConfig.agencyName,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
    description:
      "Premium AI & software agency building intelligent automation systems, web apps, and AI agents.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.agencyName,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Brother Solutions is an international AI & software agency specializing in AI agents, automation, web development, and digital marketing.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.instagram,
    siteConfig.socials.facebook,
    siteConfig.socials.twitter,
    siteConfig.socials.github,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.agencyName,
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <div className="pt-20 overflow-hidden bg-slate-50/50">

        {/* 1. Hero + Feature Cards (client — framer-motion) */}
        <HeroSection />

        {/* 2. ALL SERVICES SECTION */}
        <section id="services" className="py-20 bg-white border-y border-slate-100 section-lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                  OUR SERVICES
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4 leading-tight">
                  Digital Solutions Built <br className="hidden sm:inline" />
                  Around Your Business
                </h2>
              </div>
              <p className="text-slate-600 text-base max-w-md mt-4 md:mt-0 leading-relaxed font-sans font-medium">
                From AI and automation to websites, software, marketing and design, we build digital solutions that solve real business problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-bold px-8 py-3.5 rounded-full text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us + Process (client — framer-motion whileInView) */}
        <WhyAndProcessSections />

        {/* 4. Statistics */}
        <StatisticsSection />

        {/* 5. Featured Projects (client — framer-motion whileInView) */}
        <FeaturedProjectsSection />

        {/* 6. Testimonials */}
        <section className="py-24 bg-white border-b border-slate-100 section-lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                CLIENT TESTIMONIALS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4 mb-4">
                What Our Clients Say
              </h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* 7. Team */}
        <TeamSection />

        {/* 8. FAQ */}
        <section className="py-24 bg-slate-50/60 border-b border-slate-100 section-lazy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                CLEAR ANSWERS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={faqData} />
            <div className="mt-10 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-1 text-blue-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <FinalCTA />

        {/* 10. Contact (client — dynamic whatsapp URL + ContactForm) */}
        <HomepageContactSection />

      </div>
    </>
  );
}
