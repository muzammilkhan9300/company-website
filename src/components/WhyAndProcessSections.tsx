"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

const whyCards = [
  {
    num: "01",
    title: "AI-FIRST APPROACH",
    desc: "We embed artificial intelligence into business core workflows, moving past legacy manual setups to autonomous intelligent systems.",
    icon: Bot,
  },
  {
    num: "02",
    title: "CUSTOM SOLUTIONS",
    desc: "Every system is architected to fit your exact business goals, rules, and market objectives — no cookie-cutter templates.",
    icon: Zap,
  },
  {
    num: "03",
    title: "BUSINESS-FOCUSED THINKING",
    desc: "We prioritize tangible ROI, conversion rate growth, and concrete operational cost reduction at every project phase.",
    icon: TrendingUp,
  },
  {
    num: "04",
    title: "MODERN TECHNOLOGY",
    desc: "Engineered with Next.js, React, TypeScript, LangChain, and high-performance cloud APIs for peak efficiency.",
    icon: Cpu,
  },
  {
    num: "05",
    title: "SCALABLE ARCHITECTURE",
    desc: "Systems designed to handle continuous growth without performance lag or infrastructure rewrites down the road.",
    icon: Layers,
  },
  {
    num: "06",
    title: "LONG-TERM SUPPORT",
    desc: "We act as your extended tech leadership, offering proactive monitoring and iterative improvements post-launch.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  { step: "01", title: "DISCOVER", desc: "Understand the business, goals, challenges and opportunities." },
  { step: "02", title: "PLAN", desc: "Create the technical and product strategy." },
  { step: "03", title: "BUILD", desc: "Develop the solution using modern technology." },
  { step: "04", title: "TEST", desc: "Test performance, security, responsiveness, and reliability." },
  { step: "05", title: "LAUNCH", desc: "Deploy and deliver the final solution." },
  { step: "06", title: "SCALE", desc: "Improve, maintain and scale the solution." },
];

export default function WhyAndProcessSections() {
  return (
    <>
      {/* ====================================================
          WHY CHOOSE US SECTION
          ==================================================== */}
      <section className="py-24 bg-slate-50/60 border-b border-slate-100 section-lazy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              WHY CHOOSE US
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4">
              Technology With A Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-blue-600/30 group-hover:text-blue-600 transition-colors">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          PROCESS SECTION
          ==================================================== */}
      <section id="process" className="py-24 bg-white border-b border-slate-100 section-lazy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              OUR METHODOLOGY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4 mb-4">
              From Idea To Impact
            </h2>
            <p className="text-slate-600 text-base font-sans">
              We turn business challenges into practical digital solutions through a clear, collaborative process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-slate-50/70 rounded-2xl border border-slate-100 p-8 relative overflow-hidden hover:border-blue-500 hover:bg-blue-50/40 transition-[border-color,background-color] group"
              >
                <span className="font-display font-extrabold text-5xl text-blue-600/30 mb-4 block leading-none group-hover:text-blue-600 transition-colors">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
