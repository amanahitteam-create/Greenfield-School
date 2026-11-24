import { Wrap, Hero, Strip, Split, Block, Cta } from "../components/ui";

const culture = [
  ["01", "Integrity", "Doing what is right, thoughtfully."],
  ["02", "Curiosity", "Asking questions and exploring."],
  ["03", "Care", "Looking out for one another."],
  ["04", "Service", "Giving back to the community."],
];

export default function About() {
  return (
    <>
      <Hero
        eyebrow="Our school / Our story"
        title="Rooted in purpose. Growing toward possibility."
        text="A thoughtful introduction to the values, people and ideas that shape our school community."
        btn="Meet the community" to="/faculty" image="about" alt="Greenfield School campus"
      />
      <Strip items={["01 / Overview", "02 / Our story", "03 / Mission & vision", "04 / Culture", "05 / Principal's message"]} />

      <Split image="campus" alt="School building" eyebrow="Our story" title="A place with purpose." btn="Faculty & Staff" to="/faculty" note="Content to be confirmed by the school.">
        Every school has a story shaped by its students, its values and the community it serves. This overview is a thoughtful introduction to Greenfield School's approach to teaching, learning and belonging.
      </Split>

      <Block bg="bg-cream" eyebrow="Purpose & direction" title="The values behind the education.">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-t border-brand/30 pt-4">
            <p className="text-xs text-slate-500">01</p>
            <h3 className="font-display text-2xl font-bold text-brand">Our mission</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">To create an environment where learning is meaningful and every student can develop confidence, compassion and independence.</p>
          </div>
          <div className="border-t border-brand/30 pt-4">
            <p className="text-xs text-slate-500">02</p>
            <h3 className="font-display text-2xl font-bold text-brand">Our vision</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">To prepare thoughtful, capable learners who contribute positively to their communities.</p>
          </div>
        </div>
      </Block>

      <Block eyebrow="Our guiding principles" title="The culture we hope to nurture.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map(([n, t, d]) => (
            <div key={t} className="border-t border-brand/30 pt-4">
              <p className="text-xs text-slate-500">{n}</p>
              <h3 className="font-display text-xl font-bold text-brand">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Block>

      <Split right bg="bg-cream" image="teacher" alt="School principal" eyebrow="A message from leadership" title="A welcome from the principal." btn="Meet our faculty" to="/faculty" note="Principal's message to be confirmed by the school.">
        Welcome to Greenfield School. This space will introduce the school's authentic vision, teaching culture and promise to families in the principal's approved words.
      </Split>

      <Block eyebrow="Meet the community" title="The people make the place.">
        <p className="max-w-xl text-sm text-slate-600">Explore our teaching community and hear approved stories from parents and students on the Faculty &amp; Staff and Testimonials pages.</p>
      </Block>

      <Cta eyebrow="The people behind the promise" title="Meet the people shaping Greenfield." btn="Meet our faculty" to="/faculty" />
    </>
  );
}