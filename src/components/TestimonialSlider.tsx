"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-pureWhite rounded-3xl p-8 sm:p-12 border border-border-custom shadow-xl text-center flex flex-col items-center"
        >
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-brand-blue border border-blue-100">
            <Quote className="w-6 h-6" />
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-display text-lg sm:text-2xl text-darkText leading-relaxed italic mb-8 max-w-2xl font-medium">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Author Details */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-brand-blue shadow-md">
              <Image
                src={current.image}
                alt={current.clientName}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <h4 className="font-display font-bold text-darkText text-lg">{current.clientName}</h4>
            <p className="text-xs text-mutedText tracking-wider uppercase">
              {current.position} &bull; <span className="text-brand-blue font-medium">{current.company}</span>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-pureWhite border border-border-custom text-darkText hover:border-brand-blue hover:text-brand-blue flex items-center justify-center shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-xs font-semibold text-mutedText">
          {currentIndex + 1} / {testimonialsData.length}
        </div>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-pureWhite border border-border-custom text-darkText hover:border-brand-blue hover:text-brand-blue flex items-center justify-center shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-4 text-center">
        <span className="text-[11px] text-mutedText italic">
          * Representative client testimonials based on actual enterprise deployment feedback.
        </span>
      </div>
    </div>
  );
}
