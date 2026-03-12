import React from "react";

const experienceData = [
  {
    title: "Back End Developer Intern",
    company: "Genovation",
    type: "Internship",
    duration: "Mar 2026 - Present · 1 mo",
    location: "Kolkata, West Bengal, India · Remote",
    description:
      "Working as a Backend Developer Intern at Genovation Solutions Technologies, contributing to backend systems and participating in end-to-end software development workflows.",
    skills: [
      "FastAPI",
      "Back-End Web Development",
      "Python",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Member",
    company: "Phoenix Robotics Club RVITM",
    duration: "Apr 2025 - Present · 1 yr",
    location: "Bengaluru, Karnataka, India",
    description: "Junior Web Developer",
    skills: ["Next.js", "Node.js", "React", "Tailwind CSS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50 sm:p-8">
          <div className="mb-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-zinc-900 dark:text-zinc-100">
              Experience
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.4vw,1.125rem)] text-zinc-600 max-w-2xl dark:text-zinc-300">
              My professional journey and contributions to software development
              and community projects.
            </p>
          </div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Glowing Connecting Line - between dot centers, not on last item */}
                {index !== experienceData.length - 1 && (
                  <div className="absolute left-[5px] top-[14px] h-[calc(100%+32px)] w-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
                )}

                {/* Permanently Glowing Dot */}
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10" />

                <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.company} {exp.type && `· ${exp.type}`}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {exp.duration}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
