"use client";

// --- Social Media Profile URLs -----------------------------------------------
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593408045251";
const LINKEDIN_URL = "https://www.linkedin.com/in/brother-solutions-b676a6430";
const INSTAGRAM_URL = "https://www.instagram.com/brothersolution6/";
const TWITTER_URL = siteConfig.socials.twitter;
const GITHUB_URL = siteConfig.socials.github;
// -----------------------------------------------------------------------------

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkSection text-pureWhite border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* COLUMN 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group w-fit">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="/logo-bs.png"
                  alt="Brother Solutions Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="text-mutedText text-sm max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mutedText hover:text-gold hover:border-gold hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mutedText hover:text-gold hover:border-gold hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mutedText hover:text-gold hover:border-gold hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mutedText hover:text-gold hover:border-gold hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mutedText hover:text-gold hover:border-gold hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-pureWhite mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-2" />
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedText">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-pureWhite mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-2" />
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedText">
              <li><Link href="/services/ai-agents" className="hover:text-gold transition-colors">AI Agents</Link></li>
              <li><Link href="/services/ai-chatbots" className="hover:text-gold transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services/web-development" className="hover:text-gold transition-colors">Website Development</Link></li>
              <li><Link href="/services/automation" className="hover:text-gold transition-colors">Business Automation</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-gold transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/seo" className="hover:text-gold transition-colors">SEO &amp; Growth</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-pureWhite mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-2" />
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-mutedText">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Chat
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mutedText space-y-4 sm:space-y-0">
          <p>&copy; 2026 Brother Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
