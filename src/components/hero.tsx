"use client";

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { TextScramble } from "@/components/ui/text-scramble";
import { RESUME_DATA } from "@/data/resume";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-8 py-8 text-center md:py-12 lg:py-24">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-muted shadow-2xl md:h-40 md:w-40">
                    <Image
                        src={RESUME_DATA.avatarUrl}
                        alt={RESUME_DATA.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    <TextScramble text={`Hi, I'm ${RESUME_DATA.name}`} />
                </h1>
                <h2 className="text-xl font-medium sm:text-2xl md:text-3xl">
                    <GradientText>Full Stack Web Developer</GradientText>
                </h2>
                <p className="max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8">
                    {RESUME_DATA.summary}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="/cv.pdf" download="Mohamed_Aziz_Khedhri_CV.pdf">
                            Download CV <Download className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-4">
                    {RESUME_DATA.contact.social.map((social) => (
                        <Button key={social.name} variant="ghost" size="icon" asChild>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}
