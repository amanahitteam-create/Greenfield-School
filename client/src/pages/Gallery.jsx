import { Link } from "react-router-dom";
import { Img, HeroOverlay, Strip, Block, Cta } from "../components/ui";

const mosaic1 = [
  { k: "campus", span: "col-span-2 row-span-2" },
  { k: "g1", span: "" },
  { k: "g2", span: "" },
  { k: "g3", span: "" },
  { k: "g4", span: "" },
];

const themes = [
  { k: "campus", t: "Campus & Facilities", d: "Buildings and shared spaces." },
  { k: "classroom", t: "Academics", d: "Learning and classroom life." },
  { k: "outdoor", t: "Events", d: "Cultural and community moments." },
  { k: "g5", t: "Achievements", d: "Celebrating effort and growth." },
];

const mosaic2 = [
  { k: "library", span: "col-span-2 row-span-2" },
  { k: "g6", span: "col-span-2" },
  { k: "g7", span: "" },
  { k: "g8", span: "" },
  { k: "corridor", span: "col-span-2" },
  { k: "outdoor", span: "" },
  { k: "science", span: "" },
];

const Mosaic = ({ items }) => (
  <div className="grid auto-rows-[110px] grid-cols-2 gap-3 sm:auto-rows-[140px] lg:auto-rows-[160px] lg:grid-cols-4">
    {items.map((m, i) => (
      <div key={i} className={`overflow-hidden rounded-lg ${m.span}`}>
        <Img k={m.k} alt="School moment" />
      </div>
    ))}
  </div>
);

export default function Gallery() {
  return (
    <>
      <HeroOverlay
        eyebrow="Our campus, our community"
        title="Moments that make school life memorable."
        text="Explore the places, people and shared experiences that give a school its character."
        btn="Explore the Gallery" to="/campus-life"
        image="g1" alt="Collage of school life"
      />

      <Strip items={["01 / The gallery", "02 / Campus", "03 / Learning", "04 / Events", "05 / Achievements"]} />

      <Block eyebrow="Campus & everyday life" title="Life, learning and belonging." text="Photography will be selected to represent real school life, with approved captions to follow.">
        <Mosaic items={mosaic1} />
      </Block>

      <Block bg="bg-cream" eyebrow="Gallery sections" title="Explore by theme.">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {themes.map((t) => (
            <article key={t.t}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg"><Img k={t.k} alt={t.t} /></div>
              <h3 className="mt-3 font-display text-base font-bold text-brand sm:text-lg">{t.t}</h3>
              <p className="text-xs text-slate-500 sm:text-sm">{t.d}</p>
            </article>
          ))}
        </div>
      </Block>

      <Block eyebrow="More highlights" title="A school in many frames." text="A broader selection of images from classrooms, corridors and campus grounds.">
        <Mosaic items={mosaic2} />
      </Block>

      <Block bg="bg-cream" eyebrow="A note on photography" title="Every real story deserves thoughtful care.">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          The published gallery should contain only school-approved photography, with accurate captions, permissions and identifiable student information managed responsibly.
        </p>
        <p className="mt-3 text-xs text-slate-400">Final gallery content to be confirmed by the school.</p>
        <Link to="/news-events" className="mt-5 inline-block text-sm font-medium text-brand hover:underline">Read school news &rsaquo;</Link>
      </Block>

      <Cta eyebrow="Beyond the photographs" title="Explore the stories behind each moment." btn="Explore student life" to="/campus-life" />
    </>
  );
}