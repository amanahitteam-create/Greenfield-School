import { Link } from "react-router-dom";
import { Wrap, Img, Eyebrow, Heading, Btn, Split, Cta } from "../components/ui";

const quick = [
  { t: "Academics", d: "Programs and curriculum", to: "/academics" },
  { t: "Student Life", d: "Clubs, sports and arts", to: "/campus-life" },
  { t: "Admissions", d: "How to apply", to: "/admissions" },
];
const discover = [
  { img: "classroom", t: "A gentle beginning", d: "Early years built on care and curiosity." },
  { img: "library", t: "Learning with purpose", d: "Classrooms where questions matter." },
  { img: "digital", t: "Ready for what comes next", d: "Confidence for the years ahead." },
];
const news = [
  { img: "n1", tag: "Events", t: "Moon-lit stories on the lawn" },
  { img: "n2", tag: "Culture", t: "Creativity brings us together" },
  { img: "n3", tag: "Learning", t: "Learning beyond the classroom" },
];

export default function Home() {
  return (
    <>
      <section className="bg-cream">
        <Wrap className="grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <div>
            <Eyebrow>Admissions open for 2027</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-6xl">
              A place to learn deeply. A place to belong fully.
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-600">
              An inquiring K-12 school for experience-centered learning, where every child is known by name and challenged to grow.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn to="/admissions">Apply for admission</Btn>
              <Btn to="/academics" variant="outline">Explore academics</Btn>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-5/4">
            <Img k="hero" alt="Students walking together on campus" />
            <p className="absolute bottom-4 left-4 max-w-[70%] rounded-md bg-brand-dark px-4 py-2.5 text-xs text-white sm:text-sm">
              A welcoming start to every school day
            </p>
          </div>
        </Wrap>
      </section>

      <section className="bg-white">
        <Wrap className="grid gap-4 py-8 sm:grid-cols-3">
          {quick.map((q) => (
            <Link key={q.t} to={q.to} className="flex items-center justify-between rounded-lg border border-slate-200 px-5 py-4 hover:border-brand">
              <span>
                <span className="block font-display text-lg font-bold text-brand">{q.t}</span>
                <span className="text-sm text-slate-500">{q.d}</span>
              </span>
              <span aria-hidden className="text-brand">&rsaquo;</span>
            </Link>
          ))}
        </Wrap>
      </section>

      <Split image="campus" alt="Greenfield School building" eyebrow="Our approach" title="Where curiosity feels at home." btn="Read our story" to="/about">
        We pair strong academics with a warm, supportive community, so students ask more, try more and become more.
      </Split>

      <section className="bg-cream">
        <Wrap className="py-12 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Learning at Greenfield</Eyebrow>
              <Heading>Space to discover what is possible.</Heading>
            </div>
            <p className="max-w-md leading-relaxed text-slate-600 lg:justify-self-end">
              From the first day to graduation, our programs grow with each student's interests and strengths.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {discover.map((c) => (
              <article key={c.t}>
                <div className="aspect-4/3 overflow-hidden rounded-lg"><Img k={c.img} alt={c.t} /></div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand">{c.t}</h3>
                <p className="text-sm text-slate-600">{c.d}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-white">
        <Wrap className="py-12 lg:py-20">
          <Eyebrow>Gallery</Eyebrow>
          <Heading>The moments that shape us.</Heading>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
            <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg lg:aspect-auto"><Img k="g1" alt="Students together" /></div>
            {["g2", "g3", "g4", "g5"].map((g) => (
              <div key={g} className="aspect-4/3 overflow-hidden rounded-lg"><Img k={g} alt="Campus moment" /></div>
            ))}
          </div>
          <Link to="/gallery" className="mt-5 inline-block text-sm font-medium text-brand hover:underline">See the full gallery &rsaquo;</Link>
        </Wrap>
      </section>

      <section className="bg-cream">
        <Wrap className="grid gap-8 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>News &amp; events</Eyebrow>
            <Heading>A school community in motion.</Heading>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">Stories, celebrations and announcements from across campus.</p>
          </div>
          <ul className="divide-y divide-brand/10">
            {news.map((n) => (
              <li key={n.t}>
                <Link to="/news-events" className="flex items-center gap-4 py-3">
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-md"><Img k={n.img} alt="" /></div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand/70">{n.tag}</p>
                    <p className="font-display text-base font-bold text-brand">{n.t}</p>
                  </div>
                  <span aria-hidden className="text-brand">&rsaquo;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <section className="bg-white">
        <Wrap className="grid items-center gap-8 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-20">
          <figure>
            <span aria-hidden className="font-display text-5xl leading-none text-gold">&ldquo;</span>
            <blockquote className="font-display text-2xl font-bold leading-snug text-brand sm:text-3xl">
              A school feels different when every child is seen, heard and encouraged.
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-600">A Greenfield parent</figcaption>
          </figure>
          <div className="mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-2xl lg:max-w-none"><Img k="portrait" alt="Greenfield community member" /></div>
        </Wrap>
      </section>

      <Cta eyebrow="Get in touch" title="Begin the conversation." btn="Contact admissions" to="/contact" />
    </>
  );
}