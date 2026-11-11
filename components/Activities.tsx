import Image from "next/image";
import Section from "./Section";
import { activities } from "@/data/content";

export default function Activities() {
  return (
    <Section id="activities" kicker="05. experience" title="Activities & Experience">
      <ol className="relative space-y-8 border-l-2 border-line pl-6 md:pl-8">
        {activities.map((a) => (
          <li key={a.title} className="relative">
            <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full border-4 border-bg bg-accent md:-left-[42px]" />
            <div className="grid gap-4 overflow-hidden rounded-2xl border border-line bg-card sm:grid-cols-[220px_1fr]">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-36">
                <Image src={a.image} alt={a.title} fill sizes="(min-width:640px) 220px, 100vw" className="object-cover" />
              </div>
              <div className="p-5 sm:pl-1">
                <p className="font-mono text-xs text-accent">{a.year} · {a.role}</p>
                <h3 className="mt-1 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
