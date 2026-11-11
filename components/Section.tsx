import Reveal from "./Reveal";

export default function Section({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{kicker}</p>
        <h2 className="mt-1 mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}
