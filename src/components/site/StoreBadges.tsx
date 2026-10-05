function AppStoreBadge() {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-auto" aria-hidden="true">
      <rect width="120" height="40" rx="6" fill="#000" />
      <path
        fill="#fff"
        d="M24.77 20.3c-.03-3.2 2.61-4.74 2.73-4.81-1.49-2.17-3.8-2.47-4.62-2.5-1.97-.2-3.84 1.16-4.84 1.16-1.01 0-2.56-1.13-4.21-1.1-2.16.03-4.15 1.26-5.27 3.2-2.25 3.9-.57 9.68 1.61 12.85 1.07 1.55 2.34 3.29 4.01 3.23 1.61-.07 2.22-1.04 4.17-1.04 1.95 0 2.5 1.04 4.2.99 1.74-.03 2.84-1.57 3.89-3.13 1.23-1.79 1.74-3.52 1.77-3.61-.04-.02-3.4-1.3-3.43-5.14zM21.4 8.8c.89-1.08 1.49-2.58 1.32-4.08-1.28.05-2.82.85-3.74 1.93-.82.95-1.54 2.47-1.35 3.92 1.43.11 2.89-.73 3.77-1.77z"
      />
      <text x="44" y="14" fill="#fff" fontSize="5.5" fontFamily="system-ui, sans-serif">
        App Store&apos;dan
      </text>
      <text x="44" y="27" fill="#fff" fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">
        İndirin
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" className="h-10 w-auto" aria-hidden="true">
      <rect width="135" height="40" rx="6" fill="#000" />
      <path fill="#00D6FF" d="M9 7.5l12.5 12.5L9 32.5V7.5z" />
      <path fill="#00F076" d="M21.5 20 9 32.5l3.5 3.5 12-12L21.5 20z" />
      <path fill="#FF3A44" d="M9 7.5l12.5 12.5-3.5 3.5L9 7.5z" />
      <path fill="#FFB900" d="M9 32.5l12.5-12.5 3.5 3.5L9 32.5z" />
      <text x="38" y="14" fill="#fff" fontSize="5" fontFamily="system-ui, sans-serif">
        Google Play&apos;den
      </text>
      <text x="38" y="27" fill="#fff" fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">
        Edinin
      </text>
    </svg>
  );
}

export function StoreBadges({
  name,
  appStore,
  playStore,
  onDark = false,
}: {
  name: string;
  appStore: string;
  playStore: string;
  onDark?: boolean;
}) {
  const frame = onDark ? "rounded-md ring-1 ring-white/25" : "rounded-md";

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <a
        href={appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}, App Store`}
        className={`inline-block transition-opacity hover:opacity-80 ${frame}`}
      >
        <AppStoreBadge />
      </a>
      <a
        href={playStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}, Google Play`}
        className={`inline-block transition-opacity hover:opacity-80 ${frame}`}
      >
        <GooglePlayBadge />
      </a>
    </div>
  );
}
