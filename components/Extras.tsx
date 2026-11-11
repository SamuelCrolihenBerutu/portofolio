"use client";
import { useEffect, useRef, useState } from "react";

// Progress bar ditulis langsung ke DOM (tanpa re-render React tiap scroll); state hanya berubah saat melewati ambang.
export default function Extras() {
  const bar = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let raf = 0, shown = false;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (p > 0.15 !== shown) { shown = !shown; setShow(shown); }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <>
      <div ref={bar} className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent to-accent2 will-change-transform" style={{ transform: "scaleX(0)" }} />
      <a href="#home" aria-label="Kembali ke atas"
        className={`fixed right-4 bottom-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg transition ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}>↑</a>
    </>
  );
}
