import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const clickHandler = () => {
      // little "pulse" on click
      setSize(50);
      setTimeout(() => setSize(20), 200);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none mix-blend-screen z-[9999] transition-transform duration-150 ease-out"
      style={{
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
      }}
    >
      {/* Outer glow */}
      <div className="w-full h-full rounded-full bg-cyan-400/30 blur-2xl animate-pulse" />
      {/* Core dot */}
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
    </div>
  );
}
