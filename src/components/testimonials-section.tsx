"use client";

import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO at TechCorp",
        content:
            "Aziz is a fantastic developer. He delivered the project on time and exceeded our expectations.",
        avatar: "/avatars/john.png",
    },
    {
        name: "Jane Smith",
        role: "Product Manager",
        content:
            "Great communication and technical skills. Highly recommended for any web development work.",
        avatar: "/avatars/jane.png",
    },
    {
        name: "Mike Johnson",
        role: "CTO",
        content:
            "The attention to detail in the UI/UX was impressive. A true professional.",
        avatar: "/avatars/mike.png",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-12 md:py-24 bg-muted/50">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What People Say
                </h2>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                    <Marquee pauseOnHover className="[--duration:40s]">
                        {testimonials.map((testimonial, i) => (
                            <TestimonialCard key={i} testimonial={testimonial} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted/50 dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-muted/50 dark:from-background"></div>
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({
    testimonial,
}: {
    testimonial: (typeof testimonials)[0];
}) => {
    return (
        <Card className="mx-4 w-[300px] border-none bg-background shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                    {/* Placeholder for avatar */}
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
            </CardContent>
        </Card>
    );
};
