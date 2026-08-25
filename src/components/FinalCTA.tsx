"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Rocket, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative bg-pureWhite py-28 overflow-hidden border-b border-border-custom">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial blue glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #2563EB 0%, transparent 70%)" }}
        />
        {/* Purple glow */}
        <div
          className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse at center, #7C3AED 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 shadow-brand"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
        >
          <Rocket className="w-7 h-7 text-white" />
        </motion.div>

        {/* Badge label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Start Your Journey
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-darkText mb-6 leading-[1.08] tracking-tight"
          style={{ fontWeight: 800 }}
        >
          Ready to Build{" "}
          <span className="gradient-brand-text">Something Intelligent?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let&apos;s turn your idea into a scalable, intelligent digital solution.
          Our team is ready to build with you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-semibold px-8 py-4 rounded-full text-base text-white shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-border-custom text-darkText hover:border-brand-blue hover:text-brand-blue font-medium px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-10 flex items-center justify-center gap-8 text-xs text-mutedText"
        >
          {["No commitment required", "24hr response", "100% custom builds"].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-blue opacity-60" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
