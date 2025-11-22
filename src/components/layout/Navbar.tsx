"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
            >
                <div className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 pointer-events-auto shadow-2xl shadow-black/20 relative z-50">
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

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-lg font-medium text-white/80">
                            <Link href="/events" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/10 hover:text-white transition-colors">
                                Events
                            </Link>
                            <Link href="/calendars" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/10 hover:text-white transition-colors">
                                Calendars
                            </Link>
                            <Link href="/events" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/10 hover:text-white transition-colors">
                                Explore
                            </Link>
                            <Link href="/events/create" onClick={() => setIsOpen(false)} className="pt-4">
                                <Button className="w-full">Create Event</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
