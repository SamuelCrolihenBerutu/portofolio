import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import { profile } from "@/data/content";
import Extras from "@/components/Extras";

export default function Home() {
  return (
    <>
      <Extras />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Activities />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © 2026 {profile.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </>
  );
}
