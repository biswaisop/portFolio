import React from "react";

const projects = [
  {
    title: "AI-Powered Hotel Front Desk Chatbot",
    description:
      "Designed a multi-tenant RAG assistant for hotel FAQs and booking flows with memory-aware routing and cost-conscious retrieval.",
    tags: ["RAG", "Multi-tenant", "Vector DB", "Backend"],
    github: "https://github.com/biswaisop/engage-prototype",
  },
  {
    title: "Algeria Forest Fires Prediction",
    description:
      "Built a prediction pipeline using structured data preprocessing, model evaluation, and API-based inference for wildfire risk.",
    tags: ["ML", "Data pipelines", "FastAPI"],
    github: "https://github.com/biswaisop/Algeria-forest-fires",
  },
  {
    title: "Height Vs. Weight Prediction",
    description:
      "Developed a regression model to predict weight based on height using a publicly available Kaggle dataset. This project was part of my machine learning learning process and focused on understanding the end-to-end ML workflow.",
    tags: ["ML", "Data pipelines", "FastAPI"],
    github: "https://github.com/biswaisop/Height-Weight-Prediction",
  },
];

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60"
        >
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-[#1e3a8a] hover:underline dark:text-blue-300"
          >
            View on GitHub
          </a>
        </article>
      ))}
    </div>
  );
};

export default ProjectCard;
