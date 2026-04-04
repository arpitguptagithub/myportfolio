import { useEffect, useState, useMemo } from "react";

export default function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState("reveal"); // reveal → blast → fadeout → done
  const name = "ARPIT GUPTA";

  const letters = useMemo(() => {
    return name.split("").map((char, i) => {
      // Random blast direction for each letter
      const angle = (Math.random() * 360) * (Math.PI / 180);
      const distance = 80 + Math.random() * 200;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const rot = (Math.random() - 0.5) * 180;
      return {
        char,
        index: i,
        blastDir: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`,
        revealDelay: i * 0.04,
      };
    });
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("blast"), 1200);
    const t2 = setTimeout(() => setPhase("fadeout"), 1800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-overlay ${phase === "fadeout" ? "fade-out" : ""}`}
    >
      {/* Subtle warm glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(212,165,116,0.3), transparent 70%)",
          }}
        />
      </div>

      <div className="intro-name relative z-10">
        {letters.map((l) => (
          <span
            key={l.index}
            className={`intro-letter ${phase === "blast" ? "blast" : ""}`}
            style={{
              animationDelay: phase === "blast" ? `${l.index * 0.02}s` : `${l.revealDelay}s`,
              "--blast-dir": l.blastDir,
            }}
          >
            {l.char === " " ? "\u00A0" : l.char}
          </span>
        ))}
      </div>
    </div>
  );
}
