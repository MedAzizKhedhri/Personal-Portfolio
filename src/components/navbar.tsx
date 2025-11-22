import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <header className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
            <nav className="flex items-center gap-1 rounded-full border bg-background/50 p-2 px-4 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
                <Link href="/" className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted",
                    "text-muted-foreground hover:text-foreground"
                )}>
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                </Link>
                <div className="h-6 w-px bg-border mx-2" />
                <Link href="#about" className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted",
                    "text-muted-foreground hover:text-foreground"
                )}>
                    <User className="h-5 w-5" />
                    <span className="sr-only">About</span>
                </Link>
                <Link href="#projects" className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted",
                    "text-muted-foreground hover:text-foreground"
                )}>
                    <Briefcase className="h-5 w-5" />
                    <span className="sr-only">Projects</span>
                </Link>
                <Link href="#skills" className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted",
                    "text-muted-foreground hover:text-foreground"
                )}>
                    <Code className="h-5 w-5" />
                    <span className="sr-only">Skills</span>
                </Link>
                <Link href="#contact" className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted",
                    "text-muted-foreground hover:text-foreground"
                )}>
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                </Link>
                <div className="h-6 w-px bg-border mx-2" />
                <ModeToggle />
            </nav>
        </header>
    );
}
