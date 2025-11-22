"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Filters } from "@/components/events/Filters";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EVENTS = [
    { id: 1, title: "Neon Nights: Cyberpunk Art", category: "Exhibition", date: "Nov 12, 8:00 PM", location: "Neo Tokyo Gallery", image: "/neon_art_exhibition_1763816371236.png" },
    { id: 2, title: "React Summit 2025", category: "Tech Conference", date: "Dec 05, 9:00 AM", location: "Moscone Center, SF", image: "/tech_conference_stage_1763816396216.png" },
    { id: 3, title: "Founder's Mixer", category: "Networking", date: "Nov 28, 6:30 PM", location: "The Glass House", image: "/networking_mixer_1763816414225.png" },
    { id: 4, title: "AI & Design Future", category: "Workshop", date: "Dec 10, 2:00 PM", location: "Online", image: "/workshop_online_1763816445857.png" },
    { id: 5, title: "Electronic Music Fest", category: "Music", date: "Dec 15, 10:00 PM", location: "Warehouse 42", image: "/music_fest_1763816467187.png" },
    { id: 6, title: "Startup Pitch Night", category: "Business", date: "Dec 20, 6:00 PM", location: "TechHub SF", image: "/startup_pitch_1763816496027.png" },
];

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
