import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import { faqData } from "@/data/faqData";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Brother Solutions' AI agents, software development, web development, automation, project timelines, and engagement process.",
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    title: "FAQ — Brother Solutions",
    description:
      "Everything you need to know about our AI, software, automation services, timelines, and how we work.",
    url: `${BASE_URL}/faq`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Brother Solutions FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Brother Solutions",
    description: "Common questions about our AI, software, and automation services answered.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE_URL}/faq` },
    ],
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />
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
            KNOWLEDGE BASE
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText mt-4 mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Frequently Asked Questions
          </h1>
          <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, technical methodology, AI capabilities, project timelines, and engagement process.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqData} />
        </div>
      </section>

      <FinalCTA />
    </div>
    </>
  );
}
