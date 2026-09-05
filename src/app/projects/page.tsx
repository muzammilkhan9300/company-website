import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight, ExternalLink } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore Brother Solutions' portfolio of AI Customer Support Platforms, WhatsApp Automation, Computer Vision systems, and high-performance web applications.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Project Portfolio & Case Studies — Brother Solutions",
    description:
      "Case studies of AI systems, automation platforms, web apps, and intelligent software built for global clients.",
    url: `${BASE_URL}/projects`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Brother Solutions Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Portfolio — Brother Solutions",
    description: "AI, automation, and software case studies from Brother Solutions.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects` },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projectsData.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${BASE_URL}/projects/${project.slug}`,
  })),
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20">
      <JsonLd data={[breadcrumbSchema, itemListSchema]} />
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
            PORTFOLIO
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText mt-4 mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Selected Work &amp; Case Studies
          </h1>
          <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A selection of digital solutions, autonomous systems, software applications, and AI-powered products engineered for ambitious businesses.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="bg-pureWhite rounded-[20px] border border-border-custom overflow-hidden group hover:border-brand-blue hover:shadow-brand transition-all duration-300 flex flex-col justify-between shadow-xs cursor-pointer"
              >
                <div>
                  <div className="relative w-full h-60 bg-offWhite overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-brand-blue">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-darkText mb-2 group-hover:text-brand-blue transition-colors" style={{ fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <p className="text-mutedText text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[11px] bg-offWhite text-mutedText px-2.5 py-0.5 rounded-md border border-border-custom">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 border-t border-border-custom pt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-secondary uppercase tracking-wider hover:text-brand-blue transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1 text-brand-blue" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-all text-xs font-semibold"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
