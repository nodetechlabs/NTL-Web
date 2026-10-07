import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { services } from "../data/services";

export default function Services() {
  return (
    <div className="page">
      <PageHero
        crumb="Services"
        title={
          <>
            Five things we're good at. <em>Nothing we're not.</em>
          </>
        }
        lede="We turned down a client last quarter because the project wasn't something we were actually good at. Here's the list of what we are."
      />

      <section className="section tight">
        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className={`detail-card${s.highlight ? " highlight" : ""}`} style={{ scrollMarginTop: "130px" }}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="card-link">
                Start a conversation <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
