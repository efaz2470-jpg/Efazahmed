import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-panel">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          unoptimized={project.cover.endsWith(".svg")}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
          <p className="mt-1 text-muted">{project.summary}</p>
        </div>
        <span className="shrink-0 font-mono text-sm text-muted">{project.year}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
