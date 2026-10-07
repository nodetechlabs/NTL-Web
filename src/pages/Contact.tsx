import { useState } from "react";
import PageHero from "../components/PageHero";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page">
      <PageHero
        crumb="Contact"
        title={
          <>
            Tell us what's <em>actually</em> broken.
          </>
        }
        lede="Skip the sales pitch — just tell us what you're trying to build or what's not working. A real person reads these, usually within a day."
      />

      <section className="section tight">
        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Company name" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" placeholder="What are you looking to build?" required />
            </div>
            <button type="submit" className="btn-primary" disabled={status === "sending"}>
              {status === "sent" ? "Message sent ✓" : status === "sending" ? "Sending…" : "Send Message"}
              {status === "idle" || status === "error" ? <span className="arrow">→</span> : null}
            </button>
            {status === "error" && <p className="form-error">Something went wrong — please try again or email us directly.</p>}
          </form>

          <div className="contact-info-card">
            <h3>Get in touch</h3>
            <div className="info-row">
              <span>Email</span>
              <strong>info@nodetechlabs.com</strong>
            </div>
            <div className="info-row">
              <span>Phone</span>
              <strong>+1 (415) 555-0190</strong>
            </div>
            <div className="info-row">
              <span>Office</span>
              <strong>San Francisco, CA</strong>
            </div>
            <div className="info-row">
              <span>Response time</span>
              <strong>Within 1 business day</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
