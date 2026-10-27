import { ArkansCanvas } from "./ArkansCanvas";

export default function ArkansLayout({ children }: LayoutProps<"/projeler/arkans">) {
  return (
    <>
      <ArkansCanvas />
      {children}
    </>
  );
}
