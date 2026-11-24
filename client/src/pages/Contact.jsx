import { useState } from "react";
import { Wrap, Img, Eyebrow, Heading, Hero, Strip, Split, Block, Cta } from "../components/ui";
import { sendInquiry } from "../api";

const info = [
  ["School office", "Official address and phone will be added when confirmed."],
  ["Email inquiries", "Official email address will be added when confirmed."],
  ["Visit the campus", "Visiting hours and arrangements to be confirmed."],
];

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

const field =
  "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

function InquiryForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await sendInquiry(form);
      setForm(empty);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-cream p-5 sm:p-6">
      <h3 className="font-display text-xl font-bold text-brand">Send an inquiry</h3>
      <div className="mt-4 space-y-4">
        <label className="block text-xs font-medium text-slate-700">
          Full name
          <input required value={form.name} onChange={set("name")} className={field} autoComplete="name" />
        </label>
        <label className="block text-xs font-medium text-slate-700">
          Email address
          <input required type="email" value={form.email} onChange={set("email")} className={field} autoComplete="email" />
        </label>
        <label className="block text-xs font-medium text-slate-700">
          Phone (optional)
          <input type="tel" value={form.phone} onChange={set("phone")} className={field} autoComplete="tel" />
        </label>
        <label className="block text-xs font-medium text-slate-700">
          Subject
          <input required value={form.subject} onChange={set("subject")} className={field} />
        </label>
        <label className="block text-xs font-medium text-slate-700">
          Message
          <textarea required rows={4} value={form.message} onChange={set("message")} className={field} />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send your admissions inquiry"}
      </button>

      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status === "done" && <span className="text-brand">Thank you. Your inquiry has been sent.</span>}
        {status === "error" && <span className="text-red-600">Could not send right now. Please try again.</span>}
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Let's connect"
        title="Every good conversation begins with hello."
        text="Reach the school office, request admissions information or learn how to find the campus."
        btn="Contact the school" to="/admissions"
        image="gate" alt="School entrance"
      />

      <Strip items={["01 / The basics", "02 / Contact methods", "03 / Visit the campus", "04 / Inquiries", "05 / Office hours"]} />

      <Block eyebrow="Quick information" title="The right information, in one place.">
        <div className="grid gap-4 md:grid-cols-3">
          {info.map(([t, d]) => (
            <article key={t} className="flex items-start justify-between rounded-lg border border-slate-200 bg-white p-5">
              <div>
                <h3 className="font-display text-lg font-bold text-brand">{t}</h3>
                <p className="mt-1 max-w-xs text-sm text-slate-600">{d}</p>
              </div>
              <span aria-hidden className="text-brand">&#8599;</span>
            </article>
          ))}
        </div>
      </Block>

      <section className="bg-white">
        <Wrap className="py-12 lg:py-20">
          <Eyebrow>Get in touch</Eyebrow>
          <Heading>We're happy to hear from you.</Heading>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl bg-mint p-8 text-center">
              <span aria-hidden className="mb-3 grid h-12 w-12 place-items-center rounded-full border border-brand/40 text-brand">&#9678;</span>
              <p className="font-display text-lg font-bold uppercase tracking-wide text-brand">Visit Greenfield</p>
              <p className="mt-2 max-w-xs text-sm text-slate-600">Official campus address and map will be added when confirmed by the school.</p>
            </div>
            <InquiryForm />
          </div>
          <p className="mt-4 text-xs text-slate-400">This form is a presentation. Final handling will be confirmed by the school.</p>
        </Wrap>
      </section>

      <Split
        right
        image="gate" alt="Campus entrance"
        eyebrow="Plan a visit" title="A warm welcome starts at the gate."
        btn="Explore the Gallery" to="/gallery"
        note="Visit details to be confirmed by the school."
      >
        The verified address, nearby landmarks, campus entrance directions and any visiting procedures will be published here once confirmed.
      </Split>

      <Block eyebrow="Important note" title="This is a presentation-only website.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          The contact form is visual and intentionally disabled. Visitors will be directed to the verified phone or email details for real inquiries.
        </p>
        <p className="mt-3 text-xs text-slate-400">Presentation note to be removed before launch.</p>
      </Block>

      <Cta eyebrow="Ready to take the next step?" title="We look forward to welcoming you." btn="Admissions guide" to="/admissions" />
    </>
  );
}