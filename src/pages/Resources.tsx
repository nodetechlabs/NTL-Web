import PageHero from "../components/PageHero";

const resources = [
  { tag: "AI", title: "How to evaluate an LLM vendor without getting locked in", text: "The questions we wish someone had asked us before our first contract renewal came with a 4x price hike." },
  { tag: "Cloud", title: "The real cost of a 'quick' cloud migration", text: "Every client says two weeks. It's never two weeks. Here's what actually eats the time." },
  { tag: "Engineering", title: "Why most automation projects stall after the demo", text: "The demo works because someone fed it clean data by hand. Production doesn't have that luxury." },
  { tag: "Strategy", title: "Technology roadmaps that survive contact with reality", text: "Most roadmaps die the first time a VP changes their mind. Here's how to build one that bends instead of breaking." },
  { tag: "AI", title: "Applied AI vs. AI theater: a buyer's checklist", text: "If a vendor can't tell you what happens when the model is wrong, that's your answer." },
  { tag: "Case Study", title: "What 200+ delivered projects taught us about scope", text: "The projects that went sideways almost all had the same thing in common, and it wasn't the tech." },
];

export default function Resources() {
  return (
    <div className="page">
      <PageHero
        crumb="Resources"
        title={
          <>
            Stuff we've learned, <em>the hard way</em>.
          </>
        }
        lede="Not thought-leadership filler — notes from projects that actually happened, including the parts that went wrong."
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
