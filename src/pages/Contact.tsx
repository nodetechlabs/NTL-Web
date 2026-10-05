import { useState } from "react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="page">
      <PageHero
        crumb="Contact"
        title={
          <>
            Let's build something <em>real</em>.
          </>
        }
        lede="Tell us about your project — we'll get back to you within one business day."
      />

      <section className="section tight">
        <div className="contact-grid">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Company name" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" placeholder="What are you looking to build?" required />
            </div>
            <button type="submit" className="btn-primary">
              {sent ? "Message sent ✓" : "Send Message"} {!sent && <span className="arrow">→</span>}
            </button>
          </form>

          <div className="contact-info-card">
            <h3>Get in touch</h3>
            <div className="info-row">
              <span>Email</span>
              <strong>hello@nodetechlabs.com</strong>
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
