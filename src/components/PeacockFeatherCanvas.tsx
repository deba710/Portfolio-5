import React, { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  speedY: number;
  size: number;
  scale: number;
  opacity: number;
  baseOpacity: number;
  rotation: number;
  rotSpeed: number;
  rotAmp: number;
  rotPhase: number;
  swayFreq: number;
  swayAmp: number;
  swayPhase: number;
  curve: number;
  paletteIndex: number;
  hasEye: boolean;
  eyeGlow: number;
  depth: 'back' | 'mid' | 'fore';
}

interface StardustSpark {
  x: number;
  y: number;
  size: number;
  speedY: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface PeacockFeatherCanvasProps {
  isRevealed?: boolean;
}

export const PeacockFeatherCanvas: React.FC<PeacockFeatherCanvasProps> = ({
  isRevealed = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollYRef = useRef<number>(0);
  const revealAlphaRef = useRef<number>(isRevealed ? 1 : 0.08);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isRunning = true;

    // Motion sensitivity check
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pre-cache offscreen sprites for the 5 feather color variations with and without eyes
    // This provides 60-120 FPS hardware-accelerated canvas rendering with zero per-frame gradient allocation!
    const spriteWidth = 140;
    const spriteHeight = 160;
    const spriteCenterX = spriteWidth / 2;
    const spriteCenterY = spriteHeight / 2;

    const colorPalettes = [
      // Emerald
      {
        stops: [
          [0, 'rgba(5, 150, 105, 0.2)'],
          [0.3, 'rgba(16, 185, 129, 0.85)'],
          [0.7, 'rgba(6, 182, 212, 0.7)'],
          [1, 'rgba(245, 158, 11, 0.6)'],
        ],
      },
      // Teal
      {
        stops: [
          [0, 'rgba(13, 148, 136, 0.2)'],
          [0.35, 'rgba(20, 184, 166, 0.85)'],
          [0.75, 'rgba(2, 132, 199, 0.7)'],
          [1, 'rgba(251, 191, 36, 0.55)'],
        ],
      },
      // Turquoise
      {
        stops: [
          [0, 'rgba(8, 145, 178, 0.2)'],
          [0.35, 'rgba(34, 211, 238, 0.8)'],
          [0.7, 'rgba(16, 185, 129, 0.75)'],
          [1, 'rgba(253, 224, 71, 0.65)'],
        ],
      },
      // Sapphire
      {
        stops: [
          [0, 'rgba(30, 58, 138, 0.2)'],
          [0.35, 'rgba(37, 99, 235, 0.8)'],
          [0.7, 'rgba(6, 182, 212, 0.8)'],
          [1, 'rgba(139, 92, 246, 0.6)'],
        ],
      },
      // Violet-Gold
      {
        stops: [
          [0, 'rgba(109, 40, 217, 0.25)'],
          [0.35, 'rgba(124, 58, 237, 0.8)'],
          [0.7, 'rgba(6, 182, 212, 0.75)'],
          [1, 'rgba(245, 158, 11, 0.8)'],
        ],
      },
    ];

    // Create feather sprites
    interface FeatherSprite {
      canvas: HTMLCanvasElement;
    }

    const sprites: FeatherSprite[][] = []; // [paletteIndex][hasEye ? 1 : 0]

    for (let pIdx = 0; pIdx < colorPalettes.length; pIdx++) {
      sprites[pIdx] = [];
      for (let eyeIdx = 0; eyeIdx < 2; eyeIdx++) {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = spriteWidth;
        offCanvas.height = spriteHeight;
        const offCtx = offCanvas.getContext('2d');
        if (offCtx) {
          const hasEye = eyeIdx === 1;
          const length = 52;
          const widthMax = 18;
          const curveOffset = 3;

          offCtx.save();
          offCtx.translate(spriteCenterX, spriteCenterY);

          // 1. Central Golden Quill Shaft (Rachis)
          offCtx.beginPath();
          offCtx.moveTo(0, length * 0.5);
          offCtx.quadraticCurveTo(curveOffset * 0.5, 0, curveOffset, -length * 0.5);
          offCtx.strokeStyle = 'rgba(251, 191, 36, 0.9)';
          offCtx.lineWidth = 1.3;
          offCtx.stroke();

          // 2. Translucent Feather Vane Gradient Body
          const bodyGradient = offCtx.createLinearGradient(
            -widthMax,
            length * 0.35,
            widthMax + curveOffset,
            -length * 0.45
          );
          const pData = colorPalettes[pIdx];
          for (let stop of pData.stops) {
            bodyGradient.addColorStop(stop[0] as number, stop[1] as string);
          }

          // Feather Silhouette
          offCtx.beginPath();
          offCtx.moveTo(0, length * 0.48);
          offCtx.bezierCurveTo(
            -widthMax * 0.95 + curveOffset * 0.4,
            length * 0.18,
            -widthMax * 1.1 + curveOffset * 0.8,
            -length * 0.28,
            curveOffset,
            -length * 0.5
          );
          offCtx.bezierCurveTo(
            widthMax * 1.1 + curveOffset * 0.8,
            -length * 0.28,
            widthMax * 0.95 + curveOffset * 0.4,
            length * 0.18,
            0,
            length * 0.48
          );
          offCtx.closePath();

          offCtx.fillStyle = bodyGradient;
          offCtx.fill();

          // Barb ridges
          offCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          offCtx.lineWidth = 0.65;
          for (let bi = -3; bi <= 3; bi++) {
            const by = bi * 6.5;
            const bxSpan = (1 - Math.abs(bi) * 0.18) * (widthMax * 0.8);
            offCtx.beginPath();
            offCtx.moveTo(-bxSpan + curveOffset * 0.5, by);
            offCtx.lineTo(0, by + 2.5);
            offCtx.lineTo(bxSpan + curveOffset * 0.5, by);
            offCtx.stroke();
          }

          // 3. Peacock "Eye" (Ocellus)
          if (hasEye) {
            const eyeY = -length * 0.24;
            const eyeX = curveOffset * 0.72;

            const eyeGrad = offCtx.createRadialGradient(
              eyeX,
              eyeY,
              1,
              eyeX,
              eyeY,
              widthMax * 0.72
            );
            eyeGrad.addColorStop(0, 'rgba(254, 240, 138, 0.98)');
            eyeGrad.addColorStop(0.28, 'rgba(34, 211, 238, 0.9)');
            eyeGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.82)');
            eyeGrad.addColorStop(0.85, 'rgba(124, 58, 237, 0.65)');
            eyeGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');

            offCtx.beginPath();
            offCtx.ellipse(
              eyeX,
              eyeY,
              widthMax * 0.65,
              widthMax * 0.85,
              0.15,
              0,
              Math.PI * 2
            );
            offCtx.fillStyle = eyeGrad;
            offCtx.fill();

            // Inner Velvet Iris
            offCtx.beginPath();
            offCtx.ellipse(
              eyeX,
              eyeY,
              widthMax * 0.28,
              widthMax * 0.38,
              0.15,
              0,
              Math.PI * 2
            );
            offCtx.fillStyle = 'rgba(10, 15, 30, 0.94)';
            offCtx.fill();

            // Center Sparkle
            offCtx.beginPath();
            offCtx.arc(eyeX, eyeY, 1.5, 0, Math.PI * 2);
            offCtx.fillStyle = '#ffffff';
            offCtx.fill();
          }

          offCtx.restore();
        }
        sprites[pIdx][eyeIdx] = { canvas: offCanvas };
      }
    }

    // Handle high DPI screens and window resizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Generate balanced density of Peacock Feather Particles based on viewport
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const particleCount = isReducedMotion ? 10 : isMobile ? 18 : isTablet ? 26 : 36;
    const stardustCount = isReducedMotion ? 12 : isMobile ? 24 : isTablet ? 38 : 50;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const depthType: 'back' | 'mid' | 'fore' =
        i % 5 === 0 ? 'fore' : i % 2 === 0 ? 'mid' : 'back';

      let sizeMultiplier = 1.0;
      let speedMultiplier = 1.0;
      let opacity = 0.55;

      switch (depthType) {
        case 'fore':
          sizeMultiplier = 1.15 + (i % 3) * 0.15;
          speedMultiplier = 0.9 + (i % 4) * 0.1;
          opacity = 0.7 + (i % 3) * 0.08;
          break;
        case 'mid':
          sizeMultiplier = 0.85 + (i % 3) * 0.12;
          speedMultiplier = 0.7 + (i % 3) * 0.08;
          opacity = 0.52 + (i % 3) * 0.08;
          break;
        case 'back':
        default:
          sizeMultiplier = 0.55 + (i % 3) * 0.1;
          speedMultiplier = 0.45 + (i % 3) * 0.08;
          opacity = 0.35 + (i % 3) * 0.06;
          break;
      }

      const baseX = (i / particleCount) * width + ((i * 37) % 60);

      particles.push({
        id: i,
        x: baseX,
        y: ((i * 47) % height),
        baseX,
        speedY: (0.45 + (i % 5) * 0.12) * speedMultiplier,
        size: sizeMultiplier,
        scale: 1,
        opacity,
        baseOpacity: opacity,
        rotation: ((i % 7) - 3) * 0.1,
        rotSpeed: 0.0008 + (i % 4) * 0.0003,
        rotAmp: 0.25 + (i % 3) * 0.08,
        rotPhase: (i * 1.1) % (Math.PI * 2),
        swayFreq: 0.001 + (i % 4) * 0.0003,
        swayAmp: (18 + (i % 5) * 6) * sizeMultiplier,
        swayPhase: (i * 1.7) % (Math.PI * 2),
        curve: ((i % 5) - 2) * 0.3,
        paletteIndex: i % colorPalettes.length,
        hasEye: i % 3 !== 0,
        eyeGlow: (i * 0.9) % (Math.PI * 2),
        depth: depthType,
      });
    }

    // Generate Stardust Sparks
    const stardustArray: StardustSpark[] = [];
    const starColors = ['#f59e0b', '#22d3ee', '#10b981', '#fbbf24', '#e0f2fe'];
    for (let j = 0; j < stardustCount; j++) {
      stardustArray.push({
        x: ((j * 53) % width),
        y: ((j * 71) % height),
        size: 0.75 + (j % 3) * 0.4,
        speedY: 0.18 + (j % 4) * 0.06,
        baseAlpha: 0.25 + (j % 3) * 0.15,
        twinkleSpeed: 0.0025 + (j % 3) * 0.001,
        twinklePhase: (j * 0.8) % (Math.PI * 2),
        color: starColors[j % starColors.length],
      });
    }

    // Sort particles so back renders first, fore renders last
    particles.sort((a, b) => {
      const order = { back: 0, mid: 1, fore: 2 };
      return order[a.depth] - order[b.depth];
    });

    // Main Render Loop
    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isRunning) return;

      const delta = Math.min(now - lastTime, 40);
      lastTime = now;

      // Handle Smooth Global Reveal Alpha
      if (isRevealed) {
        revealAlphaRef.current = Math.min(1, revealAlphaRef.current + delta * 0.0012);
      } else {
        revealAlphaRef.current = 0.08;
      }

      const globalAlpha = revealAlphaRef.current;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      const scrollY = scrollYRef.current;

      // 1. Render Distant Cosmic Stardust Sparks (Fast batch drawing)
      for (let s of stardustArray) {
        if (!isReducedMotion) {
          s.y += s.speedY * (delta * 0.06);
          if (s.y > height + 10) {
            s.y = -10;
          }
        }

        const twinkle = Math.sin(now * s.twinkleSpeed + s.twinklePhase);
        const currentAlpha = (s.baseAlpha + twinkle * 0.25) * globalAlpha;
        if (currentAlpha <= 0.02) continue;

        const starRenderY = (s.y - scrollY * 0.03 + height) % height;

        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, starRenderY, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Falling Peacock Feather Particles via pre-rendered hardware sprites
      for (let p of particles) {
        if (!isReducedMotion) {
          p.y += p.speedY * (delta * 0.06);

          const primarySway = Math.sin(now * p.swayFreq + p.swayPhase) * p.swayAmp;
          const secondarySway = Math.cos(now * p.swayFreq * 1.6 + p.swayPhase) * (p.swayAmp * 0.25);
          p.x = p.baseX + primarySway + secondarySway;

          const swayVelocity = Math.cos(now * p.swayFreq + p.swayPhase);
          p.rotation = Math.sin(now * p.rotSpeed + p.rotPhase) * p.rotAmp + swayVelocity * 0.16;

          // Continuous recycling
          if (p.y > height + 80) {
            p.y = -80;
            p.baseX = ((p.baseX + 130) % width);
            p.x = p.baseX;
          }

          if (p.x < -80) {
            p.baseX = width + 50;
          } else if (p.x > width + 80) {
            p.baseX = -50;
          }
        }

        const parallaxFactor = p.depth === 'back' ? 0.04 : p.depth === 'mid' ? 0.08 : 0.14;
        const renderY = p.y - scrollY * parallaxFactor;

        // Viewport culling
        if (renderY < -100 || renderY > height + 100 || p.x < -80 || p.x > width + 80) {
          continue;
        }

        const effectiveAlpha = p.opacity * globalAlpha;
        if (effectiveAlpha <= 0.01) continue;

        const sprite = sprites[p.paletteIndex][p.hasEye ? 1 : 0];
        if (!sprite || !sprite.canvas) continue;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, effectiveAlpha));
        ctx.translate(p.x, renderY);
        ctx.rotate(p.rotation);
        ctx.scale(p.size, p.size);
        ctx.drawImage(sprite.canvas, -spriteCenterX, -spriteCenterY);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isRevealed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 block"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
