"use client";

import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

// Technology icon mapping using DevIcons CDN
// Format: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{technology}/{technology}-{variant}.svg
const techIcons: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "XML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

export function TechStack() {
    const firstRow = RESUME_DATA.skills.slice(0, Math.ceil(RESUME_DATA.skills.length / 2));
    const secondRow = RESUME_DATA.skills.slice(Math.ceil(RESUME_DATA.skills.length / 2));

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background p-4 border">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((skill) => (
                    <SkillCard key={skill} skill={skill} iconUrl={techIcons[skill]} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                {secondRow.map((skill) => (
                    <SkillCard key={skill} skill={skill} iconUrl={techIcons[skill]} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}

const SkillCard = ({ skill, iconUrl }: { skill: string; iconUrl?: string }) => {
    return (
        <div
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "mx-2 flex items-center gap-3 min-w-[140px] transition-all duration-300 hover:scale-105"
            )}
        >
            {iconUrl && (
                <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                        src={iconUrl}
                        alt={`${skill} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                </div>
            )}
            <span className="text-sm font-medium whitespace-nowrap">{skill}</span>
        </div>
    );
};
