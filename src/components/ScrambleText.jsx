import { useState, useEffect, useRef } from "react";

export default function ScrambleText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const chars = "!<>-_\\\\/[]{}—=+*^?#________";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          scramble();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = 20;
    
    const interval = setInterval(() => {
      setDisplayText((oldText) => {
        return text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }

      iteration += 1 / 3; // Controls speed of reveal
    }, 30);
  };

  // Run once on mount if we want, or rely on inView
  return (
    <span ref={containerRef} className={className} style={{ fontFamily: "monospace", letterSpacing: "-0.05em" }}>
      {displayText}
    </span>
  );
}
