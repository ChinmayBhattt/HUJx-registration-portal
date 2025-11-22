import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrendingEvents } from "@/components/home/TrendingEvents";
import { Categories } from "@/components/home/Categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary text-white selection:bg-primary/30">
      <Navbar />

      <Hero />
      <Categories />
      <TrendingEvents />

      <Footer />
    </main>
  );
}
