"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";

const fields = [
  { name: "name", label: "Ad soyad", type: "text", autoComplete: "name" },
  { name: "email", label: "E-posta", type: "email", autoComplete: "email" },
  { name: "phone", label: "Telefon", type: "tel", autoComplete: "tel" },
] as const;

export function ContactForm() {
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Ad soyad: ${name}`, `E-posta: ${email}`, `Telefon: ${phone}`, "", message].join(
      "\n",
    );
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(`İletişim — ${name}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm">
          <span className="kicker">{field.label}</span>
          <input
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            className="h-12 border border-white/20 bg-transparent px-3 text-base text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-paper"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm">
        <span className="kicker">Mesaj</span>
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y border border-white/20 bg-transparent px-3 py-3 text-base text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-paper"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button type="submit" className="pill pill-solid">
          Mesajı gönder
          <ArrowUpRight size={16} />
        </button>
        {ready ? (
          <p className="text-sm text-paper/70">İleti, e-posta uygulamanızda hazırlandı.</p>
        ) : (
          <p className="text-sm text-muted">Gönderim {contact.email} adresine açılır.</p>
        )}
      </div>
    </form>
  );
}
