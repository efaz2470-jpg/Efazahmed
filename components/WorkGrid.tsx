"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function WorkGrid() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === c ? "border-accent bg-accent text-ink" : "border-line text-muted hover:border-white/40 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 120}>
            <ProjectCard project={p} priority={i < 2} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
