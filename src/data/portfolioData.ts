export interface Project {
  id: string;
  title: string;
  category: 'transit' | 'web' | 'mobile' | 'algorithms';
  description: string;
  longDescription: string;
  tags: string[];
  stars?: number;
  featured: boolean;
  link?: string;
  github?: string;
  demoType?: 'metro' | 'external';
  stats: { label: string; value: string }[];
}

export interface MetroStation {
  id: string;
  nameEn: string;
  nameAr: string;
  lines: string[];
  isInterchange: boolean;
  facilities: string[];
  district: string;
}

export interface MetroLine {
  id: string;
  nameEn: string;
  nameAr: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  lengthKm: number;
  totalStations: number;
  stations: string[];
}

export const DEVELOPER_PROFILE = {
  name: 'Mohammed Albkhyty',
  nameAr: 'محمد البخيلي',
  username: 'engmohammeda',
  handle: '@engmohammeda',
  role: 'Software Engineer & Full-Stack Developer',
  location: 'Riyadh / Ibb',
  email: 'mohammedalbkhyty@gmail.com',
  githubUrl: 'https://github.com/engmohammeda',
  metroDemoUrl: 'https://engmohammeda.github.io/RiyadhMetro-/web',
  status: 'Open to high-impact software engineering roles & collaborations',
  shortBio: 'Passionate software engineer specialized in modern web technologies, algorithms, transit systems, and responsive user experiences. Creator of the Riyadh Metro Interactive Web Explorer.',
  about: `I am a dedicated software engineer with deep expertise in architecting performant web applications, intuitive user interfaces, and algorithmic problem-solving. My engineering philosophy combines clean code architecture with impactful real-world utility—from transit system mapping for major metropolitan infrastructure like the Riyadh Metro to scalable distributed web solutions.`,
  experienceYears: 4,
  projectsCount: 18,
  contributionsRank: 'Top Contributor',
};

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend & UI Engineering',
    skills: [
      { name: 'TypeScript / JavaScript', level: 95 },
      { name: 'React.js / Next.js', level: 92 },
      { name: 'Tailwind CSS & Modern UI', level: 95 },
      { name: 'HTML5 / Modern Web APIs', level: 95 },
      { name: 'State Management & Signals', level: 88 },
      { name: 'Interactive SVG & Canvas Maps', level: 90 },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Node.js & Express', level: 90 },
      { name: 'REST & GraphQL APIs', level: 88 },
      { name: 'Python & Data Scripting', level: 85 },
      { name: 'PostgreSQL & Relational SQL', level: 86 },
      { name: 'Redis Caching & In-Memory', level: 80 },
      { name: 'Authentication & Security', level: 85 },
    ],
  },
  {
    category: 'Architecture & Engineering',
    skills: [
      { name: 'Graph Algorithms & Pathfinding', level: 92 },
      { name: 'Transit & Geospatial Data', level: 90 },
      { name: 'Git & GitHub Workflows', level: 94 },
      { name: 'Performance Optimization & SEO', level: 90 },
      { name: 'Responsive Mobile-First Design', level: 96 },
      { name: 'CI/CD & Cloud Deployments', level: 82 },
    ],
  },
];

export const METRO_STATIONS: MetroStation[] = [
  // Line 1 (Blue)
  { id: 'st-kafd', nameEn: 'KAFD (Financial District)', nameAr: 'مركز الملك عبدالله المالي', lines: ['blue', 'yellow', 'purple'], isInterchange: true, facilities: ['Parking', 'Elevators', 'Wifi', 'Bus Transfer'], district: 'Al Aqiq' },
  { id: 'st-olaya', nameEn: 'Olaya Station', nameAr: 'محطة العليا', lines: ['blue', 'red'], isInterchange: true, facilities: ['Underground Mall', 'Parking', 'Elevators', 'Wifi'], district: 'Al Olaya' },
  { id: 'st-king-fahd-lib', nameEn: 'King Fahd National Library', nameAr: 'مكتبة الملك فهد الوطنية', lines: ['blue'], isInterchange: false, facilities: ['Elevators', 'Wifi'], district: 'Al Olaya' },
  { id: 'st-al-murabba', nameEn: 'Al Murabba', nameAr: 'المربع', lines: ['blue'], isInterchange: false, facilities: ['Bus Connection', 'Elevators'], district: 'Al Murabba' },
  { id: 'st-qasr-hokm', nameEn: 'Qasr Al Hokm (Downtown)', nameAr: 'قصر الحكم', lines: ['blue', 'orange'], isInterchange: true, facilities: ['Heritage Hub', 'Elevators', 'Wifi', 'Mosque'], district: 'Ad Dirah' },
  { id: 'st-batha', nameEn: 'Al Batha', nameAr: 'البطحاء', lines: ['blue'], isInterchange: false, facilities: ['Shopping Access', 'Elevators'], district: 'Al Batha' },
  { id: 'st-azizia', nameEn: 'Al Aziziyah South', nameAr: 'العزيزية الجنوبية', lines: ['blue'], isInterchange: false, facilities: ['Park & Ride', 'Elevators'], district: 'Al Aziziyah' },

  // Line 2 (Red)
  { id: 'st-ksu', nameEn: 'King Saud University (KSU)', nameAr: 'جامعة الملك سعود', lines: ['red'], isInterchange: false, facilities: ['Campus Shuttle', 'Wifi', 'Elevators'], district: 'University Area' },
  { id: 'st-urubah', nameEn: 'Al Urubah', nameAr: 'العروبة', lines: ['red'], isInterchange: false, facilities: ['Elevators', 'Bus Station'], district: 'Al Rahmaniyah' },
  { id: 'st-stc', nameEn: 'STC / Exhibition Center', nameAr: 'مركز المعارض الدولية', lines: ['red', 'purple'], isInterchange: true, facilities: ['Event Shuttle', 'Parking', 'Wifi'], district: 'Al Muruj' },
  { id: 'st-king-fahd-stadium', nameEn: 'King Fahd International Stadium', nameAr: 'استاد الملك فهد الدولي', lines: ['red'], isInterchange: false, facilities: ['Stadium Gate', 'Park & Ride'], district: 'Al Maizilah' },

  // Line 3 (Orange)
  { id: 'st-west', nameEn: 'Western Station', nameAr: 'المحطة الغربية', lines: ['orange'], isInterchange: false, facilities: ['Intercity Bus Hub', 'Parking', 'Park & Ride'], district: 'Tuwaiq' },
  { id: 'st-tuwaiq', nameEn: 'Tuwaiq Valley', nameAr: 'وادي طويق', lines: ['orange'], isInterchange: false, facilities: ['Elevators', 'Wifi'], district: 'Tuwaiq' },
  { id: 'st-madinah', nameEn: 'Madinah Al Munawwarah', nameAr: 'المدينة المنورة', lines: ['orange'], isInterchange: false, facilities: ['Elevators', 'Bus Shuttle'], district: 'Al Badi\'ah' },
  { id: 'st-national-museum', nameEn: 'National Museum of Saudi Arabia', nameAr: 'المتحف الوطني السعودي', lines: ['orange'], isInterchange: false, facilities: ['Cultural Zone', 'Elevators', 'Wifi'], district: 'Al Murabba' },
  { id: 'st-nassem', nameEn: 'Al Naseem East', nameAr: 'النسيم الشرقي', lines: ['orange'], isInterchange: false, facilities: ['Park & Ride', 'Elevators'], district: 'Al Naseem' },

  // Line 4 (Yellow)
  { id: 'st-airport-t12', nameEn: 'KKIA Terminals 1 & 2', nameAr: 'مطار الملك خالد - صالة 1 و 2', lines: ['yellow'], isInterchange: false, facilities: ['Airport Baggage', 'Flight Info', 'Wifi', 'Luggage Carts'], district: 'Airport' },
  { id: 'st-airport-t345', nameEn: 'KKIA Terminals 3, 4 & 5', nameAr: 'مطار الملك خالد - صالة 3 و 4 و 5', lines: ['yellow'], isInterchange: false, facilities: ['Airport Baggage', 'Flight Info', 'Wifi', 'Car Rental'], district: 'Airport' },
  { id: 'st-pnu', nameEn: 'Princess Nourah University (PNU)', nameAr: 'جامعة الأميرة نورة', lines: ['yellow', 'purple'], isInterchange: true, facilities: ['Monorail Link', 'Campus Hub', 'Elevators'], district: 'Airport Road' },

  // Line 5 (Green)
  { id: 'st-riyadh-base', nameEn: 'King Abdulaziz Airbase', nameAr: 'قاعدة الملك عبدالعزيز', lines: ['green'], isInterchange: false, facilities: ['Elevators', 'Bus Connection'], district: 'Airport Road' },
  { id: 'st-ministry-edu', nameEn: 'Ministry of Education', nameAr: 'وزارة التعليم', lines: ['green'], isInterchange: false, facilities: ['Government District Access', 'Elevators'], district: 'Al Mursalat' },
  { id: 'st-salman-park', nameEn: 'King Salman Park', nameAr: 'حديقة الملك سلمان', lines: ['green'], isInterchange: false, facilities: ['Park Access', 'Bike Racks', 'Wifi'], district: 'Al Waha' },

  // Line 6 (Purple)
  { id: 'st-sharm', nameEn: 'Sheikh Hassan Bin Hussein', nameAr: 'الشيخ حسن بن حسين', lines: ['purple'], isInterchange: false, facilities: ['Elevators', 'Park & Ride'], district: 'Al Hamra' },
  { id: 'st-yarmouk', nameEn: 'Al Yarmouk Hub', nameAr: 'محطة اليرموك', lines: ['purple'], isInterchange: false, facilities: ['Bus Station', 'Elevators'], district: 'Al Yarmouk' },
];

export const METRO_LINES: MetroLine[] = [
  {
    id: 'blue',
    nameEn: 'Line 1 (Blue) - Olaya & Al Batha Axis',
    nameAr: 'المسار 1 (الأزرق) - محور العليا والبطحاء',
    color: '#0284c7',
    bgClass: 'bg-sky-600',
    borderClass: 'border-sky-500',
    textClass: 'text-sky-400',
    lengthKm: 38.0,
    totalStations: 7,
    stations: ['st-kafd', 'st-olaya', 'st-king-fahd-lib', 'st-al-murabba', 'st-qasr-hokm', 'st-batha', 'st-azizia'],
  },
  {
    id: 'red',
    nameEn: 'Line 2 (Red) - King Abdullah Road Axis',
    nameAr: 'المسار 2 (الأحمر) - طريق الملك عبدالله',
    color: '#dc2626',
    bgClass: 'bg-red-600',
    borderClass: 'border-red-500',
    textClass: 'text-red-400',
    lengthKm: 25.3,
    totalStations: 4,
    stations: ['st-ksu', 'st-urubah', 'st-olaya', 'st-stc', 'st-king-fahd-stadium'],
  },
  {
    id: 'orange',
    nameEn: 'Line 3 (Orange) - Al Madinah & Al Quds Axis',
    nameAr: 'المسار 3 (البرتقالي) - طريق المدينة المنورة',
    color: '#ea580c',
    bgClass: 'bg-orange-600',
    borderClass: 'border-orange-500',
    textClass: 'text-orange-400',
    lengthKm: 40.7,
    totalStations: 5,
    stations: ['st-west', 'st-tuwaiq', 'st-madinah', 'st-qasr-hokm', 'st-national-museum', 'st-nassem'],
  },
  {
    id: 'yellow',
    nameEn: 'Line 4 (Yellow) - KKIA Airport Link',
    nameAr: 'المسار 4 (الأصفر) - مطار الملك خالد الدولي',
    color: '#ca8a04',
    bgClass: 'bg-amber-500',
    borderClass: 'border-amber-400',
    textClass: 'text-amber-400',
    lengthKm: 29.6,
    totalStations: 4,
    stations: ['st-kafd', 'st-pnu', 'st-airport-t345', 'st-airport-t12'],
  },
  {
    id: 'green',
    nameEn: 'Line 5 (Green) - King Abdulaziz Road Axis',
    nameAr: 'المسار 5 (الأخضر) - طريق الملك عبدالعزيز',
    color: '#16a34a',
    bgClass: 'bg-emerald-600',
    borderClass: 'border-emerald-500',
    textClass: 'text-emerald-400',
    lengthKm: 12.9,
    totalStations: 4,
    stations: ['st-kafd', 'st-ministry-edu', 'st-salman-park', 'st-riyadh-base'],
  },
  {
    id: 'purple',
    nameEn: 'Line 6 (Purple) - Abdulrahman Bin Awf Loop',
    nameAr: 'المسار 6 (البنفسجي) - محور عبدالرحمن بن عوف',
    color: '#9333ea',
    bgClass: 'bg-purple-600',
    borderClass: 'border-purple-500',
    textClass: 'text-purple-400',
    lengthKm: 30.0,
    totalStations: 4,
    stations: ['st-kafd', 'st-stc', 'st-pnu', 'st-yarmouk', 'st-sharm'],
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'riyadh-metro',
    title: 'Riyadh Metro Interactive Web Navigator',
    category: 'transit',
    featured: true,
    description: 'Interactive web platform providing station mapping, line interconnects, pathfinding route calculations, and station facility discovery for the Riyadh Metro network.',
    longDescription: 'Engineered as an interactive web solution to simplify urban transit navigation across Riyadh’s massive six-line metro network. Implements shortest-path graph calculations, multi-station transfer logic, bilingual station search (Arabic/English), and live interactive diagram visualizations.',
    tags: ['Interactive Maps', 'Transit Systems', 'Graph Search', 'Web App', 'Responsive UI'],
    link: 'https://engmohammeda.github.io/RiyadhMetro-/web',
    github: 'https://github.com/engmohammeda/RiyadhMetro-',
    demoType: 'metro',
    stats: [
      { label: 'Lines Covered', value: '6 Major Lines' },
      { label: 'Network Length', value: '176 km' },
      { label: 'Interchanges', value: '5 Key Hubs' },
      { label: 'Bilingual', value: 'AR / EN' },
    ],
  },
  {
    id: 'profile-readme-studio',
    title: 'GitHub Profile README Studio & Architect',
    category: 'web',
    featured: true,
    description: 'Dynamic profile customizer, markdown compiler, and live GitHub widget synthesizer for developer GitHub profiles.',
    longDescription: 'Created to transform standard GitHub Profile READMEs into rich, live, interactive developer identities. Features real-time Markdown AST parsing, GitHub Markdown theme simulation, stat badge generators, and quick export pipelines.',
    tags: ['React', 'Markdown AST', 'Developer Tool', 'GitHub API', 'Tailwind CSS'],
    github: 'https://github.com/engmohammeda/engmohammeda',
    stats: [
      { label: 'Live Preview', value: 'Instant' },
      { label: 'Markdown Export', value: '1-Click' },
      { label: 'Widgets', value: '15+ Presets' },
      { label: 'Syntax', value: 'GFM Compliant' },
    ],
  },
  {
    id: 'graph-pathfinder',
    title: 'Dijkstra & BFS Transit Pathfinder Engine',
    category: 'algorithms',
    featured: false,
    description: 'High-performance transit routing algorithm calculating optimal transfers, least-stop paths, and travel estimates across complex rail networks.',
    longDescription: 'Designed an in-memory graph data structure modeling multi-line rail transport. Computes transfer penalties, line transition states, and edge weights to deliver the fastest journey planner for passengers.',
    tags: ['Algorithms', 'Data Structures', 'Graph Theory', 'Routing', 'TypeScript'],
    stats: [
      { label: 'Complexity', value: 'O(V + E log V)' },
      { label: 'Transfers', value: 'Min-Cost' },
      { label: 'Search Time', value: '< 2 ms' },
    ],
  },
  {
    id: 'developer-registry',
    title: 'Developer Analytics & Contributions Explorer',
    category: 'web',
    featured: false,
    description: 'Analytics hub tracking open-source contributions, developer rankings, and regional engineering activity across GitHub.',
    longDescription: 'Aggregates developer metrics from GitHub public profiles and repositories to highlight top contributors, trending tech stacks, and active regional developer communities.',
    tags: ['Analytics', 'GitHub REST API', 'Data Visualization', 'Full-Stack'],
    stats: [
      { label: 'Ranking', value: 'Global & Regional' },
      { label: 'Heatmap', value: 'Annual commits' },
      { label: 'Speed', value: 'Sub-second' },
    ],
  },
];

// Graph BFS/Dijkstra routing helper
export function findOptimalRoute(originId: string, destinationId: string) {
  if (originId === destinationId) {
    return {
      path: [originId],
      transfers: 0,
      totalStops: 1,
      estimatedMinutes: 0,
      steps: [{ stationId: originId, line: 'none', instruction: 'You are already at your destination.' }],
    };
  }

  // Build adjacency graph
  // Each node has neighbors with edge (stationId, lineId)
  const adjacency = new Map<string, { neighborId: string; lineId: string }[]>();

  for (const station of METRO_STATIONS) {
    adjacency.set(station.id, []);
  }

  for (const line of METRO_LINES) {
    for (let i = 0; i < line.stations.length; i++) {
      const curr = line.stations[i];
      if (!adjacency.has(curr)) adjacency.set(curr, []);

      if (i > 0) {
        const prev = line.stations[i - 1];
        adjacency.get(curr)?.push({ neighborId: prev, lineId: line.id });
      }
      if (i < line.stations.length - 1) {
        const next = line.stations[i + 1];
        adjacency.get(curr)?.push({ neighborId: next, lineId: line.id });
      }
    }
  }

  // Queue: BFS shortest path in terms of stops and transfers
  interface QueueNode {
    stationId: string;
    path: string[];
    linesUsed: string[];
  }

  const visited = new Set<string>();
  const queue: QueueNode[] = [{ stationId: originId, path: [originId], linesUsed: [] }];
  visited.add(originId);

  let bestPath: string[] = [];
  let bestLines: string[] = [];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current.stationId === destinationId) {
      bestPath = current.path;
      bestLines = current.linesUsed;
      break;
    }

    const neighbors = adjacency.get(current.stationId) || [];
    for (const edge of neighbors) {
      if (!visited.has(edge.neighborId)) {
        visited.add(edge.neighborId);
        queue.push({
          stationId: edge.neighborId,
          path: [...current.path, edge.neighborId],
          linesUsed: [...current.linesUsed, edge.lineId],
        });
      }
    }
  }

  if (bestPath.length === 0) {
    return null;
  }

  // Count transfers
  let transfers = 0;
  for (let i = 1; i < bestLines.length; i++) {
    if (bestLines[i] !== bestLines[i - 1]) {
      transfers++;
    }
  }

  const totalStops = bestPath.length;
  // Estimated minutes: ~3 mins per stop + 4 mins per transfer
  const estimatedMinutes = Math.max(3, (totalStops - 1) * 3 + transfers * 4);

  // Build journey steps
  const steps: { stationId: string; line: string; instruction: string }[] = [];
  for (let i = 0; i < bestPath.length; i++) {
    const stId = bestPath[i];
    const station = METRO_STATIONS.find(s => s.id === stId)!;
    const lineId = i < bestLines.length ? bestLines[i] : bestLines[bestLines.length - 1];
    const lineObj = METRO_LINES.find(l => l.id === lineId);

    if (i === 0) {
      steps.push({
        stationId: stId,
        line: lineId,
        instruction: `Board ${lineObj?.nameEn || 'Train'} at ${station.nameEn} (${station.nameAr})`,
      });
    } else if (i === bestPath.length - 1) {
      steps.push({
        stationId: stId,
        line: lineId,
        instruction: `Arrive at destination: ${station.nameEn} (${station.nameAr})`,
      });
    } else {
      const prevLine = bestLines[i - 1];
      const nextLine = bestLines[i];
      if (prevLine !== nextLine) {
        const nextLineObj = METRO_LINES.find(l => l.id === nextLine);
        steps.push({
          stationId: stId,
          line: nextLine,
          instruction: `Transfer at ${station.nameEn} to ${nextLineObj?.nameEn || nextLine}`,
        });
      } else {
        steps.push({
          stationId: stId,
          line: lineId,
          instruction: `Pass through ${station.nameEn}`,
        });
      }
    }
  }

  return {
    path: bestPath,
    linesUsed: bestLines,
    transfers,
    totalStops,
    estimatedMinutes,
    steps,
  };
}
