import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = ["home", "experience", "projects", "achievements", "skills", "writing"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, transform: "translateX(0px)" });
  const linksRef = useRef(null);

  // Scroll & section observer
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Sliding underline position
  useLayoutEffect(() => {
    const compute = () => {
      const wrap = linksRef.current;
      if (!wrap) return;
      const btn = wrap.querySelector(`[data-section="${active}"]`);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-container flex justify-between items-center h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="font-heading font-bold text-lg text-accent-cream hover:text-accent transition-colors"
        >
          AG
        </button>

        {/* Desktop links */}
        <div
          ref={linksRef}
          className="relative hidden md:flex gap-8 text-sm"
        >
          {/* Sliding underline */}
          <span
            className="pointer-events-none absolute bottom-[-4px] h-[2px] bg-accent rounded-full transition-[width,transform] duration-300 ease-out"
            style={highlightStyle}
          />

          {SECTIONS.map((sec) => (
            <button
              key={sec}
              data-section={sec}
              onClick={() => scrollTo(sec)}
              className={`relative pb-1 capitalize font-medium transition-colors focus:outline-none ${
                active === sec
                  ? "text-accent-cream"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-accent-cream transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {SECTIONS.map((sec, i) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`text-2xl font-heading font-semibold capitalize transition-all duration-300 ${
              active === sec ? "text-accent-cream" : "text-neutral-500 hover:text-neutral-300"
            }`}
            style={{
              transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {sec}
          </button>
        ))}
      </div>
    </header>
  );
}
