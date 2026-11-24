import { Link } from "react-router-dom";

const school = [["About Us", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"], ["Faculty & Staff", "/faculty"]];
const explore = [["Facilities", "/facilities"], ["Student Life", "/campus-life"], ["Gallery", "/gallery"], ["News & Events", "/news-events"], ["Testimonials", "/testimonials"]];

const Col = ({ title, links }) => (
  <div>
    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">{title}</p>
    <ul className="mt-4 space-y-2 text-sm text-white/85">
      {links.map(([t, to]) => (
        <li key={t}><Link to={to} className="hover:text-white">{t}</Link></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold">Greenfield School</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">Every learner belongs. Every story matters.</p>
        </div>
        <Col title="The School" links={school} />
        <Col title="Explore" links={explore} />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>Address to be confirmed</li>
            <li>Telephone and email pending</li>
            <li>Visiting hours: TBC</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-white/60 lg:px-8">
          <span>&copy; {new Date().getFullYear()} Greenfield School. All rights reserved.</span>
          <span className="flex gap-4">
            <Link to="/contact" className="hover:text-white">Privacy</Link>
            <Link to="/contact" className="hover:text-white">Accessibility</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}