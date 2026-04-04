import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-12">
      <div className="warm-divider" />

      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left — Branding */}
          <div>
            <h2 className="font-heading text-xl font-bold text-accent-cream">
              Arpit Gupta
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Software Developer & Security Researcher
            </p>
          </div>

          {/* Center — Social icons */}
          <div className="flex gap-3">
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
                className="group p-2.5 rounded-lg border border-border hover:border-accent/30
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <s.icon className="w-4 h-4 text-neutral-500 group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>

          {/* Right — Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-cream transition-colors self-start md:self-auto"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-neutral-600 text-center">
            © {new Date().getFullYear()} Arpit Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
