"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: readonly string[];
    link?: string;
    image?: string;
}

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 flex flex-col overflow-hidden rounded-xl bg-white p-4 shadow-lg dark:bg-black"
            >
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg bg-muted mb-3">
                    {image ? (
                        <Image src={image} alt={title} fill className="object-cover" />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                            <span className="text-muted-foreground">No Image</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col flex-grow min-h-0">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-base text-neutral-800 dark:text-neutral-100 line-clamp-1">{title}</h3>
                        {link && (
                            <Link href={link} target="_blank" className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors shrink-0 ml-2">
                                <Github className="h-4 w-4" />
                            </Link>
                        )}
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
