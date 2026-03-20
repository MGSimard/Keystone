export function LandingNoise() {
  // TODO: Decide hierarchy / z-index
  return (
    <svg
      className="pointer-events-none absolute inset-0 block size-full overflow-hidden select-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden>
      <defs>
        <filter id="landing-noise-filter" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="gray" />
          <feComponentTransfer in="gray" result="out">
            <feFuncR type="linear" slope="2.2" intercept="-0.6" />
            <feFuncG type="linear" slope="2.2" intercept="-0.6" />
            <feFuncB type="linear" slope="2.2" intercept="-0.6" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="transparent" filter={`url(#landing-noise-filter)`} opacity="0.1" />
    </svg>
  );
}
