"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { teamData } from "@/data/teamData";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TeamCard({
  member,
  index,
  isInView,
}: {
  member: (typeof teamData)[0];
  index: number;
  isInView: boolean;
}) {
  const hasLinkedIn =
    member.linkedin &&
    member.linkedin !== "" &&
    member.linkedin !== "PASTE_YOUR_LINKEDIN_URL_HERE";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl border border-slate-100 shadow-xs hover:shadow-brand-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col w-full"
    >
      <div className="h-1 w-full gradient-brand" />

      <div className="flex flex-col items-center text-center p-8 flex-grow">
        <div className="relative mb-5 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute -inset-1 rounded-full gradient-brand opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-100 shadow-brand ring-2 ring-white">
            <Image
              src={member.image}
              alt={`${member.name} -- ${member.role}`}
              fill
              className="object-cover object-center"
              sizes="128px"
              unoptimized
            />
          </div>
        </div>

        <h3 className="font-display font-bold text-lg text-slate-900 leading-tight mb-1">
          {member.name}
        </h3>

        <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4">
          {member.role}
        </span>

        <p className="text-sm text-slate-500 leading-relaxed font-sans flex-grow">
          {member.description}
        </p>

        {hasLinkedIn && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name} on LinkedIn`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-4 py-2 rounded-full transition-all duration-200"
          >
            <LinkedInIcon className="w-4 h-4 text-blue-600" />
            LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="team"
      className="py-24 bg-white border-b border-slate-100 section-lazy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-4"
          >
            Our People
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mb-4"
          >
            Meet Our{" "}
            <span className="gradient-brand-text">Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base text-slate-500 leading-relaxed font-sans"
          >
            The passionate people behind every solution we deliver -- united by a
            shared drive to build exceptional digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 lg:gap-7 justify-center items-stretch">
          {teamData.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}