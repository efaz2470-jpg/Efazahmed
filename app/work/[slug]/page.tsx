import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const images = [project.cover, ...(project.gallery ?? [])];

  return (
    <article className="px-6 pb-24 pt-36 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link href="/#work" className="text-sm text-muted transition-colors hover:text-white">
            ← All work
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>
            {project.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>
        </Reveal>

        <Reveal delay={160}>
          <dl className="mt-12 grid gap-6 border-y border-line py-8 sm:grid-cols-4">
            <div>
              <dt className="text-sm text-muted">Role</dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Year</dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Tools</dt>
              <dd className="mt-1">{project.tools.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Full project</dt>
              <dd className="mt-1">
                <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  View on Behance ↗
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="relative mt-12 aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-panel">
          <Image
            src={images[0]}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            unoptimized={images[0].endsWith(".svg")}
            className="object-cover"
          />
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {[
            ["The challenge", project.challenge],
            ["The solution", project.solution],
            ["The outcome", project.outcome],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 100}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{title}</h2>
              <p className="mt-4 text-lg">{body}</p>
            </Reveal>
          ))}
        </div>

        {images.slice(1).map((src) => (
          <Reveal key={src} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-panel">
            <Image src={src} alt="" fill sizes="100vw" unoptimized={src.endsWith(".svg")} className="object-cover" />
          </Reveal>
        ))}

        <section className="mt-32 border-t border-line pt-16">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">Next project</p>
          <div className="max-w-xl">
            <ProjectCard project={next} />
          </div>
        </section>
      </div>
    </article>
  );
}
