import { Link } from "react-router-dom";
import { Img, Hero, Strip, Split, Block, Cta } from "../components/ui";

const leaders = [
  { img: "portrait", t: "Principal / Head Teacher", d: "Name and bio to be confirmed by the school." },
  { img: "teacher", t: "Academic Lead", d: "Name and bio to be confirmed by the school." },
  { img: "l1", t: "Administrative Lead", d: "Name and bio to be confirmed by the school." },
  { img: "l2", t: "Student Support Lead", d: "Name and bio to be confirmed by the school." },
];

const culture = [
  ["01", "Languages & Humanities", "Reading, writing and understanding people and places."],
  ["02", "Maths & Sciences", "Approved subject teams will be listed here."],
  ["03", "Arts & Enrichment", "Creative learning beyond the classroom."],
  ["04", "Student Support", "Support available for every student."],
];

export default function Faculty() {
  return (
    <>
      <Hero
        eyebrow="Faculty & staff"
        title="The people who make learning possible."
        text="Meet the educators, leadership and support staff who contribute to a caring school community."
        btn="Meet our community" to="/about"
        image="group" alt="Greenfield faculty and staff together"
      />

      <Strip items={["01 / The people", "02 / Leadership", "03 / Teaching teams", "04 / Daily support"]} />

      <Block eyebrow="Educators and staff" title="Dedicated to the growth of every learner.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          This introduction explains Greenfield's approach to teaching, leadership and collaboration. All staff names, qualifications, roles and department details will be added after approval from the school.
        </p>
        <p className="mt-3 text-xs text-slate-400">Final staff list to be confirmed by the school.</p>
      </Block>

      <Block bg="bg-cream" eyebrow="School leadership" title="Leadership and guidance.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {leaders.map((l) => (
            <article key={l.t}>
              <div className="aspect-4/5 overflow-hidden rounded-lg"><Img k={l.img} alt={l.t} /></div>
              <h3 className="mt-3 font-display text-base font-bold text-brand sm:text-lg">{l.t}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{l.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <Block eyebrow="Teaching community" title="A collaborative faculty culture.">
        <div className="grid gap-4 sm:grid-cols-2">
          {culture.map(([n, t, d]) => (
            <Link
              key={t}
              to="/academics"
              className="flex items-start justify-between rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-brand"
            >
              <div>
                <p className="text-xs text-slate-500">{n}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-brand">{t}</h3>
                <p className="mt-1 max-w-xs text-sm text-slate-600">{d}</p>
              </div>
              <span aria-hidden className="text-brand">&#8599;</span>
            </Link>
          ))}
        </div>
      </Block>

      <Split
        right bg="bg-cream"
        image="group" alt="Faculty team"
        eyebrow="Beyond the classroom" title="A team behind every school day."
        btn="Meet the faculty" to="/contact"
        note="Team details to be confirmed by the school."
      >
        Leadership, teachers and school support staff contribute to a safe, welcoming educational community. Staff groups and responsibilities shown here will be confirmed and approved.
      </Split>

      <Block eyebrow="Get in touch" title="Connect with the school office.">
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          Prospective families and visitors can use the school's contact details on the Contact Us page.
        </p>
        <p className="mt-3 text-xs text-slate-400">Contact details to be confirmed by the school.</p>
      </Block>

      <Cta eyebrow="Beyond the classroom" title="See the school through their eyes." btn="Explore student life" to="/campus-life" />
    </>
  );
}