import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container flex flex-col gap-5 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <a href="#ust" className="flex items-center gap-3 text-ink">
          <Logo height={30} />
          <span className="display text-base font-semibold">Yakın Boğaz</span>
        </a>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <p className="inline-flex items-center gap-2">
            <MapPin size={15} strokeWidth={1.75} />
            Yazılım stüdyosu · İstanbul
          </p>
          <a
            href="mailto:info@yakinbogaz.com.tr"
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <Mail size={15} strokeWidth={1.75} />
            info@yakinbogaz.com.tr
          </a>
        </div>

        <p>© {new Date().getFullYear()} Yakın Boğaz</p>
      </div>
    </footer>
  );
}
