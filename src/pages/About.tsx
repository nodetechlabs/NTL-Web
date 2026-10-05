import PageHero from "../components/PageHero";

const values = [
  { icon: "★", name: "Outcomes over output", text: "We measure success by the impact we create, not the hours we bill or the lines we ship." },
  { icon: "◆", name: "Embedded partnership", text: "We work inside your team, not alongside it — sharing context, not just deliverables." },
  { icon: "⬡", name: "Engineering craft", text: "Quality isn't a phase we add later. It's built into how we design, build and ship from day one." },
];

const timeline = [
  { year: "2019", title: "Founded", text: "NodeTech Labs started as a two-person consultancy solving infrastructure problems for early-stage startups." },
  { year: "2021", title: "AI practice launched", text: "Expanded into applied AI and automation as demand for practical, production-grade AI systems grew." },
  { year: "2023", title: "50 clients milestone", text: "Crossed 50 clients worldwide across healthcare, finance, retail, education and manufacturing." },
  { year: "2026", title: "200+ projects delivered", text: "Today we're a full-stack technology partner trusted by enterprises and high-growth teams alike." },
];

export default function About() {
  return (
    <div className="page">
      <PageHero
        crumb="About"
        title={
          <>
            Turning bold ideas into <em>real impact</em>, since day one.
          </>
        }
        lede="NodeTech Labs is a technology consulting and product engineering partner, built to help ambitious teams ship faster without cutting corners on quality."
      />

      <section className="section tight">
        <div className="section-head">
          <div>
            <p className="label">WHAT WE BELIEVE</p>
            <h2>Our Values</h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.name} className="detail-card">
              <div className="svc-icon">{v.icon}</div>
              <h3>{v.name}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="section-head">
          <div>
            <p className="label">OUR JOURNEY</p>
            <h2>Timeline</h2>
          </div>
        </div>
        <div className="timeline">
          {timeline.map((t) => (
            <div key={t.year} className="timeline-item">
              <span className="year">{t.year}</span>
              <div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight" id="careers">
        <div className="section-head">
          <div>
            <p className="label">JOIN US</p>
            <h2>Careers</h2>
            <p className="sub">We're always looking for senior engineers, designers and strategists who care about craft as much as we do.</p>
          </div>
        </div>
        <div className="detail-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {["Senior Full-Stack Engineer", "AI/ML Engineer", "Product Designer"].map((role) => (
            <div key={role} className="detail-card">
              <h3>{role}</h3>
              <p>Remote · Full-time</p>
              <a href="mailto:careers@nodetechlabs.com" className="card-link">
                Apply now <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
