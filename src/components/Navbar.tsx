import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navItems } from "../data/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <NavLink to="/" onClick={() => setOpen(false)}>
        <Logo />
      </NavLink>

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-controls">
        <NavLink to="/contact" className="btn-talk">
          Let's Talk
        </NavLink>
        <button className="icon-btn menu-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn-talk mobile-talk" onClick={() => setOpen(false)}>
          Let's Talk
        </NavLink>
      </div>
    </header>
  );
}
