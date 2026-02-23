import React from "react";

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "Auth (JWT, OAuth)",
      "Caching",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "AI/ML",
    items: [
      "RAG systems",
      "Vector search",
      "Embedding pipelines",
      "Prompt orchestration",
      "Evaluation",
      "Linear regression",
      "Logistic regression",
      "Classification models",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Docker",
      "Redis",
      "GitHub Actions",
      "Postman",
      "Linux",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50 sm:p-8">
          <div className="mb-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-zinc-900 dark:text-zinc-100">
              Skills
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.4vw,1.125rem)] text-zinc-600 max-w-2xl dark:text-zinc-300">
              A focused toolkit for building dependable backend systems and
              AI-enabled applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200/70 bg-white/80 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
