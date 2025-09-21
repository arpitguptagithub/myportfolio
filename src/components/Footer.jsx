import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 text-gray-300 border-t border-blue-500/20">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-cyan-900/20 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10 grid md:grid-cols-3 gap-8">
        {/* Left - Branding */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">Arpit Gupta</h2>
          <p className="mt-2 text-sm text-gray-400">
            Software Developer & Security Researcher
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Specializing in secure software development, malware analysis, and
            cloud security.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-blue-400 font-semibold mb-2">Quick Links</h3>
          {["Home", "Experience", "Projects", "Achievements", "Skills"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Right - Socials */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/arpitguptagithub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/arpit-gupta-9482bb239/",
              },
              { icon: Mail, href: "mailto:arpitb.lgupta1@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg border border-cyan-500/50 hover:bg-blue-500/20 
                           transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <s.icon className="w-5 h-5 text-cyan-400" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-500/20 mt-8 py-4 text-center text-xs text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Arpit Gupta. All rights reserved.</p>
        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 bottom-4 p-2 rounded-full border border-cyan-500/50
                     hover:bg-blue-500/20 hover:scale-110 transition"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
