import PageHero from "../components/PageHero";

const resources = [
  { tag: "AI", title: "How to evaluate an LLM vendor without getting locked in", text: "A practical framework for assessing model providers on cost, latency and portability." },
  { tag: "Cloud", title: "The real cost of a 'quick' cloud migration", text: "What teams consistently underestimate — and how to budget for it properly." },
  { tag: "Engineering", title: "Why most automation projects stall after the demo", text: "The gap between a working prototype and a production-grade workflow." },
  { tag: "Strategy", title: "Technology roadmaps that survive contact with reality", text: "Building a roadmap flexible enough to withstand shifting priorities." },
  { tag: "AI", title: "Applied AI vs. AI theater: a buyer's checklist", text: "Six questions to ask before greenlighting any AI initiative." },
  { tag: "Case Study", title: "What 200+ delivered projects taught us about scope", text: "Patterns in the engagements that shipped on time — and the ones that didn't." },
];

export default function Resources() {
  return (
    <div className="page">
      <PageHero
        crumb="Resources"
        title={
          <>
            Insights from <em>200+ projects</em> delivered.
          </>
        }
        lede="Practical thinking on technology, AI and strategy — drawn from real engagements, not theory."
      />

      <section className="section tight">
        <div className="resource-grid">
          {resources.map((r) => (
            <article key={r.title} className="resource-card">
              <div className="resource-thumb" />
              <div className="resource-body">
                <span className="tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
