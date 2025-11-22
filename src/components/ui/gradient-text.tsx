import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    colors?: string[];
}

export const GradientText = ({
    children,
    className,
    colors = ["from-blue-500", "to-purple-600"],
    ...props
}: GradientTextProps) => {
    return (
        <span
            className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                colors.join(" "),
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
