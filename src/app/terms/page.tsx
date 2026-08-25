import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const BASE_URL = "https://brothersolutions.online";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Brother Solutions Terms of Service — the legal agreement governing our software, AI, automation, web development, and digital marketing engagements.",
  alternates: { canonical: `${BASE_URL}/terms` },
  openGraph: {
    title: "Terms of Service — Brother Solutions",
    description: "Legal terms governing Brother Solutions client engagements.",
    url: `${BASE_URL}/terms`,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Brother Solutions Terms" }],
  },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-offWhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pureWhite p-8 sm:p-14 rounded-3xl border border-border-custom shadow-sm space-y-8">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              LEGAL DOCUMENTATION
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-darkText mt-4 mb-2 tracking-tight" style={{ fontWeight: 800 }}>
              Terms of Service
            </h1>
            <p className="text-xs text-mutedText">
              Last Updated: January 1, 2026 &bull; {siteConfig.agencyName}
            </p>
          </div>

          <div className="space-y-6 text-mutedText text-sm leading-relaxed border-t border-border-custom pt-6">
            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>1. Services & Scope</h2>
              <p>
                {siteConfig.agencyName} provides technical engineering, custom software, AI workflow automation, web development, mobile apps, graphic design, and digital marketing services as defined in individual client master service agreements (MSA) and statements of work (SOW).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>2. Intellectual Property Rights</h2>
              <p>
                Upon final settlement of project invoices, the client holds 100% full intellectual property (IP) rights and source code ownership for custom software, web applications, brand assets, and customized AI agents engineered specifically for their project.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>3. User & Client Responsibilities</h2>
              <p>
                Clients agree to provide timely technical access, documentation, feedback, and accurate project specifications required to meet agreed sprint milestones.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>4. Confidentiality</h2>
              <p>
                Both {siteConfig.agencyName} and the client agree to maintain strict non-disclosure confidentiality concerning trade secrets, proprietary algorithms, API keys, and business operational data shared during the engagement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-xl text-darkText" style={{ fontWeight: 700 }}>5. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please reach out to our legal liaison at{" "}
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
