import { Img, HeroOverlay, Strip, Split, Block, Cta } from "../components/ui";

const passions = [
  { k: "science", t: "Science & Discovery", d: "Hands-on curiosity and activity." },
  { k: "g3", t: "Culture & Performance", d: "Celebrating tradition and creativity." },
  { k: "outdoor", t: "Team Sports", d: "Teamwork, fairness and play." },
  { k: "library", t: "Collaborative Learning", d: "Studies shared with others." },
];

export default function StudentLife() {
  return (
    <>
      <HeroOverlay
        eyebrow="Social & personal growth"
        title="Belong. Create. Discover."
        text="A community of student life shaped through friendship, participation and purposeful activity."
        btn="Explore Student Life" to="/gallery"
        image="library" alt="Students reading in the library"
      />

      <Strip items={["01 / Community", "02 / Clubs", "03 / Sports", "04 / Culture", "05 / Get involved"]} />

      <Block eyebrow="Daily life & experience" title="Every student has a story beyond lessons.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Greenfield School's student life page will describe real opportunities, annual activities and ways to participate.
        </p>
        <p className="mt-3 text-xs text-slate-400">Activities and clubs to be confirmed by the school.</p>
      </Block>

      <Block bg="bg-cream" eyebrow="Clubs & community" title="Find a passion. Make a contribution.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {passions.map((p) => (
            <article key={p.t}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg"><Img k={p.k} alt={p.t} /></div>
              <h3 className="mt-3 font-display text-base font-bold text-brand sm:text-lg">{p.t}</h3>
              <p className="text-xs text-slate-500 sm:text-sm">{p.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <Split
        image="outdoor" alt="Students walking together"
        eyebrow="Sports & wellbeing" title="Growing through teamwork."
        btn="Our Gallery" to="/gallery"
      >
        Games and physical activity can build confidence, cooperation and a sense of belonging. Any published competition results or sports programs will be confirmed by the school.
      </Split>

      <Split
        right bg="bg-cream"
        image="group" alt="Students sharing a moment"
        eyebrow="Culture & community" title="Creative voices, shared moments."
        btn="News & Events" to="/news-events"
      >
        School performances, events and cultural celebrations can give young people a space to express themselves and contribute to a vibrant community. Final examples will reflect actual school programs.
      </Split>

      <Block eyebrow="Get involved" title="Taking part starts with showing up.">
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          The final page will explain how the school informs students about clubs and activities through existing school communication channels.
        </p>
        <p className="mt-3 text-xs text-slate-400">Participation process to be confirmed by the school.</p>
      </Block>

      <Cta eyebrow="Discover the community" title="Find your place to belong." btn="View school gallery" to="/gallery" />
    </>
  );
}