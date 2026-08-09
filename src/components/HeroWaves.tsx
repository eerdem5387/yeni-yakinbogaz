export function HeroWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="mist absolute -left-[10%] top-[-18%] h-[55%] w-[70%] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(127, 180, 191, 0.55), transparent 68%)",
        }}
      />
      <div
        className="mist absolute right-[-12%] top-[8%] h-[48%] w-[58%] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(207, 224, 228, 0.7), transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[58%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(23, 105, 120, 0.18) 28%, rgba(11, 58, 69, 0.88) 100%)",
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 h-[46%] w-[140%] -translate-x-[12%]"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <g className="wave-path-slow origin-center">
          <path
            d="M0 220 C180 160 280 300 480 240 C680 180 780 120 980 190 C1180 260 1280 210 1440 170 L1440 420 L0 420 Z"
            fill="rgba(23, 105, 120, 0.35)"
          />
        </g>
        <g className="wave-path origin-center">
          <path
            d="M0 250 C220 190 340 320 540 260 C740 200 860 150 1040 220 C1220 290 1320 240 1440 210 L1440 420 L0 420 Z"
            fill="rgba(11, 58, 69, 0.72)"
          />
        </g>
        <path
          d="M0 300 C240 250 360 340 560 300 C760 260 900 220 1100 270 C1300 320 1360 290 1440 270 L1440 420 L0 420 Z"
          fill="rgba(11, 58, 69, 0.95)"
        />
      </svg>

      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(11, 58, 69, 0.35))",
        }}
      />
    </div>
  );
}
