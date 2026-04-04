import {
  Code, Shield, Cloud, Database, Cpu, Monitor, Layers, Package,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticCard from "./MagneticCard";
import ScrambleText from "./ScrambleText";

const CATEGORIES = [
  {
    title: "Programming",
    icon: Code,
    skills: ["C++ / C", "Rust", "Python", "TypeScript", "Java", "JavaScript", "Verilog", "Assembly", "Dart"],
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["Malware Analysis", "Browser Security", "Threat Detection", "Network Security"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Redis", "MySQL"],
  },
  {
    title: "Tools & Utilities",
    icon: Package,
    skills: ["Git", "Android Studio", "Unity", "Cisco Packet Tracer", "Wireshark", "Burp Suite"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Flask", "Firebase", "REST APIs", "Node", "Google APIs"],
  },
  {
    title: "Microcontrollers",
    icon: Cpu,
    skills: ["Arduino", "Raspberry Pi", "NodeMCU", "Jetson Nano", "Pixhawk"],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Linux", "Windows", "macOS"],
  },
  {
    title: "Parallel Computing",
    icon: Layers,
    skills: ["OpenMP", "MPI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="warm-divider mb-24 md:mb-32" />

      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16">
            <ScrambleText text="Skills & Technologies" />
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(({ title, icon: Icon, skills }, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <MagneticCard intensity={5}>
              <div className="card-warm p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-surface-light">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-accent-cream">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
