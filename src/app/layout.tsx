import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { siteConfig } from "@/config/site";

const BASE_URL = "https://brothersolutions.online";

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
    template: `%s | ${siteConfig.agencyName}`,
  },
  description:
    "Brother Solutions is a premium international AI & software agency. We build AI agents, automation systems, web applications, and intelligent digital solutions for ambitious businesses worldwide.",
  keywords: [
    "AI Agency",
    "Artificial Intelligence",
    "AI Automation",
    "Software Development",
    "Web Development",
    "Mobile Apps",
    "AI Agents",
    "Business Automation",
    "Digital Marketing",
    "Brother Solutions",
    "Machine Learning",
    "LangChain",
    "Next.js Agency",
  ],
  authors: [{ name: siteConfig.agencyName }],
  creator: siteConfig.agencyName,
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
    description:
      "Premium AI & software agency building intelligent automation systems, web apps, and AI agents for ambitious businesses.",
    siteName: siteConfig.agencyName,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.agencyName} — AI, Software & Automation Agency`,
    description:
      "Premium AI & software agency building intelligent automation systems, web apps, and AI agents.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="font-sans bg-pureWhite text-darkText antialiased min-h-screen flex flex-col justify-between">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
