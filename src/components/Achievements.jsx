const ACHIEVEMENTS = [
  {
    year: "2024",
    icon: "🔒",
    title: "DEFCON - Last Mile Reassembly Attack",
    desc: (
      <>
        Developed multiple <strong>attack vectors</strong> in the groundbreaking research on
        <strong> Last Mile Reassembly Attack</strong>, demonstrating
        <strong> critical vulnerabilities</strong> in secure web gateways.
        <a
          href="https://www.bing.com/ck/a?!&&p=d34a53d2037c54ed0371f800bc47b302e704b5a0589bf9ecaefe1e6430624275JmltdHM9MTc1ODQxMjgwMA&ptn=3&ver=2&hsh=4&fclid=3d1dbd00-d3f8-6248-1835-ab25d2aa6320&psq=last+mile+reassembly+attack&u=a1aHR0cHM6Ly9zZWN1cml0eWxlZGdlci5jb20vMjAyNS8wOS9wYWxvLWFsdG8tbmV0d29ya3MtYWNrbm93bGVkZ2VzLXNxdWFyZXgtcmVzZWFyY2gtb24tbGltaXRhdGlvbnMtb2Ytc3dncy1hZ2FpbnN0LWxhc3QtbWlsZS1yZWFzc2VtYmx5LWF0dGFja3MvIzp-OnRleHQ9TGFzdCUyME1pbGUlMjBSZWFzc2VtYmx5JTIwYXR0YWNrcyUyMGFyZSUyMGElMjBjbGFzcyUyMG9mLHRlY2huaXF1ZSUyQyUyMGF0dGFja2VycyUyMGJyZWFrJTIwdGhlJTIwbWFsd2FyZSUyMGludG8lMjBkaWZmZXJlbnQlMjBjaHVua3Mu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          [Reference]
        </a>
      </>
    ),
    stats: [
      { label: "Vulnerabilities Found", value: "25+" },
      { label: "Impact Score", value: "9.8/10" },
      { label: "Recognized Attack" , value: "Pablo Alto Networks" }
    ],
    tags: ["Security Research", "Web Security", "Vulnerability Analysis"],
  },

  {
    year: "2025",
    icon: "🧩",
    title: "Polymorphic Extension",
    desc: (
      <>
        Created the groundbreaking <strong>Polymorphic Browser Extension</strong>, showcased in widely viewed demos
        (<a href="https://youtu.be/oWtR8vqbYX4?si=3D64MNQZmoq6WmoP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline">
          Matt Johnson’s top video
        </a>).
        Recognized as a disruptive attack vector in browser security.
      </>
    ),
    stats: [
      { label: "News Coverage", value: "100+ Press releases" },
      { label: "Organic You tube coverage", value: "400k+ views" }
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
    desc: "My research code and demonstrations were featured in the book Browser Security Field Manual, by Audrey serving as support material for modern web security studies.",
    stats: [],
    tags: ["Publication", "Security Research", "Browser Security"],
  },

  {
    year: "2025",
    icon: "🐈",
    title: "DEFCON Village - CopyCat Identity Stealer",
    desc: "Coded more than 8 out of 10 vectors in the CopyCat Identity Stealer Extension at DEFCON 33 Villages, exposing new methods of identity theft via browser extensions.",
    stats: [
      { label: "Event", value: "DEFCON 33" },
    ],
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
      { label: "Prize", value: "5K" },
    ],
    tags: ["Security", "Development"],
  },

  {
    year: "2025",
    icon: "🔒",
    title: "Browser Synjacking Attack",
    desc: "Developed a novel browser-based attack exploiting synchronization features to steal sensitive account data. Widely covered in security press.",
    stats: [
      { label: "Press Articles", value: "100+" },
    ],
    tags: ["Security Research", "JS", "Python", "Native Messaging", "Chrome Extension"],
  },

  {
    year: "2025",
    icon: "🔓",
    title: "RSA Conference – Data Splicing Attacks",
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
    stats: [
      { label: "Position", value: "1st" },
    ],
    tags: ["Research", "Water Management", "Conservation", "ML Algorithms"],
  },

  {
    year: "2023",
    icon: "🚗",
    title: "RC Escapade 2023",
    stats: [
      { label: "Position", value: "1st" },
    ],
    desc: "Engineered a fully functional RC car from scratch with custom PCB design and remote-control system for annual racing competition.",
    tags: ["Hardware", "PCB Design", "RC Systems"],
  },
  {
    year: "2023",
    icon: "🚀",
    title: "Shaashthra, CIS – Space Debris Management",
    stats: [
      { label: "Position", value: "2nd" },
    ],
    desc: "Presented a novel solution leveraging ML and AI to tackle space debris management challenges at IIT Madras.",
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
                  {a.stats?.map((s, i) => (
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
