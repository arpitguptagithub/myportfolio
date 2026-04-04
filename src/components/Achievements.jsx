import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticCard from "./MagneticCard";
import ScrambleText from "./ScrambleText";

const ACHIEVEMENTS = [
  {
    year: "2024",
    icon: "🔒",
    title: "DEFCON — Last Mile Reassembly Attack",
    desc: "Developed multiple attack vectors in the groundbreaking research on Last Mile Reassembly Attack, demonstrating critical vulnerabilities in secure web gateways. Recognized by Palo Alto Networks.",
    stats: [
      { label: "Vulnerabilities Found", value: "25+" },
      { label: "Impact Score", value: "9.8/10" },
      { label: "Recognized By", value: "Palo Alto Networks" },
    ],
    tags: ["Security Research", "Web Security", "Vulnerability Analysis"],
  },
  {
    year: "2025",
    icon: "🧩",
    title: "Polymorphic Extension",
    desc: "Created the groundbreaking Polymorphic Browser Extension, showcased in widely viewed demos (Matt Johnson's top video). Recognized as a disruptive attack vector in browser security.",
    stats: [
      { label: "News Coverage", value: "100+ Press" },
      { label: "YouTube Coverage", value: "400k+ views" },
    ],
    tags: ["Security Research", "Browser Exploits", "Extension Security"],
  },
  {
    year: "2023",
    icon: "🥇",
    title: "Inter IIT Tech Meet Medalist",
    desc: "Led team to bronze medal for developing an innovative IoT solution for smart mining operations, competing against top technical teams.",
    stats: [
      { label: "Team Size", value: "6" },
      { label: "Rank", value: "3rd" },
      { label: "Teams", value: "23" },
    ],
    tags: ["IoT", "Innovation"],
  },
  {
    year: "2025",
    icon: "📖",
    title: "Browser Security Field Manual",
    desc: "My research code and demonstrations were featured in the book Browser Security Field Manual, serving as support material for modern web security studies.",
    stats: [],
    tags: ["Publication", "Security Research", "Browser Security"],
  },
  {
    year: "2025",
    icon: "🐈",
    title: "DEFCON Village — CopyCat Identity Stealer",
    desc: "Coded more than 8 out of 10 vectors in the CopyCat Identity Stealer Extension at DEFCON 33 Villages, exposing new methods of identity theft via browser extensions.",
    stats: [{ label: "Event", value: "DEFCON 33" }],
    tags: ["Security Research", "Browser Exploits", "DEFCON"],
  },
  {
    year: "2024",
    icon: "🏆",
    title: "Hackbells Global Winner",
    desc: "First place in an international hackathon for developing a revolutionary cybersecurity solution. Competed against 200+ teams.",
    stats: [
      { label: "Position", value: "1st" },
      { label: "Teams", value: "200+" },
      { label: "Prize", value: "$5K" },
    ],
    tags: ["Security", "Development"],
  },
  {
    year: "2025",
    icon: "🔒",
    title: "Browser Synjacking Attack",
    desc: "Developed a novel browser-based attack exploiting synchronization features to steal sensitive account data. Widely covered in security press.",
    stats: [{ label: "Press Articles", value: "100+" }],
    tags: ["Security Research", "JS", "Python", "Chrome Extension"],
  },
  {
    year: "2025",
    icon: "🔓",
    title: "RSA Conference — Data Splicing Attacks",
    desc: "SquareX highlighted my team research on data splicing attacks at RSA 2025, bringing attention to new risks in browser and web application security.",
    stats: [
      { label: "Conference", value: "RSA 2025" },
      { label: "Month", value: "April" },
    ],
    tags: ["Security Research", "Conference", "Data Splicing"],
  },
  {
    year: "2024",
    icon: "💧",
    title: "Indo-Canada International Water Symposium",
    desc: "Presented research on water management and conservation with machine learning approaches, achieving top recognition.",
    stats: [{ label: "Position", value: "1st" }],
    tags: ["Research", "Water Management", "ML Algorithms"],
  },
  {
    year: "2023",
    icon: "🚗",
    title: "RC Escapade 2023",
    desc: "Engineered a fully functional RC car from scratch with custom PCB design and remote-control system for annual racing competition.",
    stats: [{ label: "Position", value: "1st" }],
    tags: ["Hardware", "PCB Design", "RC Systems"],
  },
  {
    year: "2023",
    icon: "🚀",
    title: "Shaashthra, CIS — Space Debris Management",
    desc: "Presented a novel solution leveraging ML and AI to tackle space debris management challenges at IIT Madras.",
    stats: [{ label: "Position", value: "2nd" }],
    tags: ["Space Debris", "ML", "AI"],
  },
  {
    year: "2022",
    icon: "🧺",
    title: "Smart Laundry Innovation Challenge",
    desc: "Created an IoT-based solution for automated laundry management with real-time tracking, analytics, and payment integration.",
    stats: [
      { label: "Innovation Score", value: "9.5/10" },
      { label: "Position", value: "1st" },
    ],
    tags: ["IoT", "Python", "Flutter", "MongoDB"],
  },
];

const INITIAL_COUNT = 6;

export default function Achievements() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ACHIEVEMENTS : ACHIEVEMENTS.slice(0, INITIAL_COUNT);

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="warm-divider mb-24 md:mb-32" />

      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16">
            <ScrambleText text="Achievements" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((a, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <MagneticCard intensity={6}>
              <div className="card-warm p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-xs text-neutral-500 bg-surface-light px-3 py-1 rounded-full">
                    {a.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-accent-cream mb-2">
                  {a.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                  {a.desc}
                </p>

                {/* Stats */}
                {a.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {a.stats.map((s, i) => (
                      <div
                        key={i}
                        className="bg-surface-light rounded-lg p-3 text-center"
                      >
                        <p className="text-sm font-semibold text-accent-cream">
                          {s.value}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((t, i) => (
                    <span key={i} className="pill text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Show more / less */}
        {ACHIEVEMENTS.length > INITIAL_COUNT && (
          <ScrollReveal className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border
                         text-sm text-neutral-400 hover:text-accent-cream hover:border-accent/30
                         transition-all duration-300"
            >
              {expanded ? "Show Less" : `Show All (${ACHIEVEMENTS.length})`}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
