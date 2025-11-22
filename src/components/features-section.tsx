"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const features = [
    "Real-time Messaging",
    "Subscription Management",
    "Role-based Permissions",
    "Media Uploads",
    "Server/Channel Management",
    "Responsive Design",
    "Dark Mode Support",
    "SEO Optimized",
];

export function FeaturesSection() {
    return (
        <section className="py-12 md:py-24">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Key Features
                </h2>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {features.map((feature) => (
                            <FeatureCard key={feature} feature={feature} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ feature }: { feature: string }) => {
    return (
        <div
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "mx-4 flex items-center justify-center min-w-[200px]"
            )}
        >
            <span className="text-lg font-medium">{feature}</span>
        </div>
    );
};
