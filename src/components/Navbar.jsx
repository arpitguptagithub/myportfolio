import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });

  const navRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // scroll progress bar
    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll);

    // observe sections to update active
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // recalc underline position on active change + resize
  useLayoutEffect(() => {
    const compute = () => {
      const wrap = linksRef.current;
      if (!wrap) return;
      const btn = wrap.querySelector(`#nav-${active}`);
      if (!btn) return;
      const b = btn.getBoundingClientRect();
      const c = wrap.getBoundingClientRect();
      setHighlightStyle({
        width: b.width,
        transform: `translateX(${b.left - c.left}px)`,
      });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [active]);

  const sections = ["home", "experience", "projects", "achievements", "hobbies","skills"];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Scroll progress bar */}
      <div
        className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

      {/* Navbar */}
      <nav className="backdrop-blur-md bg-transparent border-b border-blue-500/20">
        <div
          ref={navRef}
          className="container mx-auto px-6 py-4 flex justify-between items-center"
        >
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img
              src="/arpit.png"
              alt="Arpit"
              className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
            <span className="font-bold text-lg text-blue-400 hover:text-cyan-300 transition">
              Arpit Gupta
            </span>
          </div>

          {/* Links with sliding underline */}
          <div
            ref={linksRef}
            className="relative flex gap-8 text-sm uppercase tracking-wider"
          >
            {/* Single underline bar */}
            <span
              className="pointer-events-none absolute bottom-[-6px] h-[2px]
                         bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full
                         shadow-[0_0_8px_rgba(59,130,246,0.7)]
                         transition-[width,transform] duration-300 ease-out"
              style={highlightStyle}
            />

            {sections.map((sec) => (
      <button
  id={`nav-${sec}`}
  key={sec}
  onClick={() =>
    document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" })
  }
  className={`relative pb-1 font-medium transition focus:outline-none focus:ring-0 ${
    active === sec
      ? "text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
      : "text-gray-300 hover:text-gray-100"
  }`}
>
  {sec}
</button>

            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
