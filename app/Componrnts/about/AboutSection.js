import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50 sm:p-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-zinc-900 dark:text-zinc-100">
                About
              </h2>
              <p className="mt-4 text-[clamp(1rem,1.4vw,1.125rem)] text-zinc-600 dark:text-zinc-300">
                I build backend-first products with an emphasis on RAG systems,
                multi-tenant architecture, and reliable data flows. My work focuses
                on performance, cost optimization, and clear system boundaries to
                keep services resilient as they scale.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Focus Areas
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "RAG pipelines and retrieval strategy",
                    "Multi-tenant backend architecture",
                    "Observability and reliability",
                    "Cost-aware infrastructure planning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
