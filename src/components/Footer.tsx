import { Link } from "react-router-dom";
import Logo from "./Logo";
import { services } from "../data/services";
import { industries } from "../data/industries";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glass">
        <div className="footer-ribbons">
          <svg viewBox="0 0 1600 500" preserveAspectRatio="none">
            <path
              className="trail trail-1"
              d="M-100,400 C300,320 600,460 950,360 C1250,280 1450,380 1800,320"
              stroke="#FF1F1F"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              className="trail trail-2"
              d="M-100,460 C400,480 700,400 1000,440 C1300,480 1500,420 1800,460"
              stroke="#FF1F1F"
              strokeWidth="1.5"
              fill="none"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="footer-top">
          <div className="footer-col brand-col">
            <Logo size={30} onDark />
            <p>A small engineering studio. We write the code ourselves, show up to your standups, and don't disappear after launch.</p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="GitHub">⌥</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} to={`/services#${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            {industries.map((i) => (
              <Link key={i.slug} to={`/industries#${i.slug}`}>
                {i.name}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/work">Our Work</Link>
            <Link to="/about#careers">Careers</Link>
            <Link to="/resources">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Stay in the Loop</h4>
            <p>Get the latest insights, case studies and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NodeTech Labs. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
