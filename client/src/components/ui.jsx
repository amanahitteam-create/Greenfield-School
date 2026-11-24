import { Link } from "react-router-dom";
import { images } from "../images";

export const Wrap = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>
);

export const Img = ({ k, alt = "", className = "" }) => (
  <img src={images[k] || k} alt={alt} loading="lazy" className={`h-full w-full bg-slate-200 object-cover ${className}`} />
);

export const Eyebrow = ({ children, light }) => (
  <div className="mb-4">
    <span className="mb-3 block h-px w-10 bg-gold" />
    <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${light ? "text-white/80" : "text-brand/80"}`}>{children}</p>
  </div>
);

export const Heading = ({ children, className = "" }) => (
  <h2 className={`font-display text-3xl font-bold leading-tight text-brand sm:text-4xl ${className}`}>{children}</h2>
);

export const Btn = ({ to, children, variant = "solid", className = "" }) => {
  const v = {
    solid: "bg-brand text-white hover:bg-brand-dark",
    outline: "border border-brand/40 text-brand hover:bg-white",
    light: "bg-white text-brand hover:bg-cream",
  }[variant];
  return (
    <Link to={to} className={`inline-block rounded-md px-5 py-3 text-sm font-medium transition-colors ${v} ${className}`}>
      {children}
    </Link>
  );
};

// Upor er boro section (text + chhobi)
export function Hero({ eyebrow, title, text, btn, to, image, alt, flip, dark }) {
  return (
    <section className={dark ? "bg-brand-dark" : "bg-cream"}>
      <Wrap className={`grid items-center gap-10 py-10 lg:gap-14 lg:py-16 ${image ? "lg:grid-cols-2" : ""}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <Eyebrow light={dark}>{eyebrow}</Eyebrow>
          <h1 className={`font-display text-4xl font-bold leading-[1.1] sm:text-5xl ${dark ? "text-white" : "text-brand"}`}>{title}</h1>
          <p className={`mt-5 max-w-lg leading-relaxed ${dark ? "text-white/80" : "text-slate-600"}`}>{text}</p>
          {btn && <Btn to={to} variant={dark ? "light" : "solid"} className="mt-7">{btn}</Btn>}
        </div>
        {image && (
          <div className={`aspect-[4/3] overflow-hidden rounded-2xl ${flip ? "lg:order-1" : ""}`}>
            <Img k={image} alt={alt} />
          </div>
        )}
      </Wrap>
    </section>
  );
}

// Chhobir upor dark card (Gallery, Student Life)
export function HeroOverlay({ eyebrow, title, text, btn, to, image, alt }) {
  return (
    <section className="bg-white">
      <Wrap className="py-6 lg:py-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"><Img k={image} alt={alt} /></div>
          <div className="absolute inset-x-4 bottom-4 flex flex-col justify-center rounded-xl bg-brand-dark p-6 text-white sm:inset-x-auto sm:bottom-6 sm:left-6 sm:top-6 sm:w-[46%] lg:p-10">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{text}</p>
            <Btn to={to} variant="light" className="mt-5 self-start">{btn}</Btn>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

// 01 / Overview type er strip
export const Strip = ({ items }) => (
  <div className="border-y border-slate-200 bg-white">
    <Wrap className="flex gap-x-8 gap-y-2 overflow-x-auto py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500 lg:justify-between">
      {items.map((i) => <span key={i} className="whitespace-nowrap">{i}</span>)}
    </Wrap>
  </div>
);

// Ek pashe chhobi, arek pashe text
export function Split({ image, alt, right, eyebrow, title, children, btn, to, note, bg = "bg-white" }) {
  return (
    <section className={bg}>
      <Wrap className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className={`aspect-[4/3] overflow-hidden rounded-lg ${right ? "lg:order-2" : ""}`}><Img k={image} alt={alt} /></div>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{title}</Heading>
          <p className="mt-4 max-w-md leading-relaxed text-slate-600">{children}</p>
          {btn && <Btn to={to} variant="outline" className="mt-6">{btn}</Btn>}
          {note && <p className="mt-3 text-xs text-slate-400">{note}</p>}
        </div>
      </Wrap>
    </section>
  );
}

// Heading shoho jekono content section
export const Block = ({ eyebrow, title, text, bg = "bg-white", children }) => (
  <section className={bg}>
    <Wrap className="py-12 lg:py-20">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      {text && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{text}</p>}
      {children && <div className="mt-8">{children}</div>}
    </Wrap>
  </section>
);

// Footer er age shobuj band
export const Cta = ({ eyebrow = "Next step", title, btn, to }) => (
  <section className="bg-mint">
    <Wrap className="flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">{title}</h2>
      </div>
      <Btn to={to}>{btn}</Btn>
    </Wrap>
  </section>
);