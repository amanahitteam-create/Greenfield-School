import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/news-events", label: "News & Events" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-brand ${isActive ? "text-brand" : "text-slate-700"}`;

  return (
    <header className="sticky top-0 z-50 border-t-4 border-brand bg-white shadow-[0_1px_0_#e5e7eb]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand font-display text-xl font-bold text-white">G</span>
          <span>
            <span className="block font-display text-xl font-bold leading-none text-brand sm:text-2xl">Greenfield School</span>
            <span className="mt-1 block text-[9px] uppercase tracking-wide text-slate-500 sm:text-[10px]">A place to learn &amp; belong</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-brand lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-3 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className={(s) => `${linkClass(s)} rounded-md px-2 py-3 text-base`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}