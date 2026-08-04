"use client";

import { useState } from "react";
import { contact } from "@/lib/data";

const field =
  "w-full rounded-lg border border-white/15 bg-ink-3 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none disabled:opacity-60";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(
        `We could not reach the server. Please email us at ${contact.inbox}.`
      );
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="grad-card rounded-2xl border border-white/10 p-6 sm:p-8"
    >
      <h2 className="font-serif text-2xl text-white">{contact.formTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{contact.formNote}</p>

      <fieldset disabled={sending} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-white/90">
              Name
            </label>
            <input id="name" name="name" type="text" required maxLength={100} className={field} />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-white/90">
              Email
            </label>
            <input id="email" name="email" type="email" required maxLength={200} className={field} />
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm text-white/90">
            Topic
          </label>
          <select id="topic" name="topic" defaultValue="General enquiries" className={field}>
            <option className="bg-ink-3">General enquiries</option>
            {contact.departments.map((d) => (
              <option key={d.name} className="bg-ink-3">
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm text-white/90">
            Subject
          </label>
          <input id="subject" name="subject" type="text" required maxLength={200} className={field} />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-white/90">
            Message
          </label>
          <textarea id="message" name="message" rows={6} required maxLength={5000} className={field} />
        </div>

        {/* Honeypot — hidden from people, tempting to bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-lg bg-gold px-8 py-3 text-sm font-semibold tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? contact.sending : contact.submit}
      </button>

      <p aria-live="polite" className="mt-4 text-sm leading-relaxed">
        {status === "sent" && <span className="text-gold">{contact.success}</span>}
        {status === "error" && <span className="text-red-400">{error}</span>}
      </p>
    </form>
  );
}
