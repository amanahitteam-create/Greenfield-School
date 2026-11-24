import { Wrap, Img, Eyebrow, Heading, Hero, Strip, Split, Block, Cta } from "../components/ui";

const steps = [
  ["Start a conversation", "Contact the office for current guidance."],
  ["Review requirements", "Check eligibility and required documents."],
  ["Submit in person", "Follow the school's approved office process."],
  ["Receive guidance", "Get clear next steps from the admissions team."],
];

const needs = [
  "Completed official admission form, if applicable.",
  "Previous school records, subject to school guidance.",
  "Identity records as required by the school.",
  "Parent or guardian contact information.",
  "Any assessments confirmed by the admissions office.",
];

const dates = [
  ["Inquiry period", "Dates announced"],
  ["Application period", "Dates announced"],
  ["Assessment or interview", "Subject to school notice"],
  ["Decision notification", "Dates announced"],
];

const faqs = [
  ["Which grades are open for admission?", "Confirm available levels with the school office."],
  ["How do families obtain the form?", "The official admission process is provided by the school."],
  ["Are assessments required?", "Assessment policy must be confirmed."],
  ["What documents are required?", "See the approved document list from the office."],
  ["When are admission decisions issued?", "Dates will be published by the school."],
  ["How can I arrange a visit?", "Use the school office details to book a visit."],
];

export default function Admissions() {
  return (
    <>
      <Hero
        dark
        eyebrow="Your journey, our guidance"
        title="A clear first step toward belonging."
        text="Information families need to understand admissions guidance and reach the right people."
        btn="Contact Admissions" to="/contact"
        image="family" alt="Parents walking with their children"
      />

      <Strip items={["01 / The path", "02 / Requirements", "03 / Key dates", "04 / Your questions"]} />

      <Block eyebrow="Your admissions journey" title="A simple admissions journey.">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t}>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{i + 1}</span>
                <span className="hidden h-px flex-1 bg-brand/20 lg:block" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-brand">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </Block>

      <section className="bg-mint">
        <Wrap className="grid items-center gap-10 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <Eyebrow>Preparing to apply</Eyebrow>
            <Heading>What families may need.</Heading>
            <ul className="mt-6 space-y-3">
              {needs.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] text-white">&#10003;</span>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-slate-500">Final requirements to be confirmed by the school.</p>
          </div>
          <div className="aspect-4/3 overflow-hidden rounded-lg"><Img k="parents" alt="Family meeting the admissions team" /></div>
        </Wrap>
      </section>

      <Block eyebrow="Key admission dates" title="Important dates, clearly presented.">
        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          {dates.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-2">
              <dt className="font-display text-base font-bold text-brand">{k}</dt>
              <dd className="text-sm text-slate-500">{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block bg="bg-cream" eyebrow="Helpful to know" title="Answers before you visit.">
        <dl className="divide-y divide-brand/10 border-y border-brand/10">
          {faqs.map(([q, a]) => (
            <div key={q} className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-8">
              <dt className="text-sm font-semibold text-slate-800">{q}</dt>
              <dd className="text-sm text-slate-500">{a}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Split
        image="gate" alt="Parent and children at school gate"
        eyebrow="We are here to help" title="Questions? Speak with our team."
        btn="Contact us" to="/contact"
        note="Contact details will be confirmed by the school."
      >
        Our admissions team will inform and welcome. Please contact the office through school-approved channels when available.
      </Split>

      <Cta eyebrow="Speak with our team" title="Your questions are welcome here." btn="Contact the office" to="/contact" />
    </>
  );
}