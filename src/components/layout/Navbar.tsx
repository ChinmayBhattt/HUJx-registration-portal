"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calendar, Search, Menu } from "lucide-react";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        >
            <div className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 pointer-events-auto shadow-2xl shadow-black/20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white">
                        L
                    </div>
                    <span className="hidden sm:block">HUJx</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
                    <Link href="/events" className="hover:text-white transition-colors">Events</Link>
                    <Link href="/calendars" className="hover:text-white transition-colors">Calendars</Link>
                    <Link href="/events" className="hover:text-white transition-colors">Explore</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
                        <Search size={20} />
                    </button>

                    <div className="h-4 w-[1px] bg-white/10 mx-1" />

                    <Link href="/login">
                        <span className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">
                            Sign In
                        </span>
                    </Link>

                    <Link href="/events/create">
                        <Button size="sm" className="hidden sm:flex">
                            Create Event
                        </Button>
                    </Link>

                    <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
