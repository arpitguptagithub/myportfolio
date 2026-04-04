import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticCard from "./MagneticCard";
import ScrambleText from "./ScrambleText";

const PROJECTS = [
  {
    title: "Last Mile Reassembly Attack",
    subtitle: "DEFCON 2024 — Security Research",
    img: "https://sqrx.com/static/img/lmr/where-swgs-fail.png",
    desc: "Research presented at DEFCON 2024 demonstrating vulnerabilities in secure web gateways. Recognized by Palo Alto Networks.",
    link: "https://www.youtube.com/watch?v=mBZQnJ1MWYI",
  },
  {
    title: "Polymorphic Extensions Attack",
    subtitle: "SquareX Research — Browser Extensions Exploit",
    img: "https://tse2.mm.bing.net/th/id/OIP.TxfFv2s3noRC_EIg494iHgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Developed a polymorphic browser extension attack that impersonates legitimate extensions (icons, UI), tricking users into entering credentials. 100+ press releases, 400K+ organic YouTube views.",
    link: "https://sqrx.com/polymorphic-extensions",
  },
  {
    title: "Copycat Identity Stealer",
    subtitle: "DEF CON 33 — Extension Toolkit",
    img: "https://i0.wp.com/undercodenews.com/wp-content/uploads/Demo-Labs_SquareX.png?resize=1024%2C614&ssl=1",
    desc: "Browser extension-based red-team toolkit for simulating identity theft attacks; includes phishing via Gmail/LinkedIn, login + OTP stealing, autofill extraction.",
    link: "https://infocondb.org/con/def-con/def-con-33/copycat-identity-stealer-extension",
  },
  {
    title: "Browser Synjacking Attack",
    subtitle: "2025 — Security Research",
    img: "https://tse4.mm.bing.net/th/id/OIP.oob7cDRRAZX2uvqrHv9BCwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Novel browser-based attack exploiting synchronization features to steal sensitive account data across multiple sessions/devices. Widely covered in security press.",
    link: "https://www.forbes.com/sites/alexvakulov/2025/01/31/new-browser-syncjacking-attack-gives-hackers-full-device-control/",
  },
  {
    title: "Smart Laundry System",
    subtitle: "IoT + Cloud Project",
    img: "https://www.lg.com/eastafrica/images/WM/features/WM-SapienceHEDD-BlackSteel-11-1-SmartThinQ-Desktop_new.jpg",
    desc: "IoT-based laundry management system integrating washing machines with cloud backend, real-time usage tracking, and payment gateway.",
    link: "#",
  },
  {
    title: "Browser Security Field Manual",
    subtitle: "Publication / Book Contribution",
    img: "https://m.media-amazon.com/images/I/61LJ12YPhYL._SY342_.jpg",
    desc: "My demos, exploit code, and attack walkthroughs are included as supporting material in the book 'Browser Security Field Manual'.",
    link: "https://getstarted.sqrx.com/browser-security-manual#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Section divider */}
      <div className="warm-divider mb-24 md:mb-32" />

      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16">
            <ScrambleText text="Projects" />
          </h2>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollReveal key={idx} delay={50}>
                <article
                  className={`group grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    isEven ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Image */}
                  <MagneticCard intensity={4}>
                  <div className={`relative overflow-hidden rounded-2xl border border-border group-hover:border-border-hover transition-all duration-500 ${isEven ? "" : "md:[direction:ltr]"}`}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100
                                   group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                  </MagneticCard>

                  {/* Text */}
                  <div className={`${isEven ? "" : "md:[direction:ltr]"}`}>
                    <span className="text-xs text-neutral-500 tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-cream mt-3 mb-4 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover
                                   transition-colors group/link"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
