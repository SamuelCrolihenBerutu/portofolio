"use client";
import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { profile, projects, certificates, techStack } from "@/data/content";

function Counter({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let c = 0;
      const id = setInterval(() => { c++; setN(c); if (c >= to) clearInterval(id); }, 900 / Math.max(to, 1));
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="rounded-2xl border border-line bg-card p-5 text-center">
      <div className="text-4xl font-extrabold text-accent">{n}+</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function About() {
  const techCount = techStack.reduce((s, g) => s + g.items.length, 0);
  return (
    <Section id="about" kicker="01. about" title="Tentang Saya">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-500">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>
            {profile.status}
          </span>
          <p className="mt-5 leading-relaxed text-muted">{profile.bio}</p>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
            {["Full-Stack", "RESTful API", "Machine Learning"].map((t) => <span key={t} className="rounded-md bg-accent/10 px-2.5 py-1 text-accent">{t}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Counter to={projects.length} label="Project" />
          <Counter to={certificates.length} label="Sertifikat" />
          <Counter to={techCount} label="Tech Stack" />
        </div>
      </div>
    </Section>
  );
}
