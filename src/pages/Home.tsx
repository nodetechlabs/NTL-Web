import { Link } from "react-router-dom";
import { useRef } from "react";
import Hero from "../components/Hero";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { work } from "../data/work";

export default function Home() {
  const serviceRowRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => serviceRowRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });

  return (
    <>
      <Hero />

      {/* ===== Services summary ===== */}
      <section className="section" id="services">
        <div className="section-head">
          <div>
            <p className="label">WHAT WE DO</p>
            <h2>Our Services</h2>
            <p className="sub">Five things we're actually good at — not a list of everything we'll say yes to.</p>
          </div>
          <div className="carousel-controls">
            <button className="circle-btn" aria-label="Previous" onClick={() => scroll(-1)}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="circle-btn" aria-label="Next" onClick={() => scroll(1)}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="teaser-row" ref={serviceRowRef}>
          {services.map((s) => (
            <Link key={s.slug} to={`/services#${s.slug}`} className={`detail-card${s.highlight ? " highlight" : ""}`}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
              {s.highlight && (
                <span className="circle-arrow red" style={{ marginTop: "auto" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Industries summary ===== */}
      <section className="section tight" id="industries">
        <div className="section-head">
          <div>
            <p className="label">WHO WE SERVE</p>
            <h2>Industries</h2>
            <p className="sub">We've picked up the specific headaches of a few industries. Here's which ones.</p>
          </div>
          <Link to="/industries" className="view-all">
            View All Industries <span className="arrow">→</span>
          </Link>
        </div>

        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {industries.map((i) => (
            <Link key={i.slug} to={`/industries#${i.slug}`} className="detail-card">
              <div className="ind-icon">{i.icon}</div>
              <h3>{i.name}</h3>
              <p>{i.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Featured Work summary ===== */}
      <section className="section" id="work">
        <div className="section-head">
          <div>
            <p className="label">A FEW WE CAN TALK ABOUT</p>
            <h2>Featured Work</h2>
            <p className="sub">Most of our client work is under NDA. These three weren't.</p>
          </div>
          <Link to="/work" className="view-all">
            View All Case Studies <span className="arrow">→</span>
          </Link>
        </div>

        <div className="work-grid">
          {work.map((w) => (
            <Link key={w.slug} to={`/work/${w.slug}`} className={`work-card wc-${w.theme}`}>
              <div className="wc-image" />
              <div className="wc-body">
                <div className="tags">
                  {w.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h3>{w.title}</h3>
                <span className="wc-link">
                  View Case Study <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== About summary ===== */}
      <section className="section tight" id="about">
        <div className="section-head">
          <div>
            <p className="label">WHO WE ARE</p>
            <h2>About NodeTech Labs</h2>
            <p className="sub">We're a small studio, not an agency with a bench of juniors. You work with the people actually writing the code.</p>
          </div>
          <Link to="/about" className="view-all">
            More About Us <span className="arrow">→</span>
          </Link>
        </div>

        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="detail-card">
            <div className="svc-icon">★</div>
            <h3>What We're After</h3>
            <p>Software that's still running — and still making sense to whoever inherits it — three years after we hand it off.</p>
          </div>
          <div className="detail-card">
            <div className="svc-icon">◆</div>
            <h3>How We Work</h3>
            <p>We sit in your standups, not just your kickoff calls. By week two you'll forget we're a separate company.</p>
          </div>
          <div className="detail-card">
            <div className="svc-icon">⬡</div>
            <h3>Who's Actually Doing This</h3>
            <p>No account managers relaying messages to engineers in another timezone. You talk to the people typing the code.</p>
          </div>
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="section tight" id="contact">
        <div className="contact-cta detail-card">
          <p className="label" style={{ textAlign: "center" }}>
            GET IN TOUCH
          </p>
          <h2>Let's build something real.</h2>
          <p className="sub">Tell us about your project — we'll get back to you within one business day.</p>
          <div className="contact-cta-actions">
            <Link to="/contact" className="btn-primary">
              Start a Project <span className="arrow">→</span>
            </Link>
            <a href="mailto:info@nodetechlabs.com" className="view-all">
              info@nodetechlabs.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
