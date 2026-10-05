import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { work } from "../data/work";

export default function Work() {
  return (
    <div className="page">
      <PageHero
        crumb="Work"
        title={
          <>
            Real projects. <em>Real outcomes.</em>
          </>
        }
        lede="A look at how we've helped teams across healthcare, commerce and finance solve real business challenges with modern technology."
      />

      <section className="section tight">
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
    </div>
  );
}
