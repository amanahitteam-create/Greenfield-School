import { Img, Hero, Strip, Split, Block, Cta } from "../components/ui";

const news = [
  { k: "n1", tag: "Academics / Learning", t: "Student inquiry in action", d: "Date and details to be confirmed." },
  { k: "n2", tag: "Culture / Events", t: "A celebration of creative expression", d: "Date and details to be confirmed." },
  { k: "n3", tag: "Sports / Teams", t: "Teamwork on the sports field", d: "Date and details to be confirmed." },
  { k: "n4", tag: "Community / Events", t: "Community learning together", d: "Date and details to be confirmed." },
  { k: "n5", tag: "Achievements", t: "Celebrating hard work", d: "Date and details to be confirmed." },
  { k: "n6", tag: "People / Teachers", t: "Meet the teaching team", d: "Date and details to be confirmed." },
];

const dates = [
  ["01", "Academic term update"],
  ["02", "School community gathering"],
  ["03", "Student activities showcase"],
];

export default function NewsEvents() {
  return (
    <>
      <Hero
        eyebrow="Stories from our community"
        title="The moments that bring us together."
        text="A curated space for approved school announcements, achievements and event information."
        btn="View school updates" to="/gallery"
        image="campus" alt="Greenfield School campus"
      />

      <Strip items={["01 / The stories", "02 / Featured", "03 / School events", "04 / Events", "05 / Archive"]} />

      <Split
        image="group" alt="Students and teachers together"
        eyebrow="Featured school update" title="Learning beyond the everyday."
        btn="Feature a bulletin" to="/contact"
        note="Final featured story to be confirmed by the school."
      >
        Feature space reserved for the latest school-approved news or event update. This final story will include an overview, headline, date, photograph and school-approved wording for a current meeting or celebration.
      </Split>

      <Block bg="bg-cream" eyebrow="Latest updates" title="News, events and achievements.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <article key={n.t}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg"><Img k={n.k} alt={n.t} /></div>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-brand/70">{n.tag}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-brand">{n.t}</h3>
              <p className="mt-1 text-xs text-slate-500">{n.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <section className="bg-mint">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/80">Calendar preview</p>
          <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">Upcoming dates at a glance.</h2>
          <ul className="mt-8 divide-y divide-brand/15 border-y border-brand/15">
            {dates.map(([n, t]) => (
              <li key={t} className="grid items-center gap-1 py-4 sm:grid-cols-[60px_1fr_1fr]">
                <span className="text-xs text-slate-500">{n}</span>
                <span className="font-display text-lg font-bold text-brand">{t}</span>
                <span className="text-sm text-slate-500 sm:text-right">Date to be confirmed by the school.</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Block eyebrow="Archive & records" title="A record of school life, thoughtfully kept.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Older articles and activities may appear by year or by public page. New items will be added by the school as part of regular publishing and reviewing.
        </p>
        <p className="mt-3 text-xs text-slate-400">Archive structure to be confirmed by the school.</p>
      </Block>

      <Cta eyebrow="Stay in the loop" title="Stay connected to school life." btn="View campus gallery" to="/gallery" />
    </>
  );
}