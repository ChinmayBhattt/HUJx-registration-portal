"use client";

import { Navbar } from "@/components/layout/Navbar";
import { CalendarView } from "@/components/calendar/CalendarView";

export default function CalendarsPage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Your Calendar</h1>
                    <p className="text-white/50">Manage your schedule and upcoming events</p>
                </div>

                <CalendarView />
            </div>
        </main>
    );
}
