import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navItems } from "../data/nav";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

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
        <button className="icon-btn" aria-label="Toggle theme" onClick={toggle}>
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2V4.5M12 19.5V22M22 12H19.5M4.5 12H2M19.07 4.93L17.3 6.7M6.7 17.3L4.93 19.07M19.07 19.07L17.3 17.3M6.7 6.7L4.93 4.93"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 13.2A9 9 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <button className="icon-btn" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
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
        <button className="mobile-theme-toggle" onClick={toggle}>
          Switch to {theme === "dark" ? "light" : "dark"} mode
        </button>
      </div>
    </header>
  );
}
