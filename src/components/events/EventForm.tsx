"use client";

import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Image as ImageIcon, MapPin, Type } from "lucide-react";

export const EventForm = () => {
    return (
        <div className="glass-card p-8 rounded-3xl">
            <div className="space-y-8">
                {/* Image Upload */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-white/70">Cover Image</label>
                    <div className="h-64 rounded-2xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <ImageIcon size={32} className="text-white/50" />
                        </div>
                        <p className="text-white/70 font-medium">Click to upload cover image</p>
                        <p className="text-sm text-white/40">Recommended size: 1920x1080</p>
                    </div>
                </div>

                {/* Basic Info */}
                <div className="grid gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Event Title</label>
                        <div className="relative">
                            <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="text"
                                placeholder="e.g. Product Launch 2025"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all [color-scheme:dark]"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Time</label>
                            <div className="relative">
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                <input
                                    type="time"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all [color-scheme:dark]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="text"
                                placeholder="Add location or online link"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Description</label>
                        <textarea
                            rows={6}
                            placeholder="Tell people what your event is about..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                    <Button variant="ghost">Save Draft</Button>
                    <Button size="lg">Publish Event</Button>
                </div>
            </div>
        </div>
    );
};
