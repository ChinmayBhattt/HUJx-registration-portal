"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Bell, Lock, Mail, User } from "lucide-react";

export default function SettingsPage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">Settings</h1>

                <div className="grid md:grid-cols-[240px_1fr] gap-12">
                    {/* Sidebar */}
                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-2 rounded-lg bg-white/10 text-white font-medium">
                            General
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                            Notifications
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                            Privacy & Security
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold mb-6">Profile Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                                        <User size={32} className="text-white/50" />
                                    </div>
                                    <Button variant="secondary" size="sm">Change Avatar</Button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">Display Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Alex Designer"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">Username</label>
                                        <input
                                            type="text"
                                            defaultValue="alexdesign"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Bio</label>
                                    <textarea
                                        rows={4}
                                        defaultValue="Product Designer & Event Organizer. Passionate about building communities..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 resize-none"
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="h-[1px] bg-white/10" />

                        <section>
                            <h2 className="text-xl font-bold mb-6">Contact Info</h2>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Email Address</label>
                                    <div className="flex gap-4">
                                        <input
                                            type="email"
                                            defaultValue="alex@example.com"
                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50"
                                        />
                                        <Button variant="secondary">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-[1px] bg-white/10" />

                        <div className="flex justify-end gap-4">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
