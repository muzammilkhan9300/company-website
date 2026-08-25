import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

const BASE_URL = "https://brothersolutions.online";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `${BASE_URL}/projects/${slug}` },
    openGraph: {
      title: `${project.title} Case Study | ${siteConfig.agencyName}`,
      description: project.description,
      url: `${BASE_URL}/projects/${slug}`,
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | ${siteConfig.agencyName}`,
      description: project.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = servicesData.filter((s) => project.relatedServices.includes(s.slug));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${BASE_URL}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
          <div className="flex items-center space-x-2 text-xs font-semibold text-mutedText uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-brand-blue transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-darkText">{project.title}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-4">
              {project.category} CASE STUDY
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-darkText leading-tight mb-6 tracking-tight" style={{ fontWeight: 800 }}>
              {project.title}
            </h1>
            <p className="text-secondary text-lg sm:text-xl leading-relaxed mb-6">
              {project.description}
            </p>

            {project.liveUrl && (
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:shadow-lg hover:brightness-110 transition-all"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* COVER IMAGE */}
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border-custom mt-10 bg-offWhite">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* METRICS RESULTS OVERVIEW */}
      <section className="bg-offWhite py-12 border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, i) => (
              <div key={i} className="bg-pureWhite p-8 rounded-2xl border border-border-custom shadow-xs text-center flex flex-col items-center">
                <div className="font-display font-bold text-4xl sm:text-5xl gradient-brand-text mb-2" style={{ fontWeight: 800 }}>
                  {res.metric}
                </div>
                <div className="text-sm text-darkText font-semibold">
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW & PROBLEM vs SOLUTION */}
      <section className="py-20 bg-pureWhite border-b border-border-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* CLIENT OVERVIEW */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              BACKGROUND
            </span>
            <h2 className="font-display font-bold text-3xl text-darkText mt-3 mb-4 tracking-tight" style={{ fontWeight: 800 }}>
              Client Overview
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              {project.clientOverview}
            </p>
          </div>

          {/* PROBLEM vs SOLUTION GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-offWhite p-8 rounded-3xl border border-border-custom">
              <h3 className="font-display text-2xl font-bold text-darkText mb-4 flex items-center" style={{ fontWeight: 700 }}>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-3 shrink-0" />
                The Business Challenge
              </h3>
              <p className="text-mutedText text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-offWhite p-8 rounded-3xl border border-blue-200 shadow-md">
              <h3 className="font-display text-2xl font-bold text-darkText mb-4 flex items-center" style={{ fontWeight: 700 }}>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue mr-3 shrink-0" />
                Our Technical Solution
              </h3>
              <p className="text-darkText text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* FEATURES IMPLEMENTED */}
          <div>
            <h2 className="font-display font-bold text-3xl text-darkText mb-6 tracking-tight" style={{ fontWeight: 800 }}>
              Key System Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-offWhite border border-border-custom">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-darkText">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK */}
          <div>
            <h2 className="font-display font-bold text-3xl text-darkText mb-4 tracking-tight" style={{ fontWeight: 800 }}>
              Technologies Utilized
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="py-20 bg-offWhite border-b border-border-custom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-darkText mb-8 text-center tracking-tight" style={{ fontWeight: 800 }}>
              Related Services Provided
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((service, idx) => (
                <ServiceCard key={service.slug} service={service} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
    </>
  );
}
