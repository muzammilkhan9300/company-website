"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/config/site";
import { motion, useInView } from "framer-motion";

export default function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-offWhite py-20 border-y border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            By The Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-custom rounded-2xl overflow-hidden border border-border-custom">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="bg-pureWhite px-8 py-10 flex flex-col items-center text-center hover:bg-blue-50 transition-colors duration-200"
            >
              {/* Number */}
              <div
                className="font-display font-bold text-4xl sm:text-5xl mb-2 gradient-brand-text"
                style={{ fontWeight: 800 }}
              >
                {stat.value}
              </div>
              {/* Label */}
              <div className="text-sm font-semibold text-darkText mb-1">
                {stat.label}
              </div>
              {/* Description */}
              <div className="text-xs text-mutedText max-w-[160px] leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] text-mutedText mt-5 uppercase tracking-widest">
          * Metrics based on active client project deployments
        </p>
      </div>
    </section>
  );
}
