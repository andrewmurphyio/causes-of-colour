import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface AnimationSlideProps {
  slide: Slide;
  build?: number;
}

export function AnimationSlide({ slide, build = 0 }: AnimationSlideProps) {
  if (slide.animationId === 'brown-eye') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <BrownEyeAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Melanin absorbs short wavelengths (blue, green, violet).
            The remaining reflected light — red, orange, yellow — combines
            to appear <span className="text-amber-400 font-semibold">brown</span>.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'incandescence') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <IncandescenceAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Every hot object emits light. As temperature rises, the peak wavelength shortens
            — shifting the glow from red to orange to white to{' '}
            <span className="text-sky-300 font-semibold">blue-white</span>. This is{' '}
            <span className="text-amber-400 font-semibold">Wien's displacement law</span>.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'blue-eye') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <BlueEyeAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Collagen fibres in the iris scatter short wavelengths (blue, violet)
            back toward the observer. Long wavelengths pass straight through.
            The eye contains <span className="text-sky-400 font-semibold">zero blue pigment</span>.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'luminescence') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <LuminescenceAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            The electron absorbs energy and jumps up. When it falls back,
            it emits a photon at a <span className="text-green-400 font-semibold">specific wavelength</span> —
            that's the colour we see.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  return (
    <SlideWrapper slide={slide}>
      <div className="text-center">
        <h2 className="text-4xl font-bold font-display">{slide.title}</h2>
      </div>
    </SlideWrapper>
  );
}

function BlueEyeAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showScattering = build >= 2;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="blue-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blue-scatter-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="blue-merge-grad" gradientUnits="userSpaceOnUse" x1="500" y1="0" x2="165" y2="0">
            <stop offset="0%" stopColor="#3388ff" stopOpacity="0" />
            <stop offset="65%" stopColor="#3388ff" stopOpacity="0" />
            <stop offset="90%" stopColor="#3388ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3388ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ===== EYE CROSS-SECTION ===== */}
        <g>
          {/* Sclera (outer eye wall) */}
          <ellipse
            cx="650" cy="240" rx="160" ry="125"
            fill="#0f172a" stroke="#475569" strokeWidth="2.5"
          />
          {/* Inner fill */}
          <ellipse
            cx="650" cy="240" rx="155" ry="120"
            fill="#0c1222" opacity="0.8"
          />

          {/* Cornea (front transparent bulge) */}
          <path
            d="M 497 145 Q 460 240 497 335"
            fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.5"
          />

          {/* Iris - upper portion (pale, low melanin) */}
          <rect
            x="500" y="140" width="22" height="68" rx="4"
            fill="#B8C4D4" stroke="#8B9BB0" strokeWidth="1"
          />
          {/* Iris - lower portion (pale, low melanin) */}
          <rect
            x="500" y="272" width="22" height="68" rx="4"
            fill="#B8C4D4" stroke="#8B9BB0" strokeWidth="1"
          />

          {/* Collagen fibres - upper iris (short horizontal lines) */}
          <line x1="504" y1="155" x2="518" y2="155" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="165" x2="518" y2="165" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="175" x2="518" y2="175" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="185" x2="518" y2="185" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="195" x2="518" y2="195" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />

          {/* Collagen fibres - lower iris */}
          <line x1="504" y1="285" x2="518" y2="285" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="295" x2="518" y2="295" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="305" x2="518" y2="305" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="315" x2="518" y2="315" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="504" y1="325" x2="518" y2="325" stroke="#7B8FA6" strokeWidth="1.5" strokeLinecap="round" />

          {/* Pupil (dark opening) */}
          <rect
            x="500" y="208" width="22" height="64" rx="2"
            fill="#020617"
          />

          {/* Lens */}
          <ellipse
            cx="545" cy="240" rx="12" ry="28"
            fill="none" stroke="#93c5fd" strokeWidth="1.5" opacity="0.35"
          />

          {/* Retina */}
          <path
            d="M 770 165 Q 805 240 770 315"
            fill="none" stroke="#ef4444" strokeWidth="2.5" opacity="0.5"
          />

          {/* Optic nerve stub */}
          <line
            x1="800" y1="240" x2="810" y2="240"
            stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" opacity="0.3"
          />
        </g>

        {/* ===== LABELS ===== */}
        <text
          x="473" y="125" fill="#94a3b8" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-sans)"
        >
          Cornea
        </text>
        <line
          x1="478" y1="128" x2="490" y2="142"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="511" y="388" fill="#7BA3CC" fontSize="13" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600"
        >
          Iris (collagen fibres)
        </text>
        <line
          x1="511" y1="376" x2="511" y2="345"
          stroke="#7BA3CC" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="545" y="125" fill="#94a3b8" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-sans)"
        >
          Lens
        </text>
        <line
          x1="545" y1="128" x2="545" y2="210"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="790" y="148" fill="#94a3b8" fontSize="12"
          fontFamily="var(--font-sans)"
        >
          Retina
        </text>
        <line
          x1="790" y1="151" x2="775" y2="165"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        {/* ===== LIGHT SOURCE ===== */}
        <g>
          <circle
            cx="80" cy="240" r="22" fill="#fbbf24"
            opacity={showBeams ? 1 : 0.35}
            style={{ transition: 'opacity 0.5s ease' }}
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={80 + Math.cos((angle * Math.PI) / 180) * 26}
              y1={240 + Math.sin((angle * Math.PI) / 180) * 26}
              x2={80 + Math.cos((angle * Math.PI) / 180) * 35}
              y2={240 + Math.sin((angle * Math.PI) / 180) * 35}
              stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
              opacity={showBeams ? 0.8 : 0.25}
              style={{ transition: 'opacity 0.5s ease' }}
            />
          ))}
          <text
            x="80" y="290" fill="#94a3b8" fontSize="13" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            White Light
          </text>
        </g>

        {/* ===== INCOMING RAINBOW BEAMS ===== */}
        {showBeams && (
          <g>
            {/* Red → upper iris */}
            <line
              x1="115" y1="240" x2="500" y2="155"
              stroke="#ff3333" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw"
            />
            {/* Orange */}
            <line
              x1="115" y1="240" x2="500" y2="172"
              stroke="#ff8833" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.06s' }}
            />
            {/* Yellow */}
            <line
              x1="115" y1="240" x2="500" y2="190"
              stroke="#ffcc00" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.12s' }}
            />
            {/* Green → lower iris */}
            <line
              x1="115" y1="240" x2="500" y2="290"
              stroke="#33cc55" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.18s' }}
            />
            {/* Blue */}
            <line
              x1="115" y1="240" x2="500" y2="308"
              stroke="#3388ff" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.24s' }}
            />
            {/* Violet */}
            <line
              x1="115" y1="240" x2="500" y2="325"
              stroke="#9944ff" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.30s' }}
            />
          </g>
        )}

        {/* ===== SCATTERING & PASS-THROUGH ===== */}
        {showScattering && (
          <g>
            {/* Red/orange/yellow pass THROUGH the iris (continue into the eye) */}
            <line
              x1="522" y1="155" x2="680" y2="195"
              stroke="#ff3333" strokeWidth="2" opacity="0.5"
              className="beam-draw" style={{ animationDelay: '0.05s' }}
            />
            <line
              x1="522" y1="172" x2="680" y2="205"
              stroke="#ff8833" strokeWidth="2" opacity="0.5"
              className="beam-draw" style={{ animationDelay: '0.1s' }}
            />
            <line
              x1="522" y1="190" x2="680" y2="215"
              stroke="#ffcc00" strokeWidth="2" opacity="0.5"
              className="beam-draw" style={{ animationDelay: '0.15s' }}
            />

            {/* Pass-through label */}
            <text
              x="620" y="170" fill="#94a3b8" fontSize="11"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.2s' }}
            >
              Passes through
            </text>

            {/* === SCATTER BURSTS at each collagen fibre hit point === */}
            {/* Green scatter burst at y=290 */}
            {[150, 190, 220, 260, 310, 340].map((angle, i) => (
              <line
                key={`scatter-g-${i}`}
                x1="500" y1="290"
                x2={500 + Math.cos((angle * Math.PI) / 180) * 55}
                y2={290 + Math.sin((angle * Math.PI) / 180) * 55}
                stroke="#44cc88" strokeWidth="1.5" opacity="0.35"
                filter="url(#blue-beam-glow)"
                className="scatter-ray" style={{ animationDelay: `${i * 0.04}s` }}
              />
            ))}

            {/* Blue scatter burst at y=308 */}
            {[140, 170, 210, 250, 290, 330].map((angle, i) => (
              <line
                key={`scatter-b-${i}`}
                x1="500" y1="308"
                x2={500 + Math.cos((angle * Math.PI) / 180) * 60}
                y2={308 + Math.sin((angle * Math.PI) / 180) * 60}
                stroke="#3399ff" strokeWidth="1.5" opacity="0.4"
                filter="url(#blue-beam-glow)"
                className="scatter-ray" style={{ animationDelay: `${0.06 + i * 0.04}s` }}
              />
            ))}

            {/* Violet scatter burst at y=325 */}
            {[160, 195, 230, 270, 300, 350].map((angle, i) => (
              <line
                key={`scatter-v-${i}`}
                x1="500" y1="325"
                x2={500 + Math.cos((angle * Math.PI) / 180) * 50}
                y2={325 + Math.sin((angle * Math.PI) / 180) * 50}
                stroke="#8855ff" strokeWidth="1.5" opacity="0.35"
                filter="url(#blue-beam-glow)"
                className="scatter-ray" style={{ animationDelay: `${0.12 + i * 0.04}s` }}
              />
            ))}

            {/* Scatter glow centres */}
            <circle
              cx="500" cy="290" r="8" fill="#44cc88" opacity="0.3"
              filter="url(#blue-scatter-glow)" className="pulse-absorb"
            />
            <circle
              cx="500" cy="308" r="10" fill="#3399ff" opacity="0.4"
              filter="url(#blue-scatter-glow)" className="pulse-absorb"
            />
            <circle
              cx="500" cy="325" r="8" fill="#8855ff" opacity="0.3"
              filter="url(#blue-scatter-glow)" className="pulse-absorb"
            />

            {/* Rayleigh scattering label at iris */}
            <text
              x="548" y="312" fill="#60a5fa" fontSize="11"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.2s' }}
            >
              Rayleigh scattering
            </text>

            {/* Stronger blue rays that reach the viewer (subset of the scatter) */}
            <line
              x1="500" y1="290" x2="165" y2="340"
              stroke="#44aaff" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.2s' }}
            />
            <line
              x1="500" y1="308" x2="165" y2="340"
              stroke="#3388ff" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.28s' }}
            />
            <line
              x1="500" y1="325" x2="165" y2="340"
              stroke="#7744ff" strokeWidth="2.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.36s' }}
            />
            {/* Blue overlay — colours merge into blue toward viewer */}
            <line
              x1="500" y1="290" x2="165" y2="340"
              stroke="url(#blue-merge-grad)" strokeWidth="3.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.2s' }}
            />
            <line
              x1="500" y1="308" x2="165" y2="340"
              stroke="url(#blue-merge-grad)" strokeWidth="3.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.28s' }}
            />
            <line
              x1="500" y1="325" x2="165" y2="340"
              stroke="url(#blue-merge-grad)" strokeWidth="3.5" filter="url(#blue-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.36s' }}
            />

            {/* Blue light label */}
            <text
              x="235" y="390" fill="#60a5fa" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.4s' }}
            >
              Blue light scatters back
            </text>
            <path
              d="M 255 380 L 240 370"
              fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.6"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            />

            {/* Viewer icon */}
            <g
              className="label-appear"
              style={{ animationDelay: '0.5s' }}
            >
              <ellipse
                cx="150" cy="340" rx="16" ry="10"
                fill="none" stroke="#60a5fa" strokeWidth="1.5"
              />
              <circle cx="150" cy="340" r="4" fill="#60a5fa" />
            </g>
            <text
              x="125" y="370" fill="#60a5fa" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.6s' }}
            >
              We see blue
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

function BrownEyeAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showAbsorption = build >= 2;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="absorb-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="brown-merge-grad" gradientUnits="userSpaceOnUse" x1="500" y1="0" x2="165" y2="0">
            <stop offset="0%" stopColor="#8B5E3C" stopOpacity="0" />
            <stop offset="65%" stopColor="#8B5E3C" stopOpacity="0" />
            <stop offset="90%" stopColor="#8B5E3C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8B5E3C" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ===== EYE CROSS-SECTION ===== */}
        <g>
          {/* Sclera (outer eye wall) */}
          <ellipse
            cx="650" cy="240" rx="160" ry="125"
            fill="#0f172a" stroke="#475569" strokeWidth="2.5"
          />
          {/* Inner fill */}
          <ellipse
            cx="650" cy="240" rx="155" ry="120"
            fill="#0c1222" opacity="0.8"
          />

          {/* Cornea (front transparent bulge) */}
          <path
            d="M 497 145 Q 460 240 497 335"
            fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.5"
          />

          {/* Iris - upper portion */}
          <rect
            x="500" y="140" width="22" height="68" rx="4"
            fill="#8B5E3C" stroke="#6B4226" strokeWidth="1"
          />
          {/* Iris - lower portion */}
          <rect
            x="500" y="272" width="22" height="68" rx="4"
            fill="#8B5E3C" stroke="#6B4226" strokeWidth="1"
          />

          {/* Melanin granules - upper iris */}
          <circle cx="511" cy="155" r="3" fill="#3E1F0D" />
          <circle cx="511" cy="170" r="2.5" fill="#3E1F0D" />
          <circle cx="511" cy="185" r="3" fill="#3E1F0D" />
          <circle cx="511" cy="196" r="2" fill="#3E1F0D" />

          {/* Melanin granules - lower iris */}
          <circle cx="511" cy="285" r="3" fill="#3E1F0D" />
          <circle cx="511" cy="300" r="2.5" fill="#3E1F0D" />
          <circle cx="511" cy="315" r="3" fill="#3E1F0D" />
          <circle cx="511" cy="328" r="2" fill="#3E1F0D" />

          {/* Pupil (dark opening) */}
          <rect
            x="500" y="208" width="22" height="64" rx="2"
            fill="#020617"
          />

          {/* Lens */}
          <ellipse
            cx="545" cy="240" rx="12" ry="28"
            fill="none" stroke="#93c5fd" strokeWidth="1.5" opacity="0.35"
          />

          {/* Retina */}
          <path
            d="M 770 165 Q 805 240 770 315"
            fill="none" stroke="#ef4444" strokeWidth="2.5" opacity="0.5"
          />

          {/* Optic nerve stub */}
          <line
            x1="800" y1="240" x2="810" y2="240"
            stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" opacity="0.3"
          />
        </g>

        {/* ===== LABELS ===== */}
        <text
          x="473" y="125" fill="#94a3b8" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-sans)"
        >
          Cornea
        </text>
        <line
          x1="478" y1="128" x2="490" y2="142"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="511" y="388" fill="#D2691E" fontSize="13" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600"
        >
          Iris (melanin)
        </text>
        <line
          x1="511" y1="376" x2="511" y2="345"
          stroke="#D2691E" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="545" y="125" fill="#94a3b8" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-sans)"
        >
          Lens
        </text>
        <line
          x1="545" y1="128" x2="545" y2="210"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        <text
          x="790" y="148" fill="#94a3b8" fontSize="12"
          fontFamily="var(--font-sans)"
        >
          Retina
        </text>
        <line
          x1="790" y1="151" x2="775" y2="165"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.4"
        />

        {/* ===== LIGHT SOURCE ===== */}
        <g>
          <circle
            cx="80" cy="240" r="22" fill="#fbbf24"
            opacity={showBeams ? 1 : 0.35}
            style={{ transition: 'opacity 0.5s ease' }}
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={80 + Math.cos((angle * Math.PI) / 180) * 26}
              y1={240 + Math.sin((angle * Math.PI) / 180) * 26}
              x2={80 + Math.cos((angle * Math.PI) / 180) * 35}
              y2={240 + Math.sin((angle * Math.PI) / 180) * 35}
              stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
              opacity={showBeams ? 0.8 : 0.25}
              style={{ transition: 'opacity 0.5s ease' }}
            />
          ))}
          <text
            x="80" y="290" fill="#94a3b8" fontSize="13" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            White Light
          </text>
        </g>

        {/* ===== INCOMING RAINBOW BEAMS ===== */}
        {showBeams && (
          <g>
            {/* Red → upper iris */}
            <line
              x1="115" y1="240" x2="500" y2="155"
              stroke="#ff3333" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw"
            />
            {/* Orange */}
            <line
              x1="115" y1="240" x2="500" y2="172"
              stroke="#ff8833" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.06s' }}
            />
            {/* Yellow */}
            <line
              x1="115" y1="240" x2="500" y2="190"
              stroke="#ffcc00" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.12s' }}
            />
            {/* Green → lower iris */}
            <line
              x1="115" y1="240" x2="500" y2="290"
              stroke="#33cc55" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.18s' }}
            />
            {/* Blue */}
            <line
              x1="115" y1="240" x2="500" y2="308"
              stroke="#3388ff" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.24s' }}
            />
            {/* Violet */}
            <line
              x1="115" y1="240" x2="500" y2="325"
              stroke="#9944ff" strokeWidth="2.5" filter="url(#beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.30s' }}
            />
          </g>
        )}

        {/* ===== ABSORPTION & REFLECTION ===== */}
        {showAbsorption && (
          <g>
            {/* Absorption glow on green/blue/violet at iris */}
            <circle
              cx="511" cy="290" r="10" fill="#33cc55" opacity="0.25"
              filter="url(#absorb-glow)" className="pulse-absorb"
            />
            <circle
              cx="511" cy="308" r="10" fill="#3388ff" opacity="0.25"
              filter="url(#absorb-glow)" className="pulse-absorb"
            />
            <circle
              cx="511" cy="325" r="10" fill="#9944ff" opacity="0.25"
              filter="url(#absorb-glow)" className="pulse-absorb"
            />

            {/* X marks on absorbed beams */}
            <g fill="#ff6b6b" fontSize="16" fontWeight="bold" fontFamily="var(--font-sans)">
              <text x="526" y="295" className="label-appear">&#x2715;</text>
              <text
                x="526" y="313" className="label-appear"
                style={{ animationDelay: '0.08s' }}
              >
                &#x2715;
              </text>
              <text
                x="526" y="330" className="label-appear"
                style={{ animationDelay: '0.16s' }}
              >
                &#x2715;
              </text>
            </g>

            {/* Absorbed label */}
            <text
              x="548" y="312" fill="#f87171" fontSize="11"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.2s' }}
            >
              Absorbed
            </text>

            {/* Reflected beams (red + orange + yellow, converging to viewer) */}
            <line
              x1="500" y1="155" x2="165" y2="148"
              stroke="#ff3333" strokeWidth="3" filter="url(#beam-glow)"
              className="beam-reflect"
            />
            <line
              x1="500" y1="172" x2="165" y2="148"
              stroke="#ff8833" strokeWidth="3" filter="url(#beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.08s' }}
            />
            <line
              x1="500" y1="190" x2="165" y2="148"
              stroke="#ffcc00" strokeWidth="3" filter="url(#beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.16s' }}
            />
            {/* Brown overlay — colours merge into brown toward viewer */}
            <line
              x1="500" y1="155" x2="165" y2="148"
              stroke="url(#brown-merge-grad)" strokeWidth="4" filter="url(#beam-glow)"
              className="beam-reflect"
            />
            <line
              x1="500" y1="172" x2="165" y2="148"
              stroke="url(#brown-merge-grad)" strokeWidth="4" filter="url(#beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.08s' }}
            />
            <line
              x1="500" y1="190" x2="165" y2="148"
              stroke="url(#brown-merge-grad)" strokeWidth="4" filter="url(#beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.16s' }}
            />

            {/* Brown light label */}
            <text
              x="260" y="105" fill="#D2A679" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.3s' }}
            >
              Brown light reflects
            </text>
            <path
              d="M 275 110 L 255 120"
              fill="none" stroke="#D2A679" strokeWidth="1" opacity="0.6"
              className="label-appear" style={{ animationDelay: '0.3s' }}
            />

            {/* Viewer icon */}
            <g
              className="label-appear"
              style={{ animationDelay: '0.4s' }}
            >
              {/* Simple eye icon drawn in SVG */}
              <ellipse
                cx="150" cy="148" rx="16" ry="10"
                fill="none" stroke="#D2A679" strokeWidth="1.5"
              />
              <circle cx="150" cy="148" r="4" fill="#D2A679" />
            </g>
            <text
              x="122" y="178" fill="#D2A679" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.5s' }}
            >
              We see brown
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

function IncandescenceAnimation({ build }: { build: number }) {
  const showRadiation = build >= 1;
  const showLabels = build >= 2;

  const stages = [
    {
      x: 155,
      temp: '~1,000K',
      example: 'Red hot iron',
      coreColor: '#DC2626',
      strokeColor: '#7F1D1D',
      glowColor: '#DC2626',
      beamColors: ['#7F1D1D', '#991B1B', '#DC2626', '#B91C1C', '#7F1D1D'],
    },
    {
      x: 340,
      temp: '~2,000K',
      example: 'Candle flame',
      coreColor: '#F59E0B',
      strokeColor: '#B45309',
      glowColor: '#F59E0B',
      beamColors: ['#DC2626', '#EA580C', '#F59E0B', '#FBBF24', '#EF4444'],
    },
    {
      x: 530,
      temp: '~4,000K',
      example: 'Warm white bulb',
      coreColor: '#FDE68A',
      strokeColor: '#D97706',
      glowColor: '#FBBF24',
      beamColors: ['#EF4444', '#F59E0B', '#FEF3C7', '#FBBF24', '#FCD34D'],
    },
    {
      x: 720,
      temp: '~10,000K',
      example: 'Blue-white star',
      coreColor: '#DBEAFE',
      strokeColor: '#3B82F6',
      glowColor: '#60A5FA',
      beamColors: ['#93C5FD', '#60A5FA', '#DBEAFE', '#A5B4FC', '#818CF8'],
    },
  ];

  const beamOffsets = [
    { dx: -50, dy: -85 },
    { dx: -25, dy: -95 },
    { dx: 0, dy: -100 },
    { dx: 25, dy: -95 },
    { dx: 50, dy: -85 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 60 1000 370" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="inc-glow">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="inc-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {stages.map((stage, i) => (
            <radialGradient key={i} id={`inc-glow-${i}`}>
              <stop offset="0%" stopColor={stage.glowColor} stopOpacity="0.6" />
              <stop offset="60%" stopColor={stage.glowColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor={stage.glowColor} stopOpacity="0" />
            </radialGradient>
          ))}
          <marker
            id="inc-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
          </marker>
        </defs>

        {/* ===== TEMPERATURE AXIS ===== */}
        <line
          x1="110" y1="366" x2="810" y2="366"
          stroke="#64748b" strokeWidth="1.5"
          markerEnd="url(#inc-arrow)"
        />
        <text
          x="60" y="370" fill="#94a3b8" fontSize="12"
          fontFamily="var(--font-sans)"
        >
          Cooler
        </text>
        <text
          x="825" y="370" fill="#94a3b8" fontSize="12"
          fontFamily="var(--font-sans)"
        >
          Hotter
        </text>

        {/* ===== HEATED OBJECTS ===== */}
        {stages.map((stage, i) => (
          <g key={i}>
            {/* Outer glow */}
            <circle
              cx={stage.x} cy={230} r={showRadiation ? 50 : 35}
              fill={`url(#inc-glow-${i})`}
              opacity={showRadiation ? 1 : 0.5}
              style={{ transition: 'all 0.6s ease' }}
            />

            {/* Core sphere */}
            <circle
              cx={stage.x} cy={230} r="24"
              fill={stage.coreColor}
              stroke={stage.strokeColor}
              strokeWidth="2"
            />

            {/* Metallic texture lines */}
            <line
              x1={stage.x - 12} y1={224}
              x2={stage.x + 12} y2={224}
              stroke={stage.strokeColor} strokeWidth="0.8" opacity="0.4"
            />
            <line
              x1={stage.x - 14} y1={230}
              x2={stage.x + 14} y2={230}
              stroke={stage.strokeColor} strokeWidth="0.8" opacity="0.4"
            />
            <line
              x1={stage.x - 12} y1={236}
              x2={stage.x + 12} y2={236}
              stroke={stage.strokeColor} strokeWidth="0.8" opacity="0.4"
            />

            {/* Temperature label */}
            <text
              x={stage.x} y={280}
              fill="#e2e8f0" fontSize="14" fontWeight="600"
              textAnchor="middle" fontFamily="var(--font-sans)"
            >
              {stage.temp}
            </text>

            {/* Example label */}
            <text
              x={stage.x} y={298}
              fill="#94a3b8" fontSize="11"
              textAnchor="middle" fontFamily="var(--font-sans)"
            >
              {stage.example}
            </text>
          </g>
        ))}

        {/* ===== RADIATION BEAMS (build >= 1) ===== */}
        {showRadiation && stages.map((stage, stageIdx) => (
          <g key={`rad-${stageIdx}`}>
            {/* Pulsing glow at core */}
            <circle
              cx={stage.x} cy={230} r="28"
              fill={stage.glowColor} opacity="0.25"
              filter="url(#inc-glow)"
              className="pulse-absorb"
            />

            {/* Fan of radiation beams */}
            {beamOffsets.map((offset, beamIdx) => (
              <line
                key={beamIdx}
                x1={stage.x} y1={206}
                x2={stage.x + offset.dx} y2={206 + offset.dy}
                stroke={stage.beamColors[beamIdx]}
                strokeWidth="2.5"
                filter="url(#inc-beam-glow)"
                className="beam-draw"
                style={{ animationDelay: `${stageIdx * 0.2 + beamIdx * 0.04}s` }}
              />
            ))}
          </g>
        ))}

        {/* ===== INSIGHT LABELS (build >= 2) ===== */}
        {showLabels && (
          <g>
            {/* Headline */}
            <text
              x="440" y="90" fill="#fbbf24" fontSize="15" fontWeight="600"
              textAnchor="middle" fontFamily="var(--font-sans)"
              className="label-appear"
            >
              Hotter  →  peak shifts to shorter wavelengths  →  bluer colour
            </text>

            {/* Wavelength annotations under each stage */}
            {[
              { x: 155, text: 'λ peak ≈ 3,000nm', color: '#DC2626', sub: '(mostly infrared)' },
              { x: 340, text: 'λ peak ≈ 1,400nm', color: '#F59E0B', sub: '(near infrared)' },
              { x: 530, text: 'λ peak ≈ 700nm', color: '#FDE68A', sub: '(visible red edge)' },
              { x: 720, text: 'λ peak ≈ 290nm', color: '#93C5FD', sub: '(ultraviolet)' },
            ].map((label, i) => (
              <g key={`wl-${i}`}>
                <text
                  x={label.x} y={328}
                  fill={label.color} fontSize="10" fontWeight="500"
                  textAnchor="middle" fontFamily="var(--font-sans)"
                  className="label-appear"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  {label.text}
                </text>
                <text
                  x={label.x} y={342}
                  fill="#64748b" fontSize="9"
                  textAnchor="middle" fontFamily="var(--font-sans)"
                  className="label-appear"
                  style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                >
                  {label.sub}
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}

function LuminescenceAnimation({ build }: { build: number }) {
  const showExcitation = build >= 1;
  const showEmission = build >= 2;

  // Energy level y-positions
  const ground = 340;
  const excited = 140;
  const mid = 240;

  // Atom center
  const atomX = 480;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="lum-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="lum-photon-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="electron-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ===== ENERGY LEVEL DIAGRAM ===== */}

        {/* Ground state energy level */}
        <line
          x1="300" y1={ground} x2="660" y2={ground}
          stroke="#475569" strokeWidth="2"
        />
        <text
          x="280" y={ground + 5} fill="#94a3b8" fontSize="13" textAnchor="end"
          fontFamily="var(--font-sans)"
        >
          Ground state
        </text>
        <text
          x="280" y={ground + 20} fill="#64748b" fontSize="11" textAnchor="end"
          fontFamily="var(--font-sans)"
        >
          (E₁)
        </text>

        {/* Excited state energy level */}
        <line
          x1="300" y1={excited} x2="660" y2={excited}
          stroke="#475569" strokeWidth="2"
        />
        <text
          x="280" y={excited + 5} fill="#94a3b8" fontSize="13" textAnchor="end"
          fontFamily="var(--font-sans)"
        >
          Excited state
        </text>
        <text
          x="280" y={excited + 20} fill="#64748b" fontSize="11" textAnchor="end"
          fontFamily="var(--font-sans)"
        >
          (E₂)
        </text>

        {/* Energy axis arrow */}
        <line
          x1="700" y1={ground + 20} x2="700" y2={excited - 20}
          stroke="#64748b" strokeWidth="1.5"
        />
        <polygon
          points={`700,${excited - 25} 695,${excited - 15} 705,${excited - 15}`}
          fill="#64748b"
        />
        <text
          x="720" y={mid} fill="#64748b" fontSize="12"
          fontFamily="var(--font-sans)" textAnchor="middle"
          transform={`rotate(-90, 720, ${mid})`}
        >
          Energy
        </text>

        {/* ===== NUCLEUS ===== */}
        <circle
          cx={atomX} cy={ground} r="12"
          fill="#334155" stroke="#64748b" strokeWidth="1.5"
        />
        <text
          x={atomX} y={ground + 4} fill="#94a3b8" fontSize="9" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="bold"
        >
          +
        </text>

        {/* ===== ELECTRON AT GROUND STATE (before excitation) ===== */}
        {!showExcitation && (
          <g>
            <circle
              cx={atomX + 60} cy={ground} r="8"
              fill="#60a5fa" filter="url(#electron-glow)"
            />
            <text
              x={atomX + 60} y={ground + 3} fill="white" fontSize="8" textAnchor="middle"
              fontFamily="var(--font-sans)" fontWeight="bold"
            >
              e⁻
            </text>
          </g>
        )}

        {/* ===== BUILD 1: EXCITATION ===== */}
        {showExcitation && !showEmission && (
          <g>
            {/* Incoming energy (UV photon from left) */}
            <line
              x1="100" y1={mid} x2={atomX - 30} y2={mid}
              stroke="#a855f7" strokeWidth="3" filter="url(#lum-glow)"
              className="beam-draw"
            />
            {/* Wavy photon symbol */}
            <path
              d="M 100 240 Q 108 230, 116 240 Q 124 250, 132 240 Q 140 230, 148 240"
              fill="none" stroke="#a855f7" strokeWidth="2.5" filter="url(#lum-glow)"
              className="label-appear"
            />
            <text
              x="130" y="270" fill="#a855f7" fontSize="13" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.2s' }}
            >
              Energy in
            </text>
            <text
              x="130" y="285" fill="#7c3aed" fontSize="11"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.3s' }}
            >
              (UV / electricity / heat)
            </text>

            {/* Upward arrow showing electron jumping */}
            <line
              x1={atomX + 60} y1={ground - 15} x2={atomX + 60} y2={excited + 15}
              stroke="#facc15" strokeWidth="2.5" strokeDasharray="6 3"
              filter="url(#lum-glow)"
              className="beam-draw"
            />
            <polygon
              points={`${atomX + 60},${excited + 10} ${atomX + 55},${excited + 22} ${atomX + 65},${excited + 22}`}
              fill="#facc15"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            />

            {/* Electron at excited state */}
            <circle
              cx={atomX + 60} cy={excited} r="8"
              fill="#facc15" filter="url(#electron-glow)"
              className="label-appear" style={{ animationDelay: '0.5s' }}
            />
            <text
              x={atomX + 60} y={excited + 3} fill="#1e293b" fontSize="8" textAnchor="middle"
              fontFamily="var(--font-sans)" fontWeight="bold"
              className="label-appear" style={{ animationDelay: '0.5s' }}
            >
              e⁻
            </text>

            {/* Label */}
            <text
              x={atomX + 100} y={excited - 15} fill="#facc15" fontSize="13" fontWeight="600"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            >
              Electron jumps up
            </text>
          </g>
        )}

        {/* ===== BUILD 2: EMISSION ===== */}
        {showEmission && (
          <g>
            {/* Downward arrow showing electron falling back */}
            <line
              x1={atomX + 60} y1={excited + 15} x2={atomX + 60} y2={ground - 15}
              stroke="#22d3ee" strokeWidth="2.5" strokeDasharray="6 3"
              filter="url(#lum-glow)"
              className="beam-draw"
            />
            <polygon
              points={`${atomX + 60},${ground - 10} ${atomX + 55},${ground - 22} ${atomX + 65},${ground - 22}`}
              fill="#22d3ee"
              className="label-appear" style={{ animationDelay: '0.3s' }}
            />

            {/* Electron back at ground state */}
            <circle
              cx={atomX + 60} cy={ground} r="8"
              fill="#60a5fa" filter="url(#electron-glow)"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            />
            <text
              x={atomX + 60} y={ground + 3} fill="white" fontSize="8" textAnchor="middle"
              fontFamily="var(--font-sans)" fontWeight="bold"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            >
              e⁻
            </text>

            {/* Label: falls back */}
            <text
              x={atomX + 100} y={mid} fill="#22d3ee" fontSize="13" fontWeight="600"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.2s' }}
            >
              Falls back down
            </text>

            {/* Emitted photon shooting out to the right */}
            <line
              x1={atomX + 80} y1={mid} x2="900" y2={mid}
              stroke="#4ade80" strokeWidth="3.5" filter="url(#lum-photon-glow)"
              className="beam-draw" style={{ animationDelay: '0.5s' }}
            />
            {/* Wavy photon symbol */}
            <path
              d="M 830 240 Q 838 228, 846 240 Q 854 252, 862 240 Q 870 228, 878 240"
              fill="none" stroke="#4ade80" strokeWidth="3" filter="url(#lum-photon-glow)"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            />

            {/* Emitted photon label */}
            <text
              x="850" y="210" fill="#4ade80" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.8s' }}
            >
              Photon out
            </text>
            <text
              x="850" y="285" fill="#4ade80" fontSize="12"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.9s' }}
            >
              Specific colour
            </text>
            <text
              x="850" y="300" fill="#4ade80" fontSize="11"
              fontFamily="var(--font-sans)" textAnchor="middle" opacity="0.7"
              className="label-appear" style={{ animationDelay: '1.0s' }}
            >
              (ΔE = hf)
            </text>

            {/* Delta E label between levels */}
            <line
              x1="340" y1={excited + 5} x2="340" y2={ground - 5}
              stroke="#4ade80" strokeWidth="1.5" opacity="0.5"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            />
            <polygon
              points="340,145 336,155 344,155"
              fill="#4ade80" opacity="0.5"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            />
            <polygon
              points="340,335 336,325 344,325"
              fill="#4ade80" opacity="0.5"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            />
            <text
              x="325" y={mid + 5} fill="#4ade80" fontSize="12"
              fontFamily="var(--font-sans)" textAnchor="end" opacity="0.7"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            >
              ΔE
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
