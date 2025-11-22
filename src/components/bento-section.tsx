"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Globe } from "@/components/globe";
import { TechStack } from "@/components/tech-stack";
import { Code, MapPin } from "lucide-react";

export function BentoSection() {
    return (
        <section className="container py-12 md:py-24" id="about">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
            </h2>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                <BentoGridItem
                    title="Global Collaboration"
                    description="Ready to work with teams worldwide."
                    header={<Globe />}
                    className="md:col-span-2"
                    icon={<MapPin className="h-4 w-4 text-neutral-500" />}
                />
                <BentoGridItem
                    title="Tech Stack"
                    description="My arsenal of tools and technologies."
                    header={<TechStack />}
                    className="md:col-span-1"
                    icon={<Code className="h-4 w-4 text-neutral-500" />}
                />
                {/* Add more items as needed */}
            </BentoGrid>
        </section>
    );
}
