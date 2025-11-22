"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px] animate-[float_12s_ease-in-out_infinite_reverse]" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-accent-blue mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                        </span>
                        The Future of Event Hosting
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Discover <span className="text-gradient-primary">Extraordinary</span> <br />
                        Events Near You
                    </h1>

                    <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                        Join the world's most immersive community platform. Host, attend, and experience events like never before with Luma 2.0.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/events">
                            <Button size="lg" className="shadow-lg shadow-primary/25">
                                Explore Events <ArrowRight size={20} />
                            </Button>
                        </Link>
                        <Link href="/events/create">
                            <Button variant="secondary" size="lg">
                                Create Event
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-white/40">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                                </div>
                            ))}
                        </div>
                        <p>Join 10,000+ creators</p>
                    </div>
                </motion.div>

                {/* 3D Visuals / Floating Cards */}
                <div className="relative h-[600px] hidden lg:block perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-[10%] right-[10%] w-[350px] glass-card rounded-3xl p-6 z-20 transform hover:scale-105 transition-transform duration-500"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-purple/20 mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs text-white w-fit mb-2">
                                    Tech Talk
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Future of AI Design</h3>
                        <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                            <Calendar size={14} /> <span>Oct 24, 6:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5" />
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5" />
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-xs">+42</div>
                            </div>
                            <Button size="sm" variant="glass">Join</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute top-[40%] left-[0%] w-[300px] glass-card rounded-3xl p-5 z-10 blur-[1px] hover:blur-0 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">San Francisco</h4>
                                <p className="text-xs text-white/50">124 Events this week</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
