"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, MapPin, Settings, Share2, User } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent-purple p-1">
                        <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                            <User size={64} className="text-white/20" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold mb-1">Alex Designer</h1>
                                <p className="text-white/50">@alexdesign • San Francisco, CA</p>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="secondary" size="sm">
                                    <Share2 size={16} /> Share
                                </Button>
                                <Link href="/settings">
                                    <Button variant="secondary" size="sm">
                                        <Settings size={16} /> Edit Profile
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <p className="text-white/80 max-w-2xl mb-6">
                            Product Designer & Event Organizer. Passionate about building communities and creating immersive experiences. Organizing tech meetups in SF.
                        </p>

                        <div className="flex gap-8 border-t border-white/10 pt-6">
                            <div>
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-sm text-white/40">Events Hosted</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">48</div>
                                <div className="text-sm text-white/40">Events Attended</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">1.2k</div>
                                <div className="text-sm text-white/40">Followers</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-white/10 mb-8">
                    <button className="pb-4 border-b-2 border-primary text-white font-medium">Hosted Events</button>
                    <button className="pb-4 border-b-2 border-transparent text-white/50 hover:text-white transition-colors">Attending</button>
                    <button className="pb-4 border-b-2 border-transparent text-white/50 hover:text-white transition-colors">Past Events</button>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="group cursor-pointer">
                            <div className="h-40 rounded-xl bg-white/5 mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Design Systems Workshop</h3>
                            <div className="flex items-center gap-4 text-sm text-white/50">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} /> <span>Oct 24</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} /> <span>San Francisco</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
