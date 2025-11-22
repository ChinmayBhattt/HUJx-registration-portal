import { AuthForm } from "@/components/auth/AuthForm";
import { Navbar } from "@/components/layout/Navbar";

export default function SignupPage() {
    return (
        <main className="min-h-screen bg-secondary text-white flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

                <AuthForm type="signup" />
            </div>
        </main>
    );
}
