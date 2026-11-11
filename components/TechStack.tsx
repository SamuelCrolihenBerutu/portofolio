"use client";

import { techStack } from "@/data/content";

export default function TechStack() {
  return (
    <section id="tech" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-sm text-accent">02. stack</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Tech Stack &amp; Tools</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {techStack.map((g) => (
            <div key={g.group} className="rounded-2xl border border-line bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-fg">{g.group}</h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {g.items.map((item: any) => {
                  const name = typeof item === "string" ? item : item.name;
                  const icon = typeof item === "object" ? item.icon : null;
                  const shortName = name.slice(0, 2);

                  return (
                    <div
                      key={name}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-bg/40 p-3 text-center transition hover:-translate-y-1 hover:border-accent hover:bg-card hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-transparent transition group-hover:scale-110">
                        {icon ? (
                          <img
                            src={icon}
                            alt={name}
                            className="h-8 w-8 object-contain transition-transform duration-300"
                          />
                        ) : (
                          <span className="font-bold text-accent">{shortName}</span>
                        )}
                      </span>
                      <span className="font-mono text-[11px] font-medium leading-tight text-muted group-hover:text-fg">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}