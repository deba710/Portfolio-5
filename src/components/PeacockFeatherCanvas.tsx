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
  colorType: 'emerald' | 'teal' | 'turquoise' | 'sapphire' | 'violet-gold';
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
  const revealAlphaRef = useRef<number>(isRevealed ? 1 : 0);

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
    const isReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

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

    // Generate balanced density of Peacock Feather Particles
    const isMobile = width < 768;
    const particleCount = isReducedMotion ? 12 : isMobile ? 22 : 42;
    const stardustCount = isReducedMotion ? 15 : isMobile ? 30 : 60;

    const colorPalettes: Array<'emerald' | 'teal' | 'turquoise' | 'sapphire' | 'violet-gold'> = [
      'emerald',
      'teal',
      'turquoise',
      'sapphire',
      'violet-gold',
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      // Stratify depth into three distinct parallax planes
      const depthType: 'back' | 'mid' | 'fore' =
        i % 5 === 0 ? 'fore' : i % 2 === 0 ? 'mid' : 'back';

      let sizeMultiplier = 1.0;
      let speedMultiplier = 1.0;
      let opacity = 0.55;

      switch (depthType) {
        case 'fore':
          sizeMultiplier = 1.25 + Math.random() * 0.45; // larger foreground feathers
          speedMultiplier = 0.85 + Math.random() * 0.4;
          opacity = 0.65 + Math.random() * 0.25; // brighter, prominent
          break;
        case 'mid':
          sizeMultiplier = 0.85 + Math.random() * 0.35;
          speedMultiplier = 0.65 + Math.random() * 0.3;
          opacity = 0.5 + Math.random() * 0.25;
          break;
        case 'back':
        default:
          sizeMultiplier = 0.5 + Math.random() * 0.3; // subtle background drifting
          speedMultiplier = 0.4 + Math.random() * 0.25;
          opacity = 0.3 + Math.random() * 0.2;
          break;
      }

      const baseX = Math.random() * width;

      particles.push({
        id: i,
        x: baseX,
        y: Math.random() * height,
        baseX,
        speedY: (0.45 + Math.random() * 0.65) * speedMultiplier,
        size: sizeMultiplier,
        scale: 1,
        opacity,
        baseOpacity: opacity,
        rotation: (Math.random() - 0.5) * 0.8,
        rotSpeed: 0.0008 + Math.random() * 0.0015,
        rotAmp: 0.25 + Math.random() * 0.35,
        rotPhase: Math.random() * Math.PI * 2,
        swayFreq: 0.001 + Math.random() * 0.0015,
        swayAmp: (18 + Math.random() * 32) * sizeMultiplier,
        swayPhase: Math.random() * Math.PI * 2,
        curve: (Math.random() - 0.5) * 1.4,
        colorType: colorPalettes[i % colorPalettes.length],
        hasEye: i % 3 !== 0, // 66% of feathers feature the iconic peacock ocellus ("eye")
        eyeGlow: Math.random() * Math.PI * 2,
        depth: depthType,
      });
    }

    // Generate Stardust Sparks
    const stardustArray: StardustSpark[] = [];
    const starColors = ['#f59e0b', '#22d3ee', '#10b981', '#fbbf24', '#e0f2fe', '#a855f7'];
    for (let j = 0; j < stardustCount; j++) {
      stardustArray.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.75 + Math.random() * 1.6,
        speedY: 0.15 + Math.random() * 0.35,
        baseAlpha: 0.2 + Math.random() * 0.5,
        twinkleSpeed: 0.002 + Math.random() * 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[j % starColors.length],
      });
    }

    // Sort particles so back renders first, fore renders last
    particles.sort((a, b) => {
      const order = { back: 0, mid: 1, fore: 2 };
      return order[a.depth] - order[b.depth];
    });

    /**
     * Draw an authentic Peacock Feather with:
     * - Dark golden/amber Quill (Rachis)
     * - Wispy side barbs (barbules)
     * - Rich multi-stop color vane gradient
     * - Radiant Ocellus ("Eye" Pattern with turquoise/emerald/violet/gold rings)
     * - Luminous central Bindu / Pupil sparkle
     */
    const drawFeather = (
      p: Particle,
      globalAlpha: number,
      now: number,
      parallaxOffsetY: number
    ) => {
      const renderY = p.y - parallaxOffsetY;

      // Skip rendering if outside viewport with margin
      if (renderY < -120 || renderY > height + 120 || p.x < -100 || p.x > width + 100) {
        return;
      }

      ctx.save();
      ctx.translate(p.x, renderY);
      ctx.rotate(p.rotation);
      ctx.scale(p.size, p.size);

      const effectiveAlpha = p.opacity * globalAlpha;
      ctx.globalAlpha = Math.max(0, Math.min(1, effectiveAlpha));

      const length = 52;
      const widthMax = 18;
      const curveOffset = p.curve * 10;

      // 1. Central Golden/Amber Quill Shaft (Rachis)
      ctx.beginPath();
      ctx.moveTo(0, length * 0.5);
      ctx.quadraticCurveTo(curveOffset * 0.5, 0, curveOffset, -length * 0.5);
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.85)'; // glowing gold stem
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // 2. Translucent Feather Vane Gradient Body
      const bodyGradient = ctx.createLinearGradient(
        -widthMax,
        length * 0.35,
        widthMax + curveOffset,
        -length * 0.45
      );

      switch (p.colorType) {
        case 'emerald':
          bodyGradient.addColorStop(0, 'rgba(5, 150, 105, 0.15)');
          bodyGradient.addColorStop(0.3, 'rgba(16, 185, 129, 0.8)');
          bodyGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.65)');
          bodyGradient.addColorStop(1, 'rgba(245, 158, 11, 0.55)');
          break;
        case 'teal':
          bodyGradient.addColorStop(0, 'rgba(13, 148, 136, 0.15)');
          bodyGradient.addColorStop(0.35, 'rgba(20, 184, 166, 0.8)');
          bodyGradient.addColorStop(0.75, 'rgba(2, 132, 199, 0.65)');
          bodyGradient.addColorStop(1, 'rgba(251, 191, 36, 0.5)');
          break;
        case 'turquoise':
          bodyGradient.addColorStop(0, 'rgba(8, 145, 178, 0.15)');
          bodyGradient.addColorStop(0.35, 'rgba(34, 211, 238, 0.75)');
          bodyGradient.addColorStop(0.7, 'rgba(16, 185, 129, 0.7)');
          bodyGradient.addColorStop(1, 'rgba(253, 224, 71, 0.6)');
          break;
        case 'sapphire':
          bodyGradient.addColorStop(0, 'rgba(30, 58, 138, 0.15)');
          bodyGradient.addColorStop(0.35, 'rgba(37, 99, 235, 0.75)');
          bodyGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.75)');
          bodyGradient.addColorStop(1, 'rgba(139, 92, 246, 0.55)');
          break;
        case 'violet-gold':
        default:
          bodyGradient.addColorStop(0, 'rgba(109, 40, 217, 0.2)');
          bodyGradient.addColorStop(0.35, 'rgba(124, 58, 237, 0.75)');
          bodyGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.7)');
          bodyGradient.addColorStop(1, 'rgba(245, 158, 11, 0.75)');
          break;
      }

      // Outer Silhouette of the Feather with natural curvature
      ctx.beginPath();
      ctx.moveTo(0, length * 0.48);
      ctx.bezierCurveTo(
        -widthMax * 0.95 + curveOffset * 0.4,
        length * 0.18,
        -widthMax * 1.1 + curveOffset * 0.8,
        -length * 0.28,
        curveOffset,
        -length * 0.5
      );
      ctx.bezierCurveTo(
        widthMax * 1.1 + curveOffset * 0.8,
        -length * 0.28,
        widthMax * 0.95 + curveOffset * 0.4,
        length * 0.18,
        0,
        length * 0.48
      );
      ctx.closePath();

      ctx.fillStyle = bodyGradient;
      ctx.fill();

      // Delicate feather wisps / barb ridges radiating outward
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.6;
      for (let bi = -3; bi <= 3; bi++) {
        const by = bi * 6.5;
        const bxSpan = (1 - Math.abs(bi) * 0.18) * (widthMax * 0.8);
        ctx.beginPath();
        ctx.moveTo(-bxSpan + curveOffset * 0.5, by);
        ctx.lineTo(0, by + 2.5);
        ctx.lineTo(bxSpan + curveOffset * 0.5, by);
        ctx.stroke();
      }

      // 3. Peacock "Eye" (Ocellus) near upper third of feather
      if (p.hasEye) {
        const eyeY = -length * 0.24;
        const eyeX = curveOffset * 0.72;
        const pulse = 1 + Math.sin(now * 0.0025 + p.eyeGlow) * 0.1;

        // Outer Bronze / Gold Shimmer Ring
        const eyeGrad = ctx.createRadialGradient(
          eyeX,
          eyeY,
          1,
          eyeX,
          eyeY,
          widthMax * 0.72 * pulse
        );
        eyeGrad.addColorStop(0, 'rgba(254, 240, 138, 0.98)'); // intense gold core
        eyeGrad.addColorStop(0.28, 'rgba(34, 211, 238, 0.9)'); // bright cyan ring
        eyeGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.8)'); // emerald ring
        eyeGrad.addColorStop(0.85, 'rgba(124, 58, 237, 0.65)'); // sapphire/violet halo
        eyeGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');

        ctx.beginPath();
        ctx.ellipse(
          eyeX,
          eyeY,
          widthMax * 0.65 * pulse,
          widthMax * 0.85 * pulse,
          p.curve * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = eyeGrad;
        ctx.fill();

        // Inner Deep Velvet Iris (Navy / Indigo)
        ctx.beginPath();
        ctx.ellipse(
          eyeX,
          eyeY,
          widthMax * 0.28 * pulse,
          widthMax * 0.38 * pulse,
          p.curve * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(10, 15, 30, 0.92)';
        ctx.fill();

        // Center Divine Bindu Sparkle
        ctx.beginPath();
        ctx.arc(eyeX, eyeY, 1.4 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#fef08a';
        ctx.shadowBlur = 4;
        ctx.fill();
      }

      ctx.restore();
    };

    // Main Render Loop
    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isRunning) return;

      const delta = Math.min(now - lastTime, 40);
      lastTime = now;

      // Handle Smooth Global Reveal Alpha (0 -> 1 after intro complete)
      if (isRevealed) {
        revealAlphaRef.current = Math.min(1, revealAlphaRef.current + delta * 0.0008);
      } else {
        revealAlphaRef.current = 0.06; // faint preview
      }

      const globalAlpha = revealAlphaRef.current;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      const scrollY = scrollYRef.current;

      // 1. Render Distant Cosmic Stardust Sparks
      for (let s of stardustArray) {
        if (!isReducedMotion) {
          s.y += s.speedY * (delta * 0.06);
          if (s.y > height + 20) {
            s.y = -20;
            s.x = Math.random() * width;
          }
        }

        const twinkle = Math.sin(now * s.twinkleSpeed + s.twinklePhase);
        const currentAlpha = Math.max(
          0.05,
          Math.min(1, s.baseAlpha + twinkle * 0.3) * globalAlpha
        );

        const starRenderY = (s.y - scrollY * 0.03 + height) % height;

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(s.x, starRenderY, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Render Falling Peacock Feather Particles in Sorted Depth (Back -> Mid -> Fore)
      for (let p of particles) {
        if (!isReducedMotion) {
          // Physics step: Downward drift + gentle lateral sine wave + rotation
          p.y += p.speedY * (delta * 0.06);

          // Horizontal sway with secondary harmonic for natural flutter
          const primarySway = Math.sin(now * p.swayFreq + p.swayPhase) * p.swayAmp;
          const secondarySway =
            Math.cos(now * p.swayFreq * 1.6 + p.swayPhase) * (p.swayAmp * 0.3);
          p.x = p.baseX + primarySway + secondarySway;

          // Rotation responds to lateral velocity + natural swing
          const swayVelocity = Math.cos(now * p.swayFreq + p.swayPhase);
          p.rotation =
            Math.sin(now * p.rotSpeed + p.rotPhase) * p.rotAmp + swayVelocity * 0.18;

          // Continuous graceful recycling when exiting bottom
          if (p.y > height + 80) {
            p.y = -80 - Math.random() * 40;
            p.baseX = Math.random() * width;
            p.x = p.baseX;
            p.swayPhase = Math.random() * Math.PI * 2;
            p.rotPhase = Math.random() * Math.PI * 2;
          }

          // Horizontal wrap
          if (p.x < -80) {
            p.baseX = width + 60;
          } else if (p.x > width + 80) {
            p.baseX = -60;
          }
        }

        // Parallax depth multiplier based on layer
        const parallaxFactor =
          p.depth === 'back' ? 0.04 : p.depth === 'mid' ? 0.08 : 0.14;
        const parallaxOffsetY = scrollY * parallaxFactor;

        drawFeather(p, globalAlpha, now, parallaxOffsetY);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Tab visibility handling (pause when tab hidden to save CPU/battery)
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
