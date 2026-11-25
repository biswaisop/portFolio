import { caseStudies, personalInfo } from "./data";

export const profile = {
  name: personalInfo.name,
  location: "Based in India",
  city: "Bengaluru, India",
  email: personalInfo.links.email,
  resume: personalInfo.links.resumePdf,
  portrait: "/images/portrait.webp",
  socials: [
    { label: "GitHub", href: personalInfo.links.github },
    { label: "LinkedIn", href: personalInfo.links.linkedin },
  ],
  photographs: [],
};

const [autopci, cachette, ...archive] = caseStudies;

export const portfolioProjects = [
  {
    ...autopci,
    category: "AI Agents / Developer Infrastructure",
    status: "Built and deployed",
    featured: true,
    art: "autopci",
    preview: "/images/projects/autopci.webp",
    screenshots: [],
    overview: "AutopCI investigates failed GitHub Actions runs. Its dashboard brings together a diagnosis, the evidence behind it, and streamed raw logs.",
    decisions: autopci.highlights,
    challenges: "Raw workflow logs are noisy, and a plausible diagnosis can still be wrong. The system organizes the evidence before model inference and checks that the diagnosis cites evidence that actually exists.",
    stack: ["Python", "FastAPI", "LangGraph", "MongoDB", "Next.js", "Clerk", "GitHub App", "Render"],
  },
  {
    slug: "klinicly",
    title: "Klinicly",
    category: "Healthcare / AI / Full-stack Engineering",
    status: "In development",
    year: "In progress",
    art: "klinicly",
    preview: null,
    screenshots: [],
    description: "A healthcare appointment platform in development, with a voice AI assistant planned for clinical documentation.",
    problem: "Appointment booking and clinical documentation serve different needs. The project explores how to simplify scheduling while keeping clinical documentation under the clinician’s control.",
    overview: "The appointment platform is the current focus. A voice assistant that helps draft clinical notes is planned for a later stage.",
    architecture: "The proposed architecture separates appointment workflows from any future voice processing, with a distinct review step before a draft note could be used in a clinical record.",
    decisions: ["Prioritize the appointment workflow first.", "Design the voice feature around draft notes and clinician review."],
    challenges: "Open design questions include scheduling conflicts, how to handle sensitive information, and how a clinician would review and correct an AI-assisted draft.",
    stack: [],
  },
  {
    ...cachette,
    status: "Built and deployed",
    featured: true,
    art: "cachette",
    preview: "/images/projects/cachette.webp",
    overview: "Cachette turns a spare computer into a private storage node, with a central control plane for accounts and access.",
    decisions: cachette.highlights,
    stack: cachette.tags,
    screenshots: [],
  },
  ...archive.map((project) => ({
    ...project,
    art: "archive",
    status: "Project archive",
    overview: project.description,
    decisions: project.highlights,
    stack: project.tags,
    screenshots: [],
  })),
];

export const featuredProjects = portfolioProjects.filter(({ featured }) => featured);

export const capabilities = [
  { name: "Software Engineering", copy: "I build products end to end, from web interfaces and APIs to the data models behind them.", tools: "Python, JavaScript, FastAPI, Next.js, Node.js, PostgreSQL, MongoDB" },
  { name: "Artificial Intelligence & Agents", copy: "I’m interested in systems that retrieve the right context, follow clear rules, and show their evidence.", tools: "LangGraph, LangChain, retrieval-augmented generation, Qdrant, ChromaDB, Hugging Face" },
  { name: "Infrastructure & Systems", copy: "I work on deployment, storage, and the operational details that keep software running.", tools: "Docker, AWS EC2 / S3 / RDS / ECR, Cloudflare Tunnel, Redis, MinIO, GitHub Actions" },
];
