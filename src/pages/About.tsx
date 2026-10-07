import PageHero from "../components/PageHero";

const values = [
  { icon: "★", name: "We bill for outcomes, not hours", text: "Nobody's ever asked us for a timesheet and been happy about what they found. We'd rather be judged on whether the thing works." },
  { icon: "◆", name: "We sit in your standups", text: "Not a kickoff call and then radio silence until the invoice. If your team uses Slack, we're in it." },
  { icon: "⬡", name: "No separate 'quality' phase", text: "Tests and code review aren't something we bolt on in week six. If it's not built in from day one, it's not really there." },
];

const timeline = [
  { year: "2019", title: "Started in a spare bedroom", text: "Two of us, a couple of early-stage clients, and a lot of infrastructure fires to put out." },
  { year: "2021", title: "Took AI seriously", text: "Not because it was trendy — a client needed a forecasting model that actually worked, and we figured out how to build one." },
  { year: "2023", title: "Hit 50 clients", text: "Still hadn't hired a salesperson. Most of them came from a referral from the last one." },
  { year: "2026", title: "200+ projects in", text: "We've stopped counting the all-nighters and started counting the systems still running without us." },
];

export default function About() {
  return (
    <div className="page">
      <PageHero
        crumb="About"
        title={
          <>
            We're a small team that's <em>shipped a lot</em>.
          </>
        }
        lede="NodeTech Labs started because two engineers were tired of watching agencies oversell and underdeliver. We'd rather stay small and be the people you actually want on the call."
      />

      <section className="section tight">
        <div className="section-head">
          <div>
            <p className="label">HOW WE OPERATE</p>
            <h2>What Actually Matters To Us</h2>
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
            <p className="sub">We hire slowly and rarely. If one of these fits, we'd rather hear from you directly than sort through an ATS.</p>
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
