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
            We've made the mistakes already, <em>in these five</em>.
          </>
        }
        lede="Every industry has its own landmines — the compliance rule nobody mentions until week four, the one integration that's always broken. We've stepped on most of them in these sectors already."
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
