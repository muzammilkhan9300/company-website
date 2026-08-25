"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqData";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-pureWhite rounded-2xl border border-border-custom overflow-hidden transition-all duration-200 shadow-sm"
          >
            <button
              id={`faq-btn-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-offWhite transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
            >
              <span className="font-display text-lg font-semibold text-darkText pr-4">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-brand-blue bg-brand-blue text-white"
                    : "border-border-custom bg-offWhite text-darkText"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 text-mutedText text-sm leading-relaxed border-t border-border-custom/50 bg-offWhite/30">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
