import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { work } from "../data/work";

export default function WorkDetail() {
  const { slug } = useParams();
  const item = work.find((w) => w.slug === slug);

  if (!item) return <Navigate to="/work" replace />;

  return (
    <div className="page">
      <PageHero crumb={item.title} title={item.title} lede={item.summary} />

      <section className="section tight">
        <div className={`work-card wc-${item.theme}`} style={{ marginBottom: "0" }}>
          <div className="wc-image" style={{ height: "340px" }} />
        </div>

        <div className="case-meta">
          <div>
            <span>Client</span>
            <strong>{item.client}</strong>
          </div>
          <div>
            <span>Tags</span>
            <strong>{item.tags.join(" · ")}</strong>
          </div>
        </div>

        <div className="case-body">
          <div className="case-block">
            <h3>The Challenge</h3>
            <p>{item.challenge}</p>
          </div>
          <div className="case-block">
            <h3>Our Solution</h3>
            <p>{item.solution}</p>
          </div>
        </div>

        <div className="case-block" style={{ marginBottom: "40px" }}>
          <h3>Results</h3>
          <div className="results-grid">
            {item.results.map((r) => (
              <div key={r} className="result-chip">
                {r}
              </div>
            ))}
          </div>
        </div>

        <Link to="/work" className="card-link">
          ← Back to all case studies
        </Link>
      </section>
    </div>
  );
}
