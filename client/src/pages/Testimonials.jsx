import { Hero, Strip, Split, Block, Cta } from "../components/ui";

const quotes = [
  "A learning environment that celebrates curiosity and care.",
  "Teachers help students feel confident in their ideas.",
  "A community where children feel welcomed and respected.",
  "Every school day offers opportunities to learn and grow.",
  "Students are encouraged to create, explore and ask questions.",
  "A thoughtful balance of challenge and encouragement.",
];

const voices = [
  ["01", "Parents & guardians", "Approved family stories can describe their experience of learning, care and school belonging."],
  ["02", "Students & alumni", "Student and alumni reflections can illustrate personal growth and school life."],
];

export default function Testimonials() {
  return (
    <>
      <Hero
        eyebrow="Voices from our community"
        title="What families say matters."
        text="Authentic perspectives will help prospective families understand the school experience. All quotations here are approved, verifiable and not for general publication."
      />

      <Strip items={["01 / The voices", "02 / Encouragement", "03 / Community", "04 / Experiences", "05 / Authenticity"]} />

      <Split
        right
        image="portrait" alt="Member of the Greenfield community"
        eyebrow="Encouragement in action" title="A place where children feel encouraged."
        btn="Read our stories" to="/news-events"
        note="Sample quotation. Final wording to be approved by the school."
      >
        Sample quotation: we value a school culture in which each child is encouraged to ask questions, try new things and be supported. This illustrative message will be replaced by an approved voice.
      </Split>

      <Block bg="bg-cream" eyebrow="Voices of the community" title="Perspectives from the school community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q} className="rounded-lg border border-slate-200 bg-white p-5">
              <span aria-hidden className="font-display text-3xl leading-none text-gold">&ldquo;</span>
              <blockquote className="mt-1 font-display text-base font-bold leading-snug text-brand">{q}</blockquote>
              <figcaption className="mt-4 border-t border-slate-100 pt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Illustrative quote / approval pending
              </figcaption>
            </figure>
          ))}
        </div>
      </Block>

      <Block eyebrow="Student & family stories" title="Meaningful experiences, told with care.">
        <div className="grid gap-8 md:grid-cols-2">
          {voices.map(([n, t, d]) => (
            <div key={t} className="border-t border-brand/30 pt-4">
              <p className="text-xs text-slate-500">{n}</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-brand">{t}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block bg="bg-cream" eyebrow="Our promise to authenticity" title="Real voices only, when approved.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Before publication, Replace all six sample quotes with genuine feedback, permission-cleared wording and verified identity where appropriate.
        </p>
        <p className="mt-3 text-xs text-slate-400">Final testimonials to be confirmed by the school.</p>
      </Block>

      <Cta eyebrow="Our promise" title="A welcoming future starts here." btn="Read an update" to="/news-events" />
    </>
  );
}