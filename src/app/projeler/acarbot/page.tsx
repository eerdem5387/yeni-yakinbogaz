import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";

export const metadata: Metadata = { title: "AcarBOT" };

export default function Page() {
  return (
    <section className="container pt-32 pb-24">
      <MetaRow index="04" label="AcarBOT" />
      <h1 className="mt-12 text-[clamp(3rem,8vw,6rem)] leading-none font-medium tracking-[-0.05em]">
        AcarBOT
      </h1>
      <p className="mt-6 max-w-lg text-lg text-paper/70">Bu proje sayfası hazırlanıyor.</p>
      <Link href="/projeler" className="link-arrow mt-10">
        Tüm projeler
      </Link>
    </section>
  );
}
