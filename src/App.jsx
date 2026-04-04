import { useState, useCallback } from "react";
import IntroOverlay from "./components/IntroOverlay";
import ParticleField from "./components/ParticleField";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Writing from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="relative bg-bg text-white min-h-screen font-body">
      {/* Ambient background glow */}
      <div className="ambient-glow" />

      {/* Interactive particle field */}
      <ParticleField />

      {/* Cursor warm glow (desktop only) */}
      <CursorGlow />

      {/* Intro blast overlay */}
      <IntroOverlay onComplete={handleIntroComplete} />

      {/* Main site content */}
      <div
        className={`relative z-[3] transition-opacity duration-1000 ${
          introComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Writing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
