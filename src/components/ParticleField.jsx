import { useEffect, useRef, useState } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const [shieldState, setShieldState] = useState("vulnerable"); // vulnerable, stabilized

  useEffect(() => {
    const handleShieldEvent = () => setShieldState("stabilized");
    window.addEventListener("shield-stabilized", handleShieldEvent);
    return () => window.removeEventListener("shield-stabilized", handleShieldEvent);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let raf;
    let width, height;
    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    // --- City Data ---
    let cityColumns = [];
    const COL_WIDTH = isMobile ? 16 : 28; // Wider for detailed buildings
    let colCount = 0;
    
    // Health metrics
    let maxTotalHealth = 0;
    let currentTotalHealth = 0;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      const newColCount = Math.floor(width / COL_WIDTH) + 1;
      if (newColCount !== colCount || cityColumns.length === 0) {
        colCount = newColCount;
        cityColumns = new Array(colCount).fill(0).map((_, i) => {
          const baseHeight = height * 0.1;
          const cluster1 = Math.abs(Math.sin(i * 0.2)) * height * 0.15;
          const noise = Math.random() * height * 0.15;
          const isTower = Math.random() > 0.8 ? height * 0.2 : 0;
          const maxH = Math.min(height * 0.65, baseHeight + cluster1 + noise + isTower);
          
          const colorVariant = Math.floor(Math.random() * 15);
          
          // Pre-generate random window grid states for the building
          const winCols = Math.floor(COL_WIDTH / 6);
          const maxPossibleWinRows = Math.floor((height * 0.65) / 8); 
          const windowMap = Array(maxPossibleWinRows).fill(0).map(() => 
            Array(winCols).fill(0).map(() => Math.random() > 0.5) // true = window is ON
          );

          return {
            x: i * COL_WIDTH,
            w: COL_WIDTH - (isMobile ? 2 : 4), // Gaps
            maxH: maxH,
            h: maxH,
            r: 20 + colorVariant,
            g: 22 + colorVariant,
            b: 25 + colorVariant,
            antenna: isTower > 0 && Math.random() > 0.5 ? Math.random() * 30 + 10 : 0,
            windows: windowMap,
            winCols: winCols
          };
        });
        
        maxTotalHealth = cityColumns.reduce((sum, col) => sum + col.maxH, 0);
        const healthPercent = maxTotalHealth === 0 ? 1 : currentTotalHealth / maxTotalHealth || 1;
        currentTotalHealth = maxTotalHealth * healthPercent;
        
        const damageRatio = currentTotalHealth / maxTotalHealth;
        cityColumns.forEach(col => col.h = col.maxH * damageRatio);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Shield path for the central generator
    const shieldGeneratorPath = new Path2D("M0,0 L15,4 L15,15 C15,22 0,30 0,30 C0,30 -15,22 -15,15 L-15,4 Z");

    // --- Entity Arrays ---
    let rockets = [];
    let sparks = [];
    
    // Shield Dome variables (massively scaled to cover whole screen gently)
    const domeRadius = Math.max(width, height) * 1.5; 
    const domeCenterX = width / 2;
    const domeCenterY = height + domeRadius - (height * 0.85); // Pushes it up so arc covers screen

    const isStabilized = shieldState === "stabilized";

    let frame = 0;
    
    // Time scaling: 30 minutes to destroy
    const ROCKET_SPAWN_RATE = isMobile ? 8 : 4; 
    const ROCKETS_PER_SEC = 60 / ROCKET_SPAWN_RATE;
    const TARGET_TIME_SECONDS = 1800; // 30 minutes
    const DAMAGE_PER_ROCKET = maxTotalHealth / (ROCKETS_PER_SEC * TARGET_TIME_SECONDS);

    // Pre-calculate green/red colors for performance
    const sageHex = "#8b9a7b";
    const sageRgb = "139, 154, 123";
    const amberRgb = "212, 165, 116";

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      const stabilizedThisFrame = shieldState === "stabilized";

      // --- Draw City ---
      currentTotalHealth = 0;
      for (let i = 0; i < colCount; i++) {
        const col = cityColumns[i];
        if (col.h > 0) {
          currentTotalHealth += col.h;
          
          // Draw building base structure (silhouette)
          ctx.beginPath();
          ctx.rect(col.x, height - col.h, col.w, col.h);
          ctx.fillStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
          ctx.fill();

          // Draw Antenna
          if (col.antenna > 0) {
             ctx.beginPath();
             // Antenna sits on top of current height
             ctx.moveTo(col.x + col.w / 2, height - col.h);
             ctx.lineTo(col.x + col.w / 2, height - col.h - col.antenna);
             ctx.strokeStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
             ctx.lineWidth = 2;
             ctx.stroke();

             // Blinking red light on antenna
             if (frame % 60 < 30) {
                ctx.beginPath();
                ctx.arc(col.x + col.w / 2, height - col.h - col.antenna, 1.5, 0, Math.PI*2);
                ctx.fillStyle = "rgba(239, 68, 68, 0.8)";
                ctx.fill();
             }
          }
          
          // Draw Detail Grid (Windows)
          // Only draw windows inside the current existing height
          const winRows = Math.floor(col.h / 8); 
          const winPaddingX = 2;
          const winW = (col.w - (winPaddingX * 2)) / col.winCols;
          
          for (let r = 0; r < winRows; r++) {
            // Check maxPossible rows safety
            if (r >= col.windows.length) continue; 
            const yPos = height - (r * 8) - 6;

            for (let c = 0; c < col.winCols; c++) {
               if (col.windows[r][c]) {
                 // Random flicker
                 if (Math.random() > 0.995) col.windows[r][c] = false; 

                 ctx.beginPath();
                 ctx.rect(col.x + winPaddingX + (c * winW) + 1, yPos, winW - 2, 4);
                 
                 // Color window based on shield state
                 if (stabilizedThisFrame) {
                    ctx.fillStyle = `rgba(${sageRgb}, ${Math.random() * 0.1 + 0.3})`;
                 } else {
                    ctx.fillStyle = `rgba(${amberRgb}, ${Math.random() * 0.1 + 0.2})`;
                 }
                 ctx.fill();
               } else {
                 if (Math.random() > 0.998) col.windows[r][c] = true;
               }
            }
          }
        }
      }

      // --- Draw Generator (Small central shield) ---
      // In the middle of the city
      const genX = width / 2;
      const genY = height - 60;
      
      ctx.save();
      ctx.translate(genX, genY);
      
      // Floating animation
      const floatY = Math.sin(frame * 0.05) * 5;
      ctx.translate(0, floatY);

      // Scale up a bit
      const gScale = 1.2;
      ctx.scale(gScale, gScale);

      ctx.lineWidth = 1.5;
      if (stabilizedThisFrame) {
         ctx.strokeStyle = `rgba(${sageRgb}, 1)`;
         ctx.shadowColor = sageHex;
         ctx.shadowBlur = 15;
      } else {
         ctx.strokeStyle = `rgba(239, 68, 68, 0.8)`; // Vulnerable
         ctx.shadowColor = "red";
         ctx.shadowBlur = 5;
      }
      ctx.stroke(shieldGeneratorPath);

      // Inner energy core
      ctx.beginPath();
      ctx.arc(0, 15, 3, 0, Math.PI*2);
      ctx.fillStyle = stabilizedThisFrame ? sageHex : "#ef4444";
      ctx.fill();
      
      ctx.restore();

      // --- Draw Health Bar ---
      const healthPercent = maxTotalHealth > 0 ? (currentTotalHealth / maxTotalHealth) : 1;
      
      ctx.font = "10px monospace";
      ctx.textAlign = "right";
      ctx.fillStyle = stabilizedThisFrame ? `rgba(${sageRgb}, 0.8)` : "rgba(255, 255, 255, 0.5)";
      ctx.fillText(stabilizedThisFrame ? "INFRASTRUCTURE FULLY SECURED" : "INFRASTRUCTURE INTEGRITY", width - 20, 20);
      
      const barW = 150;
      const barH = 4;
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillRect(width - 20 - barW, 28, barW, barH);
      
      const r_c = healthPercent > 0.5 ? Math.floor(510 * (1 - healthPercent)) : 255;
      const g_c = healthPercent > 0.5 ? 255 : Math.floor(510 * healthPercent);
      ctx.fillStyle = stabilizedThisFrame ? `rgb(${sageRgb})` : `rgb(${r_c}, ${g_c}, 50)`;
      ctx.fillRect(width - 20 - barW, 28, barW * healthPercent, barH);

      // --- Draw Shield Dome ---
      if (stabilizedThisFrame) {
         // The dome covers everything seamlessly
         const pulse = Math.sin(frame * 0.02) * 0.1 + 0.9;
         
         ctx.beginPath();
         // Using broad arc
         ctx.arc(domeCenterX, domeCenterY, domeRadius, Math.PI * 1.1, Math.PI * 1.9);
         ctx.lineWidth = 2;
         ctx.strokeStyle = `rgba(${sageRgb}, ${0.4 * pulse})`;
         ctx.stroke();

         ctx.beginPath();
         // Inner secondary line
         ctx.arc(domeCenterX, domeCenterY, domeRadius - 3, Math.PI * 1.1, Math.PI * 1.9);
         ctx.lineWidth = 1;
         ctx.strokeStyle = `rgba(${sageRgb}, ${0.2 * pulse})`;
         ctx.stroke();
         
         // Glow filling the sky under the dome
         const grad = ctx.createRadialGradient(domeCenterX, domeCenterY, domeRadius * 0.95, domeCenterX, domeCenterY, domeRadius);
         grad.addColorStop(0, `rgba(${sageRgb}, 0)`);
         grad.addColorStop(1, `rgba(${sageRgb}, 0.08)`);
         
         ctx.beginPath();
         ctx.arc(domeCenterX, domeCenterY, domeRadius, Math.PI * 1.1, Math.PI * 1.9);
         ctx.fillStyle = grad;
         ctx.fill();

         // Beam connecting generator to dome
         ctx.beginPath();
         ctx.moveTo(genX, genY + floatY);
         ctx.lineTo(genX, domeCenterY - domeRadius);
         const beamGrad = ctx.createLinearGradient(0, genY, 0, domeCenterY - domeRadius);
         beamGrad.addColorStop(0, `rgba(${sageRgb}, 0.8)`);
         beamGrad.addColorStop(1, `rgba(${sageRgb}, 0.0)`);
         ctx.strokeStyle = beamGrad;
         ctx.lineWidth = 2;
         ctx.stroke();
      }

      // --- 1. Spawner Logic (Rockets) ---
      if (frame % ROCKET_SPAWN_RATE === 0) {
        // High quantity, spawn across top width
        const rx = Math.random() * width;
        const ry = -10;
        
        // Random falling angle (mostly straight down, slight slant towards center)
        const toCenterX = (width/2 - rx);
        const slant = (toCenterX / width) * 0.5; // slight curve towards center
        const angle = (Math.PI / 2) + slant + (Math.random() - 0.5) * 0.2;
        const speed = Math.random() * 2 + 3; // Fast small rockets
        
        rockets.push({ 
          x: rx, y: ry, 
          vx: Math.cos(angle) * speed, 
          vy: Math.sin(angle) * speed,
          history: [] // trail
        });
      }

      // --- 2. Rockets update & draw ---
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        
        r.history.push({ x: r.x, y: r.y });
        if (r.history.length > 5) r.history.shift();
        
        r.x += r.vx;
        r.y += r.vy;

        // Draw Rocket Trail
        if (r.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(r.history[0].x, r.history[0].y);
          ctx.lineTo(r.x, r.y);
          ctx.strokeStyle = "rgba(239, 68, 68, 0.6)"; 
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Rocket Head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        let hit = false;
        let surfaceNormal = 0; 
        let isShieldHit = false;

        // Check Shield Dome Impact
        if (stabilizedThisFrame) {
           const dx = r.x - domeCenterX;
           const dy = r.y - domeCenterY;
           const dist = Math.sqrt(dx*dx + dy*dy);
           if (dist <= domeRadius + 5 && dy < 0) {
              hit = true;
              isShieldHit = true;
              surfaceNormal = Math.atan2(dy, dx);
           }
        } 
        
        // Check City Impact if no shield
        if (!hit) {
           const colIndex = Math.floor(r.x / COL_WIDTH);
           if (colIndex >= 0 && colIndex < colCount) {
             const col = cityColumns[colIndex];
             // Building hit logic includes antenna mapping loosely
             const actualHeight = col.antenna > 0 ? col.h + col.antenna : col.h;

             if (r.y >= height - actualHeight) {
                hit = true;
                surfaceNormal = -Math.PI / 2; // bouncing up
                
                // Damage building
                col.h = Math.max(0, col.h - DAMAGE_PER_ROCKET);
                // Splatter some surrounding buildings minimally for AoE
                if (colIndex > 0) cityColumns[colIndex-1].h = Math.max(0, cityColumns[colIndex-1].h - DAMAGE_PER_ROCKET*0.2);
                if (colIndex < colCount-1) cityColumns[colIndex+1].h = Math.max(0, cityColumns[colIndex+1].h - DAMAGE_PER_ROCKET*0.2);
             }
           } else if (r.y >= height) {
             hit = true; // hit ground outside city bounds
             surfaceNormal = -Math.PI / 2;
           }
        }

        if (hit) {
          // Remove rocket
          rockets.splice(i, 1);
          
          // Generate sparks
          const sparkCount = isMobile ? 3 : 6;
          for (let s = 0; s < sparkCount; s++) {
            const bounceAngle = surfaceNormal + (Math.random() - 0.5) * Math.PI * 0.8;
            const bSpeed = Math.random() * 4 + 1;
            sparks.push({
              x: r.x, y: r.y,
              vx: Math.cos(bounceAngle) * bSpeed,
              vy: Math.sin(bounceAngle) * bSpeed,
              life: 1.0,
              decay: Math.random() * 0.05 + 0.02,
              isShield: isShieldHit
            });
          }
          
          if (Math.random() > 0.8 && !isMobile) {
             ctx.beginPath();
             ctx.arc(r.x, r.y, 20, 0, Math.PI*2);
             ctx.fillStyle = isShieldHit ? `rgba(${sageRgb}, 0.15)` : "rgba(239, 68, 68, 0.15)";
             ctx.fill();
          }
        }
      }

      // --- 3. Sparks update & draw ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.1; // gravity for sparks
        s.life -= s.decay;
        
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, 1, 0, Math.PI * 2);
        if (s.isShield) {
          ctx.fillStyle = `rgba(${sageRgb}, ${s.life})`; 
        } else {
          ctx.fillStyle = `rgba(250, ${100 + Math.random()*100}, 50, ${s.life})`; 
        }
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [shieldState]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
