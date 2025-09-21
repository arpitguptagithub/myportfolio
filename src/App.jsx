import { useState, useEffect } from "react";
import MagneticBackground from "./components/MagneticBackground";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in site at 8s
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-950 text-white">
      {/* Magnetic particles (always visible) */}
      <MagneticBackground />

      {/* Site content with slower fade in */}
      <div
        className={`relative z-[80] transition-opacity duration-[4000ms] ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Cursor />
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Hobbies />
        <Footer />
      </div>
    </div>
  );
}
