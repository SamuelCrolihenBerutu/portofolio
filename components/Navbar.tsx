"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { id: "home", label: "Home", icon: "⌂\uFE0E" }, { id: "about", label: "About", icon: "☺\uFE0E" },
  { id: "tech", label: "Tech Stack", icon: "⚙\uFE0E" }, { id: "projects", label: "Projects", icon: "▣\uFE0E" },
  { id: "certificates", label: "Sertifikat", icon: "★\uFE0E" }, { id: "activities", label: "Kegiatan", icon: "◷\uFE0E" },
  { id: "contact", label: "Kontak", icon: "✉\uFE0E" },
];
const initials = profile.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const toggle = () => {
    const next = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  const themeBtn = (
    <button onClick={toggle} aria-label="Ganti tema" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card text-base transition hover:border-accent">
      <span className="hidden dark:inline">☀</span><span className="dark:hidden">☾</span>
    </button>
  );

  return (
    <>
      {/* Desktop: floating pill */}
      <header className="fixed inset-x-0 top-4 z-40 hidden justify-center md:flex">
        <nav className="flex items-center gap-1 rounded-full border border-line bg-card/90 p-1.5 shadow-lg md:backdrop-blur-md">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${active === l.id ? "bg-accent text-white" : "text-muted hover:text-fg"}`}>{l.label.split(" ")[0]}</a>
          ))}
          {themeBtn}
        </nav>
      </header>

      {/* Mobile: top bar + menu dropdown */}
      <div className="fixed inset-x-3 top-3 z-40 md:hidden">
        {open && <div className="fixed inset-0 -z-10 bg-black/40" onClick={() => setOpen(false)} />}
        <div className="flex items-center justify-between rounded-2xl border border-line bg-card/95 py-2 pr-2 pl-3 shadow-lg">
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-xs font-extrabold text-white">{initials}</span>
            <span className="max-w-[9.5rem] truncate text-sm">{profile.name}</span>
          </a>
          <div className="flex items-center gap-2">
            {themeBtn}
            <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card transition hover:border-accent">
              <span className="relative block h-3.5 w-4">
                <span className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute top-1.5 left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
        <nav id="mobile-menu" aria-hidden={!open} className={`mt-2 origin-top rounded-2xl border border-line bg-card p-2 shadow-2xl transition-[opacity,scale] duration-200 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}>
          <div className="grid grid-cols-2 gap-1">
            {links.map((l, i) => (
              <a key={l.id} href={`#${l.id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 25}ms` : "0ms" }}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"} ${active === l.id ? "bg-accent/15 text-accent" : "text-fg hover:bg-line/60"} ${i === links.length - 1 ? "col-span-2" : ""}`}>
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-base text-accent">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
