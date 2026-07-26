import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Philosophy from "@/components/sections/Philosophy";
import CTA from "@/components/sections/CTA";
import Loader from "@/components/sections/Loader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative selection:bg-primary/30">
      <Loader />
      <Navbar />
      <Hero />
      <Countdown />
      <Statistics />
      <About />
      <Vision />
      <Philosophy />
      <CTA />
    </main>
  );
}
