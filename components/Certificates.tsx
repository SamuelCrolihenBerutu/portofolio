"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "./Section";
import { certificates } from "@/data/content";

export default function Certificates() {
  const [open, setOpen] = useState<number | null>(null);
  const n = certificates.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % n));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + n) % n));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, n]);

  const c = open !== null ? certificates[open] : null;
  return (
    <Section id="certificates" kicker="04. credentials" title="Certificates & Badges">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((x, i) => (
          <button key={x.title} onClick={() => setOpen(i)} className="group overflow-hidden rounded-2xl border border-line bg-card text-left transition hover:-translate-y-1 hover:border-accent">
            <div className="relative aspect-[10/7] overflow-hidden">
              <Image src={x.image} alt={`Sertifikat ${x.title}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute top-3 right-3 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] text-white">{x.type}</span>
            </div>
            <div className="p-4"><h3 className="font-bold leading-snug">{x.title}</h3><p className="mt-1 text-sm text-muted">{x.issuer} · {x.year}</p></div>
          </button>
        ))}
      </div>

      {c && (
        <div role="dialog" aria-modal="true" aria-label={c.title} onClick={() => setOpen(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
            <div className="relative aspect-[10/7] w-full overflow-hidden rounded-xl bg-black">
              <Image src={c.image} alt={`Sertifikat ${c.title}`} fill sizes="90vw" className="object-contain" />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-white">
              <div><p className="font-bold">{c.title}</p><p className="text-sm text-white/70">{c.issuer} · {c.year}</p></div>
              <div className="flex gap-2 text-sm">
                <button onClick={() => setOpen((open! - 1 + n) % n)} className="rounded-lg bg-white/10 px-3 py-2" aria-label="Sebelumnya">←</button>
                <button onClick={() => setOpen((open! + 1) % n)} className="rounded-lg bg-white/10 px-3 py-2" aria-label="Berikutnya">→</button>
                <a href={c.verify} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-3 py-2 font-semibold">Verifikasi ↗</a>
                <button onClick={() => setOpen(null)} className="rounded-lg bg-white/10 px-3 py-2" aria-label="Tutup">✕</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
