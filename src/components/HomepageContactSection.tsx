"use client";

import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export default function HomepageContactSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="py-24 bg-slate-50/60 section-lazy" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                GET IN TOUCH
              </span>
              <h2
                id="contact-heading"
                className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 mt-4 mb-4"
              >
                Let&apos;s Build Something Great
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Tell us what you&apos;re building, what you&apos;re trying to improve, or what you&apos;d like to automate.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Phone</div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">WhatsApp</div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
