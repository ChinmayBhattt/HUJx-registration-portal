"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Calendar as CalendarIcon } from "lucide-react";

export default function CalendarsPage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 flex flex-col items-center justify-center min-h-[80vh] text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <CalendarIcon size={48} className="text-white/20" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Calendars Coming Soon</h1>
                <p className="text-white/50 max-w-md">
                    We are building a powerful way to manage your event schedule. Check back later for updates.
                </p>
            </div>
        </main>
    );
}
