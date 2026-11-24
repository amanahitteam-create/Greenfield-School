import { Link } from "react-router-dom";

const Img = ({ src, alt = "", className = "" }) => (
  <img src={`/images/${src}`} alt={alt} loading="lazy" className={`h-full w-full bg-slate-200 object-cover ${className}`} />
);

const Eyebrow = ({ children }) => (
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-brand/80">{children}</p>
);

const values = [
  { t: "Curiosity", d: "We welcome questions and treat them as the start of real learning." },
  { t: "Integrity", d: "We do the right thing, especially when no one is watching." },
  { t: "Kindness", d: "We build a community where everyone is respected and included." },
  { t: "Excellence", d: "We set high expectations and support every child to reach them." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <Eyebrow>About Greenfield</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-brand sm:text-5xl">
              Rooted in purpose. Growing toward possibility.
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-600">
              For years, Greenfield School has helped children grow into thoughtful, capable and caring people.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl"><Img src="about-hero.jpg" alt="Greenfield School campus" /></div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div className="aspect-[4/3] overflow-hidden rounded-lg"><Img src="about-campus.jpg" alt="School building" /></div>
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">Values with substance.</h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-600">
              Our values are not words on a wall. They shape how we teach, how we listen and how we treat one another every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">The values behind our education.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="border-t-2 border-brand pt-4">
                <h3 className="font-display text-xl font-bold text-brand">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2 lg:px-8 lg:py-20">
          <div className="rounded-lg bg-mint p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-brand">Our mission</h3>
            <p className="mt-3 leading-relaxed text-slate-700">To give every child a strong education in a warm, supportive environment.</p>
          </div>
          <div className="rounded-lg bg-brand p-6 text-white sm:p-8">
            <h3 className="font-display text-2xl font-bold">Our vision</h3>
            <p className="mt-3 leading-relaxed text-white/80">Graduates who think clearly, act kindly and lead with confidence.</p>
          </div>
        </div>
      </section>

      {/* Principal message */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8 lg:py-20">
          <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl lg:max-w-none"><Img src="founder.jpg" alt="Head of school" /></div>
          <div>
            <Eyebrow>A message from the principal</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">A school built on promise.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
              We promise to know every child, challenge them with care and walk with them at every step.
            </p>
          </div>
        </div>
      </section>

      {/* People link */}
      <section className="bg-mint">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand">The people make the place.</h2>
          <Link to="/faculty" className="rounded-md bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-dark">Meet our faculty</Link>
        </div>
      </section>
    </>
  );
}