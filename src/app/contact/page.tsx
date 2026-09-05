import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Brother Solutions to discuss your AI agents, automation, web development, software, or digital marketing project. We respond within 24 hours.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Brother Solutions — Start Your Project",
    description:
      "Reach out to discuss AI agents, automation, web development, or software projects. Our team responds within 24 hours.",
    url: `${BASE_URL}/contact`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Contact Brother Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brother Solutions",
    description: "Discuss your AI, automation, or software project with our expert team.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="pt-28 pb-20">
      <JsonLd data={breadcrumbSchema} />
      {/* HERO */}
      <section className="bg-pureWhite py-16 border-b border-border-custom text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-grid-pattern opacity-40" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            GET IN TOUCH
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText mt-4 mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Let&apos;s Build Something Great
          </h1>
          <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re building, what you&apos;re trying to improve, or what you&apos;d like to automate. Our technical team is ready to assist.
          </p>
        </div>
      </section>

      {/* FORM & DETAILS */}
      <section className="py-20 bg-offWhite border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-pureWhite p-8 rounded-3xl border border-border-custom shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-darkText tracking-tight" style={{ fontWeight: 700 }}>
                  Contact Information
                </h2>
                <p className="text-mutedText text-sm leading-relaxed">
                  We respond to all technical and project inquiries within 24 business hours.
                </p>

                <div className="space-y-3 pt-1">
                  {/* Phone */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-offWhite border border-border-custom hover:border-brand-blue transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-mutedText uppercase font-semibold">Phone</div>
                      <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="font-semibold text-darkText hover:text-brand-blue transition-colors text-sm">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-offWhite border border-border-custom hover:border-brand-blue transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-mutedText uppercase font-semibold">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold text-darkText hover:text-brand-blue transition-colors text-sm">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-offWhite border border-border-custom hover:border-brand-blue transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-mutedText uppercase font-semibold">WhatsApp</div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-darkText hover:text-brand-blue transition-colors text-sm inline-flex items-center gap-1"
                      >
                        Chat on WhatsApp
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div
                className="p-6 rounded-2xl text-white space-y-2"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)" }}
              >
                <div className="text-xs uppercase text-blue-300 font-bold tracking-widest">Response Time</div>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Our team typically responds within 4–8 hours during business days. Emergency support available 24/7 for active clients.
                </p>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
