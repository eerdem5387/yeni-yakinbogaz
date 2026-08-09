export function HeroWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 18% 12%, rgba(127, 180, 191, 0.42), transparent 70%),
            radial-gradient(ellipse 70% 50% at 88% 22%, rgba(207, 224, 228, 0.55), transparent 72%),
            linear-gradient(180deg, #dce8ec 0%, #e7eef1 42%, #c5d8de 68%, #0b3a45 100%)
          `,
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 h-[42%] w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path-slow origin-center"
          d="M0 180 C240 120 360 230 600 170 C840 110 980 70 1200 130 C1320 160 1380 150 1440 140 L1440 320 L0 320 Z"
          fill="rgba(23, 105, 120, 0.28)"
        />
        <path
          className="wave-path origin-center"
          d="M0 210 C220 160 380 250 620 200 C860 150 1020 120 1240 180 C1340 205 1400 190 1440 180 L1440 320 L0 320 Z"
          fill="rgba(11, 58, 69, 0.72)"
        />
        <path
          d="M0 245 C260 210 420 275 680 240 C940 205 1100 195 1300 235 C1380 250 1420 245 1440 240 L1440 320 L0 320 Z"
          fill="#0b3a45"
        />
      </svg>
    </div>
  );
}
