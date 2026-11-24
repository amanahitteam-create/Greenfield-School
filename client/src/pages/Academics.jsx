import { Wrap, Img, Eyebrow, Heading, Hero, Strip, Split, Block, Cta } from "../components/ui";

const journey = [
  ["01", "Foundations", "A welcoming start to literacy, numeracy and curiosity."],
  ["02", "Growing independence", "Inquiring, collaborating and strengthening key skills."],
  ["03", "Preparing for tomorrow", "Deeper study, responsibility and readiness for what's next."],
];

const practice = [
  { img: "science", t: "Hands-on science", d: "Exploration through guided experiments." },
  { img: "library", t: "Reading & inquiry", d: "Discovering ideas through books." },
  { img: "digital", t: "Digital confidence", d: "Practical technology skills." },
];

const levels = [
  ["01", "Early and middle years", "Program names and age-guide bands will reflect the school's confirmed K-12 structure."],
  ["02", "Upper school years", "Curriculum choices, assessment expectations and completion information will appear later."],
];

export default function Academics() {
  return (
    <>
      <Hero
        flip
        eyebrow="Our engaging academic journey"
        title="Learning with depth. Growing with confidence."
        text="A balanced learning experience focused on strong foundations, thoughtful inquiry and personal growth."
        btn="Our programs" to="/admissions"
        image="classroom" alt="Students learning together"
      />

      <Strip items={["01 / The path", "02 / Foundations", "03 / Framework", "04 / Practice", "05 / Pathways"]} />

      <Block eyebrow="Our learning pathway" title="An age-appropriate journey.">
        <div className="grid gap-4 md:grid-cols-3">
          {journey.map(([n, t, d]) => (
            <article key={t} className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5">
              <div>
                <p className="text-xs text-slate-500">{n}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-brand">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
              <span aria-hidden className="mt-4 self-end text-brand">&#8599;</span>
            </article>
          ))}
        </div>
      </Block>

      <Split
        right bg="bg-cream"
        image="teacher" alt="Teacher at the board"
        eyebrow="Curriculum" title="A thoughtful learning framework."
        btn="Attendance guide" to="/admissions"
        note="Curriculum details will be added once approved by the school."
      >
        The curriculum at Greenfield School will be explained using approved subject offerings, assessment methods, instructional language and academic expectations. The aim is to make learning priorities clear for families without suggesting an online classroom platform.
      </Split>

      <Block eyebrow="Learning in practice" title="Learning happens in many ways.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practice.map((p) => (
            <article key={p.t}>
              <div className="aspect-4/3 overflow-hidden rounded-lg"><Img k={p.img} alt={p.t} /></div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand">{p.t}</h3>
              <p className="text-sm text-slate-600">{p.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <Block bg="bg-cream" eyebrow="Class levels" title="Clear pathways for every stage.">
        <div className="grid gap-6 md:grid-cols-2">
          {levels.map(([n, t, d]) => (
            <div key={t} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-xs text-slate-500">{n}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-brand">{t}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block eyebrow="Next steps" title="Discover your child's next chapter.">
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          For confirmed grades, admissions procedures and the economic calendar, contact the school office.
        </p>
        <p className="mt-3 text-xs text-slate-400">Final registration details to be confirmed by the school.</p>
      </Block>

      <Cta eyebrow="A thoughtful next step" title="Discover the right learning pathway." btn="Admissions guide" to="/admissions" />
    </>
  );
}