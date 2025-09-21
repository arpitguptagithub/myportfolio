const ACHIEVEMENTS = [
  {
    year: "2024",
    icon: "🔒",
    title: "DEFCON 2024",
    desc: "Presented groundbreaking research on Last Mile Reassembly Attack, demonstrating critical vulnerabilities in secure web gateways.",
    stats: [
      { label: "Vulnerabilities Found", value: "25+" },
      { label: "Impact Score", value: "9.8/10" },
    ],
    tags: ["Security Research", "Web Security", "Vulnerability Analysis"],
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
    year: "2024",
    icon: "🏆",
    title: "Hackbells Global Winner",
    desc: "First place in an international hackathon for developing a revolutionary cybersecurity solution. Competed against 200+ teams.",
    stats: [
      { label: "Position", value: "1st" },
      { label: "Teams", value: "200+" },
      { label: "Prize", value: "5K" },
    ],
    tags: ["Security", "Development"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-950 text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((a, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden p-6
                         bg-gray-900/60 backdrop-blur-md card-border hover-glow
                         transition transform hover:-translate-y-2"
            >
              {/* subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent opacity-70 group-hover:opacity-100 transition" />

              {/* content */}
              <div className="relative z-10">
                {/* top row */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-sm bg-gray-800/70 px-3 py-1 rounded-full transition group-hover:bg-blue-600/40">
                    {a.year}
                  </span>
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-blue-400 mb-2 transition group-hover:text-blue-300">
                  {a.title}
                </h3>

                {/* desc */}
                <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-200 transition">
                  {a.desc}
                </p>

                {/* stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {a.stats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/60 rounded-lg p-3 text-center transition transform
                                 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30"
                    >
                      <p className="text-lg font-bold text-blue-300">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {a.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs 
                                 transition transform hover:-translate-y-1 hover:bg-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* glowing corner dots */}
              <span className="corner-dot top-2 left-2" />
              <span className="corner-dot top-2 right-2" />
              <span className="corner-dot bottom-2 left-2" />
              <span className="corner-dot bottom-2 right-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
