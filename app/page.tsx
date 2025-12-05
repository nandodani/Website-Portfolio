import NameHover from "@/components/name-hover";
import { ProjectLink } from "@/components/project-link";
import { projects } from "@/lib/constants";

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <main className="max-w-xs md:max-w-3xl space-y-3">
        <div className="space-y-3">
          <p className="text-md md:text-lg text-foreground/80">I&apos;m </p>
          <NameHover />

          <p className="text-md md:text-lg text-foreground/80">
            Frontend & Design Engineer.
          </p>

          <p className="text-[13px] md:text-[15px] text-foreground/80 max-w-fit leading-relaxed">
            Crafting clean, thoughtful and technically solid interfaces.
          </p>
        </div>

        <div className="space-y-3 mt-12">
          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Side Projects
          </p>

          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectLink
                key={project.url}
                title={project.title}
                url={project.url}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
