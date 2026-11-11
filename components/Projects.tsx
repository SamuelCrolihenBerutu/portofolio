"use client";
import Image from "next/image";
import { useState } from "react";
import Section from "./Section";
import { projects, categories } from "@/data/content";

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const list = cat === "Semua" ? projects : projects.filter((p) => p.category === cat);
  return (
    <Section id="projects" kicker="03. projects" title="Featured Projects">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === c ? "border-accent bg-accent text-white" : "border-line bg-card text-muted hover:border-accent"}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={p.image} alt={`Preview ${p.title}`} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">{p.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">{t}</span>)}
              </div>
              <div className="mt-5 flex gap-3 text-sm font-semibold">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line px-4 py-2 transition hover:border-accent">GitHub</a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-4 py-2 text-white transition hover:opacity-90">Live Demo ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
