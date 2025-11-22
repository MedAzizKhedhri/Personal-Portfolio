"use client";

import { RESUME_DATA } from "@/data/resume";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="container py-12 md:py-24" id="about">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                    <Image
                        src={RESUME_DATA.avatarUrl}
                        alt={RESUME_DATA.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        About Me
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {RESUME_DATA.about}
                    </p>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {RESUME_DATA.summary}
                    </p>
                </div>
            </div>
        </section>
    );
}
