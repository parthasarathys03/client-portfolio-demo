import React from "react";
import { ExternalLink } from "lucide-react";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";

interface ProjectItemData {
  title: string;
  year?: string;
  category?: string;
  description?: string;
  technologies?: string[];
  techStack?: string[];
  link?: string;
  duration?: string;
}

interface ProjectsSectionData {
  title?: string;
  subtitle?: string;
  projects?: ProjectItemData[];
}

function ProjectRow({ project, featured }: { project: ProjectItemData; featured: boolean }) {
  const meta = [project.techStack?.join(" · ")].filter(Boolean).join(" — ");

  return (
    <li className="grid grid-cols-1 gap-6 border-t border-border py-10 first:pt-0 lg:grid-cols-[100px_1fr_200px_28px] lg:gap-12">
      <div className="flex flex-row gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground lg:flex-col lg:gap-1">
        {project.year && <span>{project.year}</span>}
        {project.category && <span>{project.category}</span>}
      </div>

      <div className="flex flex-col gap-3">
        <h3
          className={
            featured
              ? "font-heading text-3xl font-light leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl"
              : "font-heading text-2xl font-light leading-[1.15] tracking-[-0.01em] text-foreground"
          }
        >
          {project.title}
        </h3>

        {project.description && (
          <p className="max-w-[65ch] text-[15px] leading-[1.6] text-muted-foreground">
            {project.description}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-sm border border-border px-3 py-1 text-sm text-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-1 lg:items-end lg:text-right">
        {meta && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {meta}
          </span>
        )}
        {project.duration && (
          <span className="text-sm text-muted-foreground">{project.duration}</span>
        )}
      </div>

      <div className="flex lg:items-start lg:justify-end">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <ExternalLink className="h-4 w-4 text-muted-foreground/40" aria-hidden />
        )}
      </div>
    </li>
  );
}

export function ProjectsComponent({ section }: { section: SectionType<ProjectsSectionData> }) {
  const projects = section.data?.projects || [];

  return (
    <LayoutSection id={section.id || "projects"} aria-label="Featured Projects" containerSize="2xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          04 — Projects
        </div>

        <h2 className="mt-8 font-heading text-[48px] font-light leading-[1.05] tracking-[-0.02em] text-foreground md:text-[56px]">
          {section.data?.title || "Featured Projects"}
        </h2>

        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.6] text-muted-foreground">
          {section.data?.subtitle ||
            "Selected engineering work — published as detailed write-ups become available."}
        </p>
      </div>

      {projects.length > 0 ? (
        <ol className="mt-12 flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} featured={index === 0} />
          ))}
        </ol>
      ) : (
        <p className="mt-12 border-t border-border pt-10 text-[15px] italic leading-[1.6] text-muted-foreground">
          Additional projects will be published soon.
        </p>
      )}
    </LayoutSection>
  );
}
