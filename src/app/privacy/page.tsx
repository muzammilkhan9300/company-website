import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Brother Solutions Privacy Policy — how we collect, use, and protect your data in compliance with international data governance standards.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy — Brother Solutions",
    description: "Our data privacy practices and how we protect your information.",
    url: `${BASE_URL}/privacy`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Brother Solutions Privacy Policy" }],
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-offWhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pureWhite p-8 sm:p-14 rounded-3xl border border-border-custom shadow-sm space-y-8">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              LEGAL DOCUMENTATION
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-darkText mt-4 mb-2 tracking-tight" style={{ fontWeight: 800 }}>
              Privacy Policy
            </h1>
            <p className="text-xs text-mutedText">
              Last Updated: January 1, 2026 &bull; {siteConfig.agencyName}
            </p>
          </div>

          <div className="space-y-6 text-mutedText text-sm leading-relaxed border-t border-border-custom pt-6">
            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>1. Information We Collect</h2>
              <p>
                At {siteConfig.agencyName}, we collect technical information necessary to deliver our AI, automation, and software engineering services. This includes contact details submitted via forms (name, email, phone number, company name), project requirements, IP addresses, and cookie usage logs.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>2. How We Use Information</h2>
              <p>
                We use collected information solely to build, optimize, and maintain custom digital solutions, respond to client inquiries, process project workflows, send operational updates, and maintain secure software infrastructure. We do not sell or rent personal client data to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>3. AI Data Privacy & Confidentiality</h2>
              <p>
                For clients utilizing our AI Agents, AI Chatbots, and Computer Vision services: proprietary enterprise data, knowledge bases, and API payload documents ingested during workflow automation are processed strictly via enterprise zero-data-retention APIs and encrypted vector stores.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>4. Cookies & Analytics</h2>
              <p>
                We utilize essential performance cookies and anonymous web analytics to ensure fast load speeds, secure session management, and UI optimization. You may disable cookies through your browser settings at any time.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>5. User Rights & Contact</h2>
              <p>
                You retain full rights to request access to, correction of, or deletion of your personal data stored in our systems. For all privacy inquiries, please contact our data team at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-blue font-semibold hover:underline">
                  {siteConfig.email}
                </a>.
              </p>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
