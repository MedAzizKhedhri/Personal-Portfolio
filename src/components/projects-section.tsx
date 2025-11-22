"use client";

import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA } from "@/data/resume";

export function ProjectsSection() {
    return (
        <section className="container py-12 md:py-24" id="projects">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Curated Work
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {RESUME_DATA.projects.map((project) => (
                    <div key={project.title} className="h-[400px] w-full">
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            tags={project.techStack}
                            link={project.link?.href}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
