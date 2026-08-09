import Image from "next/image";

const LOGO_ASPECT = 511 / 763;

type LogoProps = {
  height?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ height = 36, className = "", priority = false }: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/logo.png"
      alt="Yakın Boğaz"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto ${className}`}
      style={{ height, width }}
    />
  );
}
