import { useEffect, useRef } from "react";

export default function MagneticBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Step 1: Text to particle positions ---
    const buffer = document.createElement("canvas");
    const bctx = buffer.getContext("2d");
    buffer.width = width;
    buffer.height = height;
    bctx.fillStyle = "white";
    bctx.font = "bold 100px Inter, sans-serif";
    bctx.textAlign = "center";
    bctx.textBaseline = "middle";
    bctx.fillText("ARPIT GUPTA", width / 2, height / 2);

    const pixels = bctx.getImageData(0, 0, width, height).data;
    const positions = [];
    for (let y = 0; y < height; y += 6) {
      for (let x = 0; x < width; x += 6) {
        const alpha = pixels[(y * width + x) * 4 + 3];
        if (alpha > 128) positions.push({ x, y });
      }
    }

    // --- Step 2: Particles with random shapes + sizes ---
    let particles = positions
      .filter((_, i) => i % 2 === 0) // reduce density
      .map((pos) => ({
        x: pos.x,
        y: pos.y,
        vx: 0,
        vy: 0,
        ox: pos.x, // original position
        oy: pos.y,
        state: "text", // text → deframe → blast → float
        shape: ["circle", "square", "triangle"][
          Math.floor(Math.random() * 3)
        ],
        size: 2 + Math.random() * 3, // random 2–5 px
      }));

    const mouse = { x: width / 2, y: height / 2 };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    ctx.globalCompositeOperation = "lighter";

    const drawParticle = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.fillStyle = "rgba(59,130,246,0.9)";

      switch (p.shape) {
        case "square":
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size, p.size);
          ctx.lineTo(-p.size, p.size);
          ctx.closePath();
          ctx.fill();
          break;
        default: // circle
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
      }
      ctx.restore();
    };

    let frame = 0;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      particles.forEach((p) => {
        // --- state transitions ---
        if (p.state === "text" && frame > 100) {
          // 5s → start glitch deframe
          p.state = "deframe";
        }

        if (p.state === "deframe" && frame > 300) {
          // 10s → blast
          p.vx = (Math.random() - 0.5) * 7;
          p.vy = (Math.random() - 0.5) * 7;
          p.state = "blast";
        }

        if (p.state === "blast" && frame > 780) {
          // 13s → float background
          p.state = "float";
        }

        // --- physics ---
        if (p.state === "text") {
          // locked at original position
          p.x = p.ox;
          p.y = p.oy;
        }

        if (p.state === "deframe") {
          // glitchy wiggle around original
          p.x = p.ox + (Math.random() - 0.5) * 3;
          p.y = p.oy + (Math.random() - 0.5) * 3;
        }

        if (p.state === "blast" || p.state === "float") {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.state === "float") {
          // magnetic attraction to cursor
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 350) {
            const pull = (350 - dist) / 350;
            p.vx += (dx / dist) * pull * 0.07;
            p.vy += (dy / dist) * pull * 0.07;
          }
          p.vx *= 0.95;
          p.vy *= 0.95;
        }

        drawParticle(p);
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none mix-blend-screen"
    />
  );
}
