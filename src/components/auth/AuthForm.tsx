"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Github, Mail, Lock } from "lucide-react";

interface AuthFormProps {
    type: "login" | "signup";
}

export const AuthForm = ({ type }: AuthFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
        >
            <div className="glass-card p-8 rounded-3xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">
                        {type === "login" ? "Welcome Back" : "Join Luma 2.0"}
                    </h2>
                    <p className="text-white/50">
                        {type === "login"
                            ? "Enter your credentials to access your account"
                            : "Create an account to start hosting events"}
                    </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Button className="w-full mt-6" size="lg">
                        {type === "login" ? "Sign In" : "Create Account"}
                    </Button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-[#0F0F12] px-2 text-white/30">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Github size={20} />
                        <span className="text-sm font-medium">GitHub</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">G</div>
                        <span className="text-sm font-medium">Google</span>
                    </button>
                </div>

                <div className="mt-8 text-center text-sm text-white/50">
                    {type === "login" ? (
                        <>
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
                                Sign up
                            </Link>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                                Sign in
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
