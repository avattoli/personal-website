type Project = {
  title: string;
  img: string;
  blurb: string;
  tags: string[];
  href?: string; // optional link (GitHub/demo)
};

const projects: Project[] = [
  {
    title: "AI-Assisted Math Notes",
    img: "mathnotes.png",
    blurb: "Typed math notes with search, export, and spaced repetition.",
    tags: ["Swift", "XCode"],
    href: "#",
  },
  {
    title: "Real-Time music game",
    img: "musicgame.png",
    blurb: "Guess-the-track party game with realtime rooms & audio snippets.",
    tags: ["JavaScript", "Socket.IO", "Node.js"],
    href: "#",
  },
  {
    title: "Project Management Web App",
    img: "mytasks.png",
    blurb: "Minimal Kanban with hotkeys, share links, and offline cache.",
    tags: ["Mongo", "Express", "JavaScript"],
    href: "#",
  },
];

// One soft light-blue gradient for everything
const LIGHT_BLUE_GRAD = "from-sky-300/40 via-sky-200/40 to-indigo-200/40";

function ProjectCard({ p }: { p: Project }) {
  return (
    <a href={p.href || "#"} className="group relative block focus:outline-none" aria-label={p.title}>
      {/* Soft glow on hover */}
      <div
        className={`pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-r ${LIGHT_BLUE_GRAD}`}
      />
      {/* Gradient border wrapper */}
      <div className={`relative rounded-3xl p-[1.5px] bg-gradient-to-br ${LIGHT_BLUE_GRAD}`}>
        {/* Card body */}
        <div className="relative rounded-[22px] bg-white/95 backdrop-blur-sm shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1">
          {/* Accent corner */}
          <div
            className={`absolute right-4 top-4 h-7 w-7 rounded-xl bg-gradient-to-br ${LIGHT_BLUE_GRAD} opacity-15 group-hover:opacity-25 transition-opacity`}
          />
          {/* Image */}
          <div className="overflow-hidden rounded-t-[22px]">
            <img
              src={p.img}
              alt={p.title}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="space-y-3 p-5">
            <h3 className={`text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-indigo-700`}>
              {p.title}
            </h3>
            <p className="text-sm text-gray-700">{p.blurb}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-xs text-gray-700 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Subtle CTA */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900">
                View
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="relative w-full py-12">
      {/* Soft background accent in blue */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.10),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Some Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* GitHub button (unchanged) */}
        <div className="w-full flex justify-center py-6">
          <a
            href="https://github.com/avattoli"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-800/80 transition group-hover:text-gray-900"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.3-3.69-1.3-.5-1.28-1.21-1.62-1.21-1.62-.99-.68.07-.67.07-.67 1.1.08 1.69 1.13 1.69 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.1-2.91 0 0 .92-.3 3.02 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.22 2.63.1 2.91.7.77 1.12 1.75 1.12 2.95 0 4.22-2.57 5.14-5.02 5.41.39.34.74 1.01.74 2.04v3.03c0 .29.2.64.76.53 4.36-1.45 7.51-5.56 7.51-10.41C23.02 5.24 18.27.5 12 .5z"
              />
            </svg>
            <span>More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

