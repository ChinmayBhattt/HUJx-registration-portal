import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
            className={cn(
                "glass-card rounded-3xl p-6 relative overflow-hidden group",
                className
            )}
        >
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent" />

            {children}
        </motion.div>
    );
};
