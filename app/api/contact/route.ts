import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ----------------------------------------------------------------------------
   Delivers contact form submissions to CONTACT_INBOX over Gmail SMTP.
   Credentials live in .env.local and are never exposed to the browser.
---------------------------------------------------------------------------- */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  topic?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot, must stay empty
};

const MAX = { name: 100, email: 200, topic: 100, subject: 200, message: 5000 };

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill hidden fields; humans never see this one.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const topic = (body.topic ?? "General enquiries").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    topic.length > MAX.topic ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ error: "That message is too long." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const inbox = process.env.CONTACT_INBOX ?? user;

  if (!user || !pass || !inbox) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"HarborMedia.ai website" <${user}>`,
      to: inbox,
      replyTo: `"${name}" <${email}>`,
      subject: `[${topic}] ${subject}`,
      text: [
        message,
        "",
        "----",
        `Topic: ${topic}`,
        `From: ${name}`,
        `Reply to: ${email}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: failed to send.", error);
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 }
    );
  }
}
