import { Metadata } from "next";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import { Bot, Zap, ShieldCheck, Cpu, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Brother Solutions — an international technology partner engineering intelligent digital systems, AI agents, software, and marketing solutions.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Brother Solutions — AI & Software Agency",
    description:
      "International technology partner engineering intelligent digital systems, AI agents, automation, and marketing solutions.",
    url: `${BASE_URL}/about`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "About Brother Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brother Solutions — AI & Software Agency",
    description: "International technology partner engineering intelligent digital systems and AI agents.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

const beliefs = [
  {
    num: "01",
    title: "Intelligence First",
    desc: "Static software is obsolete. Modern digital products must think, adapt, and automate routine tasks independently.",
  },
  {
    num: "02",
    title: "Measurable Impact",
    desc: "Aesthetics are critical, but concrete revenue growth, time savings, and lead conversions are the true measures of success.",
  },
  {
    num: "03",
    title: "Engineering Rigor",
    desc: "We take zero shortcuts. Clean TypeScript code, robust APIs, and scalable cloud architectures back everything we create.",
  },
];

const capabilities = [
  { icon: Bot, label: "AI Agents" },
  { icon: Zap, label: "Automation" },
  { icon: Cpu, label: "Software Dev" },
  { icon: Layers, label: "Cloud Systems" },
  { icon: ShieldCheck, label: "Security" },
];

const reasons = [
  "Proven track record in high-complexity AI deployments",
  "Clear, transparent communication without tech jargon",
  "Full intellectual property code ownership",
  "Dedicated 24/7 post-launch technical support",
  "Next.js App Router and cloud-native standards",
  "End-to-end service range under one roof",
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="bg-pureWhite py-16 sm:py-24 border-b border-border-custom relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-grid-pattern opacity-50" />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                ABOUT BROTHER SOLUTIONS
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText leading-tight tracking-tight" style={{ fontWeight: 800 }}>
                Building Technology That Creates{" "}
                <span className="gradient-brand-text">Real Business Value.</span>
              </h1>
              <p className="text-secondary text-lg sm:text-xl leading-relaxed">
                We don&apos;t just build websites. We build intelligent digital systems, autonomous workflows, and modern platforms that help ambitious companies automate operations and scale revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-white font-semibold px-8 py-4 rounded-full text-base shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
                >
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-border-custom text-darkText hover:border-brand-blue hover:text-brand-blue font-medium px-8 py-4 rounded-full text-base transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-border-custom bg-offWhite">
                <Image
                  src="/team.png"
                  alt="Brother Solutions Technology Team"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ────────────────────────────────────── */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pureWhite p-8 sm:p-12 rounded-3xl border border-border-custom shadow-sm space-y-6">
            <div className="brand-divider" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText tracking-tight" style={{ fontWeight: 800 }}>
              Who We Are
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Brother Solutions is an international digital &amp; AI technology agency operating at the intersection of enterprise software engineering, artificial intelligence, dynamic web development, and digital expansion.
            </p>
            <p className="text-secondary text-base leading-relaxed">
              We partner with forward-thinking organizations — from high-growth startups to established global enterprises — to eliminate operational bottlenecks, build high-converting web portals, and deploy autonomous AI systems.
            </p>

            {/* Capability badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-brand-blue"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ───────────────────────────────── */}
      <section className="py-20 bg-pureWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-darkText mt-4 tracking-tight" style={{ fontWeight: 800 }}>
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((item) => (
              <div
                key={item.num}
                className="bg-offWhite p-8 rounded-2xl border border-border-custom hover:border-brand-blue hover:shadow-brand transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue mb-5 font-display font-bold text-base">
                  {item.num}
                </div>
                <h3 className="font-display text-xl font-bold text-darkText mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-mutedText text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CLIENTS WORK WITH US ─────────────────────── */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              WHY CHOOSE US
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-darkText mt-4 tracking-tight" style={{ fontWeight: 800 }}>
              Why Clients Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-pureWhite p-5 rounded-2xl border border-border-custom flex items-center space-x-3 shadow-xs hover:border-brand-blue hover:shadow-brand transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-darkText">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
