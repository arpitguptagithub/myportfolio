import { useEffect, useRef, useState } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const shieldStateRef = useRef("vulnerable");

  useEffect(() => {
    const handleShieldEvent = () => {
      shieldStateRef.current = "deploying";
    };
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
    const COL_WIDTH = isMobile ? 16 : 28; 
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
          
          const winCols = Math.floor(COL_WIDTH / 6);
          const maxPossibleWinRows = Math.floor((height * 0.65) / 8); 
          const windowMap = Array(maxPossibleWinRows).fill(0).map(() => 
            Array(winCols).fill(0).map(() => Math.random() > 0.5) 
          );

          return {
            x: i * COL_WIDTH,
            w: COL_WIDTH - (isMobile ? 2 : 4), 
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

    const shieldGeneratorPath = new Path2D("M0,0 L15,4 L15,15 C15,22 0,30 0,30 C0,30 -15,22 -15,15 L-15,4 Z");

    let rockets = [];
    let sparks = [];
    
    // Shield Dome variables
    const domeRadius = Math.max(width, height) * 1.5; 
    const domeCenterX = width / 2;
    const domeCenterY = height + domeRadius - (height * 0.85);

    // Animation states
    let deployAnimProgress = 0;

    let frame = 0;
    
    const ROCKET_SPAWN_RATE = isMobile ? 8 : 4; 
    const ROCKETS_PER_SEC = 60 / ROCKET_SPAWN_RATE;
    const TARGET_TIME_SECONDS = 1800; // 30 minutes
    const DAMAGE_PER_ROCKET = maxTotalHealth / (ROCKETS_PER_SEC * TARGET_TIME_SECONDS);

    const sageHex = "#8b9a7b";
    const sageRgb = "139, 154, 123";
    const amberRgb = "212, 165, 116";

    // Easing helper
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // Progress animation
      const currentState = shieldStateRef.current;
      if (currentState === "deploying" || currentState === "stabilized") {
         if (deployAnimProgress < 1) {
            deployAnimProgress += 0.004; // Very slow, visible buildup ~ 4 seconds
            if (deployAnimProgress >= 1) {
               deployAnimProgress = 1;
            }
         }
      }
      
      const isDeploying = deployAnimProgress > 0;
      const isFullyStabilized = deployAnimProgress >= 1;

      // --- Draw City ---
      currentTotalHealth = 0;
      for (let i = 0; i < colCount; i++) {
        const col = cityColumns[i];
        if (col.h > 0) {
          currentTotalHealth += col.h;
          
          ctx.beginPath();
          ctx.rect(col.x, height - col.h, col.w, col.h);
          ctx.fillStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
          ctx.fill();

          if (col.antenna > 0) {
             ctx.beginPath();
             ctx.moveTo(col.x + col.w / 2, height - col.h);
             ctx.lineTo(col.x + col.w / 2, height - col.h - col.antenna);
             ctx.strokeStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
             ctx.lineWidth = 2;
             ctx.stroke();

             if (frame % 60 < 30) {
                ctx.beginPath();
                ctx.arc(col.x + col.w / 2, height - col.h - col.antenna, 1.5, 0, Math.PI*2);
                ctx.fillStyle = "rgba(239, 68, 68, 0.8)";
                ctx.fill();
             }
          }
          
          const winRows = Math.floor(col.h / 8); 
          const winPaddingX = 2;
          const winW = (col.w - (winPaddingX * 2)) / col.winCols;
          
          for (let r = 0; r < winRows; r++) {
            if (r >= col.windows.length) continue; 
            const yPos = height - (r * 8) - 6;

            for (let c = 0; c < col.winCols; c++) {
               if (col.windows[r][c]) {
                 if (Math.random() > 0.995) col.windows[r][c] = false; 

                 ctx.beginPath();
                 ctx.rect(col.x + winPaddingX + (c * winW) + 1, yPos, winW - 2, 4);
                 
                 // Pseudo-random but deterministic opacity based on row/col
                 const staticRand = (r * 13 + c * 7) % 10 / 10;
                 
                 // If deploying, city lights transition to green based on progress
                 if (isDeploying) {
                    ctx.fillStyle = `rgba(${sageRgb}, ${(staticRand * 0.2 + 0.3) * deployAnimProgress})`;
                    ctx.fill();
                    ctx.fillStyle = `rgba(${amberRgb}, ${(staticRand * 0.2 + 0.2) * (1 - deployAnimProgress)})`;
                    ctx.fill();
                 } else {
                    ctx.fillStyle = `rgba(${amberRgb}, ${staticRand * 0.2 + 0.2})`;
                    ctx.fill();
                 }
               } else {
                 if (Math.random() > 0.998) col.windows[r][c] = true;
               }
            }
          }
        }
      }

      // --- Draw Generator ---
      const genX = width / 2;
      const genY = height - 60;
      
      ctx.save();
      ctx.translate(genX, genY);
      const floatY = Math.sin(frame * 0.05) * 5;
      ctx.translate(0, floatY);
      const gScale = 1.2;
      ctx.scale(gScale, gScale);

      ctx.lineWidth = 1.5;
      
      // Interpolate generator border
      if (isDeploying) {
         ctx.strokeStyle = `rgba(${sageRgb}, ${deployAnimProgress})`;
         ctx.stroke(shieldGeneratorPath);
         
         ctx.strokeStyle = `rgba(239, 68, 68, ${0.8 * (1 - deployAnimProgress)})`;
         ctx.stroke(shieldGeneratorPath);
         
         ctx.shadowColor = sageHex;
         ctx.shadowBlur = 15 * deployAnimProgress;
      } else {
         ctx.strokeStyle = `rgba(239, 68, 68, 0.8)`; 
         ctx.shadowColor = "red";
         ctx.shadowBlur = 5;
         ctx.stroke(shieldGeneratorPath);
      }

      ctx.beginPath();
      ctx.arc(0, 15, 3, 0, Math.PI*2);
      ctx.fillStyle = isDeploying ? sageHex : "#ef4444";
      ctx.fill();
      ctx.restore();

      // --- Draw Shield Dome Animation ---
      if (isDeploying) {
         // Phase 1 (0 to 0.3): Beam shoots up
         const pPhase1 = Math.min(1, deployAnimProgress / 0.3);
         const beamEase = easeOutQuart(pPhase1);
         
         // Phase 2 (0.3 to 1.0): Dome spreads
         const pPhase2 = Math.max(0, deployAnimProgress - 0.3) / 0.7;
         const spreadEase = easeOutQuart(pPhase2);

         const apexY = domeCenterY - domeRadius;

         // Draw Beam
         if (pPhase1 > 0) {
             const currentBeamExt = genY - (genY - apexY) * beamEase;
             ctx.beginPath();
             ctx.moveTo(genX, genY + floatY);
             ctx.lineTo(genX, currentBeamExt);
             const beamGrad = ctx.createLinearGradient(0, genY, 0, apexY);
             // Beam pulses intensity
             const beamInt = Math.sin(frame * 0.5) * 0.2 + 0.8;
             beamGrad.addColorStop(0, `rgba(${sageRgb}, ${0.8 * beamInt})`);
             beamGrad.addColorStop(1, `rgba(${sageRgb}, 0.0)`);
             ctx.strokeStyle = beamGrad;
             ctx.lineWidth = 3 + (Math.sin(frame) * 1);
             ctx.stroke();
         }

         // Draw Dome Cast
         if (pPhase2 > 0) {
             const pulse = Math.sin(frame * 0.02) * 0.1 + 0.9;
             // Apex is at Math.PI * 1.5
             const apexAngle = Math.PI * 1.5;
             // Spread max is roughly 0.4 PI on either side
             const maxSpread = Math.PI * 0.4;
             const currentSpread = maxSpread * spreadEase;

             const startAngle = apexAngle - currentSpread;
             const endAngle = apexAngle + currentSpread;

             ctx.beginPath();
             ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle);
             ctx.lineWidth = 2;
             ctx.strokeStyle = `rgba(${sageRgb}, ${0.4 * pulse})`;
             ctx.stroke();

             ctx.beginPath();
             ctx.arc(domeCenterX, domeCenterY, domeRadius - 3, startAngle, endAngle);
             ctx.lineWidth = 1;
             ctx.strokeStyle = `rgba(${sageRgb}, ${0.2 * pulse})`;
             ctx.stroke();
             
             // Dynamic glow fill that only exists under the deployed arc
             // We use clip for a clean fill segment
             ctx.save();
             ctx.beginPath();
             ctx.moveTo(domeCenterX, domeCenterY);
             ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle);
             ctx.closePath();
             ctx.clip();

             const grad = ctx.createRadialGradient(domeCenterX, domeCenterY, domeRadius * 0.95, domeCenterX, domeCenterY, domeRadius);
             grad.addColorStop(0, `rgba(${sageRgb}, 0)`);
             grad.addColorStop(1, `rgba(${sageRgb}, ${0.08 * spreadEase})`);
             
             ctx.beginPath();
             ctx.arc(domeCenterX, domeCenterY, domeRadius, 0, Math.PI * 2);
             ctx.fillStyle = grad;
             ctx.fill();
             ctx.restore();
         }
      }

      // --- Draw Health Bar ---
      const healthPercent = maxTotalHealth > 0 ? (currentTotalHealth / maxTotalHealth) : 1;
      
      const currentIsMobile = width < 768;
      
      // On Mobile we hide the Health HUD entirely because there is zero safe screen margin between the Hamburger menu and full-width Hero cards.
      if (!currentIsMobile) {
         const uiOffsetTop = 20;
         
         ctx.font = "10px monospace";
         ctx.textAlign = "right";
         
         const statusText = isFullyStabilized ? "INFRASTRUCTURE FULLY SECURED" 
                            : isDeploying ? "DEPLOYING COUNTERMEASURES..." 
                            : "INFRASTRUCTURE INTEGRITY";

         ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, 0.8)` : "rgba(255, 255, 255, 0.5)";
         ctx.fillText(statusText, width - 20, uiOffsetTop);
         
         const barW = 150;
         const barH = 4;
         ctx.fillStyle = "rgba(255,255,255,0.1)";
         ctx.fillRect(width - 20 - barW, uiOffsetTop + 8, barW, barH);
         
         const r_c = healthPercent > 0.5 ? Math.floor(510 * (1 - healthPercent)) : 255;
         const g_c = healthPercent > 0.5 ? 255 : Math.floor(510 * healthPercent);
         ctx.fillStyle = isDeploying ? `rgb(${sageRgb})` : `rgb(${r_c}, ${g_c}, 50)`;
         ctx.fillRect(width - 20 - barW, uiOffsetTop + 8, barW * healthPercent, barH);
      }

      // --- 1. Spawner Logic (Rockets) ---
      if (frame % ROCKET_SPAWN_RATE === 0) {
        const rx = Math.random() * width;
        const ry = -10;
        
        const toCenterX = (width/2 - rx);
        const slant = (toCenterX / width) * 0.5; 
        const angle = (Math.PI / 2) + slant + (Math.random() - 0.5) * 0.2;
        const speed = Math.random() * 2 + 3; 
        
        rockets.push({ 
          x: rx, y: ry, 
          vx: Math.cos(angle) * speed, 
          vy: Math.sin(angle) * speed,
          history: []
        });
      }

      // --- 2. Rockets update & draw ---
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        
        r.history.push({ x: r.x, y: r.y });
        if (r.history.length > 5) r.history.shift();
        
        r.x += r.vx;
        r.y += r.vy;

        if (r.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(r.history[0].x, r.history[0].y);
          ctx.lineTo(r.x, r.y);
          ctx.strokeStyle = "rgba(239, 68, 68, 0.6)"; 
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        let hit = false;
        let surfaceNormal = 0; 
        let isShieldHit = false;

        // Check Shield Dome Impact
        // Only block rockets if dome has deployed far enough to cover them.
        // Or for gameplay simplicity, if deployAnimProgress > 0.3 (beam has hit apex), 
        // the dome starts blocking rockets if they hit the mathematical arc.
        if (deployAnimProgress > 0.3) {
           const dx = r.x - domeCenterX;
           const dy = r.y - domeCenterY;
           const dist = Math.sqrt(dx*dx + dy*dy);
           
           // Dome angle math to see if rocket hit the deployed fraction
           const angleHit = Math.atan2(dy, dx); 
           // Normalizing angle to compare with apex
           // Dome is drawn from PI to 2 PI. Apex is at 1.5 PI.
           let normalizedAngle = angleHit < 0 ? angleHit + Math.PI * 2 : angleHit;
           const apexAngle = Math.PI * 1.5;
           
           const spreadEase = easeOutQuart((deployAnimProgress - 0.3) / 0.7);
           const currentSpread = (Math.PI * 0.4) * spreadEase;

           if (dist <= domeRadius + 5 && dy < 0) {
              if (Math.abs(normalizedAngle - apexAngle) <= currentSpread) {
                 hit = true;
                 isShieldHit = true;
                 surfaceNormal = angleHit;
              }
           }
        } 
        
        // Check City Impact if no shield
        if (!hit) {
           const colIndex = Math.floor(r.x / COL_WIDTH);
           if (colIndex >= 0 && colIndex < colCount) {
             const col = cityColumns[colIndex];
             const actualHeight = col.antenna > 0 ? col.h + col.antenna : col.h;

             if (r.y >= height - actualHeight) {
                hit = true;
                surfaceNormal = -Math.PI / 2; // bouncing up
                
                col.h = Math.max(0, col.h - DAMAGE_PER_ROCKET);
                if (colIndex > 0) cityColumns[colIndex-1].h = Math.max(0, cityColumns[colIndex-1].h - DAMAGE_PER_ROCKET*0.2);
                if (colIndex < colCount-1) cityColumns[colIndex+1].h = Math.max(0, cityColumns[colIndex+1].h - DAMAGE_PER_ROCKET*0.2);
             }
           } else if (r.y >= height) {
             hit = true; 
             surfaceNormal = -Math.PI / 2;
           }
        }

        if (hit) {
          rockets.splice(i, 1);
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
        s.vy += 0.1; // gravity
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
