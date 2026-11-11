"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import ParticleField from "./ParticleField";

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) { setText(w.slice(0, text.length + 1)); if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200); }
      else { setText(w.slice(0, text.length - 1)); if (text.length - 1 === 0) { setDel(false); setI(i + 1); } }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return <>{text}<span className="ml-0.5 animate-pulse">|</span></>;
}

export default function Hero() {
  const card = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const tilt = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = card.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width - 0.5, y = (clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
    });
  };
  const reset = () => { cancelAnimationFrame(raf.current); if (card.current) card.current.style.transform = "perspective(800px)"; };

  return (
    <section id="home" className="relative overflow-hidden">
      <ParticleField />
      <div className="animate-float pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-30 will-change-transform [background:radial-gradient(circle,var(--accent)_0%,transparent_68%)]" />
      <div className="animate-float pointer-events-none absolute -right-40 -bottom-24 h-[28rem] w-[28rem] rounded-full opacity-30 will-change-transform [animation-delay:-3s] [background:radial-gradient(circle,var(--accent2)_0%,transparent_68%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-24 pb-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent">Halo, saya</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="mt-4 h-9 font-mono text-xl text-accent2 sm:text-2xl"><Typewriter words={profile.roles} /></p>
          <p className="mt-5 max-w-xl text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5">⬇︎ Unduh Resume ATS</a>
            <a href="#contact" className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold transition hover:border-accent">Hubungi Saya</a>
          </div>
        </div>

        {/* --- KOLEKSI ELEMEN & BACKGROUND TERBARU (CYBER/MODERN LOOK) --- */}
        <div className="flex justify-center" onMouseMove={tilt} onMouseLeave={reset}>
          <div ref={card} className="group relative h-[25rem] w-[21rem] sm:h-[28rem] sm:w-[23rem] rounded-[2.5rem] border border-accent/20 bg-card/60 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-300 will-change-transform">
            
            {/* Glow Aura & Neon Border Multi-layer */}
            <div className="absolute -inset-1 -z-10 rounded-[2.7rem] bg-gradient-to-tr from-accent via-purple-500 to-indigo-600 opacity-40 blur-xl transition duration-500 group-hover:opacity-80 group-hover:blur-2xl" />
            <div className="absolute -inset-0.5 -z-10 rounded-[2.6rem] bg-gradient-to-tr from-accent via-cyan-400 to-accent2 opacity-70" />

            {/* Inner Frame Tempat Background & Foto */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-950">
              
              {/* 1. Dynamic Radial & Mesh Background Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/60 via-slate-900 to-slate-950" />
              <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-accent/30 blur-2xl" />
              <div className="absolute top-1/2 -right-12 h-48 w-48 rounded-full bg-purple-600/25 blur-2xl" />

              {/* 2. Grid Pattern Futuristik */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* 3. Ring Halo Cahaya di Belakang Kepala/Subjek */}
              <div className="absolute top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-accent/30 bg-accent/10 blur-md" />
              <div className="absolute top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border border-cyan-400/20" />

              {/* 4. Foto Profil dengan Skala dan Bayangan yang Presisi */}
              <div className="relative z-10 h-full w-full">
                <Image 
                  src="/saya.jpg" 
                  alt={`Foto profil ${profile.name}`} 
                  fill 
                  priority 
                  sizes="(max-width: 640px) 336px, 368px" 
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>

              {/* 5. Overlay Cinematic Shadow di Bagian Bawah */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* 6. Status Floating Badge (Available to Work) */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/80 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-300">Available to Work</span>
              </div>

              {/* 7. Decorative Floating Code Tag Badge di Kiri Bawah */}
              <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 shadow-lg backdrop-blur-md">
                <span className="font-mono text-[11px] text-accent">&lt;/&gt;</span>
                <span className="font-mono text-[11px] font-medium text-slate-300">Full-Stack Dev</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}