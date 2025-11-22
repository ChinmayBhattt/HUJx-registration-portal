"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Globe, Music, Rocket, Users } from "lucide-react";

const CATEGORIES = [
    { id: "tech", name: "Tech & Coding", icon: Code, color: "text-blue-400" },
    { id: "startups", name: "Startups", icon: Rocket, color: "text-purple-400" },
    { id: "social", name: "Social", icon: Coffee, color: "text-orange-400" },
    { id: "music", name: "Music & Arts", icon: Music, color: "text-pink-400" },
    { id: "networking", name: "Networking", icon: Users, color: "text-green-400" },
    { id: "online", name: "Online Events", icon: Globe, color: "text-cyan-400" },
];

export const Categories = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-4">
                    {CATEGORIES.map((cat, index) => (
                        <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                        >
                            <cat.icon size={20} className={cat.color} />
                            <span className="font-medium">{cat.name}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};
