export const personalInfo = {
  name: "Biswadip Mandal",
  wordmark: "biswadip mandal.",
  leadTitle: "the / developer.",
  shortTitle: "b.mandal",
  location: "Bengaluru, India",
  coordinates: "12.9716° N, 77.5946° E",
  status: "Open to AI & Backend Internships",
  roles: [
    "Backend Developer",
    "AI Systems Engineer",
    "RAG & Agent Architect",
    "Co-Founder @ Nooriks",
  ],
  tagline:
    "Building backend-first products with RAG systems, multi-tenant architecture, and reliable data flows.",
  bio: [
    "I am a Computer Science engineering student at RV Institute of Technology and Management (RVITM) in Bengaluru and co-founder of Nooriks, an agile development agency.",
    "My engineering focus revolves around robust backend systems, resilient multi-tenant architectures, and deterministic AI agents. I emphasize latency reduction, evaluation benchmarks, and cost-efficient vector retrieval.",
    "Currently interned as a Backend Developer at Genovation Solutions Technologies, and actively participate in campus technical communities including GDG on Campus RVITM and Phoenix Robotics Club.",
  ],
  links: {
    github: "https://github.com/biswaisop",
    linkedin: "https://www.linkedin.com/in/biswadip-mandal-76b65222b/",
    resumePdf: "/resume.pdf",
    resumeDrive:
      "https://drive.google.com/file/d/1NEWkAB1Tsa2hqy2HxSuCJiITmxaeqZTy/view?usp=sharing",
    email: "biswadipmandal99@gmail.com",
  },
  emailJs: {
    serviceId: "service_2sgjnch",
    templateId: "template_i44wek3",
    publicKey: "MewtqevsXxA7zoUya",
  },
};

export const worldClockCities = [
  { city: "Bengaluru", zone: "Asia/Kolkata", label: "BLR", utc: "+05:30" },
  { city: "London", zone: "Europe/London", label: "LDN", utc: "+01:00" },
  { city: "New York", zone: "America/New_York", label: "NYC", utc: "-04:00" },
  { city: "San Francisco", zone: "America/Los_Angeles", label: "SFO", utc: "-07:00" },
  { city: "Tokyo", zone: "Asia/Tokyo", label: "TYO", utc: "+09:00" },
  { city: "Berlin", zone: "Europe/Berlin", label: "BER", utc: "+02:00" },
];

export const projects = [
  {
    slug: "cachette",
    number: "01",
    title: "Cachette",
    fullTitle: "Cachette — Self-Hosted Personal Cloud Storage",
    category: "Distributed Cloud Storage",
    year: "2026 – Present",
    lead: "Turns an old PC into private, internet-accessible cloud storage via a thin central control plane plus a one-command Docker Compose node bundle.",
    description:
      "Turns an old PC into private, internet-accessible cloud storage via a thin central control plane plus a one-command Docker Compose node bundle.",
    github: null,
    githubNote: "Central repo is private · Node repo in progress",
    isPrivate: true,
    tags: ["FastAPI", "PostgreSQL", "Redis", "MinIO", "Docker", "Cloudflare Tunnel", "AWS"],
    highlights: [
      "Automated Cloudflare Tunnel + DNS subdomain provisioning",
      "Crockford-Base32 client pairing with atomic Redis Lua claims",
      "JWT auth, email-OTP reset, token-version session revocation",
      "Redis token-bucket rate limiting; S3-compatible multipart uploads",
      "CI/CD: GitHub Actions → ECR → EC2 with auto-migrations",
    ],
    problem:
      "Transforming consumer hardware into internet-accessible, private personal cloud storage without static public IPs, complex port-forwarding, or security vulnerabilities.",
    architecture:
      "Thin central control plane orchestrating automated Cloudflare Tunnels and DNS subdomains. A single-command Docker Compose node bundle runs on the host PC. Pairing is managed via Crockford-Base32 codes with atomic Redis Lua claims. Authentication enforces JWT, email-OTP recovery, and token-version session revocation. Uploads leverage S3-compatible multipart transfers to MinIO with Redis token-bucket rate limiting.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Docker & Docker Compose",
      "Cloudflare Tunnel",
      "AWS (EC2, ECR)",
      "GitHub Actions",
    ],
    outcome:
      "Fully automated provisioning pipeline enabling secure, zero-config internet exposure for private storage hardware, supported by continuous automated migrations and deployment.",
  },
  {
    slug: "front-desk-ai",
    number: "02",
    title: "Front Desk AI",
    fullTitle: "Front Desk AI — Multi-Tenant Hotel Chatbot Platform",
    category: "Multi-Tenant Agentic RAG",
    year: "Feb 2026",
    lead: "LangGraph conversation orchestration + RAG for hotel front desks.",
    description:
      "LangGraph conversation orchestration + RAG for hotel front desks with hybrid intent routing and multi-tenant persistence.",
    github: "https://github.com/biswaisop/engage-prototype",
    githubNote: null,
    isPrivate: false,
    tags: ["LangGraph", "FastAPI", "Redis", "MongoDB", "ChromaDB", "Qdrant", "Docker"],
    highlights: [
      "Hybrid intent classification (keyword + LLM) routing booking capture, issue escalation, human handoff, general chat",
      "Redis session memory with TTL; MongoDB conversation persistence",
      "Org-level data isolation, confidence-threshold hallucination prevention, LLM fallbacks",
    ],
    problem:
      "Hotel front desks require 24/7 guest communication handling booking workflows, service escalations, and property FAQs without cross-tenant memory leakage or ungrounded responses.",
    architecture:
      "Constructed using LangGraph for multi-turn conversation orchestration. Implements hybrid intent classification combining fast keyword heuristics and LLM evaluation to route between booking capture, issue escalation, human staff handoff, and general FAQ chat. Transient session memory is handled via TTL-backed Redis, while permanent dialogue records persist in MongoDB. Enforces strict organization-level vector isolation and confidence thresholds.",
    stack: [
      "LangGraph",
      "FastAPI",
      "Redis",
      "MongoDB",
      "ChromaDB",
      "Qdrant",
      "Docker",
    ],
    outcome:
      "Production-ready multi-tenant guest engagement system with deterministic guardrails, graceful LLM fallbacks, and strict tenant isolation.",
  },
  {
    slug: "embedding-service",
    number: "03",
    title: "Embedding Service",
    fullTitle: "Embedding Service — Self-Hosted Embedding Microservice",
    category: "High-Throughput ML Microservice",
    year: "2026",
    lead: "Self-hosted embedding microservice with semaphore-controlled async batch processing, GPU/CPU mode switching, and per-request telemetry.",
    description:
      "Self-hosted embedding microservice deployed at Genovation as a drop-in Replicate replacement for production embedding workloads.",
    github: "https://github.com/biswaisop/embedding-service",
    githubNote: null,
    isPrivate: false,
    tags: ["FastAPI", "HuggingFace", "Docker", "GPU/CPU"],
    highlights: [
      "Semaphore-controlled async batch processing",
      "Dynamic GPU/CPU mode switching with per-request telemetry",
      "Deployed at Genovation as a drop-in Replicate replacement for production embedding workloads",
    ],
    problem:
      "Third-party hosted embedding APIs (e.g. Replicate) introduce latency variance, rate limits, and recurring per-token fees for continuous production embedding workloads.",
    architecture:
      "High-throughput FastAPI microservice wrapping HuggingFace embedding models. Uses semaphore-controlled asynchronous batching to maximize hardware saturation while preventing OOM crashes. Features flexible runtime toggling between CUDA GPU acceleration and CPU mode, paired with fine-grained per-request latency and throughput telemetry.",
    stack: [
      "FastAPI",
      "HuggingFace Transformers",
      "Python",
      "Docker",
      "CUDA / CPU Execution",
    ],
    outcome:
      "Successfully replaced external Replicate dependencies at Genovation Solutions Technologies, providing deterministic throughput and local data governance for enterprise AI workloads.",
  },
];

export const services = [
  {
    number: "01",
    title: "Backend & APIs",
    lead: "High-throughput microservices, multi-tenant databases, caching layers, and resilient system boundaries.",
    description:
      "I design and implement backend architectures with FastAPI and Node.js that remain predictable under load. From schema design in PostgreSQL and MongoDB to sub-millisecond Redis caching and bulletproof authentication (JWT/OAuth), every layer is crafted for security, observability, and clean maintainability.",
    points: [
      "FastAPI & Node.js REST services with Beanie & async SQLAlchemy",
      "Multi-tenant database schema isolation (PostgreSQL, MongoDB)",
      "Distributed caching & session layers with Redis",
      "Role-based access control, JWT, and session revocation",
      "Dockerized containerization and automated CI/CD pipelines",
    ],
    tools: ["FastAPI", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "MinIO"],
    image: "/images/services/backend.jpg",
  },
  {
    number: "02",
    title: "AI Systems & Agents",
    lead: "Production RAG architectures, autonomous LangGraph agent graphs, evals, and token cost optimization.",
    description:
      "Moving beyond toy prototypes into enterprise-grade AI workflows. I construct hybrid search vector pipelines (Qdrant, ChromaDB), cyclic multi-agent graphs with tool-calling capabilities, semantic evaluation harnesses, and caching mechanisms.",
    points: [
      "Retrieval-Augmented Generation (RAG) with vector databases (Qdrant, ChromaDB)",
      "Multi-agent workflow orchestration via LangGraph & LangChain",
      "Automated evaluation suites for hallucination and relevance scoring",
      "Hybrid intent classification and self-hosted embedding pipelines",
      "Safe execution sandboxes and live telemetry",
    ],
    tools: ["LangGraph", "LangChain", "Qdrant", "ChromaDB", "HuggingFace", "Together AI", "Ollama"],
    image: "/images/services/ai-systems.jpg",
  },
  {
    number: "03",
    title: "Product Engineering for Startups",
    lead: "Full-stack execution through Nooriks. We build scalable digital products, MVPs, and modern web applications.",
    description:
      "As co-founder of Nooriks, I partner with early-stage founders and growing startups to turn concepts into shipped, production-ready software. We prioritize rapid agile iterations, rock-solid engineering foundations, and refined user experience.",
    points: [
      "End-to-end MVP architecture and technical roadmapping",
      "Clean, modern frontends with Next.js, React, and Tailwind CSS",
      "Cloud infrastructure provisioning (AWS, Cloudflare Tunnel, Docker)",
      "Fast turnaround sprint cycles with direct engineering collaboration",
      "Continuous support, observability, and post-launch refinement",
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Nooriks Agency", "Docker", "AWS"],
    image: "/images/services/startups.jpg",
  },
];

export const experience = [
  {
    role: "Backend Developer Intern",
    company: "Genovation Solutions Technologies",
    period: "Mar–Sep 2026",
    duration: "6 months",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Built and maintained a production RAG pipeline (vector embeddings, semantic search, Qdrant) for an enterprise AI platform with real end-users",
      "Developed FastAPI services for AI query workflows, with query analytics persisted in MongoDB via Beanie ODM",
      "Migrated analytics endpoints from a mock DB to live MongoDB",
      "Resolved merge conflicts from a Replicate → Together AI LLM migration",
    ],
    skills: ["FastAPI", "Python", "Qdrant", "MongoDB", "RAG"],
  },
  {
    role: "Community Coordinator",
    company: "GDG on Campus RVITM",
    period: "May 2026 – Present",
    location: "Bengaluru, India",
    type: "Community",
    bullets: [
      "Coordinated the relaunch of the chapter; organized two technical workshops and a competition (AI/ML, full-stack, cloud)",
    ],
    skills: ["Community", "Workshops", "Mentoring"],
  },
  {
    role: "Junior Web Developer",
    company: "Phoenix Robotics Club RVITM",
    period: "Apr 2025 – Present",
    location: "Bengaluru, India",
    type: "Club",
    bullets: [
      "Web development initiatives and technical workshops for the club",
    ],
    skills: ["Next.js", "Node.js", "React", "Tailwind CSS"],
  },
  {
    role: "B.E. Computer Science",
    company: "RV Institute of Technology and Management",
    period: "Sept 2024 – July 2028",
    location: "Bengaluru, India",
    type: "Education",
    bullets: [
      "Coursework: Algorithm Design & Analysis, Data Structures, Computer Networks, Database Systems",
    ],
    skills: ["Algorithm Design", "Data Structures", "Computer Networks", "Database Systems"],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    description: "Core languages and web backends for service development.",
    items: ["Python", "FastAPI", "Next.js", "Node.js", "JavaScript"],
  },
  {
    title: "AI / ML",
    description: "Agent orchestration, retrieval systems, and model serving.",
    items: [
      "LangGraph",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "HuggingFace",
      "Ollama",
      "Together AI",
    ],
  },
  {
    title: "Data",
    description: "Databases, vector indexing, caching, and object storage.",
    items: [
      "MongoDB (Beanie)",
      "PostgreSQL (async SQLAlchemy, Alembic)",
      "Qdrant",
      "ChromaDB",
      "Redis",
      "MySQL",
      "MinIO/S3",
    ],
  },
  {
    title: "DevOps",
    description: "Containerization, cloud infrastructure, and CI/CD pipelines.",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS (EC2, S3, RDS, ECR)",
      "Cloudflare Tunnel",
      "Vercel",
    ],
  },
  {
    title: "Tools",
    description: "Developer tooling, security, and telemetry instrumentation.",
    items: [
      "Git",
      "Clerk",
      "HashiCorp Vault",
      "Prometheus",
      "Grafana",
      "Sentry",
    ],
  },
];

export const resumeProjects = [
  {
    slug: "autopci",
    title: "AutopCI",
    category: "CI investigation",
    year: "2026",
    description: "A GitHub App that investigates failed Actions runs and produces a diagnosis tied to specific evidence.",
    tags: ["FastAPI", "LangGraph", "MongoDB", "Next.js"],
    problem: "Finding the cause of a failed CI run can mean reading long logs, checking recent changes, and comparing against the last passing run.",
    architecture: "AutopCI verifies GitHub webhooks, deduplicates deliveries in MongoDB, and collects evidence in the background. It extracts failing tests and exceptions, locates the last passing run, and relates failing files to the commit diff.",
    highlights: [
      "Combines a rule-based classifier with a bounded LangGraph investigation.",
      "Validates every cited evidence ID and reports insufficient evidence when the data falls short.",
      "Links GitHub App installations to Clerk accounts and shows diagnoses and raw logs in a dashboard.",
    ],
    outcome: "Deployed the app on Render so teams could investigate failed GitHub Actions runs through the dashboard.",
    link: "https://github.com/biswaisop/ci_faliure_agent",
    linkLabel: "View repository",
  },
  {
    slug: "cachette",
    title: "Cachette",
    category: "Self-hosted cloud storage",
    year: "2026",
    description: "A self-hosted platform that turns an old PC into private cloud storage you can reach over the internet.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "MinIO", "Docker"],
    problem: "Running private cloud storage at home involves getting a storage node online, keeping access secure, and handling large files reliably.",
    architecture: "A central FastAPI control plane manages accounts, node registration, and Cloudflare tunnel provisioning. A Docker Compose bundle runs on the host PC. MinIO stores objects, while PostgreSQL tracks folder structure.",
    highlights: [
      "Automates named tunnels and DNS records, with heartbeat telemetry and Redis-backed client pairing.",
      "Uses S3-compatible multipart uploads and metadata-only file moves and renames.",
      "Sets up GitHub Actions to test, build, publish to ECR, and deploy to EC2 with database migrations.",
    ],
    outcome: "Built a one-command storage node bundle and automated the control-plane deployment on AWS.",
    link: "https://cachette.cloud",
    linkLabel: "Visit Cachette",
  },
];

export const caseStudies = [
  ...resumeProjects,
  ...projects
    .filter(({ slug }) => slug !== "cachette")
    .map((project) => ({
      ...project,
      title: project.fullTitle,
      link: project.github,
      linkLabel: "View repository",
    })),
];

export const resumeSkills = [
  ["Backend & AI", "Python, FastAPI, LangGraph, LangChain, RAG pipelines, Hugging Face, Ollama"],
  ["Web", "Next.js, Node.js, JavaScript"],
  ["Data & storage", "MongoDB, PostgreSQL, Redis, Qdrant, ChromaDB, MinIO, S3"],
  ["Cloud & DevOps", "Docker, AWS EC2/RDS/ECR, Cloudflare Tunnel, Render, GitHub Actions"],
  ["Tools & observability", "Clerk, Vault, Prometheus, Grafana, Sentry"],
];
