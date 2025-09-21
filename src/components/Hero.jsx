import { Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // delay for slide-in
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - intro */}
        <div
          className={`transition-all duration-1000 ${visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <ReactTyped
              strings={["Hi, I am Arpit"]}
              typeSpeed={200}
              backSpeed={70}
              showCursor={true}
            />
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-blue-400">
            Software Developer & Security Researcher
          </h2>
          <p className="mt-6 text-gray-400 max-w-md">
            Specializing in secure software development and malware analysis.
            Currently working at <span className="text-blue-300">Kasm Workspaces, USA</span>.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-8">
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
                <s.icon className="w-6 h-6 text-cyan-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - skill code box */}
        <div
          className={`transition-all duration-1000 delay-300 ${visible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
        >
          <div className="relative rounded-xl border border-cyan-500/50 bg-gray-900/50 p-6 font-mono text-sm text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition">
            <p className="text-cyan-400">// Skills Overview</p>
            <pre>
              {`const skills = {
  languages: ["C++", "Rust", "Python", "Java"],
  security: ["Malware Analysis", "Digital Forensics"],
  microservices: ["Docker", "Kubernetes", "openMP", "MPI"],
  cloud: ["AWS", "Azure", "GCP"]
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
