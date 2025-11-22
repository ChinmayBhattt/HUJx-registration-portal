import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "glass" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)]",
            secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
            glass: "glass text-white hover:bg-white/10",
            ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
