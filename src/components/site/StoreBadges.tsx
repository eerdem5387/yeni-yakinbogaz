const badgeClass = "block h-10 w-auto";

export function StoreBadges({
  name,
  appStore,
  playStore,
}: {
  name: string;
  appStore: string;
  playStore: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <a
        href={appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}, App Store`}
        className="inline-block transition-opacity hover:opacity-80"
      >
        <img src="/stores/app-store.png" alt="" className={badgeClass} />
      </a>
      <a
        href={playStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}, Google Play`}
        className="inline-block transition-opacity hover:opacity-80"
      >
        <img src="/stores/google-play.png" alt="" className={badgeClass} />
      </a>
    </div>
  );
}
