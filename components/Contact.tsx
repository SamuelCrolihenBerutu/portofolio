"use client";
import { useState } from "react";
import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: key, subject: "Pesan baru dari portofolio" }),
      });
      const json = await res.json();
      if (json.success) { setState("ok"); form.reset(); } else setState("error");
    } catch { setState("error"); }
  }

  const input = "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm outline-none transition focus:border-accent";
  const links = [
    { label: "GitHub", href: profile.github }, { label: "LinkedIn", href: profile.linkedin }, { label: "Email", href: `mailto:${profile.email}` },
  ];
  return (
    <Section id="contact" kicker="06. contact" title="Hubungi Saya">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-muted">Tertarik berkolaborasi, magang, atau sekadar ngobrol soal teknologi? Kirim pesan, saya biasanya membalas dalam 1–2 hari.</p>
          <div className="mt-6 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-line bg-card px-4 py-3 text-sm font-semibold transition hover:border-accent">
                {l.label}<span className="text-accent">↗</span>
              </a>
            ))}
            <button type="button" onClick={copy} className="flex items-center justify-between rounded-xl border border-dashed border-line px-4 py-3 text-sm font-semibold text-muted transition hover:border-accent hover:text-fg">
              {copied ? "Email tersalin ✓" : `Salin email: ${profile.email}`}<span>⧉</span>
            </button>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <input name="name" required placeholder="Nama" className={input} />
          <input name="email" type="email" required placeholder="Email" className={input} />
          <textarea name="message" required rows={5} placeholder="Pesan" className={input} />
          <button disabled={state === "sending" || !key} className="w-full rounded-xl bg-accent py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50">
            {state === "sending" ? "Mengirim…" : "Kirim Pesan"}
          </button>
          
          {state === "ok" && <p className="text-sm text-emerald-500" role="status">Terima kasih! Pesan Anda terkirim ✓</p>}
          {state === "error" && <p className="text-sm text-red-500" role="alert">Gagal mengirim. Coba lagi atau gunakan email langsung.</p>}
        </form>
      </div>
    </Section>
  );
}
