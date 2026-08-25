"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically resolve lucide icon safely
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[service.iconName] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-pureWhite rounded-[20px] border border-border-custom hover:border-brand-blue p-6 flex flex-col justify-between shadow-xs hover:shadow-brand transition-[transform,box-shadow,border-color] duration-300 transform hover:-translate-y-1.5 overflow-hidden will-change-[transform] backface-hidden cursor-pointer"
    >
      {/* Top accent line — shows on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)" }}
      />

      <div>
        {/* Card Image */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-offWhite">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            unoptimized={service.image.startsWith("/")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Icon & Category */}
        <div className="flex items-center justify-between mb-3.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
            style={{
              background: "rgba(37,99,235,0.06)",
              borderColor: "rgba(37,99,235,0.15)",
            }}
          >
            <IconComponent className="w-5 h-5 text-brand-blue" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-[1.1rem] font-bold text-darkText mb-2 group-hover:text-brand-blue transition-colors duration-200" style={{ fontWeight: 700 }}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-mutedText text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-border-custom flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold uppercase tracking-wider text-secondary group-hover:text-brand-blue flex items-center gap-1.5 transition-colors"
        >
          Explore Service
          <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
