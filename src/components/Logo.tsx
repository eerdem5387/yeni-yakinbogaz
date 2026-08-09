import Image from "next/image";

const LOGO_ASPECT = 520 / 771;

type LogoProps = {
  height?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ height = 36, className = "", priority = false }: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/logo.png?v=2"
      alt="Yakın Boğaz"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto ${className}`}
      style={{ height, width }}
    />
  );
}
