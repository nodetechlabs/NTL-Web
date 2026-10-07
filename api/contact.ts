import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return typeof b.name === "string" && b.name.trim().length > 0 && typeof b.email === "string" && /\S+@\S+\.\S+/.test(b.email) && typeof b.message === "string" && b.message.trim().length > 0;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isValidPayload(req.body)) {
    return res.status(400).json({ error: "Missing or invalid name, email, or message" });
  }

  const { name, email, company, message } = req.body as ContactPayload;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or CONTACT_TO_EMAIL env vars");
    return res.status(500).json({ error: "Server not configured" });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `NodeTech Labs Website <${from}>`,
      to,
      replyTo: email,
      subject: `New project inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send message" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
