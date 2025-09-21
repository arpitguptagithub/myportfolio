import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Tag } from "lucide-react";

const BLOGS = [
  {
    title: "Stop Guessing Which Remote Desktop Protocol You Should Actually Use — and When",
    subtitle: "Medium • Security Networking",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dfo4CbzU0AzrdryyMlIvEg.png",
    excerpt:
      "RDP vs VNC vs others — a breakdown of protocols, tradeoffs, and when each remote desktop solution actually makes sense.",
    link: "https://medium.com/@arpitb.lgupta1/stop-guessing-which-remote-desktop-protocol-you-should-actually-use-and-when-79fb2998893f",
    tags: ["RDP", "Remote Access", "Networking", "Security"],
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
    tags: ["Browser Security", "Web", "Attack Vectors"],
  },
  {
    title: "Digital Clock Project",
    subtitle: "Hardware Build • Logic Design",
    img: "https://chiragkotian.github.io/Past_Projects/images/Digital%20clock.jpg",
    excerpt:
      "A digital clock built with flip-flops and logic gates — blending electronics design with timing circuits.",
    link: "https://chiragkotian.github.io/Past_Projects/Digital_Clock.html",
    tags: ["Hardware", "Electronics", "Logic Design"],
  },
  {
    title: "RC 3D-Printed Plane",
    subtitle: "Hobby Project • RC Build",
    img: "https://chiragkotian.github.io/Past_Projects/images/3D%20printed%20RC%20plane.jpg",
    excerpt:
      "A 3D-printed RC plane project combining design, electronics, and control system integration.",
    link: "https://github.com/ChiragKotian/RC_3D-Printed_plane",
    tags: ["RC", "3D Printing", "Electronics"],
  },
  {
    title: "RC Escapade Race Car",
    subtitle: "RC Hardware Build",
    img: "https://chiragkotian.github.io/Past_Projects/images/rcracecar.jpg",
    excerpt:
      "Custom-built RC race car with custom PCB, remote control integration, and functional design for competition.",
    link: "https://github.com/ChiragKotian/RC-Escapade-RC-race-car-/",
    tags: ["RC", "Hardware", "PCB Design"],
  },
  {
    title: "Drone _Pixhawk",
    subtitle: "Hobby Project • Drone",
    img: "https://chiragkotian.github.io/Past_Projects/images/firstpixhwak.png",
    excerpt:
      "A drone made out of recycled parts and components salvaged from older club projects.",
    link: "https://chiragkotian.github.io/Past_Projects/Pixhawk_first_drone.html",
    tags: ["RC", "3D Printing", "Electronics"],
  },
];

export default function Hobbies() {
  const [activeTag, setActiveTag] = useState("All");
  const [progress, setProgress] = useState(0);
  const railRef = useRef(null);

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(BLOGS.flatMap((b) => b.tags)))],
    []
  );

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? BLOGS
        : BLOGS.filter((b) => b.tags.includes(activeTag)),
    [activeTag]
  );

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const onScroll = () => {
      const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1);
      setProgress(Math.max(0, Math.min(1, pct)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [filtered.length]);

  return (
    <section
      id="hobbies"
      className="relative min-h-screen text-white py-20 overflow-hidden"
    >
      {/* soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hobbies & Blogs
            </span>
          </h2>

          {/* Tag filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <Tag className="w-4 h-4" /> Filter
            </span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full text-xs border transition
                  ${
                    activeTag === t
                      ? "border-cyan-500/60 text-cyan-300 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                      : "border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-300"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        {/* Filmstrip rail */}
        <div
          ref={railRef}
          className="relative flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory
                     [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full
                     [&::-webkit-scrollbar-thumb]:bg-blue-500/30 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {filtered.map((b, i) => (
            <article
              key={i}
              className="group relative snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[48%]
                         rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/40 backdrop-blur-md
                         transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.38)]"
            >
              {/* animated gradient halo */}
              <div className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-80 transition
                              bg-[radial-gradient(600px_400px_at_20%_20%,rgba(59,130,246,0.15),transparent_70%),radial-gradient(600px_400px_at_80%_80%,rgba(34,211,238,0.15),transparent_70%)]
                              animate-[pulse_6s_ease-in-out_infinite]" />

              {/* cover with fixed aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition duration-700"
                  loading="lazy"
                />
              </div>

              {/* text panel */}
              <div className="relative p-6">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {b.subtitle}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 line-clamp-3">
                  {b.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {b.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300
                                 transition transform hover:-translate-y-0.5 hover:bg-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={b.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 text-sm
                             hover:bg-blue-500/20 hover:shadow-[0_0_16px_rgba(59,130,246,0.45)] transition"
                >
                  Read More <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* progress bar */}
        <div className="mt-6 h-1 w-full rounded-full bg-gray-800/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
