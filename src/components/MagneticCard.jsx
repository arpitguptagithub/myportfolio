import { useRef, useCallback } from "react";

export default function MagneticCard({ children, className = "", intensity = 8 }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

      // Move the inner glow to follow cursor
      const glowEl = card.querySelector(".magnetic-glow");
      if (glowEl) {
        glowEl.style.opacity = "1";
        glowEl.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(212,165,116,0.06), transparent 60%)`;
      }
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
    const glowEl = card.querySelector(".magnetic-glow");
    if (glowEl) {
      glowEl.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      {/* Inner cursor-following glow */}
      <div
        className="magnetic-glow absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
