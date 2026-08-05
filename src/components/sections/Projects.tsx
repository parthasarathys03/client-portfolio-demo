import { Section } from "@/components/layout/Section";
import { projectsContent, type Project } from "@/content/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border p-8">
      <h3 className="text-xl font-semibold leading-[1.25] text-foreground md:text-2xl">
        {project.title}
      </h3>

      {(project.role || project.organization) && (
        <p className="text-sm text-muted-foreground">
          {[project.role, project.organization].filter(Boolean).join(" · ")}
        </p>
      )}

      {project.description && (
        <p className="max-w-[70ch] text-base leading-[1.6] text-muted-foreground">
          {project.description}
        </p>
      )}

      {project.outcome && (
        <p className="text-base leading-[1.6] text-foreground">{project.outcome}</p>
      )}

      {project.duration && (
        <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
          {project.duration}
        </p>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <ul className="flex flex-wrap gap-2">
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
  );
}

export function Projects() {
  return (
    <Section id="projects" aria-label="Featured Projects" containerSize="2xl">
      <div className="flex flex-col gap-16">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
          Featured Projects
        </h2>

        {projectsContent.length > 0 ? (
          <div className="flex flex-col gap-8">
            {projectsContent.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] flex-col items-center justify-center gap-2 rounded-lg border border-border p-20 text-center">
            <p className="text-lg font-semibold leading-[1.25] text-foreground">
              Projects coming soon
            </p>
            <p className="max-w-[50ch] text-sm leading-[1.6] text-muted-foreground">
              Detailed case studies are in progress and will be published here.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
