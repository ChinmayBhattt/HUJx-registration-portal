"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Filters } from "@/components/events/Filters";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { EVENTS } from "@/lib/data";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Events</h1>
                        <p className="text-white/50 text-lg">Discover what's happening in your community</p>
                    </div>

                    <div className="w-full md:w-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="w-full md:w-[300px] bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 transition-all"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-12">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:block sticky top-32 h-fit">
                        <Filters />
                    </aside>

                    {/* Mobile Filters (simplified) */}
                    <div className="lg:hidden mb-8">
                        <Filters />
                    </div>

                    {/* Events Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {EVENTS.map((event) => (
                            <Link href={`/events/${event.id}`} key={event.id}>
                                <Card className="h-full hover:border-primary/30 transition-colors">
                                    <div className="h-48 rounded-2xl mb-6 relative overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium border border-white/10">
                                                {event.category}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                                    <div className="space-y-3 text-sm text-white/60">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-primary" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-primary" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
