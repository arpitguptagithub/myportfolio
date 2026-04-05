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
    let isMobile = window.innerWidth < 768;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    let bgColumns = [];
    let cityColumns = [];
    let rockets = [];
    let sparks = [];
    let debris = [];
    let smoke = [];
    let ships = [];
    let shorelineElements = []; 
    let wakeParticles = [];     
    let splashParticles = [];
    
    let COL_WIDTH = isMobile ? 18 : 34; 
    let colCount = 0;
    let maxTotalHealth = 0;
    let currentTotalHealth = 0;
    
    let lakeBaseline = 0; 
    let cityBaseline = 0; 

    const sageHex = "#8b9a7b";
    const sageRgb = "139, 154, 123";
    const amberRgb = "212, 165, 116";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width < 768;
      COL_WIDTH = isMobile ? 18 : 34;
      
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      lakeBaseline = height * 0.91; 
      cityBaseline = lakeBaseline; 
      
      const newColCount = Math.floor(width / COL_WIDTH) + 1;
      
      if (newColCount !== colCount || cityColumns.length === 0) {
        colCount = newColCount;
        
        const bgColWidth = COL_WIDTH * 1.5;
        const bgCount = Math.floor(width / bgColWidth) + 2;
        
        bgColumns = new Array(bgCount).fill(0).map((_, i) => {
           const targetMaxH = cityBaseline * 0.6;
           const targetMinH = cityBaseline * 0.25;
           const noise = Math.random() * (targetMaxH - targetMinH);
           let h = targetMinH + noise;
           if (Math.random() > 0.85) h += cityBaseline * 0.1;
           h = Math.min(h, targetMaxH * 1.1); 

           return {
             x: (i * bgColWidth) - (Math.random() * 20),
             w: bgColWidth - 2,
             h: h,
             c: Math.floor(Math.random() * 5) + 8 
           };
        });

        cityColumns = new Array(colCount).fill(0).map((_, i) => {
          const baseHeight = cityBaseline * 0.15;
          const cluster1 = Math.abs(Math.sin(i * 0.3)) * cityBaseline * 0.15;
          const noise = Math.random() * cityBaseline * 0.1;
          const isTower = Math.random() > 0.85 ? cityBaseline * 0.2 : 0;
          const isStepped = Math.random() > 0.7; 
          const maxH = Math.min(cityBaseline * 0.7, baseHeight + cluster1 + noise + isTower);
          
          const colorVariant = Math.floor(Math.random() * 15);
          const winCols = Math.floor(COL_WIDTH / 7);
          const maxPossibleWinRows = Math.floor(cityBaseline / 8); 
          const windowMap = Array(maxPossibleWinRows).fill(0).map(() => 
            Array(winCols).fill(0).map(() => Math.random() > 0.4) 
          );

          return {
            x: i * COL_WIDTH,
            w: COL_WIDTH - (isMobile ? 2 : 5), 
            maxH: maxH,
            h: maxH,
            r: 25 + colorVariant,
            g: 27 + colorVariant,
            b: 30 + colorVariant,
            antenna: isTower > 0 && Math.random() > 0.4 ? Math.random() * 30 + 15 : 0,
            windows: windowMap,
            winCols: winCols,
            isStepped: isStepped
          };
        });
        
        shorelineElements = [];
        for (let x = -20; x < width + 20; x += Math.random() * 30 + 20) {
           shorelineElements.push({
               x, 
               type: 'rock',
               w: Math.random() * 25 + 15,
               h: Math.random() * 20 + 10,
               cRand: Math.random()
           });
           
           if (Math.random() > 0.8) {
              shorelineElements.push({
                 x: x + 10,
                 type: 'lamp',
                 h: Math.random() * 15 + 25 
              });
           }
        }

        maxTotalHealth = cityColumns.reduce((sum, col) => sum + col.maxH, 0);
        const healthPercent = maxTotalHealth === 0 ? 1 : currentTotalHealth / maxTotalHealth || 1;
        currentTotalHealth = maxTotalHealth * healthPercent;
        const damageRatio = currentTotalHealth / maxTotalHealth;
        cityColumns.forEach(col => col.h = col.maxH * damageRatio);

        ships = [
           { x: width * 0.2, y: lakeBaseline + (height - lakeBaseline) * 0.25, speed: 0.2, dir: 1, c: '#d4a574', scale: 0.9 }, // Amber themed
           { x: width * 0.8, y: lakeBaseline + (height - lakeBaseline) * 0.55, speed: 0.35, dir: -1, c: '#d4a574', scale: 1.1 }, 
           { x: width * 0.5, y: lakeBaseline + (height - lakeBaseline) * 0.85, speed: 0.45, dir: 1, c: '#d4a574', scale: 1.4 } 
        ];
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const shieldGeneratorPath = new Path2D("M0,0 L15,4 L15,15 C15,22 0,30 0,30 C0,30 -15,22 -15,15 L-15,4 Z");

    let domeRadius = 0;
    let domeCenterX = 0;
    let domeCenterY = 0;
    let deployAnimProgress = 0;
    let frame = 0;
    
    const ROCKET_SPAWN_RATE = isMobile ? 10 : 5; 
    const ROCKETS_PER_SEC = 60 / ROCKET_SPAWN_RATE;
    const TARGET_TIME_SECONDS = 1800; 
    const DAMAGE_PER_ROCKET = maxTotalHealth / (ROCKETS_PER_SEC * TARGET_TIME_SECONDS);

    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const drawBuilding = (col, isDeploying) => {
       const bH = col.h;
       if (bH <= 0) return;
       const yPos = cityBaseline - bH;

       ctx.fillStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
       ctx.beginPath();
       ctx.rect(col.x, yPos, col.w, bH);
       ctx.fill();

       const depth = isMobile ? 2 : 4;
       ctx.fillStyle = `rgb(${col.r - 8}, ${col.g - 8}, ${col.b - 8})`;
       ctx.beginPath();
       ctx.moveTo(col.x + col.w, cityBaseline);
       ctx.lineTo(col.x + col.w + depth, cityBaseline - depth);
       ctx.lineTo(col.x + col.w + depth, cityBaseline - bH - depth);
       ctx.lineTo(col.x + col.w, cityBaseline - bH);
       ctx.closePath();
       ctx.fill();

       if (col.isStepped && bH > 20) {
          const tW = col.w * 0.6;
          const tX = col.x + (col.w - tW)/2;
          const tH = Math.min(20, bH * 0.2);
          ctx.fillStyle = `rgb(${col.r+2}, ${col.g+2}, ${col.b+2})`;
          ctx.fillRect(tX, cityBaseline - bH - tH, tW, tH);
       }

       if (col.antenna > 0) {
          const actH = col.isStepped ? bH + Math.min(20, bH * 0.2) : bH;
          ctx.beginPath();
          ctx.moveTo(col.x + col.w / 2, cityBaseline - actH);
          ctx.lineTo(col.x + col.w / 2, cityBaseline - actH - col.antenna);
          ctx.strokeStyle = `rgb(${col.r}, ${col.g}, ${col.b})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          if (frame % 60 < 30) {
             ctx.beginPath();
             ctx.arc(col.x + col.w / 2, cityBaseline - actH - col.antenna, 1.5, 0, Math.PI*2);
             ctx.fillStyle = "rgba(239, 68, 68, 0.8)";
             ctx.fill();
          }
       }

       const winRows = Math.floor((col.isStepped ? bH*0.8 : bH) / 8); 
       const winPaddingX = Math.floor(col.w * 0.15);
       const winW = (col.w - (winPaddingX * 2)) / col.winCols;
       
       for (let r = 0; r < winRows; r++) {
         if (r >= col.windows.length) continue; 
         const currentWY = cityBaseline - (r * 8) - 6;

         for (let c = 0; c < col.winCols; c++) {
            if (col.windows[r][c]) {
              if (Math.random() > 0.995) col.windows[r][c] = false; 

              ctx.beginPath();
              ctx.rect(col.x + winPaddingX + (c * winW) + 1, currentWY, Math.max(1, winW - 2), 4);
              const staticRand = (r * 13 + c * 7) % 10 / 10;
              
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
    };

    const drawGeometricBeach = (isDeploying) => {
      ctx.fillStyle = "#0a0b0f";
      ctx.fillRect(0, lakeBaseline - 5, width, 6);

      const lamps = shorelineElements.filter(e => e.type === 'lamp');

      for(let e of shorelineElements) {
         if (e.type === 'rock') {
            const rY = lakeBaseline + 2; 
            
            ctx.fillStyle = `#07080a`;
            ctx.beginPath();
            ctx.moveTo(e.x - e.w/2, rY);
            ctx.lineTo(e.x - e.w*0.3, rY - e.h*0.8);
            ctx.lineTo(e.x, rY - e.h);
            ctx.lineTo(e.x + e.w*0.4, rY - e.h*0.6);
            ctx.lineTo(e.x + e.w/2, rY);
            ctx.fill();

            let lampLightFrac = 0.05; 
            lamps.forEach(l => {
                const dist = Math.abs(e.x - l.x);
                if (dist < 40) lampLightFrac += Math.pow((1 - dist/40), 1.5); 
            });
            lampLightFrac = Math.min(1.0, lampLightFrac);

            const baseHighlightColor = isDeploying ? sageRgb : amberRgb;

            if (lampLightFrac > 0.1) {
               ctx.fillStyle = `rgba(${baseHighlightColor}, ${lampLightFrac * 0.35})`;
               ctx.beginPath();
               ctx.moveTo(e.x - e.w*0.3, rY - e.h*0.8);
               ctx.lineTo(e.x, rY - e.h);
               ctx.lineTo(e.x + e.w*0.4, rY - e.h*0.6);
               ctx.lineTo(e.x, rY);
               ctx.fill();
            }

            ctx.strokeStyle = `rgba(${baseHighlightColor}, ${0.15 + lampLightFrac * 0.8})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(e.x - e.w/2, rY);
            ctx.lineTo(e.x - e.w*0.3, rY - e.h*0.8);
            ctx.lineTo(e.x, rY - e.h);
            ctx.lineTo(e.x + e.w*0.4, rY - e.h*0.6);
            ctx.lineTo(e.x + e.w/2, rY);
            ctx.stroke();
         } else if (e.type === 'lamp') {
            const lY = lakeBaseline; 
            
            ctx.fillStyle = "#111318";
            ctx.fillRect(e.x - 1, lY - e.h, 2, e.h);
            ctx.fillStyle = "#2a2d36";
            ctx.fillRect(e.x, lY - e.h, 1, e.h);
            
            ctx.fillStyle = "#1f2229";
            ctx.beginPath();
            ctx.moveTo(e.x - 1, lY - e.h);
            ctx.lineTo(e.x + 8, lY - e.h - 4);
            ctx.lineTo(e.x + 8, lY - e.h - 1);
            ctx.lineTo(e.x + 1, lY - e.h + 2);
            ctx.fill();

            ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, 1.0)` : `rgba(255, 220, 150, 1.0)`;
            ctx.shadowColor = isDeploying ? `rgb(${sageRgb})` : `rgb(${amberRgb})`;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(e.x + 6, lY - e.h - 1, 2.0, 0, Math.PI*2);
            ctx.fill();
            ctx.shadowBlur = 0;

            const beamGrad = ctx.createLinearGradient(e.x + 6, lY - e.h, e.x + 15, lakeBaseline);
            beamGrad.addColorStop(0, isDeploying ? `rgba(${sageRgb}, 0.45)` : `rgba(255, 180, 80, 0.45)`);
            beamGrad.addColorStop(1, "transparent");
            ctx.fillStyle = beamGrad;
            ctx.beginPath();
            ctx.moveTo(e.x + 6, lY - e.h);
            ctx.lineTo(e.x + 40, lakeBaseline + 2);
            ctx.lineTo(e.x - 10, lakeBaseline + 2);
            ctx.fill();
         }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      domeRadius = Math.max(width, height) * 1.5; 
      domeCenterX = width / 2;
      domeCenterY = height + domeRadius - (height * 0.85);

      const currentState = shieldStateRef.current;
      if (currentState === "deploying" || currentState === "stabilized") {
         if (deployAnimProgress < 1) {
            deployAnimProgress += 0.004; 
            if (deployAnimProgress >= 1) deployAnimProgress = 1;
         }
      }
      const isDeploying = deployAnimProgress > 0;
      const isFullyStabilized = deployAnimProgress >= 1;

      for (let i = 0; i < bgColumns.length; i++) {
         const bg = bgColumns[i];
         ctx.fillStyle = `rgb(${bg.c}, ${bg.c}, ${bg.c+2})`;
         ctx.fillRect(bg.x, cityBaseline - bg.h, bg.w, bg.h);
      }

      currentTotalHealth = 0;
      for (let i = 0; i < colCount; i++) {
        const col = cityColumns[i];
        if (col.h > 0) {
           currentTotalHealth += col.h;
           
           const damageRatio = col.h / col.maxH;
           if (damageRatio < 0.7 && damageRatio > 0) {
              if (Math.random() > (0.9 + (damageRatio * 0.08))) {
                 smoke.push({
                    x: col.x + Math.random() * col.w,
                    y: cityBaseline - col.h,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: -Math.random() * 1.5 - 0.5,
                    size: Math.random() * 4 + 2,
                    life: 1.0,
                    decay: Math.random() * 0.01 + 0.005,
                    isFire: damageRatio < 0.3 && Math.random() > 0.5
                 });
              }
           }
        }
      }

      const lakeGrad = ctx.createLinearGradient(0, lakeBaseline, 0, height);
      lakeGrad.addColorStop(0, "rgba(8, 10, 15, 0.95)");
      lakeGrad.addColorStop(1, "rgba(2, 3, 5, 0.98)");
      ctx.fillStyle = lakeGrad;
      ctx.fillRect(0, lakeBaseline, width, height - lakeBaseline);

      const numRipples = Math.floor((height - lakeBaseline) / 4);
      for (let r = 0; r < Math.min(30, numRipples); r++) {
         const frac = r / Math.min(30, numRipples);
         const yNode = lakeBaseline + Math.pow(frac, 1.5) * (height - lakeBaseline);
         
         const speedShift = (frame * (0.2 + frac * 0.3)) % width;
         const phase = Math.sin(frame * 0.02 + r) * 0.5 + 0.5; 
         
         ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, ${0.04 * phase * frac})` : `rgba(212, 165, 116, ${0.04 * phase * frac})`;
         ctx.fillRect(speedShift, yNode, width * 0.2, Math.max(1, frac * 3));
         ctx.fillRect(speedShift - width, yNode, width * 0.2, Math.max(1, frac * 3));
      }

      ctx.save();
      ctx.translate(0, lakeBaseline);
      ctx.scale(1, -1);
      ctx.translate(0, -lakeBaseline);
      ctx.globalAlpha = 0.2; 
      
      for (let i = 0; i < bgColumns.length; i++) {
         const bg = bgColumns[i];
         ctx.fillStyle = `rgb(${bg.c}, ${bg.c}, ${bg.c+2})`;
         ctx.fillRect(bg.x, cityBaseline - bg.h, bg.w, bg.h);
      }
      for (let i = 0; i < colCount; i++) {
         drawBuilding(cityColumns[i], isDeploying);
      }
      drawGeometricBeach(isDeploying); 
      
      const genX = width / 2;
      const genY = cityBaseline - 45;
      const floatY = Math.sin(frame * 0.05) * 5;
      const gScale = 1.2;
      
      ctx.save();
      ctx.translate(genX, genY + floatY);
      ctx.scale(gScale, gScale);
      ctx.lineWidth = 1.5;
      if (isDeploying) {
         ctx.strokeStyle = `rgba(${sageRgb}, ${deployAnimProgress})`;
         ctx.stroke(shieldGeneratorPath);
      } else {
         ctx.strokeStyle = `rgba(239, 68, 68, 0.8)`; 
         ctx.stroke(shieldGeneratorPath);
      }
      ctx.restore();

      if (isDeploying) {
         const pPhase1 = Math.min(1, deployAnimProgress / 0.3);
         const beamEase = easeOutQuart(pPhase1);
         const pPhase2 = Math.max(0, deployAnimProgress - 0.3) / 0.7;
         const spreadEase = easeOutQuart(pPhase2);
         const apexY = domeCenterY - domeRadius;

         if (pPhase1 > 0) {
             const currentBeamExt = genY - (genY - apexY) * beamEase;
             ctx.beginPath(); ctx.moveTo(genX, genY + floatY); ctx.lineTo(genX, currentBeamExt);
             const beamGrad = ctx.createLinearGradient(0, genY, 0, apexY);
             const beamInt = Math.sin(frame * 0.5) * 0.2 + 0.8;
             beamGrad.addColorStop(0, `rgba(${sageRgb}, ${0.8 * beamInt})`); beamGrad.addColorStop(1, `rgba(${sageRgb}, 0.0)`);
             ctx.strokeStyle = beamGrad; ctx.lineWidth = 3 + (Math.sin(frame) * 1); ctx.stroke();
         }
         if (pPhase2 > 0) {
             const pulse = Math.sin(frame * 0.02) * 0.1 + 0.9;
             const apexAngle = Math.PI * 1.5;
             const currentSpread = (Math.PI * 0.45) * spreadEase;
             const startAngle = apexAngle - currentSpread; const endAngle = apexAngle + currentSpread;

             ctx.beginPath(); ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle);
             ctx.lineWidth = 2; ctx.strokeStyle = `rgba(${sageRgb}, ${0.4 * pulse})`; ctx.stroke();
             ctx.save(); ctx.beginPath(); ctx.moveTo(domeCenterX, domeCenterY); ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle); ctx.closePath(); ctx.clip();
             const grad = ctx.createRadialGradient(domeCenterX, domeCenterY, domeRadius * 0.95, domeCenterX, domeCenterY, domeRadius);
             grad.addColorStop(0, `rgba(${sageRgb}, 0)`); grad.addColorStop(1, `rgba(${sageRgb}, ${0.1 * spreadEase})`);
             ctx.beginPath(); ctx.arc(domeCenterX, domeCenterY, domeRadius, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
             ctx.restore();
         }
      }
      ctx.restore(); 

      for (let i = 0; i < colCount; i++) {
         drawBuilding(cityColumns[i], isDeploying);
      }
      drawGeometricBeach(isDeploying);

      // --- Physically Accurate Continuous Wave & Splash System ---
      const tidePhase = Math.sin(frame * 0.02); 
      const tideHeight = tidePhase * 4; 

      if (tidePhase > 0.9 && frame % 12 === 0) {
         for (let i = 0; i < 3; i++) { 
            const rock = shorelineElements[Math.floor(Math.random() * shorelineElements.length)];
            if (rock && rock.type === 'rock') {
               for (let s = 0; s < Math.floor(Math.random() * 3 + 1); s++) {
                  splashParticles.push({
                     x: rock.x + (Math.random() - 0.5) * rock.w * 0.8,
                     y: lakeBaseline - tideHeight,
                     vx: (Math.random() - 0.5) * 0.6, 
                     vy: -Math.random() * 0.8 - 0.4, 
                     life: 1.0,
                     size: Math.random() * 1.5 + 0.5,
                     isStreak: true
                  });
               }
            }
         }
      }

      for (let i = splashParticles.length - 1; i >= 0; i--) {
          const p = splashParticles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.05; 
          p.life -= 0.04;
          
          if (p.life <= 0 || p.y > lakeBaseline + 2) {
              splashParticles.splice(i, 1);
              continue;
          }

          if (p.isStreak) {
             ctx.strokeStyle = isDeploying ? `rgba(${sageRgb}, ${p.life * 0.6})` : `rgba(255, 210, 140, ${p.life * 0.6})`; 
             ctx.lineWidth = p.size;
             ctx.lineCap = "round";
             ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 1.5, p.y - p.vy * 1.5); ctx.stroke();
          } else {
             ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, ${p.life * 0.4})` : `rgba(212, 165, 116, ${p.life * 0.4})`; 
             ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
          }
      }

      const baseWaveY = lakeBaseline + 2;
      ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, 0.12)` : `rgba(212, 165, 116, 0.12)`; 
      ctx.beginPath();
      ctx.moveTo(0, baseWaveY + 5);
      for (let w = 0; w <= width + 20; w += 20) {
          const lateralRipple = Math.sin(w * 0.04 + frame * 0.03) * 3; 
          ctx.lineTo(w, baseWaveY - tideHeight - lateralRipple);
      }
      ctx.lineTo(width, baseWaveY + 5);
      ctx.lineTo(0, baseWaveY + 5);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = isDeploying ? `rgba(${sageRgb}, ${0.15 + (tidePhase+1)*0.15})` : `rgba(255, 210, 140, ${0.15 + (tidePhase+1)*0.15})`; 
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, baseWaveY - tideHeight);
      for (let w = 0; w <= width + 20; w += 20) {
          const lateralRipple = Math.sin(w * 0.04 + frame * 0.03) * 3; 
          ctx.lineTo(w, baseWaveY - tideHeight - lateralRipple);
      }
      ctx.stroke();
      
      // --- End Shoreline Splash ---

      for (let i = smoke.length - 1; i >= 0; i--) {
        const s = smoke[i];
        s.x += s.vx;
        s.y += s.vy;
        s.size += 0.05; 
        s.life -= s.decay;
        if (s.life <= 0) { smoke.splice(i, 1); continue; }

        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.isFire ? `rgba(255, ${100 + Math.random() * 100}, 0, ${s.life * 0.8})` : `rgba(30, 30, 30, ${s.life * 0.5})`;
        ctx.fill();
        
        if (s.isFire && s.y > cityBaseline - 50) {
           const dist = lakeBaseline - s.y;
           ctx.beginPath(); ctx.arc(s.x, lakeBaseline + dist, s.size, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, ${s.life * 0.1})`;
           ctx.fill();
        }
      }

      ctx.save();
      ctx.translate(genX, genY);
      ctx.translate(0, floatY);
      ctx.scale(gScale, gScale);
      ctx.lineWidth = 1.5;
      
      if (isDeploying) {
         ctx.strokeStyle = `rgba(${sageRgb}, ${deployAnimProgress})`; ctx.stroke(shieldGeneratorPath);
         ctx.strokeStyle = `rgba(239, 68, 68, ${0.8 * (1 - deployAnimProgress)})`; ctx.stroke(shieldGeneratorPath);
         ctx.shadowColor = sageHex; ctx.shadowBlur = 15 * deployAnimProgress;
      } else {
         ctx.strokeStyle = `rgba(239, 68, 68, 0.8)`; ctx.shadowColor = "red"; ctx.shadowBlur = 5; ctx.stroke(shieldGeneratorPath);
      }
      ctx.beginPath(); ctx.arc(0, 15, 3, 0, Math.PI*2); ctx.fillStyle = isDeploying ? sageHex : "#ef4444"; ctx.fill();
      ctx.restore();

      if (isDeploying) {
         const pPhase1 = Math.min(1, deployAnimProgress / 0.3);
         const beamEase = easeOutQuart(pPhase1);
         const pPhase2 = Math.max(0, deployAnimProgress - 0.3) / 0.7;
         const spreadEase = easeOutQuart(pPhase2);
         const apexY = domeCenterY - domeRadius;

         if (pPhase1 > 0) {
             const currentBeamExt = genY - (genY - apexY) * beamEase;
             ctx.beginPath(); ctx.moveTo(genX, genY + floatY); ctx.lineTo(genX, currentBeamExt);
             const beamGrad = ctx.createLinearGradient(0, genY, 0, apexY);
             const beamInt = Math.sin(frame * 0.5) * 0.2 + 0.8;
             beamGrad.addColorStop(0, `rgba(${sageRgb}, ${0.8 * beamInt})`); beamGrad.addColorStop(1, `rgba(${sageRgb}, 0.0)`);
             ctx.strokeStyle = beamGrad; ctx.lineWidth = 3 + (Math.sin(frame) * 1); ctx.stroke();
         }
         if (pPhase2 > 0) {
             const pulse = Math.sin(frame * 0.02) * 0.1 + 0.9;
             const apexAngle = Math.PI * 1.5;
             const currentSpread = (Math.PI * 0.45) * spreadEase;
             const startAngle = apexAngle - currentSpread; const endAngle = apexAngle + currentSpread;

             ctx.beginPath(); ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle);
             ctx.lineWidth = 2; ctx.strokeStyle = `rgba(${sageRgb}, ${0.4 * pulse})`; ctx.stroke();
             ctx.save(); ctx.beginPath(); ctx.moveTo(domeCenterX, domeCenterY); ctx.arc(domeCenterX, domeCenterY, domeRadius, startAngle, endAngle); ctx.closePath(); ctx.clip();
             const grad = ctx.createRadialGradient(domeCenterX, domeCenterY, domeRadius * 0.95, domeCenterX, domeCenterY, domeRadius);
             grad.addColorStop(0, `rgba(${sageRgb}, 0)`); grad.addColorStop(1, `rgba(${sageRgb}, ${0.1 * spreadEase})`);
             ctx.beginPath(); ctx.arc(domeCenterX, domeCenterY, domeRadius, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
             ctx.restore();
         }
      }

      const currentIsMobile = width < 768;
      if (!currentIsMobile) {
         const healthPercent = maxTotalHealth > 0 ? (currentTotalHealth / maxTotalHealth) : 1;
         const uiOffsetTop = 20;
         ctx.font = "10px monospace"; ctx.textAlign = "right";
         const statusText = isFullyStabilized ? "INFRASTRUCTURE FULLY SECURED" : isDeploying ? "DEPLOYING COUNTERMEASURES..." : "INFRASTRUCTURE INTEGRITY";
         ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, 0.8)` : "rgba(255, 255, 255, 0.5)"; ctx.fillText(statusText, width - 20, uiOffsetTop);
         const barW = 150; const barH = 4;
         ctx.fillStyle = "rgba(255,255,255,0.1)"; ctx.fillRect(width - 20 - barW, uiOffsetTop + 8, barW, barH);
         const r_c = healthPercent > 0.5 ? Math.floor(510 * (1 - healthPercent)) : 255;
         const g_c = healthPercent > 0.5 ? 255 : Math.floor(510 * healthPercent);
         ctx.fillStyle = isDeploying ? `rgb(${sageRgb})` : `rgb(${r_c}, ${g_c}, 50)`; ctx.fillRect(width - 20 - barW, uiOffsetTop + 8, barW * healthPercent, barH);
      }

      if (frame % ROCKET_SPAWN_RATE === 0) {
        const rx = Math.random() * width; const ry = -10; const toCenterX = (width/2 - rx);
        const slant = (toCenterX / width) * 0.5; const angle = (Math.PI / 2) + slant + (Math.random() - 0.5) * 0.2;
        const speed = Math.random() * 2 + 3; rockets.push({ x: rx, y: ry, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, history: [] });
      }

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.history.push({ x: r.x, y: r.y }); if (r.history.length > 5) r.history.shift();
        r.x += r.vx; r.y += r.vy;

        if (r.history.length > 1) {
          ctx.beginPath(); ctx.moveTo(r.history[0].x, r.history[0].y); ctx.lineTo(r.x, r.y);
          ctx.strokeStyle = "rgba(239, 68, 68, 0.6)"; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(r.x, r.y, 1.5, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();

        let hit = false; let surfaceNormal = 0; let isShieldHit = false;

        if (deployAnimProgress > 0.3) {
           const dx = r.x - domeCenterX; const dy = r.y - domeCenterY; const dist = Math.sqrt(dx*dx + dy*dy);
           const angleHit = Math.atan2(dy, dx); let normalizedAngle = angleHit < 0 ? angleHit + Math.PI * 2 : angleHit;
           const apexAngle = Math.PI * 1.5; const spreadEase = easeOutQuart((deployAnimProgress - 0.3) / 0.7); const currentSpread = (Math.PI * 0.45) * spreadEase;

           if (dist <= domeRadius + 5 && dy < 0 && Math.abs(normalizedAngle - apexAngle) <= currentSpread) { hit = true; isShieldHit = true; surfaceNormal = angleHit; }
        } 
        
        if (!hit) {
           const colIndex = Math.floor(r.x / COL_WIDTH);
           if (colIndex >= 0 && colIndex < colCount) {
             const col = cityColumns[colIndex]; let actualHeight = col.h;
             if (col.isStepped && actualHeight > 20) actualHeight += Math.min(20, actualHeight*0.2);
             if (col.antenna > 0) actualHeight += col.antenna;

             if (r.y >= cityBaseline - actualHeight) {
                hit = true; surfaceNormal = -Math.PI / 2; 
                if (col.h > 0) {
                   col.h = Math.max(0, col.h - DAMAGE_PER_ROCKET);
                   if (colIndex > 0) cityColumns[colIndex-1].h = Math.max(0, cityColumns[colIndex-1].h - DAMAGE_PER_ROCKET*0.2);
                   if (colIndex < colCount-1) cityColumns[colIndex+1].h = Math.max(0, cityColumns[colIndex+1].h - DAMAGE_PER_ROCKET*0.2);
                }
             }
           } else if (r.y >= lakeBaseline) { hit = true; surfaceNormal = -Math.PI / 2; }
        }

        if (hit) {
          rockets.splice(i, 1);
          const sparkCount = isMobile ? 3 : 5;
          for (let s = 0; s < sparkCount; s++) {
            const bounceAngle = surfaceNormal + (Math.random() - 0.5) * Math.PI * 0.8; const bSpeed = Math.random() * 4 + 1;
            sparks.push({ x: r.x, y: r.y, vx: Math.cos(bounceAngle) * bSpeed, vy: Math.sin(bounceAngle) * bSpeed, life: 1.0, decay: Math.random() * 0.05 + 0.02, isShield: isShieldHit });
          }
           if (!isShieldHit && r.y <= cityBaseline) {
             const debCount = isMobile ? 1 : 2;
             for (let d = 0; d < debCount; d++) { debris.push({ x: r.x, y: r.y, vx: (Math.random() - 0.5) * 3, vy: -Math.random() * 3 - 2, size: Math.random() * 3 + 2, rot: Math.random() * Math.PI, vRot: (Math.random() - 0.5) * 0.2, life: 1.0, decay: 0.015 }); }
          }
          if (Math.random() > 0.8 && !isMobile) {
             ctx.beginPath(); ctx.arc(r.x, r.y, 20, 0, Math.PI*2); ctx.fillStyle = isShieldHit ? `rgba(${sageRgb}, 0.15)` : "rgba(239, 68, 68, 0.15)"; ctx.fill();
          }
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]; s.x += s.vx; s.y += s.vy; s.vy += 0.1; s.life -= s.decay;
        if (s.y >= cityBaseline && s.y < lakeBaseline && s.vy > 0) { s.vy *= -0.5; s.y = cityBaseline;
        } else if (s.y > lakeBaseline && s.vy > 0) { s.life -= 0.1; }
        if (s.life <= 0) { sparks.splice(i, 1); continue; }

        ctx.beginPath(); ctx.arc(s.x, s.y, 1, 0, Math.PI * 2); ctx.fillStyle = s.isShield ? `rgba(${sageRgb}, ${s.life})` : `rgba(250, ${100 + Math.random()*100}, 50, ${s.life})`; ctx.fill();
        if (s.y < lakeBaseline) {
           const dist = lakeBaseline - s.y; ctx.beginPath(); ctx.arc(s.x, lakeBaseline + dist, 1, 0, Math.PI * 2);
           ctx.fillStyle = s.isShield ? `rgba(${sageRgb}, ${s.life * 0.2})` : `rgba(250, 150, 50, ${s.life * 0.2})`; ctx.fill();
        }
      }

      for (let i = debris.length - 1; i >= 0; i--) {
        const d = debris[i]; d.x += d.vx; d.y += d.vy; d.vy += 0.15; d.rot += d.vRot; d.life -= d.decay;
        if (d.y >= lakeBaseline) { d.vy *= 0.8; d.vRot *= 0.8;
           if (d.vy > 0.5) { ctx.beginPath(); ctx.arc(d.x, lakeBaseline, d.vy * 2, 0, Math.PI * 2); ctx.strokeStyle = `rgba(255, 255, 255, ${d.life * 0.2})`; ctx.stroke(); }
        }
        if (d.life <= 0) { debris.splice(i, 1); continue; }

        ctx.save(); ctx.translate(d.x, d.y); ctx.rotate(d.rot); ctx.fillStyle = `rgba(30, 32, 35, ${d.life})`; ctx.fillRect(-d.size/2, -d.size/2, d.size, d.size); ctx.restore();
        if (d.y < lakeBaseline) {
           ctx.save(); const dist = lakeBaseline - d.y; ctx.translate(d.x, lakeBaseline + dist); ctx.rotate(-d.rot);
           ctx.fillStyle = `rgba(30, 32, 35, ${d.life * 0.15})`; ctx.fillRect(-d.size/2, -d.size/2, d.size, d.size); ctx.restore();
        }
      }
      
      for (let i = wakeParticles.length - 1; i >= 0; i--) {
         const p = wakeParticles[i];
         p.x += p.vx; p.y += p.vy;
         p.life -= 0.02; p.size += 0.15; 
         if (p.life <= 0) { wakeParticles.splice(i, 1); continue; }
         ctx.fillStyle = isDeploying ? `rgba(${sageRgb}, ${p.life * 0.2})` : `rgba(212, 165, 116, ${p.life * 0.2})`; 
         ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      }

      for (let i = 0; i < ships.length; i++) {
         const ship = ships[i];
         ship.x += ship.speed * ship.dir;
         if (ship.x > width + 100) ship.x = -100;
         else if (ship.x < -100) ship.x = width + 100;

         if (frame % 3 === 0) {
            wakeParticles.push({
               x: ship.x, y: ship.y + 4,
               vx: (-ship.dir * ship.speed * 0.5) + (Math.random()-0.5)*0.3,
               vy: Math.random() * 0.6,
               life: 1.0, size: Math.random() * 1.5 + 1
            });
            wakeParticles.push({
               x: ship.x, y: ship.y + 4,
               vx: (-ship.dir * ship.speed * 0.5) + (Math.random()-0.5)*0.3,
               vy: -Math.random() * 0.6,
               life: 1.0, size: Math.random() * 1.5 + 1
            });
         }

         ctx.save();
         const bobbing = Math.sin(frame * 0.05 + i) * 2;
         ctx.translate(ship.x, ship.y + bobbing);
         ctx.scale(ship.scale * ship.dir, ship.scale);

         // Stealthy charcoal luxury yacht hull aligned with global theme
         ctx.fillStyle = "#16181d"; 
         ctx.beginPath();
         ctx.moveTo(30, -2);   
         ctx.lineTo(20, -5);   
         ctx.lineTo(-25, -5);  
         ctx.lineTo(-28, 0);   
         ctx.lineTo(-20, 6);   
         ctx.lineTo(15, 6);    
         ctx.bezierCurveTo(25, 6, 28, 0, 30, -2);
         ctx.closePath();
         ctx.fill();
         
         ctx.fillStyle = "#0c0e12";
         ctx.fillRect(-22, 4, 38, 2);

         ctx.fillStyle = "#22262d";
         ctx.beginPath(); 
         ctx.moveTo(15, -5); 
         ctx.lineTo(5, -12); 
         ctx.lineTo(-18, -12); 
         ctx.lineTo(-25, -5); 
         ctx.closePath(); 
         ctx.fill();

         const windowColor = isDeploying ? sageRgb : amberRgb;
         ctx.fillStyle = `rgba(${windowColor}, 0.85)`; 
         ctx.shadowColor = `rgb(${windowColor})`; 
         ctx.shadowBlur = 8;
         ctx.beginPath();
         ctx.moveTo(12, -6);
         ctx.lineTo(4, -10);
         ctx.lineTo(-15, -10);
         ctx.lineTo(-15, -6);
         ctx.closePath();
         ctx.fill();
         ctx.shadowBlur = 0; 

         ctx.strokeStyle = "#4b5563";
         ctx.lineWidth = 1;
         ctx.beginPath(); ctx.moveTo(-5, -12); ctx.lineTo(-10, -20); ctx.stroke();
         
         ctx.fillStyle = isDeploying ? sageHex : ship.c; 
         ctx.shadowColor = isDeploying ? sageHex : ship.c;
         ctx.shadowBlur = 5;
         if (frame % 60 < 30) { 
             ctx.beginPath(); ctx.arc(-10, -20, 1.5, 0, Math.PI*2); ctx.fill(); 
             ctx.beginPath(); ctx.arc(28, -2, 1.5, 0, Math.PI*2); ctx.fill(); 
         }
         ctx.shadowBlur = 0;

         ctx.restore();
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
