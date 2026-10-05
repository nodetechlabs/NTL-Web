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
            <p className="sub">End-to-end technology and consulting services to help you innovate, optimize and grow.</p>
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
            <p className="sub">Deep domain expertise across the sectors where technology matters most.</p>
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
            <p className="label">REAL PROJECTS. REAL OUTCOMES.</p>
            <h2>Featured Work</h2>
            <p className="sub">Solving real business challenges with modern technology.</p>
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
            <p className="sub">
              A technology consulting and product engineering partner, built to help ambitious teams ship faster without cutting corners on
              quality.
            </p>
          </div>
          <Link to="/about" className="view-all">
            More About Us <span className="arrow">→</span>
          </Link>
        </div>

        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="detail-card">
            <div className="svc-icon">★</div>
            <h3>Our Mission</h3>
            <p>Help businesses turn bold ideas into real, measurable impact through modern technology.</p>
          </div>
          <div className="detail-card">
            <div className="svc-icon">◆</div>
            <h3>Our Approach</h3>
            <p>Embedded partnership over handoffs — we work as an extension of your team, not a vendor.</p>
          </div>
          <div className="detail-card">
            <div className="svc-icon">⬡</div>
            <h3>Our Team</h3>
            <p>Senior engineers, designers and strategists who've shipped at scale across every industry we serve.</p>
          </div>
        </div>
      </section>
    </>
  );
}
