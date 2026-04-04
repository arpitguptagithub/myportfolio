import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticCard from "./MagneticCard";
import ScrambleText from "./ScrambleText";

const BLOGS = [
  {
    title: "Stop Guessing Which Remote Desktop Protocol You Should Actually Use — and When",
    subtitle: "Medium • Security Networking",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dfo4CbzU0AzrdryyMlIvEg.png",
    excerpt:
      "RDP vs VNC vs others — a breakdown of protocols, tradeoffs, and when each remote desktop solution actually makes sense.",
    link: "https://medium.com/@arpitb.lgupta1/stop-guessing-which-remote-desktop-protocol-you-should-actually-use-and-when-79fb2998893f",
    tags: ["RDP", "Remote Access", "Networking"],
  },
  {
    title: "The Hidden Holes: Why Our Super-Fast Computers Have Security Problems We're Ignoring",
    subtitle: "Medium • Security Analysis",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*h_D_8BRT3er2Ao-9",
    excerpt:
      "Modern CPUs are fast but full of overlooked vulnerabilities — exploring microarchitectural risks we brush aside.",
    link: "https://medium.com/@arpit_33734/the-hidden-holes-why-our-super-fast-computers-have-security-problems-were-ignoring-7d9ae839f40e",
    tags: ["Security", "Hardware", "Vulnerabilities"],
  },
  {
    title: "Timeless Attack Vectors: Why Cutting-Edge Browser Security Is Essential",
    subtitle: "Medium • Browser Security",
    img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*8X1Z5tTLD6s46jCrpAoHJQ.png",
    excerpt:
      "An overview of evolving attack vectors in modern browsers and why robust browser security is critical today.",
    link: "https://medium.com/@arpit_33734/timeless-attack-vectors-why-cutting-edge-browser-security-is-essential-027fa887ca7a",
    tags: ["Browser Security", "Web"],
  },
  {
    title: "Digital Clock Project",
    subtitle: "Hardware Build • Logic Design",
    img: "https://chiragkotian.github.io/Past_Projects/images/Digital%20clock.jpg",
    excerpt:
      "A digital clock built with flip-flops and logic gates — blending electronics design with timing circuits.",
    link: "https://chiragkotian.github.io/Past_Projects/Digital_Clock.html",
    tags: ["Hardware", "Electronics"],
  },
  {
    title: "RC 3D-Printed Plane",
    subtitle: "Hobby Project • RC Build",
    img: "https://chiragkotian.github.io/Past_Projects/images/3D%20printed%20RC%20plane.jpg",
    excerpt:
      "A 3D-printed RC plane project combining design, electronics, and control system integration.",
    link: "https://github.com/ChiragKotian/RC_3D-Printed_plane",
    tags: ["RC", "3D Printing"],
  },
  {
    title: "RC Escapade Race Car",
    subtitle: "RC Hardware Build",
    img: "https://chiragkotian.github.io/Past_Projects/images/rcracecar.jpg",
    excerpt:
      "Custom-built RC race car with custom PCB, remote control integration, and functional design for competition.",
    link: "https://github.com/ChiragKotian/RC-Escapade-RC-race-car-/",
    tags: ["RC", "Hardware"],
  },
  {
    title: "Drone — Pixhawk",
    subtitle: "Hobby Project • Drone",
    img: "https://chiragkotian.github.io/Past_Projects/images/firstpixhwak.png",
    excerpt:
      "A drone made out of recycled parts and components salvaged from older club projects.",
    link: "https://chiragkotian.github.io/Past_Projects/Pixhawk_first_drone.html",
    tags: ["RC", "Electronics"],
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 relative">
      <div className="warm-divider mb-24 md:mb-32" />

      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-3">Thoughts & Builds</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16">
            <ScrambleText text="Writing & Interests" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {BLOGS.map((b, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <MagneticCard intensity={5} className="h-full">
              <a
                href={b.link}
                target="_blank"
                rel="noreferrer"
                className="group card-warm overflow-hidden flex flex-col h-full hover:border-accent/40"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100
                               group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-neutral-500 tracking-wider uppercase mb-2">
                    {b.subtitle}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-accent-cream mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {b.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {b.tags.map((tag, j) => (
                        <span key={j} className="pill text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-accent transition-colors flex-shrink-0 ml-3" />
                  </div>
                </div>
              </a>
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
