const p = (seed, w = 900, h = 650) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const names = [
  "hero", "campus", "about", "classroom", "library", "science", "digital",
  "teacher", "group", "family", "parents", "gate", "corridor", "outdoor", "portrait",
  "l1", "l2", "l3", "l4",
  "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
  "n1", "n2", "n3", "n4", "n5", "n6",
];

export const images = Object.fromEntries(names.map((n) => [n, p(`greenfield-${n}`)]));

// Nijer chhobi dite chaile ei rokom likho (chhobi public/images folder e rakho):
images.hero = "/images/hero.png";
// images.campus = "/images/campus.jpg";