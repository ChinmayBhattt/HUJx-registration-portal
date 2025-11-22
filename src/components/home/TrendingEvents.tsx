"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const EVENTS = [
    {
        id: 1,
        title: "Neon Nights: Cyberpunk Art",
        category: "Exhibition",
        date: "Nov 12, 8:00 PM",
        location: "Neo Tokyo Gallery",
        attendees: 128,
        image: "/neon_art_exhibition_1763816371236.png",
    },
    {
        id: 2,
        title: "React Summit 2025",
        category: "Tech Conference",
        date: "Dec 05, 9:00 AM",
        location: "Moscone Center, SF",
        attendees: 2400,
        image: "/tech_conference_stage_1763816396216.png",
    },
    {
        id: 3,
        title: "Founder's Mixer",
        category: "Networking",
        date: "Nov 28, 6:30 PM",
        location: "The Glass House",
        attendees: 85,
        image: "/networking_mixer_1763816414225.png",
    },
];

export const TrendingEvents = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Events</h2>
                        <p className="text-white/50">Curated experiences popular in your network</p>
                    </div>
                    <Button variant="secondary" className="hidden md:flex">View All</Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EVENTS.map((event) => (

                        <Card key={event.id} className="group cursor-pointer">
                            <div className="h-48 rounded-2xl mb-6 relative overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium border border-white/10">
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>

                            <div className="space-y-3 text-sm text-white/60">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-primary" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-primary" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-primary" />
                                    <span>{event.attendees} attending</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/5" />
                                    ))}
                                </div>
                                <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    Register
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
