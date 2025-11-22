"use client";

import { Navbar } from "@/components/layout/Navbar";
import { EventForm } from "@/components/events/EventForm";

export default function CreateEventPage() {
    return (
        <main className="min-h-screen bg-secondary text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Create Event</h1>
                    <p className="text-white/50">Host an experience for your community</p>
                </div>

                <EventForm />
            </div>
        </main>
    );
}
