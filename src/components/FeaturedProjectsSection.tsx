"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-slate-50/60 border-b border-slate-100 section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
              CASE STUDIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md mt-4 md:mt-0 font-sans">
            A selection of digital solutions, automation systems, and AI-powered products we have built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-[border-color,box-shadow] duration-300 flex flex-col shadow-sm cursor-pointer"
            >
              <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-blue-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-50 text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-blue-600 transition-colors"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1 text-blue-600" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold"
                      aria-label={`Visit live site for ${project.title}`}
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center font-bold px-8 py-3.5 rounded-full text-sm text-white bg-slate-900 hover:bg-blue-600 transition-colors"
          >
            Explore All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
