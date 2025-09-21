import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Tag } from "lucide-react";

const BLOGS = [
  {
    title: "Exploring Rust for Systems Programming",
    subtitle: "Medium • Longform",
    img: "https://source.unsplash.com/random/1200x800?rust",
    excerpt:
      "Why Rust fits security-minded systems work: ownership, zero-cost abstractions, and fearless concurrency—practical notes from real attacks & tooling.",
    link: "https://medium.com/@arpitgupta/rust-blog",
    tags: ["Rust", "Security", "Systems"],
  },
  {
    title: "Digital Forensics: Notes from the Trenches",
    subtitle: "Personal Blog",
    img: "https://source.unsplash.com/random/1200x800?forensics",
    excerpt:
      "Workflows that saved hours in malware triage: memory artifacts, PE quirks, and how to keep chain-of-custody clean in fast incident response.",
    link: "https://medium.com/@arpitgupta/forensics",
    tags: ["Forensics", "Malware", "Security"],
  },
  {
    title: "IoT + Cloud: A Weekend Build",
    subtitle: "Hobby Project",
    img: "https://source.unsplash.com/random/1200x800?iot",
    excerpt:
      "Raspberry Pi, MQTT, and a tiny rules engine. What breaks first, what to harden, and a checklist before you ship hardware to the wild.",
    link: "https://medium.com/@arpitgupta/iot-project",
    tags: ["IoT", "Cloud", "DIY"],
  },
  {
    title: "Web Hardening Playbook",
    subtitle: "Medium • Guide",
    img: "https://source.unsplash.com/random/1200x800?web,security",
    excerpt:
      "From CSP and CORP to Signed Exchanges and tricky MIME sniffing: a pragmatic checklist you can copy into your next PR.",
    link: "https://medium.com/@arpitgupta/web-hardening",
    tags: ["Web", "Security"],
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
              onMouseMove={(e) => {
                const t = e.currentTarget;
                const r = t.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width - 0.5) * 6; // -3..3 deg
                const y = ((e.clientY - r.top) / r.height - 0.5) * -6;
                t.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              {/* neon inner wash */}
              <div className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition
                              bg-[radial-gradient(1200px_400px_at_20%_20%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(800px_300px_at_80%_80%,rgba(34,211,238,0.08),transparent_60%)]" />

              {/* cover */}
              <div className="overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-64 object-cover opacity-90 group-hover:scale-[1.03] transition duration-500"
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
                  Read on Medium <ExternalLink className="w-4 h-4" />
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
