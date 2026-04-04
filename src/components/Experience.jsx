import ScrollReveal from "./ScrollReveal";
import MagneticCard from "./MagneticCard";
import ScrambleText from "./ScrambleText";

const EXPERIENCES = [
  {
    role: "Software Developer - Fullstack",
    company: "Kasm Workspaces",
    date: "July 2025 - Present",
    desc: "Full Stack development for the 1.18 release",
    tags: ["Docker", "JS", "Python", "Remote Desktop Protocols", "JWT"],
  },
  {
    role: "Software Developer and Security Researcher",
    company: "Square X, Singapore (acquired by Zscaler)",
    date: "May 2024 - June 2025",
    desc: "Analyzed file formats (PDF, OOXML, PE) for hidden threats, developed malware analysis tooling, and co-authored 'Last Mile Reassembly Attack' (DEFCON 2024). Built custom Windows images on Azure integrating 20+ tools. Worked on security researches.",
    tags: ["Rust", "Security Research", "Azure", "Malware Analysis"],
  },
  {
    role: "Compiler Design Intern",
    company: "IIT Hyderabad",
    date: "May 2023 - Jul 2023",
    desc: "Worked on code compliance, optimization analysis, and cross-compilation. Built parsers on Clang adhering to AUTOSAR/MISRA rules and measured power consumption across architectures.",
    tags: ["Clang", "C++", "Optimization", "Embedded"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16">
            <ScrambleText text="Experience" />
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative pl-10 md:pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-accent/60 bg-bg group-hover:bg-accent/20 transition-colors duration-300">
                    <div className="absolute inset-1 rounded-full bg-accent/60" />
                  </div>

                  {/* Card */}
                  <MagneticCard>
                  <div className="card-warm p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-accent-cream">
                        {exp.company}
                      </h3>
                      <span className="text-xs text-neutral-500 bg-surface-light px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-accent text-sm font-medium mb-3">
                      {exp.role}
                    </p>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  </MagneticCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
