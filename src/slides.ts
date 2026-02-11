import type { Slide } from './types';

export const slides: Slide[] = [
  // TITLE
  {
    id: 'title',
    type: 'title',
    title: 'Causes of Colour',
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
    image: {
      url: '/images/heterochromia-eye.jpg',
      alt: 'Close-up of human eye with central heterochromia showing green and brown colours',
      position: 'right',
      credit: 'Nirmal Rajendharkumar / Unsplash',
    },
  },
  {
    id: 'hook-assumption',
    type: 'content',
    title: 'The Easy (but wrong) Answer',
    content: 'Most people assume the answer is the same - different pigments.',
    bullets: ["But it's not."],
    background: 'dark',
  },
  {
    id: 'hook-reveal',
    type: 'comparison',
    title: 'Same Organ. Different Cause.',
    leftColumn: {
      title: 'Brown Eyes',
      items: [
        'Melanin pigment absorbs blue light',
        'What reflects back is brown',
        'Chemistry does the work',
      ],
      image: {
        url: '/images/brown-eye.jpg',
        alt: 'Close-up of a brown human eye',
        credit: 'Tony Litvyak / Unsplash',
        objectPosition: 'center 51%',
      },
    },
    rightColumn: {
      title: 'Blue Eyes',
      items: [
        'Zero blue pigment',
        'Light scatters off collagen fibres',
        'Physics does the work',
      ],
      image: {
        url: '/images/blue-eye.jpg',
        alt: 'Close-up of a blue human eye',
        credit: 'Tony Litvyak / Unsplash',
        objectPosition: 'center 44%',
      },
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
      'Grind up a blue iris and you get brownish mush - there\'s no blue pigment to extract.',
    background: 'dark',
  },
  {
    id: 'light-primer',
    type: 'content',
    title: 'A Quick Reminder on Light',
    content: 'Light is an electromagnetic wave. Different frequencies appear as different colours.',
    bullets: [
      'Red light has a long wavelength (~700nm), violet has a short one (~400nm)',
      'White light is a mixture of all visible wavelengths',
      'When we see colour, something has changed the mix that reaches our eyes',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/spectrum.png',
        alt: 'Electromagnetic spectrum showing visible light wavelengths',
        position: 'right',
      },
      {
        url: '/images/spectrum.jpg',
        alt: 'Visible light spectrum with wavelength labels',
        position: 'right',
      },
    ],
  },
  {
    id: 'hook-sky-connection',
    type: 'content',
    title: 'The Same Physics as the Sky',
    content: 'Blue eyes are blue for the exact same reason the sky is blue.',
    bullets: [
      'Rayleigh scattering - short wavelengths bounce, long wavelengths pass through',
      'Blue light scatters ~10× more than red (intensity ∝ 1/λ⁴)',
      'Sky: nitrogen & oxygen molecules scatter sunlight',
      'Eyes: collagen fibres in the iris scatter light',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/sunset-sky.jpg',
        alt: 'Blue sky transitioning to sunset colours',
        position: 'right',
        credit: 'FTiare / iStock',
      },
      {
        url: '/images/scattering.png',
        alt: 'Diagram showing Rayleigh scattering physics',
        position: 'right',
        credit: 'FX Solver',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'hook-insight',
    type: 'quote',
    quote:
      'We perceive colour as a single sensation, but it emerges from radically different physical processes.',
    background: 'gradient',
  },

  // FRAMEWORK INTRO
  {
    id: 'framework',
    type: 'section',
    title: 'The Framework',
    subtitle: "Kurt Nassau's 15 Mechanisms of Colour",
    background: 'dark',
  },
  {
    id: 'categories',
    type: 'content',
    title: '5 Categories',
    bullets: [
      '1. Light Made - Incandescence & luminescence',
      '2. Light Absorbed - Chemical/electronic mechanisms',
      '3. Molecular Vibrations - Water\'s blue',
      '4. Light Redirected - Structural colours',
      '5. Combined Mechanisms - Nature\'s layered approach',
    ],
    background: 'dark',
  },

  // CATEGORY 1: LIGHT MADE
  {
    id: 'cat1-title',
    type: 'section',
    title: 'Category 1 - 2 Mechanisms',
    subtitle: 'Light Made',
    background: 'gradient',
    accentColor: 'orange',
  },
  {
    id: 'incandescence',
    type: 'content',
    title: 'Mechanism 1: Incandescence',
    content: 'Thermal radiation from hot objects. Temperature determines colour.',
    bullets: [
      'Candle flame (~1,800K) - yellow-orange',
      'Old incandescent bulbs (~2,700K) - warm white from glowing tungsten wire',
      'Sun\'s surface (5,778K) - white',
      'Blue-white stars (10,000-30,000K)',
      '"Red hot" is actually cooler than "white hot"',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/incandescent-bulb.jpg',
        alt: 'Glowing incandescent light bulb in a dark room',
        position: 'right',
        credit: 'Aditya Sethia / Unsplash',
      },
      {
        url: '/images/spectrum.png',
        alt: 'Black body radiation spectrum showing temperature vs colour',
        position: 'right',
        credit: 'Physics Stack Exchange',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'incandescence-hook',
    type: 'quote',
    quote:
      'Blacksmiths have used "heat colours" for centuries - cherry red, bright red, orange, yellow, white. They were doing materials science by eye.',
    background: 'dark',
    image: {
      url: '/images/heat-colors.jpg',
      alt: 'Glowing wrought iron showing heat colours during forging',
      credit: 'Wrought Works',
    },
  },
  {
    id: 'luminescence',
    type: 'content',
    title: 'Mechanism 2: Luminescence',
    content:
      'Electrons jump to higher energy levels, then emit specific wavelengths falling back down.',
    bullets: [
      'Neon signs - each gas has its signature colour',
      'Auroras - oxygen green, nitrogen purple',
      'Fireworks - strontium red, barium green, copper blue',
      'LEDs - semiconductor band gaps determine colour (why they replaced hot bulbs)',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/aurora.jpg',
        alt: 'Aurora borealis over Iceland',
        position: 'right',
        credit: 'v2osk / Unsplash',
      },
      {
        url: '/images/luminescence.png',
        alt: 'Schematic of photoluminescence energy levels',
        position: 'right',
        credit: 'ResearchGate',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'bioluminescence',
    type: 'content',
    title: 'Bioluminescence',
    content: '76% of deep-sea creatures produce their own light.',
    bullets: [
      'Fireflies - luciferin + luciferase enzyme',
      'Anglerfish - symbiotic glowing bacteria',
      'Dinoflagellates - glowing ocean waves',
    ],
    background: 'dark',
    image: {
      url: '/images/bioluminescence.jpg',
      alt: 'Bioluminescent deep sea creature',
      position: 'right',
      credit: 'Patrick Fore / Unsplash',
    },
  },
  {
    id: 'gfp',
    type: 'content',
    title: 'Green Fluorescent Protein (GFP)',
    content: 'A jellyfish protein that changed biology forever - 2008 Nobel Prize in Chemistry.',
    bullets: [
      'From Aequorea victoria jellyfish',
      'Glows green under UV light without any added chemicals',
      'Scientists attach it to other proteins to track them in living cells',
      'Made the invisible visible - we can now watch proteins move in real time',
    ],
    background: 'dark',
    image: {
      url: '/images/gfp.gif',
      alt: 'Green fluorescent protein glowing in cells',
      position: 'right',
      credit: 'Tristan Henderson / Wikimedia Commons',
    },
  },
  {
    id: 'fireworks-hook',
    type: 'quote',
    quote:
      "Fireworks engineers call copper blue the 'holy grail' - it requires precise temperature control. Too hot and the copper compounds decompose. Blue fireworks are genuinely harder to make than any other colour.",
    background: 'dark',
    image: {
      url: '/images/fireworks.jpg',
      alt: 'Fireworks display in the night sky',
      position: 'background',
      credit: 'Ashwin Tanjore / Unsplash',
      overlayOpacity: 0.5,
    },
  },

  // CATEGORY 2: LIGHT ABSORBED
  {
    id: 'cat2-title',
    type: 'section',
    title: 'Category 2 - 8 Mechanisms',
    subtitle: 'Light Absorbed - Chemical Mechanisms',
    background: 'gradient',
    accentColor: 'green',
  },
  {
    id: 'transition-metals-intro',
    type: 'content',
    title: 'Transition Metals - The Basics',
    content: 'These elements have partially-filled electron shells that can absorb visible light.',
    bullets: [
      'When light hits, electrons jump between energy levels',
      'The energy gap determines which colours get absorbed',
      'What remains (reflects back) is the colour you see',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/assorted-transition-metals.jpg',
        alt: 'Assorted colourful transition metal samples',
        position: 'right',
        credit: 'Science Photo Library',
      },
      {
        url: '/images/energy-levels.jpg',
        alt: 'Electron energy level diagram',
        position: 'right',
        credit: 'animatedphysics.com',
      },
    ],
  },
  {
    id: 'transition-metals',
    type: 'content',
    title: 'The Twist: Neighbours Change Everything',
    content: 'The same metal produces different colours depending on what atoms surround it.',
    bullets: [
      'Copper: turquoise, malachite green, blue vitriol - all copper!',
      'Iron: rust red, pyrite gold, magnetite black - all iron!',
      'The surrounding atoms stretch or squeeze electron orbitals',
      'Different orbital shapes = different energy gaps = different colours',
    ],
    background: 'dark',
    image: {
      url: '/images/minerals.jpg',
      alt: 'Colourful mineral collection showing different metal compounds',
      position: 'right',
      credit: 'Odysseas Chloridis / Unsplash',
    },
  },
  {
    id: 'ruby-emerald',
    type: 'comparison',
    title: 'The Ruby-Emerald Paradox',
    leftColumn: {
      title: 'Ruby (Red)',
      items: [
        'Base: aluminium oxide (colourless)',
        'Add ~1% chromium impurity',
        'Tight crystal squeezes Cr electrons',
        'Absorbs green/blue → reflects red',
      ],
      image: {
        url: '/images/ruby.jpg',
        alt: 'Red ruby gemstone',
        credit: 'Jason D / Unsplash',
        objectPosition: 'center 5%',
      },
    },
    rightColumn: {
      title: 'Emerald (Green)',
      items: [
        'Base: beryl (also colourless)',
        'Add same ~1% chromium',
        'Looser crystal stretches Cr electrons',
        'Absorbs red → reflects green',
      ],
      image: {
        url: '/images/emerald.jpg',
        alt: 'Green emerald gemstone',
        credit: 'USGS / Unsplash',
        objectPosition: 'center 40%',
      },
    },
    background: 'dark',
  },
  {
    id: 'ruby-emerald-insight',
    type: 'quote',
    quote: 'Same impurity atom. Completely opposite colours. The host crystal changes everything.',
    background: 'dark',
  },
  {
    id: 'organic-compounds',
    type: 'content',
    title: 'Organic Compounds',
    content: 'Conjugation length determines colour - longer chains absorb longer wavelengths.',
    bullets: [
      'Chlorophyll - absorbs red & blue, reflects green',
      'Hemoglobin - absorbs green, reflects red',
      'Melanin - broad absorption, brown to black',
      'Carotenoids - carrots, flamingos, autumn leaves',
    ],
    background: 'dark',
    image: {
      url: '/images/autumn-leaves.jpg',
      alt: 'Colourful autumn leaves showing carotenoid pigments',
      position: 'right',
      credit: 'Omid Armin / Unsplash',
    },
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
    image: {
      url: '/images/gold.jpg',
      alt: 'Shiny gold bars',
      position: 'right',
      credit: 'Marko Ivanov / Unsplash',
    },
  },

  // CATEGORY 3: MOLECULAR VIBRATIONS
  {
    id: 'cat3-title',
    type: 'section',
    title: 'Category 3 - 1 Mechanism',
    subtitle: 'Molecular Vibrations',
    background: 'gradient',
    accentColor: 'cyan',
  },
  {
    id: 'water-blue',
    type: 'content',
    title: "Why Water is Blue",
    content: 'The ONLY non-electronic mechanism for colour.',
    bullets: [
      'O-H bonds vibrate at specific frequencies',
      'Overtones absorb red light',
      'Blue light passes through',
      'Need ~10+ meters depth to see it clearly',
    ],
    background: 'dark',
    image: {
      url: '/images/blue-water.jpg',
      alt: 'Deep blue ocean water',
      position: 'background',
      credit: 'Cristian Palmer / Unsplash',
    },
    overlayImages: [
      {
        url: '/images/waterstretchingbonds.gif',
        alt: 'Water molecule O-H bond stretching vibration',
        credit: 'Dynamic Science',
      },
    ],
  },
  {
    id: 'water-insight',
    type: 'quote',
    quote:
      "Water's blue is unique - it's not from electrons jumping between orbitals, but from atoms physically vibrating. No animal has evolved to use this mechanism.",
    background: 'dark',
  },

  // CATEGORY 4: LIGHT REDIRECTED
  {
    id: 'cat4-title',
    type: 'section',
    title: 'Category 4 - 4 Mechanisms',
    subtitle: 'Light Redirected - Structural Colours',
    background: 'gradient',
    accentColor: 'blue',
  },
  {
    id: 'structural-intro',
    type: 'content',
    title: 'No Pigment Required',
    content: 'Structure alone creates colour through physical optics.',
    bullets: [
      'Colours that never fade',
      'Often iridescent (angle-dependent)',
      'Nanoscale precision - natural engineering',
    ],
    background: 'dark',
    image: {
      url: '/images/morpho.jpg',
      alt: 'Blue morpho butterfly showing structural colour',
      position: 'right',
      credit: 'Nora Jane Long / Unsplash',
    },
  },
  {
    id: 'scattering',
    type: 'content',
    title: 'Mechanism 13: Scattering',
    content: 'Remember blue eyes? Same physics everywhere in nature.',
    bullets: [
      'Blue sky - nitrogen/oxygen molecules',
      'Blue eyes - collagen fibres (our opening question!)',
      'Blue jay feathers - zero blue pigment',
      'Mandrill faces - structural blue, not chemical',
      'All Rayleigh scattering: intensity ∝ 1/λ⁴',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/mandrill.jpg',
        alt: 'Mandrill face showing structural blue colouring',
        position: 'right',
        credit: 'Michael Jerrard / Unsplash',
      },
      {
        url: '/images/scattering.png',
        alt: 'Diagram showing Rayleigh scattering physics',
        position: 'right',
        credit: 'FX Solver',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'interference',
    type: 'content',
    title: 'Mechanism 14: Thin-Film Interference',
    content: 'Light waves reflecting from layered surfaces interfere constructively or destructively.',
    bullets: [
      'Soap bubbles - thickness determines colour',
      'Oil slicks - rainbow patterns',
      'Peacock feathers - melanin rod lattice',
      '→ Key: 2 surfaces, thickness matters',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/soap-bubbles.jpg',
        alt: 'Iridescent soap bubbles showing thin-film interference',
        position: 'right',
        credit: 'Unsplash',
      },
      {
        url: '/images/interference.png',
        alt: 'Diagram showing thin-film interference physics',
        position: 'right',
        credit: 'Wikimedia Commons',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'diffraction',
    type: 'content',
    title: 'Mechanism 15: Diffraction',
    content: 'Periodic gratings separate wavelengths like a prism.',
    bullets: [
      'CDs and DVDs - rainbow reflections',
      'Opals - silica sphere lattice',
      'Morpho butterflies - Christmas-tree nanostructures',
      'Peacock spider - 3D nanogratings',
      'Sea mouse spines - photonic crystals',
      '→ Key: many repeating structures, spacing matters',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/spider.jpg',
        alt: 'Peacock spider showing iridescent diffraction colours',
        position: 'right',
        credit: 'Maria Fernanda Cardoso / This Is Colossal',
      },
      {
        url: '/images/diffraction.png',
        alt: 'Comparison of refraction and diffraction spectra',
        position: 'right',
        credit: 'Wikimedia Commons',
        bgColor: 'white',
      },
    ],
  },
  {
    id: 'morpho',
    type: 'content',
    title: 'The Morpho Butterfly',
    content: "100-year-old museum specimens are still brilliantly blue.",
    bullets: [
      'Christmas-tree shaped ridges on each scale',
      'Multilayer diffraction creates blue',
      'Brown melanin base absorbs stray wavelengths',
      'Underside is brown for camouflage',
    ],
    background: 'dark',
    images: [
      {
        url: '/images/morpho.jpg',
        alt: 'Blue morpho butterfly',
        position: 'right',
      },
      {
        url: '/images/morpho-scales.jpg',
        alt: 'Scanning electron microscope image of morpho butterfly wing microribs',
        position: 'right',
        credit: 'NISE Network',
      },
    ],
  },

  // CATEGORY 5: COMBINED
  {
    id: 'cat5-title',
    type: 'section',
    title: 'Category 5 - Layered',
    subtitle: 'Combined Mechanisms',
    background: 'gradient',
    accentColor: 'purple',
  },
  {
    id: 'combined-intro',
    type: 'content',
    title: 'Layering Creates Possibilities',
    content: 'Stack the mechanisms and you get effects none of them can produce alone.',
    bullets: [
      'Pigments alone: limited palette, no iridescence',
      'Interference alone: angle-dependent, washed out',
      'Scattering - limited palette or white',
      'Combined: dynamic camouflage, vivid displays',
    ],
    background: 'dark',
  },
  {
    id: 'green-parrots',
    type: 'content',
    title: 'Green Parrots',
    content: 'Yellow pigment + Blue structural colour = Green',
    bullets: [
      'True green pigments are rare in feathers',
      'Dissolve the pigments → feathers become blue',
      'Destroy the structure → feathers become yellow-brown',
      'Sick parrots can lose half their colour system',
    ],
    background: 'dark',
    image: {
      url: '/images/green-parrot.jpg',
      alt: 'Vibrant green parrot',
      position: 'right',
      credit: 'David Clode / Unsplash',
    },
  },

  // HUMAN EYES - Combined mechanisms example
  {
    id: 'eye-color-table',
    type: 'table',
    title: 'Human Eye Colour Spectrum',
    tableHeaders: ['Eye Colour', 'Mechanism(s)', "What's Happening"],
    tableRows: [
      ['Dark brown', 'Pigment', 'High melanin absorbs most light'],
      ['Light brown/hazel', 'Pigment + Scattering', 'Moderate melanin + some structural blue'],
      ['Green', 'Pigment + Scattering', 'Low melanin (yellowish) + blue scattering'],
      ['Blue', 'Scattering', 'Minimal melanin, pure structural colour'],
      ['Grey', 'Scattering', 'Even less melanin, diffuse scattering'],
    ],
    background: 'dark',
    image: {
      url: '/images/eye-colors.jpg',
      alt: 'Spectrum of human eye colours',
      credit: 'Vision Source',
    },
  },

  // TENTPOLE: CUTTLEFISH
  {
    id: 'cuttlefish-intro',
    type: 'section',
    title: "Nature's Colour Champion",
    subtitle: 'The Common Cuttlefish',
    background: 'gradient',
    accentColor: 'purple',
    textReveal: true,
    image: {
      url: '/images/cuttlefish.jpg',
      alt: 'Colourful cuttlefish displaying chromatophores',
      credit: 'Peter Boshra / Unsplash',
      objectPosition: '10% center',
    },
  },
  {
    id: 'cuttlefish-claim',
    type: 'content',
    title: 'Sepia officinalis',
    content:
      'Deploys more simultaneous colour-production mechanisms than any other documented animal.',
    bullets: [
      "At least 4 of Nassau's 15 mechanisms working in concert",
      'Dynamic neural control',
      'Colour changes in 200 milliseconds',
      'Fun fact: "sepia" tone comes from cuttlefish ink - used in 19th century photography',
    ],
    background: 'dark',
    image: {
      url: '/images/cuttlefish-2.jpg',
      alt: 'Cuttlefish displaying colour-changing abilities',
      position: 'right',
      credit: 'Heidi Bruce / Unsplash',
    },
  },
  {
    id: 'cuttlefish-layers',
    type: 'table',
    title: 'The Colour Stack',
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
    image: {
      url: '/images/cuttlefish-layers.jpg',
      alt: 'Cross-section diagram showing cuttlefish skin layers',
      credit: 'Nature Communications',
    },
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
    image: {
      url: '/images/chromatophore.jpg',
      alt: 'Close-up of cuttlefish chromatophores',
      position: 'right',
      credit: 'Nature Communications',
    },
  },
  {
    id: 'cuttlefish-video',
    type: 'video',
    title: 'Cuttlefish in Action',
    videoId: 'pgDE2DOICuc',
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
      ['5. Combined', 'Multiple mechanisms', 'Cuttlefish, parrots, human eyes'],
    ],
    background: 'dark',
  },
  {
    id: 'takeaway',
    type: 'content',
    title: 'The Takeaway',
    content: 'Colour is not one phenomenon - it\'s fifteen.',
    bullets: [
      'Same colour can arise from completely different physics',
      'Quantum electron transitions vs wave interference vs molecular vibrations',
      'Nature layers mechanisms for effects we\'re still learning to replicate',
    ],
    background: 'gradient',
    image: {
      url: '/images/spectrum.jpg',
      alt: 'Light dispersion through a prism showing visible spectrum',
      position: 'right',
      credit: 'Wikimedia Commons',
    },
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
