// Demo educational images
const base = "https://images.unsplash.com/";

const photo = (id) =>
  `${base}${id}?auto=format&fit=crop&w=1200&q=85`;

export const images = {
  // Main sections
  hero: photo("photo-1523240795612-9a054b0db644"),
  campus: photo("photo-1562774053-701939374585"),
  about: photo("photo-1580582932707-520aed937b7b"),

  // Academic facilities
  classroom: photo("photo-1509062522246-3755977927d7"),
  library: photo("photo-1507842217343-583bb7270b66"),
  science: photo("photo-1532094349884-543bc11b234d"),
  digital: photo("photo-1516321318423-f06f85e504b3"),

  // Teachers and students
  teacher: photo("photo-1544717305-2782549b5136"),
  group: photo("photo-1529156069898-49953e39b3ac"),
  family: photo("photo-1529156069898-49953e39b3ac"),
  parents: photo("photo-1509062522246-3755977927d7"),

  // Campus facilities
  gate: photo("photo-1562774053-701939374585"),
  corridor: photo("photo-1580582932707-520aed937b7b"),
  outdoor: photo("photo-1523050854058-8df90110c9f1"),
  portrait: photo("photo-1500648767791-00dcc994a43e"),

  // Student life
  l1: photo("photo-1523240795612-9a054b0db644"),
  l2: photo("photo-1509062522246-3755977927d7"),
  l3: photo("photo-1516321318423-f06f85e504b3"),
  l4: photo("photo-1529156069898-49953e39b3ac"),

  // Gallery
  g1: photo("photo-1562774053-701939374585"),
  g2: photo("photo-1580582932707-520aed937b7b"),
  g3: photo("photo-1507842217343-583bb7270b66"),
  g4: photo("photo-1532094349884-543bc11b234d"),
  g5: photo("photo-1523240795612-9a054b0db644"),
  g6: photo("photo-1509062522246-3755977927d7"),
  g7: photo("photo-1516321318423-f06f85e504b3"),
  g8: photo("photo-1523050854058-8df90110c9f1"),

  // News and events
  n1: photo("photo-1523050854058-8df90110c9f1"),
  n2: photo("photo-1523240795612-9a054b0db644"),
  n3: photo("photo-1509062522246-3755977927d7"),
  n4: photo("photo-1532094349884-543bc11b234d"),
  n5: photo("photo-1507842217343-583bb7270b66"),
  n6: photo("photo-1562774053-701939374585"),
};

// Fallback image
export const placeholder = () => images.campus;
