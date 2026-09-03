"use client";

import React, { useState } from "react";
import { contact } from "@/lib/data";

/* ----------------------------------------------------------------------------
   No backend required: submitting composes a pre-filled message in the
   visitor's own mail client, addressed to the inbox they selected.

   To collect submissions server side instead, replace handleSubmit with a
   fetch() to an API route backed by an email service such as Resend.
---------------------------------------------------------------------------- */

const field =
  "w-full rounded-lg border border-white/15 bg-ink-3 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none";

export default function ContactForm() {
  const [to, setTo] = useState(contact.departments[0].email);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n---\nFrom: ${name}\nReply to: ${email}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grad-card rounded-2xl border border-white/10 p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-white">{contact.formTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{contact.formNote}</p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-white/90">
              Name
            </label>
            <input id="name" name="name" type="text" required className={field} />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-white/90">
              Email
            </label>
            <input id="email" name="email" type="email" required className={field} />
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm text-white/90">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={field}
          >
            {contact.departments.map((d) => (
              <option key={d.email} value={d.email} className="bg-ink-3">
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm text-white/90">
            Subject
          </label>
          <input id="subject" name="subject" type="text" required className={field} />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-white/90">
            Message
          </label>
          <textarea id="message" name="message" rows={6} required className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-gold px-8 py-3 text-sm font-semibold tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 sm:w-auto"
      >
        {contact.submit}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-white/50">
        This opens a pre-filled message in your own email application so you keep a
        copy of what you sent.
      </p>
    </form>
  );
}
