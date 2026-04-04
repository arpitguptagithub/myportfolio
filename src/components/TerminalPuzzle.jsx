import { useState, useRef, useEffect } from "react";
import conf from "canvas-confetti";

export default function TerminalPuzzle({ onSolve }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "WARNING: Critical infrastructure under heavy attack.",
    "City integrity dropping.",
    "Awaiting override sequence..."
  ]);
  const [solved, setSolved] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto focus when terminal mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || solved) return;

    const cmd = input.trim();
    const newHistory = [...history, `> ${cmd}`];

    const isCorrect = cmd.toLowerCase().includes("hired") || cmd.toLowerCase() === "sudo deploy_defense";

    if (isCorrect) {
      newHistory.push("ACCESS GRANTED.");
      newHistory.push("Rerouting power to main deflector shields...");
      newHistory.push("Kinetic Dome deployed. City saved.");
      setSolved(true);
      
      // Fire confetti from terminal
      const rect = inputRef.current.getBoundingClientRect();
      conf({
        particleCount: 100,
        spread: 70,
        origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: rect.top / window.innerHeight },
        colors: ["#8b9a7b", "#d4a574", "#e8d5b7"]
      });

      // Notify the particle field
      window.dispatchEvent(new Event("shield-stabilized"));
      
      // Optional: Give them a sec then finish
      setTimeout(() => {
        if (onSolve) onSolve();
      }, 3000);
    } else if (cmd.toLowerCase() === "help") {
      newHistory.push("Hint: Secure the infrastructure by sending the ultimate override.");
      newHistory.push("Usage: type '! You are hired!' to override.");
    } else {
      newHistory.push(`Command unrecognized. Type 'help' for hints.`);
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-red-500/50 p-6 flex flex-col font-mono text-sm shadow-[0_0_30px_rgba(239,68,68,0.15)] relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-50" />
      
      <div className="flex items-center gap-2 mb-4 text-red-400 border-b border-red-500/20 pb-2 flex-shrink-0">
        <span className="animate-pulse">●</span>
        <span className="font-bold tracking-widest">DEFENSE TERMINAL</span>
      </div>

      <div 
        className="flex-grow overflow-y-auto space-y-1 mb-4 flex flex-col justify-end"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div 
            key={i} 
            className={`${line.includes("WARNING") || line.includes("dropping") ? "text-red-400" : line.includes("GRANTED") || line.includes("deployed") ? "text-accent-sage" : "text-neutral-300"}`}
          >
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-shrink-0 relative z-20">
        <span className="text-accent-sage">root@server:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={solved}
          className="flex-grow bg-transparent outline-none border-none text-accent-cream focus:ring-0 p-0"
          autoComplete="off"
          spellCheck="false"
        />
        {/* Blinking cursor effect on input */}
        <div className={`w-2 h-4 ${solved ? 'bg-accent-sage' : 'bg-accent-cream animate-pulse'}`} />
      </form>
    </div>
  );
}
