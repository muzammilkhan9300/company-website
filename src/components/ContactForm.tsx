"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "AI Agents",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong while sending your inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "AI Agents",
        budget: "$5,000 - $10,000",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send inquiry. Please try again.");
    }
  };

  return (
    <div className="bg-pureWhite p-8 sm:p-10 rounded-3xl border border-border-custom shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* NAME */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Full Name <span className="text-brand-blue">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Email Address <span className="text-brand-blue">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* PHONE */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            />
          </div>

          {/* COMPANY */}
          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* SERVICE */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Interested Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            >
              <option value="AI Agents">AI Agents</option>
              <option value="AI Chatbots">AI Chatbots</option>
              <option value="AI Assistants">AI Assistants</option>
              <option value="Computer Vision">Computer Vision</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Business Automation">Business Automation</option>
              <option value="SEO & Search Growth">SEO & Search Growth</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design & Branding">Graphic Design & Branding</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Software Development">Software Development</option>
              <option value="E-Commerce Solutions">E-Commerce Solutions</option>
            </select>
          </div>

          {/* BUDGET */}
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
            >
              <option value="< $5,000">&lt; $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
            </select>
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-darkText mb-2">
            Project Description <span className="text-brand-blue">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you're building, what you'd like to automate, or your key business objectives..."
            required
            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-offWhite text-darkText focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
          />
        </div>

        {/* STATUS MESSAGES */}
        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {status === "success" && (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
            <span>Thank you! Your inquiry has been received. Our engineering team will contact you within 24 hours.</span>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center text-white font-semibold px-8 py-4 rounded-full text-base shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Inquiry...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
