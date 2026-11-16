import heroBottleImg from '../assets/hero-bottle.jpg';
import nocturneVanilleImg from '../assets/perfume-nocturne-vanille.jpg';
import oudVeloursImg from '../assets/perfume-oud-velours.jpg';
import irisCendreImg from '../assets/perfume-iris-cendre.jpg';
import atelierCraftImg from '../assets/atelier-craft.jpg';
import type {
  CustomerReview,
  Fragrance,
  JournalEntry,
  PressMention,
  PyramidTier,
} from '../types/fragrance';

export const HERO_MEDIA = {
  heroBottle: heroBottleImg,
  atelierCraft: atelierCraftImg,
};

export const FRAGRANCES: Fragrance[] = [
  {
    id: 'nocturne-vanille',
    number: 'N° 01',
    name: 'Nocturne Vanille',
    subtitle: 'Smoked Bourbon & Amber Resin',
    family: 'Ambery · Woody',
    concentration: 'Extrait de Parfum · 32%',
    shortNotes: 'Notes of Madagascar Vanilla, Amber, and Dark Woods',
    story:
      'Far removed from confectionary sweetness, cured Madagascar vanilla pods are tinctured for ninety days over charred cedarwood, molten labdanum amber, and bitter bergamot rind.',
    price50ml: 265,
    price100ml: 375,
    image: nocturneVanilleImg,
    intensity: 4,
    sillage: 'Enveloping & Intimate',
    longevity: '12 – 16 Hours',
    pyramid: {
      top: [
        {
          name: 'Calabrian Bergamot Peel',
          origin: 'Reggio Calabria, Italy',
          character: 'Crisp, sun-dried citrus bitterness that cuts through resin.',
        },
        {
          name: 'Crushed Pink Peppercorn',
          origin: 'Réunion Island',
          character: 'Dry rose-woody warmth with an electric mineral lift.',
        },
      ],
      heart: [
        {
          name: 'Smoked Madagascar Vanilla',
          origin: 'Sava Region, Madagascar',
          character: 'Leathery, unsweetened, rich with dark balsamic pods.',
        },
        {
          name: 'Roasted Tonka Absolute',
          origin: 'Orinoco Basin',
          character: 'Velvety almond smoke and warm tobacco-leaf nuance.',
        },
      ],
      base: [
        {
          name: 'Fossilized Amber & Labdanum',
          origin: 'Andalusia, Spain',
          character: 'Golden, resinous glow that clings effortlessly to wool and skin.',
        },
        {
          name: 'Charred Atlas Cedar & Guaiac',
          origin: 'Middle Atlas Mountains',
          character: 'Dry hearth-wood depth with a whisper of midnight incense.',
        },
      ],
    },
  },
  {
    id: 'oud-velours',
    number: 'N° 02',
    name: 'Oud Velours',
    subtitle: 'Aged Agarwood & Crimson Saffron',
    family: 'Oud · Spiced Leather',
    concentration: 'Extrait de Parfum · 35%',
    shortNotes: 'Notes of Aged Assam Oud, Saffron, and Smoked Leather',
    story:
      'A nocturnal study in shadow and velvet. Wild-harvested agarwood resin softens beneath crimson saffron threads, dark Damask rose, and supple black-suede accords.',
    price50ml: 310,
    price100ml: 430,
    image: oudVeloursImg,
    intensity: 5,
    sillage: 'Commanding & Architectural',
    longevity: '14 – 18 Hours',
    pyramid: {
      top: [
        {
          name: 'Kashmiri Saffron Threads',
          origin: 'Pampore Valley',
          character: 'Metallic-warm spice with suede and dry hay facets.',
        },
        {
          name: 'Green Cardamom CO₂',
          origin: 'Western Ghats',
          character: 'Aromatic emerald chill opening into dark smoke.',
        },
      ],
      heart: [
        {
          name: 'Nocturnal Damask Rose',
          origin: 'Isparta Highlands',
          character: 'Deep crimson petals steeped in clove and dark wine.',
        },
        {
          name: 'Sacred Frankincense Tears',
          origin: 'Dhofar, Oman',
          character: 'Mineral, liturgical smoke bridging spice and timber.',
        },
      ],
      base: [
        {
          name: 'Aged Assam Oud',
          origin: 'Northeast India',
          character: 'Cultivated, resinous heartwood aged in stoneware amphorae.',
        },
        {
          name: 'Botanical Black Suede',
          origin: 'Grasse Atelier Accord',
          character: 'Cruelty-free birch tar and castoreum-free velvet leather.',
        },
      ],
    },
  },
  {
    id: 'iris-cendre',
    number: 'N° 03',
    name: 'Iris Cendré',
    subtitle: 'Florentine Orris & White Ash',
    family: 'Mineral · Wood',
    concentration: 'Extrait de Parfum · 30%',
    shortNotes: 'Notes of Florentine Orris, White Cedar, and Smoked Vetiver',
    story:
      'Cool sculptural silence bottled. Three-year-aged iris pallida butter unfolds like powdered slate over crisp juniper berry, pale cashmere wood, and rain-washed vetiver root.',
    price50ml: 280,
    price100ml: 390,
    image: irisCendreImg,
    intensity: 3,
    sillage: 'Sculptural & Tailored',
    longevity: '10 – 14 Hours',
    pyramid: {
      top: [
        {
          name: 'Wild Juniper Berry',
          origin: 'Tuscany, Italy',
          character: 'Gin-cold alpine clarity against mineral stone.',
        },
        {
          name: 'White Angelica Seed',
          origin: 'Flanders',
          character: 'Earthy green musk with crisp botanical lift.',
        },
      ],
      heart: [
        {
          name: 'Florentine Orris Butter',
          origin: 'Chianti Hills, Italy',
          character: 'Aged 36 months; cool, powdery, silver-violet elegance.',
        },
        {
          name: 'Violet Leaf Absolute',
          origin: 'Grasse, France',
          character: 'Rain-damp emerald foliage with subtle metallic tension.',
        },
      ],
      base: [
        {
          name: 'White Virginia Cedar',
          origin: 'Appalachian Sustainably Harvested',
          character: 'Clean, dry pencil-shaving architecture and pale ash.',
        },
        {
          name: 'Smoked Haitian Vetiver',
          origin: 'Les Cayes, Haiti',
          character: 'Deep rooty earth dried over charcoal embers.',
        },
      ],
    },
  },
];

export const PYRAMID_TIERS: PyramidTier[] = [
  {
    key: 'top',
    label: 'Top Notes',
    roman: 'I',
    phase: 'The First Breath · Opening Impression',
    window: '0 – 20 Minutes',
    volatility: 'High Volatility',
    extraction: 'Cold Expression & Supercritical CO₂',
    description:
      'The ephemeral prelude. Bright, razor-sharp citrus rinds, cold alpine berries, and crushed spices announce the composition with luminous tension before surrendering to darker depths.',
    keyBotanicals: ['Calabrian Bergamot', 'Kashmiri Saffron', 'Wild Juniper', 'Pink Peppercorn'],
    accentQuote: '“Like opening a heavy cedar cabinet in cool twilight air.”',
  },
  {
    key: 'heart',
    label: 'Heart Notes',
    roman: 'II',
    phase: 'The Soul · Olfactory Architecture',
    window: '20 Minutes – 5 Hours',
    volatility: 'Balanced Volatility',
    extraction: 'Steam Distillation & Traditional Enfleurage',
    description:
      'The true signature resting close to pulse points. Slow-cured Madagascar vanilla pods, aged Florentine iris butter, and nocturnal Damask rose create sensual, tactile warmth.',
    keyBotanicals: ['Smoked Vanilla', 'Florentine Orris', 'Damask Rose', 'Omani Frankincense'],
    accentQuote: '“Where skin chemistry and botanical oil become inseparable.”',
  },
  {
    key: 'base',
    label: 'Base Notes',
    roman: 'III',
    phase: 'The Sillage · Lingering Memory',
    window: '5 – 18 Hours',
    volatility: 'Deep Fixatives',
    extraction: '90-Day Stoneware Maceration & Resin Tincture',
    description:
      'The enduring shadow left on cashmere scarves and midnight air. Fossilized amber, cultivated agarwood, charred Atlas cedar, and Haitian vetiver anchor every Aura Noir extrait.',
    keyBotanicals: ['Assam Agarwood', 'Labdanum Amber', 'Atlas Cedarwood', 'Smoked Vetiver'],
    accentQuote: '“Remembered in an empty room long after midnight.”',
  },
];

export const PRESS_MENTIONS: PressMention[] = [
  {
    publication: 'VOGUE PARIS',
    issue: 'AUTUMN EDIT',
    quote:
      '“Aura Noir captures the quiet discipline of Parisian tailoring in liquid form — Nocturne Vanille is the rare vanilla perfume that feels architectural and nocturnal.”',
  },
  {
    publication: 'ARCHITECTURAL DIGEST',
    issue: 'DESIGN OBJECTS',
    quote:
      '“Housed in heavy smoked glass with brushed bronze caps, each flacon commands a vanity shelf like a piece of minimalist brutalist sculpture.”',
  },
  {
    publication: 'MONOCLE',
    issue: 'ATELIER REPORT',
    quote:
      '“By refusing synthetic shortcuts and insisting on ninety-day dark maceration in Grasse, Aura Noir has quietly set a new benchmark for independent perfumery.”',
  },
  {
    publication: "HARPER'S BAZAAR",
    issue: 'SCENT AWARDS',
    quote:
      '“Oud Velours lingers on cashmere for days without ever raising its voice — pure, unapologetic, velvet magnetism.”',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Camille Laurent',
    location: 'Paris, VIe',
    verifiedPurchase: 'Nocturne Vanille · 100ml',
    rating: 5,
    title: 'Finally, a dark vanilla without a trace of sugar.',
    quote:
      'I have searched years for a vanilla scent that smells like roasted wood, resin, and evening silk rather than dessert. One spray at 8 PM is still glowing softly on my coat the next afternoon.',
  },
  {
    id: 'rev-2',
    author: 'Julian Vance',
    location: 'London, Mayfair',
    verifiedPurchase: 'Oud Velours · 50ml',
    rating: 5,
    title: 'Tailored, smoky, unforgettable.',
    quote:
      'The saffron and aged oud balance is astonishingly refined. It draws compliments in whisper-quiet gallery rooms without ever overwhelming the space.',
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    location: 'Milan, Brera',
    verifiedPurchase: 'Iris Cendré · 50ml',
    rating: 5,
    title: 'Like cold limestone after twilight rain.',
    quote:
      'Iris Cendré is serene, silver-toned, and hauntingly clean. Even the presentation — the heavy frosted bottle and linen label — feels like unwrapping fine art.',
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'maceration-ritual',
    tag: 'ATELIER CRAFT',
    date: 'NOVEMBER 2026',
    readTime: '3 MIN READ',
    title: 'Why Extrait Maceration Cannot Be Rushed',
    excerpt:
      'Inside our temperature-controlled Grasse cellars, botanical concentrates rest in darkness for ninety days before a single drop is bottled.',
    body: [
      'Modern commercial fragrance is routinely blended and bottled within days, relying on harsh stabilizers to force volatile oils into immediate submission. At Aura Noir, impatience is our only prohibition.',
      'Once our raw absolutes — cured Madagascar vanilla pods, three-year-aged Florentine orris butter, and cultivated Assam oud — are united in organic beetroot alcohol, the blend enters sealed stoneware vessels shielded from UV light.',
      'Over ninety unhurried days, sharp edges round into velvety continuity. The citrus top lifts seamlessly without stinging; the resinous base binds deeply to the heart, yielding an extrait that evolves slowly across sixteen hours on skin.',
    ],
  },
  {
    id: 'chiaroscuro-botanicals',
    tag: 'INGREDIENT DOSSIER',
    date: 'OCTOBER 2026',
    readTime: '4 MIN READ',
    title: 'Chiaroscuro in Scent: Working Without Animalics',
    excerpt:
      'How roasted roots, birch smoke, and fossilized Spanish labdanum create visceral depth while remaining 100% cruelty-free.',
    body: [
      'Traditional haute parfumerie long depended on animal-derived fixatives to achieve warmth and skin-like longevity. Our founding premise was simple: shadow and sensuality should never require cruelty.',
      'By layering Andalusian cistus labdanum with fractionated birch tar, roasted Venezuelan tonka, and aged vetiver root from Les Cayes, our noses construct leather and suede accords rich in natural warmth and mineral complexity.',
      'Every Aura Noir creation is vegan, phthalate-free, paraben-free, and housed in refillable smoked European glass designed to outlive trends.',
    ],
  },
];
