import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-background" id="contact">
            <div className="container flex flex-col items-center gap-8 py-12 md:py-24">
                <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to build something amazing?
                </h2>
                <p className="text-center text-muted-foreground md:text-xl">
                    Let&apos;s turn your ideas into reality. Reach out to discuss your next project.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" asChild>
                        <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                            Say Hello
                        </Link>
                    </Button>
                </div>
                <div className="flex gap-4">
                    {RESUME_DATA.contact.social.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <social.icon className="h-6 w-6" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
