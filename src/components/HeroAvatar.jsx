import { useEffect, useState } from "react";
import TerminalPuzzle from "./TerminalPuzzle";

export default function HeroAvatar() {
  const [loaded, setLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shieldsMaximized, setShieldsMaximized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Listen for the custom event when the terminal puzzle is solved
    const handleShieldEvent = () => {
      setShieldsMaximized(true);
      // Flip back to the avatar after a delay
      setTimeout(() => setIsFlipped(false), 2000);
    };
    window.addEventListener("shield-stabilized", handleShieldEvent);
    return () => window.removeEventListener("shield-stabilized", handleShieldEvent);
  }, []);

  return (
    <div 
      className={`hero-avatar-wrapper relative transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ perspective: "1500px" }}
    >
      <div 
        className="w-full h-full relative transition-transform duration-1000"
        style={{ 
          transformStyle: "preserve-3d", 
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        {/* --- FRONT FACE --- */}
        <div 
          className="relative hero-float"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Holographic scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-10">
            <div className={`hero-scanline ${shieldsMaximized ? 'opacity-30 mix-blend-screen bg-accent-sage/20' : ''}`} />
          </div>

          {/* Main avatar image */}
          <div className="relative z-0">
            <img
              src="avatar-hologram.png"
              alt="3D Holographic Avatar"
              className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain select-none transition-all duration-1000 ${
                shieldsMaximized 
                  ? 'drop-shadow-[0_0_60px_rgba(139,154,123,0.6)] hue-rotate-[-30deg]' 
                  : 'drop-shadow-[0_0_40px_rgba(212,165,116,0.3)]'
              }`}
              draggable="false"
            />
          </div>

          {/* Warning / Strengthen Button */}
          {!shieldsMaximized && (
            <button
              onClick={() => setIsFlipped(true)}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 
                         px-4 py-2 border border-red-500/50 rounded-full bg-bg shadow-[0_0_15px_rgba(239,68,68,0.3)]
                         text-xs font-mono font-bold text-red-400 hover:text-red-300 hover:border-red-400
                         hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all animate-pulse hover:animate-none group w-max"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-red-400" />
              SYSTEM UNDER ATTACK 
              <span className="text-white bg-red-500/20 px-2 py-0.5 rounded ml-2 group-hover:bg-red-500/40">
                Fix Here
              </span>
            </button>
          )}

          {shieldsMaximized && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 
                         px-4 py-2 border border-accent-sage/50 rounded-full bg-bg shadow-[0_0_15px_rgba(139,154,123,0.3)]
                         text-xs font-mono font-bold text-accent-sage w-max transition-all">
              <span className="w-2 h-2 rounded-full bg-accent-sage animate-pulse" />
              SHIELDS OPTIMAL
            </div>
          )}

          {/* Ambient glow underneath */}
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 md:w-56 md:h-10 rounded-full blur-2xl hero-glow-pulse transition-colors duration-1000 ${
            shieldsMaximized ? 'bg-accent-sage/30' : 'bg-accent/10'
          }`} />

          {/* Info cards floating around the avatar */}
          <div className="hero-card-float-1 absolute top-8 -left-4 md:-left-12 z-20">
            <div className={`bg-surface/80 backdrop-blur-md border ${shieldsMaximized ? 'border-accent-sage/40' : 'border-border'} rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}>
              <p className="font-heading text-sm font-semibold text-accent-cream">Arpit</p>
              <p className="text-xs text-neutral-500 flex items-center gap-1">
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${shieldsMaximized ? 'bg-accent-sage' : 'bg-accent'}`} />
                India / Remote
              </p>
            </div>
          </div>

          <div className="hero-card-float-2 absolute top-1/3 -right-12 md:-right-28 z-20">
            <div className={`bg-surface/80 backdrop-blur-md border ${shieldsMaximized ? 'border-accent-sage/40' : 'border-border'} rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}>
              <p className="font-heading text-xs font-semibold text-accent-cream mb-1">Status</p>
              <ul className="text-xs text-neutral-400 space-y-0.5">
                <li>• Defensive protocols: {shieldsMaximized ? <span className="text-accent-sage">Active</span> : <span className="text-red-400">Compromised</span>}</li>
                <li>• Malware Analysis</li>
                <li>• Web Exploitation</li>
              </ul>
            </div>
          </div>

          <div className="hero-card-float-3 absolute -bottom-2 -left-4 md:-left-8 z-20">
            <div className={`bg-surface/80 backdrop-blur-md border ${shieldsMaximized ? 'border-accent-sage/40' : 'border-red-500/30'} rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}>
              <p className="text-xs text-neutral-400 max-w-[180px]">
                {shieldsMaximized ? "All systems nominal and secured." : "Warning: Intrusion attempts detected!"}
              </p>
            </div>
          </div>
        </div>

        {/* --- BACK FACE (TERMINAL) --- */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
           {/* Close button if they want to give up */}
           <button 
             onClick={() => setIsFlipped(false)}
             className="absolute -top-4 right-0 text-neutral-500 hover:text-white z-50 p-2"
           >
             ✖ Cancel
           </button>
           
           <div className="w-[110%] h-[90%] md:w-[130%] -ml-[5%] md:-ml-[15%]">
             <TerminalPuzzle />
           </div>
        </div>

      </div>
    </div>
  );
}
