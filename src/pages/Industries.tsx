import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <div className="page">
      <PageHero
        crumb="Industries"
        title={
          <>
            Domain expertise across <em>every sector</em> we serve.
          </>
        }
        lede="We bring deep, sector-specific experience to every engagement — so the solutions we build fit how your industry actually works."
      />

      <section className="section tight">
        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {industries.map((i) => (
            <article key={i.slug} id={i.slug} className="detail-card" style={{ scrollMarginTop: "130px" }}>
              <div className="ind-icon">{i.icon}</div>
              <h3>{i.name}</h3>
              <p>{i.description}</p>
              <ul>
                {i.solutions.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="card-link">
                Talk to our team <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
