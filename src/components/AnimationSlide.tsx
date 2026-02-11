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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-lg md:text-xl text-slate-400 mb-4">{slide.content}</p>
          )}
          <BrownEyeAnimation build={build} />
          <p
            className={`text-xl md:text-2xl text-slate-200 mt-4 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Melanin absorbs short wavelengths (blue, green, violet).
            The remaining reflected light — red, orange, yellow — combines
            to appear <span className="text-amber-400 font-semibold">brown</span>.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'blue-eye') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-lg md:text-xl text-slate-400 mb-4">{slide.content}</p>
          )}
          <BlueEyeAnimation build={build} />
          <p
            className={`text-xl md:text-2xl text-slate-200 mt-4 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Collagen fibres in the iris scatter short wavelengths (blue, violet)
            back toward the observer. Long wavelengths pass straight through.
            The eye contains <span className="text-sky-400 font-semibold">zero blue pigment</span>.
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
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 960 480" className="w-full h-auto">
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

            {/* Faint white beam through pupil to retina */}
            <line
              x1="115" y1="240" x2="770" y2="240"
              stroke="#ffffff" strokeWidth="1" opacity="0.12"
              className="beam-draw" style={{ animationDelay: '0.35s' }}
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
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 960 480" className="w-full h-auto">
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

            {/* Faint white beam through pupil to retina */}
            <line
              x1="115" y1="240" x2="770" y2="240"
              stroke="#ffffff" strokeWidth="1" opacity="0.12"
              className="beam-draw" style={{ animationDelay: '0.35s' }}
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

            {/* Reflected beams (red + orange + yellow → brown, converging to viewer) */}
            <line
              x1="500" y1="155" x2="165" y2="148"
              stroke="#C47030" strokeWidth="3" filter="url(#beam-glow)"
              className="beam-reflect"
            />
            <line
              x1="500" y1="172" x2="165" y2="148"
              stroke="#B86028" strokeWidth="3" filter="url(#beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.08s' }}
            />
            <line
              x1="500" y1="190" x2="165" y2="148"
              stroke="#A85520" strokeWidth="3" filter="url(#beam-glow)"
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
