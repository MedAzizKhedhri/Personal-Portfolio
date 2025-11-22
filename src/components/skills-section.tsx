"use client";

import { Marquee } from "@/components/ui/marquee";
import { RESUME_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function SkillsSection() {
    return (
        <section className="py-12 md:py-24" id="skills">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills & Technologies
            </h2>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {RESUME_DATA.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}

const SkillBadge = ({ skill }: { skill: string }) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                "mx-2"
            )}
        >
            {skill}
        </div>
    );
};
