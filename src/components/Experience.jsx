const EXPERIENCES = [
  { role: "Software Developer - Fullstack",
    company: "Kasm Workspaces",
    date:"July 2025 - Present",
    desc: "Full Stack development for the 1.18 release",
    tags: [ "Docker", "JS", "python", "Remote desktop protocols", "JWT"]
  },

  {
    role: "Software Developer and Security Researcher",
    company: "Square X, Singapore",
    date: "May 2024 - June 2025",
    desc: "Analyzed file formats (PDF, OOXML, PE) for hidden threats, developed malware analysis tooling, and co-authored 'Last Mile Reassembly Attack' (DEFCON 2024). Built custom Windows images on Azure integrating 20+ tools., Worked on security researches.",
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
    <section id="experience" className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
<div className="relative">
  {/* vertical glowing line */}
  <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent rounded-full" />

  <div className="space-y-12 pl-12"> {/* 👈 added padding for card spacing */}
    {EXPERIENCES.map((exp, idx) => (
      <div key={idx} className="relative group">
        {/* Glowing dot */}
        <span className="absolute left-[10px] top-8 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></span>
        <span className="absolute left-[10px] top-8 w-4 h-4 rounded-full bg-blue-400 animate-ping opacity-60"></span>

        {/* Card */}
        <div
          className="bg-gray-900/40 backdrop-blur-md p-6 rounded-xl border border-gray-700
                     hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition
                     transform hover:-translate-y-1"
        >
          <div className="flex px-3 justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">
              {exp.company}
            </h3>
            <span className="text-xs bg-gray-800/70 px-3 py-1 rounded-full text-gray-300">
              {exp.date}
            </span>
          </div>
          <p className="mt-1 text-gray-300 text-sm">{exp.role}</p>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            {exp.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs 
                           transition transform hover:-translate-y-1 hover:bg-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
