"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const CATEGORIES = ["All", "Tech", "Design", "Business", "Social", "Music"];
const TYPES = ["Any Type", "In Person", "Virtual"];

export const Filters = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeType, setActiveType] = useState("Any Type");

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? "bg-white text-black"
                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="text-sm text-white/40 font-medium">Filter by:</span>
                {TYPES.map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`text-sm font-medium transition-colors ${activeType === type ? "text-white" : "text-white/40 hover:text-white"
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
};
