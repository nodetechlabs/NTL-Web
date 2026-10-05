import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function PageHero({ crumb, title, lede }: { crumb: string; title: ReactNode; lede: string }) {
  return (
    <section className="page-hero">
      <div className="glow" />
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{crumb}</span>
      </div>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </section>
  );
}
