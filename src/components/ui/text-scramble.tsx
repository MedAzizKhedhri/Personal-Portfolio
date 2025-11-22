"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
    text: string;
    className?: string;
    duration?: number;
    characterSet?: string;
}

const DEFAULT_CHARACTER_SET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const TextScramble = ({
    text,
    className,
    duration = 2.5,
    characterSet = DEFAULT_CHARACTER_SET,
}: TextScrambleProps) => {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let startTime = Date.now();

        const scramble = () => {
            const elapsedTime = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsedTime / duration, 1);

            if (progress >= 1) {
                setDisplayText(text);
                setIsScrambling(false);
                clearInterval(interval);
                return;
            }

            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (char === " ") return " ";
                    if (index / text.length < progress) return char;
                    return characterSet[Math.floor(Math.random() * characterSet.length)];
                })
                .join("");

            setDisplayText(scrambled);
        };

        interval = setInterval(scramble, 30);
        return () => clearInterval(interval);
    }, [text, duration, characterSet]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText}
        </motion.span>
    );
};
