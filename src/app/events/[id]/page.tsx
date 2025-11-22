"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, MapPin, Share2, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EventDetailsPage() {
    const params = useParams();
    const id = params.id;

    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            {/* Hero Image */}
            <div className="h-[50vh] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-purple/30" />
                <div className="container mx-auto px-6 h-full flex items-end pb-12 relative z-10">
                    <Link href="/events" className="absolute top-32 left-6 text-white/70 hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft size={20} /> Back to Events
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
                <div className="grid lg:grid-cols-[1fr_350px] gap-12">
                    {/* Main Content */}
                    <div>
                        <div className="mb-8">
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-medium">
                                    Tech Conference
                                </span>
                                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/20 text-primary text-sm font-medium">
                                    Featured
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">React Summit 2025</h1>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Join thousands of React developers for the biggest conference of the year. Learn from the best, network with peers, and discover the future of web development.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 py-8 border-y border-white/10 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent-blue" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/50">Hosted by</div>
                                    <div className="font-bold">React Community</div>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10" />
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-white/10" />
                                ))}
                            </div>
                            <div className="text-sm text-white/50">+2.4k attending</div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">About Event</h2>
                            <p className="text-white/70 mb-6">
                                React Summit is an annual conference for all things React, gathering thousands of Front-end and Full-stack engineers from around the world. We are coming back to San Francisco with a hybrid format!
                            </p>
                            <p className="text-white/70 mb-6">
                                Expect 2 days of workshops, 2 days of conference talks, and plenty of networking opportunities.
                            </p>

                            <h3 className="text-xl font-bold mb-4">Agenda</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="font-mono text-primary">09:00 AM</span>
                                    <span className="text-white/80">Registration & Breakfast</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-mono text-primary">10:00 AM</span>
                                    <span className="text-white/80">Keynote: The Future of React</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-mono text-primary">12:00 PM</span>
                                    <span className="text-white/80">Lunch Break</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="p-6 sticky top-32">
                            <h3 className="text-xl font-bold mb-6">Event Details</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 text-white/70">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold">Date</div>
                                        <div className="text-white/60">December 05, 2025</div>
                                        <div className="text-sm text-primary">Add to Calendar</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 text-white/70">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold">Time</div>
                                        <div className="text-white/60">9:00 AM - 6:00 PM</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 text-white/70">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold">Location</div>
                                        <div className="text-white/60">Moscone Center</div>
                                        <div className="text-sm text-white/40">747 Howard St, San Francisco</div>
                                        <div className="text-sm text-primary mt-1">View on Map</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mb-4" size="lg">Register Now</Button>
                            <Button variant="secondary" className="w-full">
                                <Share2 size={18} /> Share Event
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
