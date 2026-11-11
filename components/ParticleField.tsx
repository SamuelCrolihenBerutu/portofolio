"use client";
import { useEffect, useRef } from "react";

// Jaringan partikel interaktif yang hemat CPU:
// berhenti saat keluar layar / tab tidak aktif, dibatasi ~30fps, DPR maks 1.5, partikel lebih sedikit di HP.
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d");
    if (!ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let w = 0, h = 0, raf = 0, last = 0, visible = true, color = "#06b6d4";
    const mouse = { x: -999, y: -999 };
    const pts: { x: number; y: number; vx: number; vy: number }[] = [];

    const readColor = () => { color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || color; };
    const resize = () => {
      const r = cv.getBoundingClientRect(), d = coarse ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      w = r.width; h = r.height; cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      pts.length = 0;
      const n = Math.min(coarse ? 20 : 50, Math.floor((w * h) / (coarse ? 22000 : 16000)));
      for (let i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
    };
    const draw = (step: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color; ctx.strokeStyle = color;
      for (const a of pts) {
        const dx = a.x - mouse.x, dy = a.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 14000) { const k = 0.05 * step / Math.sqrt(d2 || 1); a.vx += dx * k; a.vy += dy * k; }
        a.vx *= 0.99; a.vy *= 0.99;
        a.x += a.vx * step; a.y += a.vy * step;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      for (const a of pts) { ctx.moveTo(a.x + 1.8, a.y); ctx.arc(a.x, a.y, 1.8, 0, 6.2832); }
      ctx.fill();
      // Garis dikelompokkan jadi 3 tingkat transparansi -> hanya 3x stroke per frame
      const buckets: Path2D[] = [new Path2D(), new Path2D(), new Path2D()];
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = dx * dx + dy * dy;
        if (d < 9000) { const b = buckets[d < 3000 ? 0 : d < 6000 ? 1 : 2]; b.moveTo(pts[i].x, pts[i].y); b.lineTo(pts[j].x, pts[j].y); }
      }
      const alphas = [0.2, 0.12, 0.05];
      buckets.forEach((b, k) => { ctx.globalAlpha = alphas[k]; ctx.stroke(b); });
    };
    const frame = (t: number) => {
      raf = 0;
      if (!visible || document.hidden) return; // berhenti total, tidak menjadwalkan frame lagi
      if (t - last >= (coarse ? 40 : 32)) { draw(Math.min((t - last) / 16.7, 3)); last = t; }
      raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!raf && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } };
    const move = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; start(); });
    const mo = new MutationObserver(readColor);
    io.observe(cv);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", start);
    window.addEventListener("resize", resize);
    if (!coarse) window.addEventListener("pointermove", move, { passive: true });
    readColor(); resize(); start();
    return () => {
      cancelAnimationFrame(raf); io.disconnect(); mo.disconnect();
      document.removeEventListener("visibilitychange", start);
      window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
