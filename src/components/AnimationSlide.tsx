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

  if (slide.animationId === 'blue-sky') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <BlueSkyAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Nitrogen and oxygen molecules scatter short wavelengths (blue, violet)
            in all directions. Longer wavelengths (red, orange) pass straight through.
            Result: <span className="text-sky-400 font-semibold">blue sky</span>,{' '}
            <span className="text-orange-400 font-semibold">red sunsets</span>.
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

  if (slide.animationId === 'transition-metal') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <TransitionMetalAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            The d-orbital energy gap acts as a colour filter — photons matching{' '}
            <span className="text-amber-400 font-semibold">ΔE</span> are absorbed, the rest reflect back.
            Change the gap, change the{' '}
            <span className="text-cyan-400 font-semibold">colour</span>.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'water-blue') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <WaterBlueAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            O‑H bonds vibrate — their overtones absorb{' '}
            <span className="text-red-400 font-semibold">red light</span>. Over metres of depth,
            only <span className="text-sky-400 font-semibold">blue</span> survives. No pigment,
            no electrons jumping — just atoms shaking.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'diffraction') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <DiffractionAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 mt-2 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            Each wavelength diffracts at a <span className="text-cyan-400 font-semibold">different angle</span> —
            shorter wavelengths (blue/violet) bend less, longer wavelengths (red) bend more.
            The grating spacing determines which colours appear where.
          </p>
        </div>
      </SlideWrapper>
    );
  }

  if (slide.animationId === 'thin-film') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 font-display text-white">
            {slide.title}
          </h2>
          {slide.content && (
            <p className="text-base md:text-lg text-slate-400 mb-2">{slide.content}</p>
          )}
          <ThinFilmInterferenceAnimation build={build} />
          <p
            className={`text-lg md:text-xl text-slate-200 -mt-8 text-center max-w-3xl leading-relaxed transition-opacity duration-500 ${build >= 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            Light reflects from both the <span className="text-sky-400 font-semibold">top</span> and{' '}
            <span className="text-sky-400 font-semibold">bottom</span> of a thin film.
            When the two reflections are in phase they{' '}
            <span className="text-green-400 font-semibold">reinforce</span>; out of phase they{' '}
            <span className="text-red-400 font-semibold">cancel</span>. Film thickness picks the colour.
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

        {/* ===== ANIMATED ELECTRON ===== */}
        <g
          style={{
            transition: `transform 0.6s ease-out ${showExcitation && !showEmission ? '0.55s' : '0.15s'}`,
            transform: `translateY(${showExcitation && !showEmission ? excited - ground : 0}px)`,
          }}
        >
          <circle
            cx={atomX + 60} cy={ground} r="8"
            fill={showExcitation && !showEmission ? '#facc15' : '#60a5fa'}
            filter="url(#electron-glow)"
            style={{ transition: `fill 0.6s ease-out ${showExcitation && !showEmission ? '0.55s' : '0.15s'}` }}
          />
          <text
            x={atomX + 60} y={ground + 3}
            fill={showExcitation && !showEmission ? '#1e293b' : 'white'}
            fontSize="8" textAnchor="middle"
            fontFamily="var(--font-sans)" fontWeight="bold"
            style={{ transition: `fill 0.6s ease-out ${showExcitation && !showEmission ? '0.55s' : '0.15s'}` }}
          >
            e⁻
          </text>
        </g>

        {/* ===== BUILD 1: EXCITATION ===== */}
        {showExcitation && !showEmission && (
          <g>
            {/* Animated incoming photon (travels diagonally from mid to electron) */}
            <g className="photon-in">
              <g transform={`rotate(13, 110, ${mid})`}>
                <path
                  d={`M 80 ${mid} Q 90 ${mid - 14}, 100 ${mid} Q 110 ${mid + 14}, 120 ${mid} Q 130 ${mid - 14}, 140 ${mid}`}
                  fill="none" stroke="#a855f7" strokeWidth="3" filter="url(#lum-glow)"
                />
                <circle cx="110" cy={mid} r="10" fill="#a855f7" opacity="0.4" filter="url(#lum-photon-glow)" />
              </g>
            </g>

            {/* Energy in labels */}
            <text
              x="130" y={mid - 20} fill="#a855f7" fontSize="13" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear"
            >
              Energy in
            </text>
            <text
              x="130" y={mid - 5} fill="#7c3aed" fontSize="11"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.1s' }}
            >
              (UV / electricity / heat)
            </text>

            {/* Upward arrow showing electron jumping */}
            <line
              x1={atomX + 60} y1={ground - 15} x2={atomX + 60} y2={excited + 15}
              stroke="#facc15" strokeWidth="2.5" strokeDasharray="6 3"
              filter="url(#lum-glow)"
              className="beam-draw"
              style={{ animationDelay: '0.5s' }}
            />
            <polygon
              points={`${atomX + 60},${excited + 10} ${atomX + 55},${excited + 22} ${atomX + 65},${excited + 22}`}
              fill="#facc15"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            />

            {/* Label */}
            <text
              x={atomX + 100} y={excited - 15} fill="#facc15" fontSize="13" fontWeight="600"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.9s' }}
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

            {/* Label: falls back */}
            <text
              x={atomX + 100} y={mid} fill="#22d3ee" fontSize="13" fontWeight="600"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.2s' }}
            >
              Falls back down
            </text>

            {/* Emission flash at electron position during mid-fall */}
            <g style={{ transform: `translate(${atomX + 60}px, ${mid}px)` }}>
              <circle
                cx="0" cy="0" r="18"
                fill="#4ade80" filter="url(#lum-photon-glow)"
                className="photon-burst"
                style={{ animationDelay: '0.45s' }}
              />
            </g>

            {/* Animated emitted photon (from mid-fall point to right) */}
            <g style={{ animation: 'photon-out 0.8s ease-out 0.5s forwards', opacity: 0 }}>
              <path
                d={`M ${atomX + 80} ${mid} Q ${atomX + 90} ${mid - 14}, ${atomX + 100} ${mid} Q ${atomX + 110} ${mid + 14}, ${atomX + 120} ${mid} Q ${atomX + 130} ${mid - 14}, ${atomX + 140} ${mid}`}
                fill="none" stroke="#4ade80" strokeWidth="3.5" filter="url(#lum-photon-glow)"
              />
              <circle cx={atomX + 110} cy={mid} r="12" fill="#4ade80" opacity="0.4" filter="url(#lum-photon-glow)" />
            </g>

            {/* Heat dissipation waves rising from atom */}
            {[
              { dx: -15, delay: 0.5 },
              { dx: 5, delay: 0.65 },
              { dx: 25, delay: 0.8 },
            ].map((h, i) => (
              <path
                key={`heat-${i}`}
                d={`M ${atomX + h.dx} ${excited - 10} q 4 -6, 0 -12 q -4 -6, 0 -12`}
                fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"
                className="heat-rise"
                style={{ animationDelay: `${h.delay}s` }}
              />
            ))}

            {/* Heat label */}
            <text
              x={atomX + 5} y={excited - 50} fill="#f97316" fontSize="11" fontWeight="600"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.9s' }}
            >
              Excess energy → heat
            </text>

            {/* Emitted photon label */}
            <text
              x="870" y={mid - 18} fill="#4ade80" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '1.1s' }}
            >
              Photon out
            </text>
            <text
              x="870" y={mid + 28} fill="#4ade80" fontSize="12"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '1.2s' }}
            >
              Lower energy (ΔE = hf)
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

function WaterBlueAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showAbsorption = build >= 2;

  const molecules = [
    { x: 290, y: 175 }, { x: 380, y: 310 }, { x: 450, y: 195 },
    { x: 530, y: 280 }, { x: 610, y: 170 }, { x: 680, y: 300 },
    { x: 350, y: 240 }, { x: 500, y: 330 }, { x: 580, y: 220 },
    { x: 720, y: 240 }, { x: 420, y: 280 }, { x: 650, y: 210 },
  ];

  const beams: {
    color: string;
    y: number;
    absorbX: number | null;
    delay: string;
    dimmed?: boolean;
  }[] = [
    { color: '#ff3333', y: 160, absorbX: 380, delay: '0s' },
    { color: '#ff8833', y: 185, absorbX: 460, delay: '0.06s' },
    { color: '#ffcc00', y: 210, absorbX: 560, delay: '0.12s' },
    { color: '#33cc55', y: 260, absorbX: null, delay: '0.18s', dimmed: true },
    { color: '#3388ff', y: 285, absorbX: null, delay: '0.24s' },
    { color: '#9944ff', y: 310, absorbX: null, delay: '0.30s' },
  ];

  const absorbedBeams = beams.filter(b => b.absorbX);
  const transmittedBeams = beams.filter(b => !b.absorbX);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="water-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="water-absorb-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="water-ray-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="water-tank-fill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.5" />
          </linearGradient>
          {absorbedBeams.map((beam, i) => (
            <linearGradient
              key={`fade-${i}`}
              id={`water-fade-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="230" y1="0" x2={beam.absorbX!} y2="0"
            >
              <stop offset="0%" stopColor={beam.color} stopOpacity="0.9" />
              <stop offset="70%" stopColor={beam.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={beam.color} stopOpacity="0" />
            </linearGradient>
          ))}
          <linearGradient id="water-blue-merge" gradientUnits="userSpaceOnUse" x1="230" y1="0" x2="830" y2="0">
            <stop offset="0%" stopColor="#3388ff" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#3388ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3388ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ===== WATER TANK ===== */}
        <rect
          x="230" y="130" width="600" height="220" rx="6"
          fill="url(#water-tank-fill)"
          stroke="#38bdf8" strokeWidth="2" opacity="0.6"
        />
        <path
          d="M 235 135 Q 350 128, 450 135 Q 550 142, 650 135 Q 750 128, 825 135"
          fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.3"
        />

        {/* ===== WATER MOLECULES (O-H bonds with vibration) ===== */}
        {molecules.map((mol, i) => {
          const vibrating = showBeams;
          const vibDuration = 0.4 + (i % 4) * 0.15;
          return (
            <g key={`mol-${i}`} opacity={showAbsorption ? 0.7 : 0.5}>
              {/* Oxygen atom (centre) */}
              <circle
                cx={mol.x} cy={mol.y} r="5"
                fill="#ef4444" stroke="#dc2626" strokeWidth="0.8"
              />
              <text
                x={mol.x} y={mol.y + 2.5} fill="white" fontSize="5"
                textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="bold"
              >
                O
              </text>

              {/* H atom 1 (upper-left) — vibrates */}
              <g
                className={vibrating ? 'oh-vibrate' : ''}
                style={vibrating ? { animationDuration: `${vibDuration}s`, animationDelay: `${i * 0.07}s` } : {}}
              >
                <line
                  x1={mol.x - 3} y1={mol.y - 3} x2={mol.x - 9} y2={mol.y - 7}
                  stroke="#94a3b8" strokeWidth="1.2"
                />
                <circle cx={mol.x - 10} cy={mol.y - 8} r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
                <text
                  x={mol.x - 10} y={mol.y - 6} fill="#475569" fontSize="4"
                  textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="bold"
                >
                  H
                </text>
              </g>

              {/* H atom 2 (upper-right) — vibrates with offset */}
              <g
                className={vibrating ? 'oh-vibrate' : ''}
                style={vibrating ? { animationDuration: `${vibDuration + 0.1}s`, animationDelay: `${i * 0.07 + 0.2}s` } : {}}
              >
                <line
                  x1={mol.x + 3} y1={mol.y - 3} x2={mol.x + 9} y2={mol.y - 7}
                  stroke="#94a3b8" strokeWidth="1.2"
                />
                <circle cx={mol.x + 10} cy={mol.y - 8} r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
                <text
                  x={mol.x + 10} y={mol.y - 6} fill="#475569" fontSize="4"
                  textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="bold"
                >
                  H
                </text>
              </g>
            </g>
          );
        })}

        {/* ===== TANK LABELS ===== */}
        <text
          x="530" y="380" fill="#38bdf8" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-sans)"
        >
          Water column — increasing depth →
        </text>
        <text x="240" y="365" fill="#64748b" fontSize="10" fontFamily="var(--font-sans)">0 m</text>
        <text x="430" y="365" fill="#64748b" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle">~5 m</text>
        <text x="625" y="365" fill="#64748b" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle">~10 m</text>
        <text x="810" y="365" fill="#64748b" fontSize="10" fontFamily="var(--font-sans)" textAnchor="end">~20 m</text>

        {/* Molecule legend */}
        <g>
          <circle cx="260" cy="398" r="4" fill="#ef4444" opacity="0.6" />
          <text x="270" y="401" fill="#94a3b8" fontSize="10" fontFamily="var(--font-sans)">
            = H₂O molecule (O‑H bonds)
          </text>
        </g>

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

        {/* ===== INCOMING RAINBOW BEAMS (build >= 1) ===== */}
        {showBeams && (
          <g>
            {beams.map((beam, i) => (
              <line
                key={`in-${i}`}
                x1="115" y1="240" x2="230" y2={beam.y}
                stroke={beam.color} strokeWidth="2.5" filter="url(#water-beam-glow)"
                className="beam-draw" style={{ animationDelay: beam.delay }}
              />
            ))}
          </g>
        )}

        {/* ===== TRAVELING LIGHT RAYS (build 1 — all colours traverse) ===== */}
        {showBeams && !showAbsorption && (
          <g>
            {/* Faint static track lines */}
            {beams.map((beam, i) => (
              <line
                key={`track-${i}`}
                x1="230" y1={beam.y} x2="830" y2={beam.y}
                stroke={beam.color} strokeWidth="1" opacity="0.15"
              />
            ))}
            {/* Animated ray dots — 3 staggered copies per colour */}
            {beams.flatMap((beam, bi) =>
              [0, 1, 2].map(copy => (
                <circle
                  key={`ray-${bi}-${copy}`}
                  cx="230" cy={beam.y} r="4"
                  fill={beam.color} opacity="0.9"
                  filter="url(#water-ray-glow)"
                  className="ray-travel"
                  style={{ animationDelay: `${copy * 1}s` }}
                />
              ))
            )}
          </g>
        )}

        {/* ===== ABSORPTION & TRANSMISSION (build >= 2) ===== */}
        {showAbsorption && (
          <g>
            {/* Absorbed beam faint tracks */}
            {absorbedBeams.map((beam, i) => (
              <line
                key={`abstrack-${i}`}
                x1="230" y1={beam.y} x2={beam.absorbX!} y2={beam.y}
                stroke={beam.color} strokeWidth="1" opacity="0.15"
              />
            ))}

            {/* Absorbed beam fade lines */}
            {absorbedBeams.map((beam, i) => (
              <g key={`abs-${i}`}>
                <line
                  x1="230" y1={beam.y} x2={beam.absorbX!} y2={beam.y}
                  stroke={`url(#water-fade-${i})`} strokeWidth="2.5"
                  filter="url(#water-beam-glow)"
                  className="beam-draw" style={{ animationDelay: `${i * 0.08}s` }}
                />
                <circle
                  cx={beam.absorbX!} cy={beam.y} r="8"
                  fill={beam.color} opacity="0.2"
                  filter="url(#water-absorb-glow)"
                  className="pulse-absorb"
                />
                <text
                  x={beam.absorbX! + 14} y={beam.y + 5}
                  fill="#ff6b6b" fontSize="14" fontWeight="bold"
                  fontFamily="var(--font-sans)"
                  className="label-appear" style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  &#x2715;
                </text>
              </g>
            ))}

            {/* Absorbed ray particles that fade out mid-travel */}
            {absorbedBeams.flatMap((beam, bi) =>
              [0, 1, 2].map(copy => (
                <circle
                  key={`abs-ray-${bi}-${copy}`}
                  cx="230" cy={beam.y} r="4"
                  fill={beam.color}
                  filter="url(#water-ray-glow)"
                  className="ray-travel-absorbed"
                  style={{ animationDelay: `${copy * 1}s` }}
                />
              ))
            )}

            {/* Absorbed label */}
            <text
              x="490" y="150" fill="#f87171" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.2s' }}
            >
              O‑H overtones absorb red
            </text>
            <path
              d="M 440 153 L 400 163"
              fill="none" stroke="#f87171" strokeWidth="1" opacity="0.5"
              className="label-appear" style={{ animationDelay: '0.2s' }}
            />

            {/* Transmitted beam tracks */}
            {transmittedBeams.map((beam, i) => (
              <line
                key={`passtrk-${i}`}
                x1="230" y1={beam.y} x2="830" y2={beam.y}
                stroke={beam.color} strokeWidth="1"
                opacity={beam.dimmed ? 0.08 : 0.15}
              />
            ))}

            {/* Transmitted ray particles that travel all the way through */}
            {transmittedBeams.flatMap((beam, bi) =>
              [0, 1, 2].map(copy => (
                <circle
                  key={`pass-ray-${bi}-${copy}`}
                  cx="230" cy={beam.y} r={beam.dimmed ? 3 : 5}
                  fill={beam.color}
                  opacity={beam.dimmed ? 0.5 : 0.9}
                  filter="url(#water-ray-glow)"
                  className="ray-travel"
                  style={{ animationDelay: `${copy * 1}s` }}
                />
              ))
            )}

            {/* Blue merge overlay */}
            <line
              x1="230" y1="285" x2="830" y2="285"
              stroke="url(#water-blue-merge)" strokeWidth="3.5"
              filter="url(#water-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.25s' }}
            />

            {/* Blue light emerges */}
            <line
              x1="830" y1="285" x2="940" y2="285"
              stroke="#3388ff" strokeWidth="3" filter="url(#water-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.4s' }}
            />

            {/* Output label */}
            <text
              x="900" y="270" fill="#60a5fa" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.5s' }}
            >
              Blue light
            </text>
            <text
              x="900" y="310" fill="#60a5fa" fontSize="11"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            >
              survives
            </text>

            {/* Viewer eye icon */}
            <g className="label-appear" style={{ animationDelay: '0.7s' }}>
              <ellipse
                cx="940" cy="285" rx="12" ry="8"
                fill="none" stroke="#60a5fa" strokeWidth="1.5"
              />
              <circle cx="940" cy="285" r="3" fill="#60a5fa" />
            </g>

            {/* Vibration annotation */}
            <g className="label-appear" style={{ animationDelay: '0.35s' }}>
              <text
                x="350" y="260" fill="#38bdf8" fontSize="11"
                fontFamily="var(--font-sans)" textAnchor="middle"
              >
                O‑H stretch vibration
              </text>
              <path
                d="M 310 265 Q 318 258, 326 265 Q 334 272, 342 265 Q 350 258, 358 265 Q 366 272, 374 265"
                fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6"
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}

function TransitionMetalAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showAbsorption = build >= 2;

  const atomX = 480;
  const atomY = 210;
  const coreR = 55;
  const innerR = 85;
  const outerR = 115;

  const innerAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const outerAngles = [0, 36, 72, 108, 144, 180, 216, 252, 288];
  const emptySlotAngle = 324;
  const absorbAngles = [144, 180, 216];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="tm-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tm-absorb-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tm-electron-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="tm-result-grad" gradientUnits="userSpaceOnUse" x1="595" y1="0" x2="880" y2="0">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="55%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="85%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ===== ATOM ===== */}
        <g>
          {/* Outer d-electron orbit */}
          <ellipse
            cx={atomX} cy={atomY} rx={outerR} ry={outerR}
            fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="6 4"
          />

          {/* Inner orbit */}
          <ellipse
            cx={atomX} cy={atomY} rx={innerR} ry={innerR}
            fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 3"
          />

          {/* Nucleus */}
          <circle cx={atomX} cy={atomY} r={coreR} fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
          <text
            x={atomX} y={atomY - 5} fill="#93c5fd" fontSize="22" textAnchor="middle"
            fontFamily="var(--font-sans)" fontWeight="bold"
          >
            Cu²⁺
          </text>
          <text
            x={atomX} y={atomY + 16} fill="#475569" fontSize="13" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            d⁹
          </text>

          {/* Inner shell electrons */}
          {innerAngles.map((angle) => (
            <circle
              key={`inner-${angle}`}
              cx={atomX + Math.cos((angle * Math.PI) / 180) * innerR}
              cy={atomY + Math.sin((angle * Math.PI) / 180) * innerR}
              r="5" fill="#60a5fa" opacity="0.6"
            />
          ))}

          {/* Outer d-shell electrons (9 filled) */}
          {outerAngles.map((angle) => (
            <circle
              key={`outer-${angle}`}
              cx={atomX + Math.cos((angle * Math.PI) / 180) * outerR}
              cy={atomY + Math.sin((angle * Math.PI) / 180) * outerR}
              r="7" fill="#22d3ee"
              opacity={showAbsorption && absorbAngles.includes(angle) ? 1 : 0.8}
              filter={showAbsorption && absorbAngles.includes(angle) ? 'url(#tm-electron-glow)' : undefined}
              style={{ transition: 'opacity 0.4s ease' }}
            />
          ))}

          {/* Empty slot — the missing 10th d-electron */}
          <circle
            cx={atomX + Math.cos((emptySlotAngle * Math.PI) / 180) * outerR}
            cy={atomY + Math.sin((emptySlotAngle * Math.PI) / 180) * outerR}
            r="7" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"
          />
        </g>

        {/* d-electron label */}
        <text
          x={atomX + outerR + 12} y={atomY - outerR + 8}
          fill="#22d3ee" fontSize="11" fontFamily="var(--font-sans)"
        >
          d-electrons
        </text>
        <text
          x={atomX + outerR + 12} y={atomY - outerR + 22}
          fill="#22d3ee" fontSize="10" fontFamily="var(--font-sans)" opacity="0.6"
        >
          (9 of 10)
        </text>

        {/* ===== LIGHT SOURCE ===== */}
        <g>
          <circle
            cx="80" cy={atomY} r="22" fill="#fbbf24"
            opacity={showBeams ? 1 : 0.35}
            style={{ transition: 'opacity 0.5s ease' }}
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={80 + Math.cos((angle * Math.PI) / 180) * 26}
              y1={atomY + Math.sin((angle * Math.PI) / 180) * 26}
              x2={80 + Math.cos((angle * Math.PI) / 180) * 35}
              y2={atomY + Math.sin((angle * Math.PI) / 180) * 35}
              stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
              opacity={showBeams ? 0.8 : 0.25}
              style={{ transition: 'opacity 0.5s ease' }}
            />
          ))}
          <text
            x="80" y={atomY + 45} fill="#94a3b8" fontSize="13" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            White Light
          </text>
        </g>

        {/* ===== INCOMING RAINBOW BEAMS (build >= 1) ===== */}
        {showBeams && (
          <g>
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY - 55}
              stroke="#ff3333" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw"
            />
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY - 37}
              stroke="#ff8833" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.06s' }}
            />
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY - 19}
              stroke="#ffcc00" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.12s' }}
            />
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY + 19}
              stroke="#33cc55" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.18s' }}
            />
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY + 37}
              stroke="#3388ff" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.24s' }}
            />
            <line
              x1="115" y1={atomY} x2={atomX - outerR} y2={atomY + 55}
              stroke="#9944ff" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.30s' }}
            />
          </g>
        )}

        {/* ===== ABSORPTION & REFLECTION (build >= 2) ===== */}
        {showAbsorption && (
          <g>
            {/* Absorption glow where beams hit the outer orbit */}
            <circle
              cx={atomX - outerR + 5} cy={atomY - 55} r="12" fill="#ff3333" opacity="0.3"
              filter="url(#tm-absorb-glow)" className="pulse-absorb"
            />
            <circle
              cx={atomX - outerR + 5} cy={atomY - 37} r="12" fill="#ff8833" opacity="0.3"
              filter="url(#tm-absorb-glow)" className="pulse-absorb"
            />
            <circle
              cx={atomX - outerR + 5} cy={atomY - 19} r="12" fill="#ffcc00" opacity="0.3"
              filter="url(#tm-absorb-glow)" className="pulse-absorb"
            />

            {/* ✕ marks on absorbed beams */}
            <g fill="#ff6b6b" fontSize="18" fontWeight="bold" fontFamily="var(--font-sans)">
              <text x={atomX - outerR - 20} y={atomY - 50} className="label-appear">✕</text>
              <text
                x={atomX - outerR - 20} y={atomY - 32} className="label-appear"
                style={{ animationDelay: '0.06s' }}
              >
                ✕
              </text>
              <text
                x={atomX - outerR - 20} y={atomY - 14} className="label-appear"
                style={{ animationDelay: '0.12s' }}
              >
                ✕
              </text>
            </g>

            {/* Absorbed label */}
            <text
              x={atomX - outerR - 30} y={atomY - 68} fill="#f87171" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.15s' }}
            >
              Absorbed by
            </text>
            <text
              x={atomX - outerR - 30} y={atomY - 54} fill="#f87171" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.18s' }}
            >
              d-electrons
            </text>

            {/* d-electrons on the left side glow when absorbing */}
            {absorbAngles.map((angle, i) => (
              <circle
                key={`glow-${angle}`}
                cx={atomX + Math.cos((angle * Math.PI) / 180) * outerR}
                cy={atomY + Math.sin((angle * Math.PI) / 180) * outerR}
                r="14" fill="#ff8833" opacity="0.25"
                filter="url(#tm-absorb-glow)" className="pulse-absorb"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            ))}

            {/* Green/blue/violet pass through toward observer */}
            <line
              x1={atomX + outerR} y1={atomY + 19} x2="880" y2={atomY}
              stroke="#33cc55" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.1s' }}
            />
            <line
              x1={atomX + outerR} y1={atomY + 37} x2="880" y2={atomY}
              stroke="#3388ff" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.18s' }}
            />
            <line
              x1={atomX + outerR} y1={atomY + 55} x2="880" y2={atomY}
              stroke="#9944ff" strokeWidth="2.5" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.26s' }}
            />

            {/* Blue-green merge overlay */}
            <line
              x1={atomX + outerR} y1={atomY + 19} x2="880" y2={atomY}
              stroke="url(#tm-result-grad)" strokeWidth="4" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.1s' }}
            />
            <line
              x1={atomX + outerR} y1={atomY + 37} x2="880" y2={atomY}
              stroke="url(#tm-result-grad)" strokeWidth="4" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.18s' }}
            />
            <line
              x1={atomX + outerR} y1={atomY + 55} x2="880" y2={atomY}
              stroke="url(#tm-result-grad)" strokeWidth="4" filter="url(#tm-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.26s' }}
            />

            {/* "Not absorbed" label */}
            <text
              x="710" y={atomY - 18} fill="#06b6d4" fontSize="12"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.3s' }}
            >
              Not absorbed → reflects
            </text>

            {/* Viewer eye icon */}
            <g
              className="label-appear"
              style={{ animationDelay: '0.35s' }}
            >
              <ellipse
                cx="900" cy={atomY} rx="16" ry="10"
                fill="none" stroke="#06b6d4" strokeWidth="1.5"
              />
              <circle cx="900" cy={atomY} r="4" fill="#06b6d4" />
            </g>
            <text
              x="900" y={atomY + 28} fill="#06b6d4" fontSize="13" fontWeight="600"
              textAnchor="middle" fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            >
              We see blue-green
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

function BlueSkyAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showScattering = build >= 2;

  const molecules = [
    { x: 380, y: 180 },
    { x: 460, y: 220 },
    { x: 540, y: 160 },
    { x: 420, y: 280 },
    { x: 510, y: 300 },
    { x: 350, y: 250 },
    { x: 580, y: 240 },
    { x: 440, y: 140 },
    { x: 490, y: 340 },
    { x: 560, y: 310 },
  ];

  const scatterMols = [
    { x: 380, y: 180, color: '#3388ff', label: 'N\u2082' },
    { x: 460, y: 220, color: '#7744ff', label: 'O\u2082' },
    { x: 540, y: 160, color: '#3388ff', label: 'N\u2082' },
    { x: 510, y: 300, color: '#7744ff', label: 'O\u2082' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 70 1000 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="sky-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sky-scatter-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="sky-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c1222" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* ===== ATMOSPHERE BOX ===== */}
        <rect
          x="300" y="100" width="340" height="280" rx="8"
          fill="url(#sky-gradient)" stroke="#334155" strokeWidth="1.5"
          opacity="0.6"
        />
        <text
          x="470" y="92" fill="#94a3b8" fontSize="13" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600"
        >
          Atmosphere
        </text>

        {/* ===== MOLECULES ===== */}
        {molecules.map((mol, i) => (
          <g key={`mol-${i}`}>
            <circle
              cx={mol.x} cy={mol.y} r="5"
              fill="#334155" stroke="#475569" strokeWidth="1"
            />
            <circle
              cx={mol.x + 8} cy={mol.y} r="4"
              fill="#334155" stroke="#475569" strokeWidth="1"
            />
          </g>
        ))}

        {/* ===== SUN ===== */}
        <g>
          <circle
            cx="80" cy="240" r="28" fill="#fbbf24"
            opacity={showBeams ? 1 : 0.35}
            style={{ transition: 'opacity 0.5s ease' }}
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={80 + Math.cos((angle * Math.PI) / 180) * 32}
              y1={240 + Math.sin((angle * Math.PI) / 180) * 32}
              x2={80 + Math.cos((angle * Math.PI) / 180) * 42}
              y2={240 + Math.sin((angle * Math.PI) / 180) * 42}
              stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
              opacity={showBeams ? 0.8 : 0.25}
              style={{ transition: 'opacity 0.5s ease' }}
            />
          ))}
          <text
            x="80" y="295" fill="#94a3b8" fontSize="13" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            Sunlight
          </text>
        </g>

        {/* ===== GROUND & OBSERVER ===== */}
        <g>
          <line x1="300" y1="390" x2="640" y2="390" stroke="#475569" strokeWidth="2" />
          <text
            x="310" y="404" fill="#64748b" fontSize="11" textAnchor="middle"
            fontFamily="var(--font-sans)"
          >
            Ground
          </text>
          <circle cx="470" cy="378" r="6" fill="#475569" />
          <line x1="470" y1="384" x2="470" y2="388" stroke="#475569" strokeWidth="2" />
        </g>

        {/* ===== INCOMING RAINBOW BEAMS (build >= 1) ===== */}
        {showBeams && (
          <g>
            <line
              x1="130" y1="240" x2="380" y2="180"
              stroke="#ff3333" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw"
            />
            <line
              x1="130" y1="240" x2="420" y2="200"
              stroke="#ff8833" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.05s' }}
            />
            <line
              x1="130" y1="240" x2="460" y2="220"
              stroke="#ffcc00" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.1s' }}
            />
            <line
              x1="130" y1="240" x2="500" y2="235"
              stroke="#33cc55" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.15s' }}
            />
            <line
              x1="130" y1="240" x2="540" y2="160"
              stroke="#3388ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.2s' }}
            />
            <line
              x1="130" y1="240" x2="510" y2="300"
              stroke="#9944ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-draw" style={{ animationDelay: '0.25s' }}
            />
          </g>
        )}

        {/* ===== SCATTERING & PASS-THROUGH (build >= 2) ===== */}
        {showScattering && (
          <g>
            {/* Long wavelengths pass straight through */}
            <line
              x1="380" y1="180" x2="760" y2="155"
              stroke="#ff3333" strokeWidth="2" opacity="0.6"
              className="beam-draw" style={{ animationDelay: '0.05s' }}
            />
            <line
              x1="420" y1="200" x2="760" y2="185"
              stroke="#ff8833" strokeWidth="2" opacity="0.6"
              className="beam-draw" style={{ animationDelay: '0.1s' }}
            />
            <line
              x1="460" y1="220" x2="760" y2="210"
              stroke="#ffcc00" strokeWidth="2" opacity="0.6"
              className="beam-draw" style={{ animationDelay: '0.15s' }}
            />
            <line
              x1="500" y1="235" x2="760" y2="230"
              stroke="#33cc55" strokeWidth="2" opacity="0.5"
              className="beam-draw" style={{ animationDelay: '0.2s' }}
            />

            {/* Pass-through label */}
            <text
              x="780" y="195" fill="#f97316" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.25s' }}
            >
              {'Long \u03BB pass'}
            </text>
            <text
              x="780" y="210" fill="#f97316" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" className="label-appear"
              style={{ animationDelay: '0.25s' }}
            >
              through
            </text>

            {/* Sunset viewer on the right */}
            <g className="label-appear" style={{ animationDelay: '0.6s' }}>
              <ellipse
                cx="900" cy="195" rx="14" ry="9"
                fill="none" stroke="#f97316" strokeWidth="1.5"
              />
              <circle cx="900" cy="195" r="3.5" fill="#f97316" />
            </g>
            <text
              x="900" y="225" fill="#f97316" fontSize="11" fontWeight="600"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            >
              Sees red/orange
            </text>
            <text
              x="900" y="239" fill="#94a3b8" fontSize="10"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.8s' }}
            >
              (sunset)
            </text>

            {/* Scatter bursts at molecule positions */}
            {scatterMols.map((mol, mi) => (
              <g key={`scatter-mol-${mi}`}>
                {[0, 60, 120, 180, 240, 300].map((angle, ai) => (
                  <line
                    key={`scat-${mi}-${ai}`}
                    x1={mol.x} y1={mol.y}
                    x2={mol.x + Math.cos((angle * Math.PI) / 180) * 45}
                    y2={mol.y + Math.sin((angle * Math.PI) / 180) * 45}
                    stroke={mol.color} strokeWidth="1.5" opacity="0.4"
                    filter="url(#sky-beam-glow)"
                    className="scatter-ray"
                    style={{ animationDelay: `${mi * 0.08 + ai * 0.03}s` }}
                  />
                ))}
                <circle
                  cx={mol.x} cy={mol.y} r="10"
                  fill={mol.color} opacity="0.3"
                  filter="url(#sky-scatter-glow)"
                  className="pulse-absorb"
                />
                <text
                  x={mol.x} y={mol.y - 14} fill={mol.color} fontSize="10"
                  fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="600"
                  className="label-appear" style={{ animationDelay: `${0.1 + mi * 0.08}s` }}
                >
                  {mol.label}
                </text>
              </g>
            ))}

            {/* Blue scattered beams reaching the observer below */}
            <line
              x1="380" y1="180" x2="455" y2="372"
              stroke="#3399ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.3s' }}
            />
            <line
              x1="460" y1="220" x2="465" y2="372"
              stroke="#5577ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.38s' }}
            />
            <line
              x1="540" y1="160" x2="478" y2="372"
              stroke="#3388ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.46s' }}
            />
            <line
              x1="510" y1="300" x2="472" y2="372"
              stroke="#7744ff" strokeWidth="2.5" filter="url(#sky-beam-glow)"
              className="beam-reflect" style={{ animationDelay: '0.54s' }}
            />

            {/* Rayleigh label */}
            <text
              x="590" y="360" fill="#60a5fa" fontSize="12"
              fontFamily="var(--font-sans)" fontWeight="600"
              className="label-appear" style={{ animationDelay: '0.4s' }}
            >
              Rayleigh scattering
            </text>
            <text
              x="590" y="376" fill="#60a5fa" fontSize="11"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.5s' }}
            >
              {'intensity \u221D 1/\u03BB\u2074'}
            </text>

            {/* Observer sees blue */}
            <g className="label-appear" style={{ animationDelay: '0.6s' }}>
              <ellipse
                cx="470" cy="372" rx="14" ry="9"
                fill="none" stroke="#60a5fa" strokeWidth="1.5"
              />
              <circle cx="470" cy="372" r="3.5" fill="#60a5fa" />
            </g>
            <text
              x="470" y="412" fill="#60a5fa" fontSize="12" fontWeight="600"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            >
              {'Looks up \u2192 sees blue'}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

function ThinFilmInterferenceAnimation({ build }: { build: number }) {
  const showBeams = build >= 1;
  const showConstructive = build >= 2;
  const showDestructive = build >= 3;

  const filmLeft = 380;
  const filmRight = 580;
  const filmTop = 170;
  const filmBottom = 250;
  const filmMidX = (filmLeft + filmRight) / 2;

  // Wave visualization positioned ABOVE the film diagram
  const waveCx = 480;
  const waveY = 75;

  // Shift the whole diagram down to make room for waves above
  const diagramShift = 100;

  // Helper: generate a wavy SVG path between two points
  // phaseOffset shifts the wave by half-cycles (0 = starts with peak, 1 = starts with trough)
  function wavePath(
    x1: number, y1: number, x2: number, y2: number,
    numWaves: number, amp: number, phaseOffset = 0
  ): string {
    const segs = numWaves * 2;
    const sdx = (x2 - x1) / segs;
    const sdy = (y2 - y1) / segs;
    const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const nx = -(y2 - y1) / len;
    const ny = (x2 - x1) / len;
    let d = `M ${x1.toFixed(1)} ${y1.toFixed(1)}`;
    for (let i = 0; i < segs; i++) {
      const sign = (i + phaseOffset) % 2 === 0 ? 1 : -1;
      const cx = x1 + sdx * (i + 0.5) + nx * amp * sign;
      const cy = y1 + sdy * (i + 0.5) + ny * amp * sign;
      const ex = x1 + sdx * (i + 1);
      const ey = y1 + sdy * (i + 1);
      d += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`;
    }
    return d;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-20 30 1000 440" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="tf-beam-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tf-glow-strong">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="tf-film-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ===== CONSTRUCTIVE INTERFERENCE — above film (build 2) ===== */}
        <g
          opacity={showConstructive && !showDestructive ? 1 : 0}
          style={{ transition: 'opacity 0.5s ease' }}
        >
          {/* Two waves in phase (blue solid + pink dashed, overlapping) */}
          <path
            d={`M ${waveCx - 120} ${waveY} Q ${waveCx - 105} ${waveY - 18}, ${waveCx - 90} ${waveY} Q ${waveCx - 75} ${waveY + 18}, ${waveCx - 60} ${waveY} Q ${waveCx - 45} ${waveY - 18}, ${waveCx - 30} ${waveY} Q ${waveCx - 15} ${waveY + 18}, ${waveCx} ${waveY}`}
            fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.7"
            className="label-appear" style={{ animationDelay: '0.1s' }}
          />
          <path
            d={`M ${waveCx - 120} ${waveY} Q ${waveCx - 105} ${waveY - 18}, ${waveCx - 90} ${waveY} Q ${waveCx - 75} ${waveY + 18}, ${waveCx - 60} ${waveY} Q ${waveCx - 45} ${waveY - 18}, ${waveCx - 30} ${waveY} Q ${waveCx - 15} ${waveY + 18}, ${waveCx} ${waveY}`}
            fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.7"
            strokeDasharray="4 3"
            className="label-appear" style={{ animationDelay: '0.15s' }}
          />
          <text
            x={waveCx + 14} y={waveY + 5} fill="#94a3b8" fontSize="18" fontWeight="bold"
            fontFamily="var(--font-sans)"
            className="label-appear" style={{ animationDelay: '0.2s' }}
          >
            =
          </text>
          {/* Reinforced (larger amplitude) green wave */}
          <path
            d={`M ${waveCx + 30} ${waveY} Q ${waveCx + 45} ${waveY - 28}, ${waveCx + 60} ${waveY} Q ${waveCx + 75} ${waveY + 28}, ${waveCx + 90} ${waveY} Q ${waveCx + 105} ${waveY - 28}, ${waveCx + 120} ${waveY} Q ${waveCx + 135} ${waveY + 28}, ${waveCx + 150} ${waveY}`}
            fill="none" stroke="#4ade80" strokeWidth="3" filter="url(#tf-glow-strong)"
            className="label-appear" style={{ animationDelay: '0.25s' }}
          />
          <text
            x={waveCx} y={waveY + 40} fill="#4ade80" fontSize="15" fontWeight="bold"
            fontFamily="var(--font-sans)" textAnchor="middle"
            className="label-appear" style={{ animationDelay: '0.35s' }}
          >
            Constructive Interference
          </text>
          <text
            x={waveCx} y={waveY + 56} fill="#4ade80" fontSize="12"
            fontFamily="var(--font-sans)" textAnchor="middle"
            className="label-appear" style={{ animationDelay: '0.4s' }}
          >
            {'\u2714 Waves in phase \u2192 bright colour    (2d = m\u03BB)'}
          </text>
        </g>

        {/* ===== DESTRUCTIVE INTERFERENCE — above film (build 3) ===== */}
        <g
          opacity={showDestructive ? 1 : 0}
          style={{ transition: 'opacity 0.5s ease' }}
        >
          {/* Two waves out of phase (blue up, pink inverted down) */}
          <path
            d={`M ${waveCx - 120} ${waveY} Q ${waveCx - 105} ${waveY - 18}, ${waveCx - 90} ${waveY} Q ${waveCx - 75} ${waveY + 18}, ${waveCx - 60} ${waveY} Q ${waveCx - 45} ${waveY - 18}, ${waveCx - 30} ${waveY} Q ${waveCx - 15} ${waveY + 18}, ${waveCx} ${waveY}`}
            fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.7"
            className="label-appear" style={{ animationDelay: '0.1s' }}
          />
          <path
            d={`M ${waveCx - 120} ${waveY} Q ${waveCx - 105} ${waveY + 18}, ${waveCx - 90} ${waveY} Q ${waveCx - 75} ${waveY - 18}, ${waveCx - 60} ${waveY} Q ${waveCx - 45} ${waveY + 18}, ${waveCx - 30} ${waveY} Q ${waveCx - 15} ${waveY - 18}, ${waveCx} ${waveY}`}
            fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.7"
            strokeDasharray="4 3"
            className="label-appear" style={{ animationDelay: '0.15s' }}
          />
          <text
            x={waveCx + 14} y={waveY + 5} fill="#94a3b8" fontSize="18" fontWeight="bold"
            fontFamily="var(--font-sans)"
            className="label-appear" style={{ animationDelay: '0.2s' }}
          >
            =
          </text>
          {/* Cancelled wave — flat red line */}
          <line
            x1={waveCx + 30} y1={waveY} x2={waveCx + 150} y2={waveY}
            stroke="#ef4444" strokeWidth="2.5" opacity="0.6"
            className="label-appear" style={{ animationDelay: '0.25s' }}
          />
          <text
            x={waveCx} y={waveY + 40} fill="#ef4444" fontSize="15" fontWeight="bold"
            fontFamily="var(--font-sans)" textAnchor="middle"
            className="label-appear" style={{ animationDelay: '0.35s' }}
          >
            Destructive Interference
          </text>
          <text
            x={waveCx} y={waveY + 56} fill="#ef4444" fontSize="12"
            fontFamily="var(--font-sans)" textAnchor="middle"
            className="label-appear" style={{ animationDelay: '0.4s' }}
          >
            {'\u2718 Waves out of phase \u2192 cancelled    (2d = (m+\u00BD)\u03BB)'}
          </text>
        </g>

        {/* ===== FILM DIAGRAM (shifted down to make room for waves above) ===== */}
        <g transform={`translate(0, ${diagramShift})`}>
          {/* Air labels */}
          <text
            x={filmRight + 120} y={filmTop - 10} fill="#94a3b8" fontSize="12"
            fontFamily="var(--font-sans)"
          >
            Air (above)
          </text>
          <text
            x={filmRight + 120} y={filmBottom + 20} fill="#94a3b8" fontSize="12"
            fontFamily="var(--font-sans)"
          >
            Air (below)
          </text>

          {/* Thin Film */}
          <rect
            x={filmLeft} y={filmTop} width={filmRight - filmLeft} height={filmBottom - filmTop}
            fill="url(#tf-film-fill)" stroke="#818cf8" strokeWidth="2" rx="3"
          />
          <text
            x={filmRight + 12} y={filmTop + 5} fill="#a5b4fc" fontSize="11"
            fontFamily="var(--font-sans)"
          >
            Surface 1 (top)
          </text>
          <text
            x={filmRight + 12} y={filmBottom + 5} fill="#a5b4fc" fontSize="11"
            fontFamily="var(--font-sans)"
          >
            Surface 2 (bottom)
          </text>

          {/* Thickness annotation */}
          <line
            x1={filmLeft - 20} y1={filmTop} x2={filmLeft - 20} y2={filmBottom}
            stroke="#94a3b8" strokeWidth="1"
          />
          <line
            x1={filmLeft - 25} y1={filmTop} x2={filmLeft - 15} y2={filmTop}
            stroke="#94a3b8" strokeWidth="1"
          />
          <line
            x1={filmLeft - 25} y1={filmBottom} x2={filmLeft - 15} y2={filmBottom}
            stroke="#94a3b8" strokeWidth="1"
          />
          <text
            x={filmLeft - 30} y={filmTop + (filmBottom - filmTop) / 2 + 4}
            fill="#94a3b8" fontSize="11" textAnchor="end"
            fontFamily="var(--font-sans)"
          >
            thickness d
          </text>

          {/* Film label */}
          <text
            x={filmMidX} y={filmTop + (filmBottom - filmTop) / 2 + 4}
            fill="#c4b5fd" fontSize="13" textAnchor="middle" fontWeight="600"
            fontFamily="var(--font-sans)"
          >
            Thin film (oil, soap, etc.)
          </text>

          {/* Light Source */}
          <g>
            <circle
              cx="80" cy="140" r="22" fill="#fbbf24"
              opacity={showBeams ? 1 : 0.35}
              style={{ transition: 'opacity 0.5s ease' }}
            />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1={80 + Math.cos((angle * Math.PI) / 180) * 26}
                y1={140 + Math.sin((angle * Math.PI) / 180) * 26}
                x2={80 + Math.cos((angle * Math.PI) / 180) * 35}
                y2={140 + Math.sin((angle * Math.PI) / 180) * 35}
                stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
                opacity={showBeams ? 0.8 : 0.25}
                style={{ transition: 'opacity 0.5s ease' }}
              />
            ))}
            <text
              x="80" y="185" fill="#94a3b8" fontSize="13" textAnchor="middle"
              fontFamily="var(--font-sans)"
            >
              White Light
            </text>
          </g>

          {/* Incoming beam & reflections as WAVES (build >= 1) */}
          {showBeams && (
            <g>
              {/* Incoming white-light wave → top surface */}
              <path
                d={wavePath(115, 145, filmMidX - 20, filmTop, 5, 5)}
                fill="none" stroke="#fbbf24" strokeWidth="2.5" filter="url(#tf-beam-glow)"
                className="beam-draw"
              />

              {/* REFLECTION 1 wave — from top surface (phase 0) */}
              <path
                d={wavePath(filmMidX - 20, filmTop, filmMidX - 100, filmTop - 80, 4, 6, 0)}
                fill="none" stroke="#60a5fa" strokeWidth="2.5" filter="url(#tf-beam-glow)"
                className="beam-reflect" style={{ animationDelay: '0.2s' }}
              />
              <text
                x={filmMidX - 130} y={filmTop - 85} fill="#60a5fa" fontSize="11" fontWeight="600"
                fontFamily="var(--font-sans)" textAnchor="middle"
                className="label-appear" style={{ animationDelay: '0.4s' }}
              >
                Reflection 1
              </text>

              {/* Refracted wave enters film → bottom surface */}
              <path
                d={wavePath(filmMidX - 20, filmTop, filmMidX + 10, filmBottom, 3, 4)}
                fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5"
                filter="url(#tf-beam-glow)"
                className="beam-draw" style={{ animationDelay: '0.15s' }}
              />

              {/* Reflects off bottom surface → back up through film */}
              <path
                d={wavePath(filmMidX + 10, filmBottom, filmMidX + 40, filmTop, 3, 4)}
                fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5"
                filter="url(#tf-beam-glow)"
                className="beam-draw" style={{ animationDelay: '0.3s' }}
              />

              {/* REFLECTION 2 wave — exits top (phase shifted by extra path) */}
              <path
                d={wavePath(filmMidX + 40, filmTop, filmMidX - 40, filmTop - 80, 4, 6, 1)}
                fill="none" stroke="#f472b6" strokeWidth="2.5" filter="url(#tf-beam-glow)"
                className="beam-reflect" style={{ animationDelay: '0.45s' }}
              />
              <text
                x={filmMidX - 40} y={filmTop - 85} fill="#f472b6" fontSize="11" fontWeight="600"
                fontFamily="var(--font-sans)"
                className="label-appear" style={{ animationDelay: '0.6s' }}
              >
                Reflection 2 (phase shifted)
              </text>

              <text
                x={filmRight + 120} y={filmTop + (filmBottom - filmTop) / 2 + 4}
                fill="#c4b5fd" fontSize="10" fontFamily="var(--font-sans)"
                className="label-appear" style={{ animationDelay: '0.5s' }}
              >
                Extra path = 2d
              </text>

              {/* Transmitted wave below */}
              <path
                d={wavePath(filmMidX + 10, filmBottom, filmMidX + 40, filmBottom + 60, 2, 3)}
                fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.25"
                filter="url(#tf-beam-glow)"
                className="beam-draw" style={{ animationDelay: '0.35s' }}
              />
              <text
                x={filmMidX + 55} y={filmBottom + 70} fill="#64748b" fontSize="10"
                fontFamily="var(--font-sans)"
                className="label-appear" style={{ animationDelay: '0.5s' }}
              >
                (transmitted)
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}

function DiffractionAnimation({ build }: { build: number }) {
  const showWavefronts = build >= 1;
  const showSeparation = build >= 2;

  // Layout
  const gx = 400; // grating x position
  const mid = 250; // vertical center

  // The incoming "white" beam shown as bundled colored lines
  const colors = [
    { color: '#8b5cf6', label: 'Violet', dy: -8, angle: -26 },
    { color: '#3b82f6', label: 'Blue', dy: -4, angle: -16 },
    { color: '#22c55e', label: 'Green', dy: 0, angle: -4 },
    { color: '#eab308', label: 'Yellow', dy: 4, angle: 8 },
    { color: '#f97316', label: 'Orange', dy: 8, angle: 18 },
    { color: '#ef4444', label: 'Red', dy: 12, angle: 28 },
  ];

  // Grating grooves
  const grooveCount = 14;
  const grooveSpacing = 18;
  const gratingTop = mid - (grooveCount * grooveSpacing) / 2;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 70 960 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="diff-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === GRATING === */}
        <rect
          x={gx - 5} y={gratingTop - 10} width="10" height={grooveCount * grooveSpacing + 20}
          rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1.5"
        />
        {Array.from({ length: grooveCount + 1 }).map((_, i) => {
          const gy = gratingTop + i * grooveSpacing;
          return (
            <line
              key={`groove-${i}`}
              x1={gx - 4} y1={gy} x2={gx + 4} y2={gy}
              stroke="#94a3b8" strokeWidth="1" opacity="0.5"
            />
          );
        })}
        <text
          x={gx} y={gratingTop + grooveCount * grooveSpacing + 38}
          fill="#94a3b8" fontSize="13" fontWeight="600"
          fontFamily="var(--font-sans)" textAnchor="middle"
        >
          Diffraction grating
        </text>

        {/* Groove spacing "d" bracket */}
        <line
          x1={gx + 14} y1={gratingTop + grooveSpacing * 6}
          x2={gx + 14} y2={gratingTop + grooveSpacing * 7}
          stroke="#64748b" strokeWidth="1"
        />
        <line
          x1={gx + 11} y1={gratingTop + grooveSpacing * 6}
          x2={gx + 17} y2={gratingTop + grooveSpacing * 6}
          stroke="#64748b" strokeWidth="1"
        />
        <line
          x1={gx + 11} y1={gratingTop + grooveSpacing * 7}
          x2={gx + 17} y2={gratingTop + grooveSpacing * 7}
          stroke="#64748b" strokeWidth="1"
        />
        <text
          x={gx + 26} y={gratingTop + grooveSpacing * 6.5 + 4}
          fill="#64748b" fontSize="12" fontFamily="var(--font-sans)"
        >
          d
        </text>

        {/* === INCOMING WHITE BEAM (bundled colored lines) === */}
        {colors.map((c, i) => (
          <line
            key={`in-${i}`}
            x1="60" y1={mid + c.dy} x2={gx - 8} y2={mid + c.dy}
            stroke={c.color} strokeWidth="2" opacity="0.8"
          />
        ))}
        {/* White glow over the bundle */}
        <line
          x1="60" y1={mid} x2={gx - 8} y2={mid}
          stroke="white" strokeWidth="20" opacity="0.08"
        />
        <text
          x="140" y={mid - 30} fill="white" fontSize="13" fontWeight="bold"
          fontFamily="var(--font-sans)" textAnchor="middle"
        >
          White light
        </text>
        <text
          x="140" y={mid - 16} fill="#94a3b8" fontSize="11"
          fontFamily="var(--font-sans)" textAnchor="middle"
        >
          (all wavelengths bundled)
        </text>

        {/* === BUILD 1: WAVEFRONTS FROM GROOVES === */}
        {showWavefronts && (
          <g>
            {/* Semicircular wavefronts from 3 adjacent grooves */}
            {[5, 6, 7].map((gi) => {
              const gy = gratingTop + gi * grooveSpacing;
              return (
                <g key={`wave-${gi}`}>
                  {[1, 2, 3].map((r) => (
                    <path
                      key={`arc-${gi}-${r}`}
                      d={`M ${gx + 6} ${gy - r * 18} A ${r * 18} ${r * 18} 0 0 1 ${gx + 6} ${gy + r * 18}`}
                      fill="none" stroke="#60a5fa" strokeWidth="1" opacity={0.5 - r * 0.12}
                      className="label-appear" style={{ animationDelay: `${(gi - 5) * 0.15 + r * 0.1}s` }}
                    />
                  ))}
                  {/* Groove highlight */}
                  <circle
                    cx={gx} cy={gy} r="3" fill="#60a5fa" opacity="0.6"
                    className="label-appear" style={{ animationDelay: `${(gi - 5) * 0.15}s` }}
                  />
                </g>
              );
            })}

          </g>
        )}

        {/* === BUILD 2: COLORS SEPARATE === */}
        {showSeparation && (
          <g>
            {/* Each color exits at a different angle */}
            {colors.map((c, i) => {
              const rad = (c.angle * Math.PI) / 180;
              const beamLen = 380;
              const endX = gx + 8 + beamLen * Math.cos(rad);
              const endY = mid + beamLen * Math.sin(rad);
              const labelX = gx + 8 + (beamLen + 20) * Math.cos(rad);
              const labelY = mid + (beamLen + 20) * Math.sin(rad);

              return (
                <g key={`out-${i}`}>
                  <line
                    x1={gx + 6} y1={mid}
                    x2={endX} y2={endY}
                    stroke={c.color} strokeWidth="2.5" filter="url(#diff-glow)"
                    className="beam-reflect"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  />
                  <text
                    x={labelX} y={labelY + 4} fill={c.color} fontSize="12" fontWeight="600"
                    fontFamily="var(--font-sans)"
                    className="label-appear" style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                  >
                    {c.label}
                  </text>
                </g>
              );
            })}

            {/* Equation */}
            <text
              x={gx} y={gratingTop - 20} fill="#e2e8f0" fontSize="14" fontWeight="bold"
              fontFamily="var(--font-sans)" textAnchor="middle"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            >
              {'d \u00B7 sin\u03B8 = m\u03BB'}
            </text>

            {/* Explanation */}
            <text
              x={gx + 80} y={mid + 60} fill="#94a3b8" fontSize="12"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.8s' }}
            >
              {'Different \u03BB \u2192 constructive interference at different \u03B8'}
            </text>
          </g>
        )}

        {/* Explanation text — rendered last so it draws on top of rays */}
        {showWavefronts && (
          <g>
            <text
              x={gx + 80} y={mid - 130} fill="#e2e8f0" fontSize="12"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.5s' }}
            >
              Each groove emits a new wave
            </text>
            <text
              x={gx + 80} y={mid - 113} fill="#e2e8f0" fontSize="12"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.6s' }}
            >
              Path difference between grooves
            </text>
            <text
              x={gx + 80} y={mid - 96} fill="#e2e8f0" fontSize="12"
              fontFamily="var(--font-sans)"
              className="label-appear" style={{ animationDelay: '0.7s' }}
            >
              {'depends on angle: '}
              <tspan fontWeight="bold">{'d \u00B7 sin \u03B8'}</tspan>
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
