import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import HeroAvatar from "./HeroAvatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #d4a574, transparent 70%)" }}
        />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse, #8b9a7b, transparent 70%)" }}
        />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left — Intro */}
          <div className="order-2 md:order-1 relative">
            {/* Soft Glass Blob for Text/Icon Readability against the particle simulation */}
            <div 
              className="absolute -inset-12 -z-10 bg-[#06080a]/60 backdrop-blur-md rounded-[3rem] pointer-events-none"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse, black 30%, transparent 75%)",
                maskImage: "radial-gradient(ellipse, black 30%, transparent 75%)",
              }}
            />

            <ScrollReveal>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4 drop-shadow-sm">
                Software Developer & Security Researcher
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-accent-cream leading-[1.05] tracking-tight drop-shadow-lg">
                Arpit
                <br />
                Gupta
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed drop-shadow-md">
                Specializing in secure software development and malware analysis.
                Currently building at{" "}
                <span className="text-accent-cream font-semibold">Kasm Workspaces, USA</span>.
                Featured at DEFCON and RSA Conference.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-3 mt-8">
                {[
                  { icon: Github, href: "https://github.com/arpitguptagithub", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/arpit-gupta-9482bb239/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:arpitb.lgupta1@gmail.com", label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="group p-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md
                               hover:border-accent/40 transition-all duration-300 hover:-translate-y-1
                               hover:bg-background/80 hover:shadow-[0_8px_30px_rgba(212,165,116,0.15)]"
                  >
                    <s.icon className="w-5 h-5 text-neutral-500 group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — 3D Holographic Avatar */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <ScrollReveal delay={200}>
              <HeroAvatar />
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal delay={500} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-neutral-600 hover:text-accent transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
