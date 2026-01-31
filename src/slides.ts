import type { Slide } from './types';

export const slides: Slide[] = [
  // TITLE
  {
    id: 'title',
    type: 'title',
    title: 'Causes of Color',
    subtitle: 'More than meets the eye',
    contact: 'andrew@andrewmurphy.io',
    background: 'gradient',
  },

  // OPENING HOOK
  {
    id: 'hook-question',
    type: 'content',
    title: 'A Question',
    content: 'Why are brown eyes brown, and blue eyes blue?',
    background: 'dark',
  },
  {
    id: 'hook-assumption',
    type: 'content',
    title: 'The Assumption',
    content: 'Most people assume the answer is the same — different pigments.',
    bullets: ["But it's not."],
    background: 'dark',
  },
  {
    id: 'hook-reveal',
    type: 'comparison',
    title: 'Same Organ. Different Physics.',
    leftColumn: {
      title: 'Brown Eyes',
      items: [
        'Melanin pigment absorbs blue light',
        'Chemistry does the work',
        'What reflects back is brown',
      ],
    },
    rightColumn: {
      title: 'Blue Eyes',
      items: [
        'Zero blue pigment',
        'Light scatters off collagen fibers',
        'Physics does the work',
      ],
    },
    background: 'dark',
  },
  {
    id: 'hook-warning',
    type: 'content',
    title: 'Quick Warning',
    content: 'The next slide contains a mildly graphic thought experiment about eyes.',
    background: 'dark',
  },
  {
    id: 'hook-proof',
    type: 'quote',
    quote:
      'Grind up a blue iris and you get brownish mush — there\'s no blue pigment to extract.',
    background: 'dark',
  },
  {
    id: 'hook-sky-connection',
    type: 'content',
    title: 'The Same Physics as the Sky',
    content: 'Blue eyes are blue for the exact same reason the sky is blue.',
    bullets: [
      'Rayleigh scattering — short wavelengths bounce, long wavelengths pass through',
      'Blue light scatters ~10× more than red (intensity ∝ 1/λ⁴)',
      'Sky: nitrogen & oxygen molecules scatter sunlight',
      'Eyes: collagen fibers in the iris scatter light',
    ],
    background: 'dark',
  },
  {
    id: 'hook-insight',
    type: 'content',
    title: 'The Central Insight',
    content:
      'We perceive color as a single sensation, but it emerges from radically different physical processes.',
    background: 'gradient',
  },

  // FRAMEWORK INTRO
  {
    id: 'framework',
    type: 'section',
    title: 'The Framework',
    subtitle: "Kurt Nassau's 15 Mechanisms of Color",
    background: 'dark',
  },
  {
    id: 'categories',
    type: 'content',
    title: '5 Categories',
    bullets: [
      '1. Light Made — Incandescence & luminescence',
      '2. Light Absorbed — Chemical/electronic mechanisms',
      '3. Molecular Vibrations — Water\'s blue',
      '4. Light Redirected — Structural colors',
      '5. Combined Mechanisms — Nature\'s layered approach',
    ],
    background: 'dark',
  },

  // TENTPOLE: CUTTLEFISH
  {
    id: 'cuttlefish-intro',
    type: 'section',
    title: "Nature's Color Champion",
    subtitle: 'The Common Cuttlefish',
    background: 'gradient',
    accentColor: 'purple',
  },
  {
    id: 'cuttlefish-claim',
    type: 'content',
    title: 'Sepia officinalis',
    content:
      'Deploys more simultaneous color-production mechanisms than any other documented animal.',
    bullets: [
      "At least 4 of Nassau's 15 mechanisms working in concert",
      'Dynamic neural control',
      'Color changes in 200 milliseconds',
      'Fun fact: "sepia" tone comes from cuttlefish ink — used in 19th century photography',
    ],
    background: 'dark',
  },
  {
    id: 'cuttlefish-layers',
    type: 'table',
    title: 'The Color Stack',
    tableHeaders: ['Layer', 'Structure', 'Mechanism', 'Function'],
    tableRows: [
      ['1 (top)', 'Yellow chromatophores', 'Pigments', 'Absorb blue/green'],
      ['2', 'Red chromatophores', 'Pigments', 'Absorb other wavelengths'],
      ['3', 'Brown/black chromatophores', 'Pigments', 'Dark patterns'],
      ['—', 'Granule proteins', 'Fluorescence', 'Emit light'],
      ['4', 'Iridophores', 'Interference', 'Metallic blues/greens'],
      ['5 (bottom)', 'Leucophores', 'Scattering', 'Brilliant white backlight'],
    ],
    background: 'dark',
  },
  {
    id: 'cuttlefish-display',
    type: 'content',
    title: 'A Biological Pixel Display',
    bullets: [
      'Chromatophores = RGB subpixels (absorptive filters)',
      'Iridophores = metallic/iridescent layer (shimmer)',
      'Leucophores = white backlight',
    ],
    content: '200+ chromatophores per mm² of skin',
    background: 'dark',
  },
  {
    id: 'cuttlefish-hook',
    type: 'quote',
    quote:
      "This animal has solved problems our best display engineers are still working on. It's a living demonstration of almost every color mechanism we'll discuss — and it can switch between them faster than you can blink.",
    background: 'gradient',
  },

  // CATEGORY 1: LIGHT MADE
  {
    id: 'cat1-title',
    type: 'section',
    title: 'Category 1 — 2 Mechanisms',
    subtitle: 'Light Made',
    background: 'gradient',
    accentColor: 'orange',
  },
  {
    id: 'incandescence',
    type: 'content',
    title: 'Mechanism 1: Incandescence',
    content: 'Thermal radiation from hot objects. Temperature determines color.',
    bullets: [
      'Candle flame (~1,800K) — yellow-orange',
      'Old incandescent bulbs (~2,700K) — warm white from glowing tungsten wire',
      'Sun\'s surface (5,778K) — white',
      'Blue-white stars (10,000-30,000K)',
      '"Red hot" is actually cooler than "white hot"',
    ],
    background: 'dark',
  },
  {
    id: 'incandescence-hook',
    type: 'quote',
    quote:
      'Blacksmiths have used "heat colors" for centuries — cherry red, bright red, orange, yellow, white. They were doing materials science by eye.',
    background: 'dark',
  },
  {
    id: 'luminescence',
    type: 'content',
    title: 'Mechanism 2: Luminescence',
    content:
      'Electrons jump to higher energy levels, then emit specific wavelengths falling back down.',
    bullets: [
      'Neon signs — each gas has its signature color',
      'Auroras — oxygen green, nitrogen purple',
      'Fireworks — strontium red, barium green, copper blue',
      'LEDs — semiconductor band gaps determine color (why they replaced hot bulbs)',
    ],
    background: 'dark',
  },
  {
    id: 'bioluminescence',
    type: 'content',
    title: 'Bioluminescence',
    content: '76% of deep-sea creatures produce their own light.',
    bullets: [
      'Fireflies — luciferin + luciferase enzyme',
      'Anglerfish — symbiotic glowing bacteria',
      'Dinoflagellates — glowing ocean waves',
    ],
    background: 'dark',
  },
  {
    id: 'gfp',
    type: 'content',
    title: 'Green Fluorescent Protein (GFP)',
    content: 'A jellyfish protein that revolutionized biology — 2008 Nobel Prize in Chemistry.',
    bullets: [
      'From Aequorea victoria jellyfish',
      'Glows green under UV light without any added chemicals',
      'Scientists attach it to other proteins to track them in living cells',
      'Made the invisible visible — we can now watch proteins move in real time',
    ],
    background: 'dark',
  },
  {
    id: 'fireworks-hook',
    type: 'quote',
    quote:
      "Fireworks engineers call copper blue the 'holy grail' — it requires precise temperature control. Too hot and the copper compounds decompose. Blue fireworks are genuinely harder to make than any other color.",
    background: 'dark',
  },

  // CATEGORY 2: LIGHT ABSORBED
  {
    id: 'cat2-title',
    type: 'section',
    title: 'Category 2 — 8 Mechanisms',
    subtitle: 'Light Absorbed — Chemical Mechanisms',
    background: 'gradient',
    accentColor: 'green',
  },
  {
    id: 'transition-metals-intro',
    type: 'content',
    title: 'Transition Metals — The Basics',
    content: 'These elements have partially-filled electron shells that can absorb visible light.',
    bullets: [
      'When light hits, electrons jump between energy levels',
      'The energy gap determines which colors get absorbed',
      'What remains (reflects back) is the color you see',
    ],
    background: 'dark',
  },
  {
    id: 'transition-metals',
    type: 'content',
    title: 'The Twist: Neighbors Change Everything',
    content: 'The same metal produces different colors depending on what atoms surround it.',
    bullets: [
      'Copper: turquoise, malachite green, blue vitriol — all copper!',
      'Iron: rust red, pyrite gold, magnetite black — all iron!',
      'The surrounding atoms stretch or squeeze electron orbitals',
      'Different orbital shapes = different energy gaps = different colors',
    ],
    background: 'dark',
  },
  {
    id: 'ruby-emerald',
    type: 'comparison',
    title: 'The Ruby-Emerald Paradox',
    leftColumn: {
      title: 'Ruby (Red)',
      items: [
        'Base: aluminum oxide (colorless)',
        'Add ~1% chromium impurity',
        'Tight crystal squeezes Cr electrons',
        'Absorbs green/blue → reflects red',
      ],
    },
    rightColumn: {
      title: 'Emerald (Green)',
      items: [
        'Base: beryl (also colorless)',
        'Add same ~1% chromium',
        'Looser crystal stretches Cr electrons',
        'Absorbs red → reflects green',
      ],
    },
    background: 'dark',
  },
  {
    id: 'ruby-emerald-insight',
    type: 'quote',
    quote: 'Same impurity atom. Completely opposite colors. The host crystal changes everything.',
    background: 'dark',
  },
  {
    id: 'organic-compounds',
    type: 'content',
    title: 'Organic Compounds',
    content: 'Conjugation length determines color — longer chains absorb longer wavelengths.',
    bullets: [
      'Chlorophyll — absorbs red & blue, reflects green',
      'Hemoglobin — absorbs green, reflects red',
      'Melanin — broad absorption, brown to black',
      'Carotenoids — carrots, flamingos, autumn leaves',
    ],
    background: 'dark',
  },
  {
    id: 'gold-special',
    type: 'content',
    title: "Why Gold is Gold",
    content: 'Relativistic effects make gold unique.',
    bullets: [
      'Electrons near the nucleus move at ~58% light speed',
      'Relativistic mass increase changes orbital energies',
      'Without relativity, gold would look like silver',
      'This is why gold has been treasured across cultures',
    ],
    background: 'dark',
  },

  // CATEGORY 3: MOLECULAR VIBRATIONS
  {
    id: 'cat3-title',
    type: 'section',
    title: 'Category 3 — 1 Mechanism',
    subtitle: 'Molecular Vibrations',
    background: 'gradient',
    accentColor: 'cyan',
  },
  {
    id: 'water-blue',
    type: 'content',
    title: "Why Water is Blue",
    content: 'The ONLY non-electronic mechanism for color.',
    bullets: [
      'O-H bonds vibrate at specific frequencies',
      'Overtones absorb red light',
      'Blue light passes through',
      'Need ~10+ meters depth to see it clearly',
    ],
    background: 'dark',
  },
  {
    id: 'water-insight',
    type: 'quote',
    quote:
      "Water's blue is unique — it's not from electrons jumping between orbitals, but from atoms physically vibrating. No animal has evolved to use this mechanism.",
    background: 'dark',
  },

  // CATEGORY 4: LIGHT REDIRECTED
  {
    id: 'cat4-title',
    type: 'section',
    title: 'Category 4 — 4 Mechanisms',
    subtitle: 'Light Redirected — Structural Colors',
    background: 'gradient',
    accentColor: 'blue',
  },
  {
    id: 'structural-intro',
    type: 'content',
    title: 'No Pigment Required',
    content: 'Structure alone creates color through physical optics.',
    bullets: [
      'Colors that never fade',
      'Often iridescent (angle-dependent)',
      'Nanoscale precision — natural engineering',
    ],
    background: 'dark',
  },
  {
    id: 'scattering',
    type: 'content',
    title: 'Mechanism 13: Scattering',
    content: 'Remember blue eyes? Same physics everywhere in nature.',
    bullets: [
      'Blue sky — nitrogen/oxygen molecules',
      'Blue eyes — collagen fibers (our opening question!)',
      'Blue jay feathers — zero blue pigment',
      'Mandrill faces — structural blue, not chemical',
      'All Rayleigh scattering: intensity ∝ 1/λ⁴',
    ],
    background: 'dark',
  },
  {
    id: 'interference',
    type: 'content',
    title: 'Mechanism 14: Thin-Film Interference',
    content: 'Light waves reflecting from layered surfaces interfere constructively or destructively.',
    bullets: [
      'Soap bubbles — thickness determines color',
      'Oil slicks — rainbow patterns',
      'Morpho butterflies — Christmas-tree nanostructures',
      'Peacock feathers — melanin rod lattice',
    ],
    background: 'dark',
  },
  {
    id: 'morpho',
    type: 'content',
    title: 'The Morpho Butterfly',
    content: "100-year-old museum specimens are still brilliantly blue.",
    bullets: [
      'Christmas-tree shaped ridges on each scale',
      'Multilayer interference creates blue',
      'Brown melanin base absorbs stray wavelengths',
      'Underside is brown for camouflage',
    ],
    background: 'dark',
  },
  {
    id: 'diffraction',
    type: 'content',
    title: 'Mechanism 15: Diffraction',
    content: 'Periodic gratings separate wavelengths like a prism.',
    bullets: [
      'CDs and DVDs — rainbow reflections',
      'Opals — silica sphere lattice',
      'Peacock spider — 3D nanogratings',
      'Sea mouse spines — photonic crystals',
    ],
    background: 'dark',
  },

  // CATEGORY 5: COMBINED
  {
    id: 'cat5-title',
    type: 'section',
    title: 'Category 5 — Layered',
    subtitle: 'Combined Mechanisms',
    background: 'gradient',
    accentColor: 'purple',
  },
  {
    id: 'combined-intro',
    type: 'content',
    title: 'Layering Creates Possibilities',
    content: 'Evolution discovered that combining mechanisms creates effects no single mechanism can achieve.',
    bullets: [
      'Pigments alone: limited palette, no iridescence',
      'Interference alone: angle-dependent, washed out',
      'Scattering alone: just white',
      'Combined: dynamic camouflage, vivid displays',
    ],
    background: 'dark',
  },
  {
    id: 'green-parrots',
    type: 'content',
    title: 'Green Parrots',
    content: 'Yellow pigment + Blue structural color = Green',
    bullets: [
      'True green pigments are rare in feathers',
      'Dissolve the pigments → feathers become blue',
      'Destroy the structure → feathers become yellow-brown',
      'Sick parrots can lose half their color system',
    ],
    background: 'dark',
  },
  {
    id: 'eye-color-table',
    type: 'table',
    title: 'Human Eye Color Spectrum',
    tableHeaders: ['Eye Color', 'Mechanism(s)', "What's Happening"],
    tableRows: [
      ['Dark brown', 'Pigment', 'High melanin absorbs most light'],
      ['Light brown/hazel', 'Pigment + Scattering', 'Moderate melanin + some structural blue'],
      ['Green', 'Pigment + Scattering', 'Low melanin (yellowish) + blue scattering'],
      ['Blue', 'Scattering', 'Minimal melanin, pure structural color'],
      ['Grey', 'Scattering', 'Even less melanin, diffuse scattering'],
    ],
    background: 'dark',
  },

  // SUMMARY
  {
    id: 'summary-table',
    type: 'table',
    title: 'The 15 Mechanisms',
    tableHeaders: ['Category', 'Mechanisms', 'Example'],
    tableRows: [
      ['1. Light Made', '1-2: Incandescence, Luminescence', 'Stars, fireflies, LEDs'],
      ['2. Chemical', '4-11: Metals, pigments, charge transfer', 'Ruby, chlorophyll, gold'],
      ['3. Vibration', '3: Molecular vibrations', "Water's blue"],
      ['4. Structural', '12-15: Refraction, scattering, interference', 'Blue sky, morpho, blue eyes'],
      ['5. Combined', 'Multiple mechanisms', 'Cuttlefish, green parrots'],
    ],
    background: 'dark',
  },
  {
    id: 'takeaway',
    type: 'content',
    title: 'The Takeaway',
    content: 'Color is not one phenomenon — it\'s fifteen.',
    bullets: [
      'Same color can arise from completely different physics',
      'Quantum electron transitions vs wave interference vs molecular vibrations',
      'Nature layers mechanisms for effects we\'re still learning to replicate',
    ],
    background: 'gradient',
  },

  // CLOSING
  {
    id: 'closing',
    type: 'title',
    title: 'More Than Meets the Eye',
    subtitle: 'Thank you',
    contact: 'andrew@andrewmurphy.io',
    background: 'gradient',
  },
];
