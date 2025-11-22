"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { EVENTS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const CalendarView = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 10)); // Start at Nov 2025 to match mock data
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        // Add empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }
        // Add days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
        setSelectedDate(null);
    };

    const formatDateKey = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const getEventsForDate = (date: Date) => {
        const dateKey = formatDateKey(date);
        return EVENTS.filter(event => event.date === dateKey);
    };

    const days = getDaysInMonth(currentDate);

    return (
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            {/* Calendar Grid */}
            <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">
                        {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => changeMonth(-1)}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => changeMonth(1)}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-4 mb-4">
                    {DAYS.map(day => (
                        <div key={day} className="text-center text-sm font-medium text-white/40 py-2">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-4">
                    {days.map((date, index) => {
                        if (!date) return <div key={`empty-${index}`} />;

                        const dateKey = formatDateKey(date);
                        const dayEvents = getEventsForDate(date);
                        const isSelected = selectedDate === dateKey;
                        const isToday = new Date().toDateString() === date.toDateString();

                        return (
                            <motion.button
                                key={dateKey}
                                onClick={() => setSelectedDate(dateKey)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                  aspect-square rounded-2xl relative flex flex-col items-center justify-center gap-1 transition-all
                  ${isSelected ? 'bg-primary text-white shadow-[0_0_20px_-5px_var(--color-primary)]' : 'bg-white/5 hover:bg-white/10'}
                  ${isToday ? 'border border-primary/50' : 'border border-transparent'}
                `}
                            >
                                <span className={`text-lg font-medium ${isSelected ? 'text-white' : 'text-white/80'}`}>
                                    {date.getDate()}
                                </span>

                                {dayEvents.length > 0 && (
                                    <div className="flex gap-1">
                                        {dayEvents.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-primary'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Sidebar - Selected Date Events */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                        {selectedDate
                            ? new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
                            : "Upcoming Events"}
                    </h3>
                </div>

                <div className="space-y-4">
                    <AnimatePresence mode="wait">
                        {(selectedDate ? getEventsForDate(new Date(selectedDate)) : EVENTS.slice(0, 3)).map((event) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <Card className="p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-xl relative overflow-hidden flex-shrink-0">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold truncate group-hover:text-primary transition-colors">
                                                {event.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-white/50 mt-1">
                                                <Clock size={12} />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-white/50 mt-1">
                                                <MapPin size={12} />
                                                <span className="truncate">{event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}

                        {selectedDate && getEventsForDate(new Date(selectedDate)).length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12 text-white/30"
                            >
                                No events scheduled for this day
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
