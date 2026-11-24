import { Img, Hero, Strip, Split, Block, Cta } from "../components/ui";

const places = [
  { k: "classroom", t: "Classrooms", d: "Learning spaces for school life." },
  { k: "outdoor", t: "Outdoor activities", d: "Physical development and play." },
  { k: "corridor", t: "Covered walkways", d: "Thoughtful campus design." },
];

export default function Facilities() {
  return (
    <>
      <Hero
        flip
        eyebrow="Places to learn and explore"
        title="Spaces that support every school day."
        text="Explore learning settings and shared areas designed to help students participate, discover and belong."
        btn="Explore the Campus" to="/gallery"
        image="digital" alt="Students working in a computer lab"
      />

      <Strip items={["01 / The campus", "02 / Library", "03 / Science labs", "04 / Digital learning", "05 / Campus spaces"]} />

      <Split
        image="library" alt="Student reading in the library"
        eyebrow="Reading and research" title="A space for reading and inquiry."
        btn="Gallery" to="/gallery"
        note="Facility details to be confirmed by the school."
      >
        Library environments can encourage independent exploration, shared reading and quiet study. Confirmed facilities, collections and opening arrangements will be described here.
      </Split>

      <Split
        right bg="bg-cream"
        image="science" alt="Students in a science lab"
        eyebrow="Practical learning" title="Science through discovery."
        btn="Academics" to="/academics"
        note="Equipment details to be provided by the school."
      >
        Practical science spaces may support experiments, observation and collaboration under teacher guidance. The final list of equipment and available laboratories must be supplied by the school.
      </Split>

      <Split
        image="digital" alt="Students using computers"
        eyebrow="Technology in learning" title="Tools for digital confidence."
        btn="Our Programs" to="/academics"
        note="Digital facility details to be confirmed by the school."
      >
        Digital learning spaces are presented as a possible school resource, with actual hardware, coding, teaching culture and instructional use to be verified. Any digital learning platform is limited to the website scope.
      </Split>

      <Block bg="bg-cream" eyebrow="Campus spaces" title="Places to gather and grow.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <article key={p.t}>
              <div className="aspect-4/3 overflow-hidden rounded-lg"><Img k={p.k} alt={p.t} /></div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand">{p.t}</h3>
              <p className="text-sm text-slate-600">{p.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <Block eyebrow="Care & maintenance" title="A campus that cares for its community.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Information about safety procedures, cleaning, maintenance, transport or accessibility will be published only when verified and approved by Greenfield School.
        </p>
        <p className="mt-3 text-xs text-slate-400">No unverified claims will be published.</p>
      </Block>

      <Cta eyebrow="Beyond the classroom" title="Explore the spaces that inspire." btn="Explore gallery" to="/gallery" />
    </>
  );
}