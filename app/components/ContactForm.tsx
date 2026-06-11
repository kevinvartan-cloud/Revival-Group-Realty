"use client";

import { useState } from "react";

const INTERESTS = [
  "Buying",
  "Selling",
  "Investing",
  "Development / Land",
  "General Consultation",
] as const;

// TODO(form): This posts to the Revival Development Group Formspree endpoint.
// Replace with Revival Group Realty's own endpoint (or a server route / CRM /
// email API) before launch, and confirm the destination inbox.
const FORM_ENDPOINT = "https://formspree.io/f/mzdojazk";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const baseInput =
    "w-full bg-transparent border-b border-cream/20 py-3 px-0 font-sans text-sm text-cream/80 placeholder:text-cream/20 focus:outline-none focus:border-cream/50 transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="font-serif text-gold text-lg italic mb-2">Thank you.</p>
        <p className="font-sans text-cream/40 text-sm">
          We&rsquo;ve received your inquiry and will be in touch to arrange a
          private consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-name" className="sr-only">Your name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
            className={baseInput}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">Your email</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
            className={baseInput}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="sr-only">Your phone</label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            placeholder="Your phone (optional)"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={baseInput}
          />
        </div>
        <div>
          <label htmlFor="cf-interest" className="sr-only">I&rsquo;m interested in</label>
          <select
            id="cf-interest"
            name="interest"
            value={form.interest}
            onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
            required
            className={`${baseInput} appearance-none cursor-pointer ${
              form.interest === "" ? "text-cream/20" : "text-cream/80"
            }`}
          >
            <option value="" disabled className="bg-forest text-cream/60">
              I&rsquo;m interested in…
            </option>
            {INTERESTS.map((label) => (
              <option key={label} value={label} className="bg-forest text-cream">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell us about your goals and timeline…"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${baseInput} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="font-sans text-sm text-red-400">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:kevinvartan@revivalgrouprealty.com" className="underline">
            kevinvartan@revivalgrouprealty.com
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-sans text-[10px] tracking-[0.3em] uppercase bg-cream text-forest px-8 py-3.5 hover:bg-gold-light transition-all duration-300 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry →"}
      </button>
    </form>
  );
}
