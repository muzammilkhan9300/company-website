"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Globe,
  Smartphone,
  Bot,
  BarChart3,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const heroFeatureCards = [
  {
    title: "AI Development",
    desc: "Custom AI solutions, machine learning models & intelligent applications.",
    icon: BrainCircuit,
    href: "/services/ai-agents",
  },
  {
    title: "Software Development",
    desc: "Scalable, secure & high-performance software solutions.",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive websites & web applications that deliver results.",
    icon: Globe,
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "Native & cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
    href: "/services",
  },
  {
    title: "AI Automation",
    desc: "Automate workflows and processes to save time and reduce costs.",
    icon: Bot,
    href: "/services/automation",
  },
  {
    title: "Data & Analytics",
    desc: "Turn data into actionable insights and drive smarter decisions.",
    icon: BarChart3,
    href: "/services",
  },
];

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
  void whatsappUrl; // available for future CTA use

  return (
    <>
      {/* ====================================================
          1. HERO SECTION (FULL-WIDTH TEAM BACKGROUND)
          ==================================================== */}
      <section className="relative bg-white pt-10 pb-28 lg:pb-36 overflow-hidden border-b border-slate-100 min-h-[580px] lg:min-h-[640px] flex items-center">

        {/* ─── Hero Background Image ─── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="Brother Solutions Software Engineering & Tech Executive Team"
            fill
            priority
            unoptimized
            className="object-cover object-center lg:object-right opacity-[0.98] transition-opacity duration-500"
            sizes="100vw"
          />
          {/* Subtle light/white overlay on left for crisp readability of heading & CTA buttons */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/80 lg:via-white/45 to-transparent z-10" />
        </div>

        {/* ─── Main Hero Content Container ─── */}
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-20 pt-4 lg:pt-8">
          <div className="max-w-2xl text-left space-y-6 pl-1 sm:pl-2">

            {/* Small Label Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 font-sans">
                AI • SOFTWARE • AUTOMATION
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[4rem] text-slate-900 leading-[1.08] tracking-tight"
            >
              Building Intelligent{" "}
              <br />
              Solutions That Drive{" "}
              <br />
              Real Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Growth
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-medium"
            >
              We help businesses transform ideas into powerful digital solutions using AI, automation, and modern software development.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-full text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Start a Project
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center font-semibold px-7 py-3.5 rounded-full text-sm text-slate-800 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-blue-600 transition-all duration-200"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trusted Logos Bar */}
            <motion.div {...fadeUp(0.32)} className="pt-8 space-y-3">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                TRUSTED BY INNOVATIVE COMPANIES
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-85 grayscale hover:grayscale-0 transition-all">
                {/* Microsoft */}
                <div className="flex items-center gap-1.5 text-slate-800 font-extrabold text-xs tracking-tight">
                  <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                    <span className="bg-[#F25022]" />
                    <span className="bg-[#7FBA00]" />
                    <span className="bg-[#00A4EF]" />
                    <span className="bg-[#FFB900]" />
                  </div>
                  <span>Microsoft</span>
                </div>

                {/* AWS */}
                <div className="flex items-center gap-1 text-slate-800 font-extrabold text-xs">
                  <span className="font-extrabold text-amber-500">aws</span>
                </div>

                {/* Google Cloud */}
                <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>Google Cloud</span>
                </div>

                {/* DigitalOcean */}
                <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span>DigitalOcean</span>
                </div>

                {/* Docker */}
                <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span>docker</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ====================================================
          2. OVERLAPPING 6 HERO CARDS
          ==================================================== */}
      <section className="relative z-30 -mt-16 sm:-mt-20 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {heroFeatureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-[transform,box-shadow] duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-sans">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-indigo-600 group/link transition-colors pt-2 border-t border-slate-50"
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
