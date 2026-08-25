import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const BASE_URL = "https://brothersolutions.online";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.agencyName}`,
      description: service.shortDescription,
      url: `${BASE_URL}/services/${slug}`,
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.agencyName}`,
      description: service.shortDescription,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Brother Solutions, I would like to discuss your ${service.title} service.`
  )}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.agencyName,
      url: BASE_URL,
    },
    url: `${BASE_URL}/services/${service.slug}`,
    serviceType: service.category,
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      <JsonLd data={faqSchema ? [breadcrumbSchema, serviceSchema, faqSchema] : [breadcrumbSchema, serviceSchema]} />
    <div className="pt-28 pb-20">
      {/* BREADCRUMB & HERO */}
      <section className="bg-pureWhite py-12 border-b border-border-custom relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-grid-pattern opacity-30" />
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-mutedText uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-brand-blue transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-darkText">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                {service.category}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-darkText leading-tight tracking-tight" style={{ fontWeight: 800 }}>
                {service.title}
              </h1>
              <p className="text-secondary text-lg leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-white font-semibold px-8 py-4 rounded-full text-base shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all"
                  style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
                >
                  Start Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-border-custom text-darkText hover:border-brand-blue hover:text-brand-blue font-medium px-8 py-4 rounded-full text-base transition-all"
                >
                  <MessageSquare className="mr-2 w-5 h-5 text-brand-blue" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[360px] rounded-3xl overflow-hidden border border-border-custom shadow-xl bg-offWhite">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              PAIN POINTS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText mt-3 tracking-tight" style={{ fontWeight: 800 }}>
              Problems We Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.problemsSolved.map((problem, i) => (
              <div key={i} className="bg-pureWhite p-6 rounded-2xl border border-border-custom flex items-start space-x-4 shadow-sm hover:border-brand-blue transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 border border-blue-100">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <p className="text-darkText text-sm font-medium pt-2">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-pureWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              KEY ADVANTAGES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText mt-3 tracking-tight" style={{ fontWeight: 800 }}>
              Service Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-offWhite border border-border-custom flex items-start space-x-3 hover:border-brand-blue transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-darkText">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText tracking-tight" style={{ fontWeight: 800 }}>
              What We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeProvide.map((item, idx) => (
              <div key={idx} className="bg-pureWhite p-6 rounded-2xl border border-border-custom shadow-xs hover:border-brand-blue transition-colors">
                <div className="font-display font-bold text-brand-blue text-lg mb-2">0{idx + 1}.</div>
                <p className="text-darkText font-semibold text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES & TECHNOLOGIES */}
      <section className="py-20 bg-pureWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Use Cases */}
            <div className="bg-offWhite p-8 rounded-3xl border border-border-custom">
              <h3 className="font-display text-2xl font-bold text-darkText mb-6" style={{ fontWeight: 700 }}>
                Target Use Cases
              </h3>
              <ul className="space-y-4">
                {service.useCases.map((uc, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-medium text-darkText">
                    <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-darkSection text-pureWhite p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Cpu className="w-6 h-6 text-brand-blue" />
                  <h3 className="font-display text-2xl font-bold text-pureWhite" style={{ fontWeight: 700 }}>
                    Technology Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="bg-white/10 text-blue-300 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="text-xs text-mutedText">
                  All architectures integrated with enterprise security standards and modular API contracts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText tracking-tight" style={{ fontWeight: 800 }}>
              Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-pureWhite p-6 rounded-2xl border border-border-custom hover:border-brand-blue transition-colors">
                <span className="font-display font-bold text-3xl text-brand-blue block mb-2">{step.step}</span>
                <h4 className="font-display font-bold text-lg text-darkText mb-2" style={{ fontWeight: 700 }}>{step.title}</h4>
                <p className="text-mutedText text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-pureWhite border-b border-border-custom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl text-darkText tracking-tight" style={{ fontWeight: 800 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion
              items={service.faqs.map((f, idx) => ({
                id: `s-faq-${idx}`,
                category: "General",
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
    </>
  );
}
