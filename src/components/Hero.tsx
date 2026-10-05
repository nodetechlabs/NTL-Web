import { useRef } from "react";
import { Link } from "react-router-dom";
import Building from "./Building";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 14;
    const y = (e.clientY / innerHeight - 0.5) * 10;
    const el = heroRef.current?.querySelector<SVGSVGElement>("#building");
    if (el) el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onMouseLeave = () => {
    const el = heroRef.current?.querySelector<SVGSVGElement>("#building");
    if (el) el.style.transform = "translate(0,0)";
  };

  return (
    <section className="hero" id="hero" ref={heroRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="hero-bg">
        <div className="hero-fog" />
        <div className="tree-layer tree-left" />
        <div className="tree-layer tree-right" />
        <Building />
        <div className="light-trails">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
            <path
              className="trail trail-1"
              d="M-100,700 C300,620 600,780 950,650 C1250,540 1450,650 1750,580"
              stroke="#FF1F1F"
              strokeWidth="2"
              fill="none"
              opacity="0.25"
            />
            <path
              className="trail trail-2"
              d="M-100,780 C400,820 700,700 1000,760 C1300,820 1500,740 1800,780"
              stroke="#FF1F1F"
              strokeWidth="1.5"
              fill="none"
              opacity="0.18"
            />
          </svg>
        </div>
      </div>

      <div className="annotation">
        <svg width="90" height="70" viewBox="0 0 90 70" className="arrow-curve">
          <path d="M5,5 C40,5 20,55 85,60" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.5)" />
            </marker>
          </defs>
        </svg>
        <p>
          Build
          <br />
          Innovate
          <br />
          Scale
          <br />
          Together.
        </p>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="eyebrow">
            Technology Consulting <span className="x">×</span> AI Solutions
          </p>
          <h1 className="headline">
            <span className="w">Turning</span>
            <span className="w">Bold Ideas</span>
            <span className="w">
              Into <em>Real Impact.</em>
            </span>
          </h1>
          <p className="hero-sub">NodeTech Labs partners with businesses to build, scale and transform with modern technology, AI and innovation.</p>

          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">
              Start a Project <span className="arrow">→</span>
            </Link>
            <button className="btn-play">
              <span className="play-circle">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <polygon points="3,2 12,7 3,12" fill="#fff" />
                </svg>
              </span>
              Watch Our Story <span className="muted">2 min</span>
            </button>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>50+</strong>
              <span>Clients Worldwide</span>
            </div>
            <div className="divider" />
            <div className="stat">
              <strong>200+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="divider" />
            <div className="stat">
              <strong>5+</strong>
              <span>Industries Covered</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card floating-card">
            <div className="card-top">
              <h3>
                AI-Powered
                <br />
                Business Solutions
              </h3>
              <button className="circle-arrow" aria-label="Open">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="avatars">
              <span className="avatar a1" />
              <span className="avatar a2" />
              <span className="avatar a3" />
              <span className="avatar plus">+</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button aria-label="Scroll up">
            <svg width="10" height="10" viewBox="0 0 24 24">
              <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="scroll-label">SCROLL</span>
          <button aria-label="Scroll down" className="active-arrow">
            <svg width="10" height="10" viewBox="0 0 24 24">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
