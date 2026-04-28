"use client";

import * as React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="py-8 text-center">
        <p className="text-xl font-bold">Message received.</p>
        <p className="mt-2 text-zinc-500">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
