import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { PortraitImage } from './PortraitImage';
import { SudarshanChakra } from './SudarshanChakra';
import { Code2, MapPin } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const { personal } = portfolioData;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const portraitShellRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax for subtle 3D depth on desktop only (GPU accelerated via RAF)
  useEffect(() => {
    if (shouldReduceMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const container = containerRef.current;
    const portraitShell = portraitShellRef.current;
    if (!container || !portraitShell) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / (rect.width / 2);
      const dy = (e.clientY - centerY) / (rect.height / 2);
      targetRotX = dy * -3.2;
      targetRotY = dx * 3.2;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    const updateParallax = () => {
      currentRotX += (targetRotX - currentRotX) * 0.15;
      currentRotY += (targetRotY - currentRotY) * 0.15;

      portraitShell.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      rafId = requestAnimationFrame(updateParallax);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  // Configuration for Satellite 3D Sudarshan Chakras (Separate decorative/cinematic visuals in surroundings)
  const satelliteChakras = [
    {
      id: 'sat-1',
      size: 96,
      desktopPos: 'top-[-4%] left-[-10%]',
      mobilePos: 'top-[-4%] left-[-2%]',
      rotateX: 42,
      rotateY: -45,
      rotateZ: 16,
      scale: 0.9,
      opacity: 0.65,
      blur: 'blur-[0.5px]',
      orbitDuration: 18,
      yDrift: [-8, 8, -8],
      xDrift: [-4, 4, -4],
      spinSpeed: 'slow' as const,
      depthZ: -60,
    },
    {
      id: 'sat-2',
      size: 110,
      desktopPos: 'top-[-2%] right-[-12%]',
      mobilePos: 'top-[-2%] right-[-4%]',
      rotateX: -32,
      rotateY: 55,
      rotateZ: -24,
      scale: 0.95,
      opacity: 0.7,
      blur: 'blur-none',
      orbitDuration: 22,
      yDrift: [10, -10, 10],
      xDrift: [5, -5, 5],
      spinSpeed: 'normal' as const,
      depthZ: -30,
    },
    {
      id: 'sat-3',
      size: 88,
      desktopPos: 'bottom-[16%] right-[-14%]',
      mobilePos: 'hidden md:block bottom-[16%] right-[-14%]',
      rotateX: 58,
      rotateY: 28,
      rotateZ: 42,
      scale: 0.82,
      opacity: 0.55,
      blur: 'blur-[0.5px]',
      orbitDuration: 20,
      yDrift: [-6, 6, -6],
      xDrift: [-6, 6, -6],
      spinSpeed: 'slow' as const,
      depthZ: 20,
    },
    {
      id: 'sat-4',
      size: 82,
      desktopPos: 'bottom-[20%] left-[-12%]',
      mobilePos: 'bottom-[18%] left-[-4%]',
      rotateX: -45,
      rotateY: -35,
      rotateZ: -15,
      scale: 0.78,
      opacity: 0.5,
      blur: 'blur-[1px]',
      orbitDuration: 24,
      yDrift: [8, -8, 8],
      xDrift: [4, -4, 4],
      spinSpeed: 'ultra-slow' as const,
      depthZ: -80,
    },
    {
      id: 'sat-5',
      size: 68,
      desktopPos: 'top-[42%] left-[-18%] hidden xl:block',
      mobilePos: 'hidden',
      rotateX: 20,
      rotateY: 72,
      rotateZ: 8,
      scale: 0.65,
      opacity: 0.4,
      blur: 'blur-[1.5px]',
      orbitDuration: 26,
      yDrift: [-10, 10, -10],
      xDrift: [-3, 3, -3],
      spinSpeed: 'slow' as const,
      depthZ: -140,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[460px] xl:max-w-[500px] mx-auto flex flex-col items-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* ============================================================ */}
      {/* 1. TOP HEADER BADGE */}
      {/* ============================================================ */}
      <div className="text-center mb-4 sm:mb-5 space-y-1 relative z-30">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 font-mono text-[10px] sm:text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <span className="font-bold">SYSTEMS & AI DEV</span>
        </div>
        <p className="text-[10px] sm:text-[11px] font-mono text-cyan-300/80 tracking-widest uppercase">
          COSMIC ARCHITECT
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. SATELLITE 3D SUDARSHAN CHAKRAS (Separate Celestial Visuals) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ transformStyle: 'preserve-3d' }}>
        {satelliteChakras.map((sat) => (
          <motion.div
            key={sat.id}
            className={`absolute ${sat.desktopPos} ${sat.mobilePos} ${sat.blur} pointer-events-none transition-opacity duration-700`}
            style={{
              transformStyle: 'preserve-3d',
              opacity: sat.opacity,
              willChange: 'transform',
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: sat.yDrift,
                    x: sat.xDrift,
                  }
            }
            transition={{
              duration: sat.orbitDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* 3D Angled Transform Shell */}
            <div
              style={{
                transform: `perspective(700px) translateZ(${sat.depthZ}px) rotateX(${sat.rotateX}deg) rotateY(${sat.rotateY}deg) rotateZ(${sat.rotateZ}deg) scale(${sat.scale})`,
                transformStyle: 'preserve-3d',
              }}
              className="relative drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)]"
            >
              <SudarshanChakra
                size={sat.size}
                spinSpeed={sat.spinSpeed}
                glowIntensity="subtle"
                variant="3d-satellite"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* 3. INDEPENDENT CIRCULAR PORTRAIT (CLEAN CENTERED STANDALONE) */}
      {/* No Chakra blades surrounding, behind, or overlapping photo */}
      {/* ============================================================ */}
      <div
        ref={portraitShellRef}
        className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[340px] md:max-w-[360px] aspect-square flex items-center justify-center z-20 my-1 sm:my-2"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Ambient Halo Glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-10 rounded-full bg-amber-400/10 blur-xl pointer-events-none" />

        {/* Subtle Fine Tech Orbital Guide Rings (Unobtrusive framing without blades) */}
        <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute inset-6 sm:inset-7 rounded-full border border-dashed border-amber-400/15 pointer-events-none" />

        {/* Micro Pulse Node on Orbit Ring */}
        <motion.div
          animate={{ rotate: shouldReduceMotion ? 0 : -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 sm:inset-3 rounded-full pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] -top-[3px] left-1/2 -translate-x-1/2 absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] -bottom-[3px] left-1/2 -translate-x-1/2 absolute" />
        </motion.div>

        {/* Clean Independent Circular Portrait Frame */}
        <div className="relative w-[180px] xs:w-[200px] sm:w-[220px] md:w-[230px] lg:w-[225px] xl:w-[240px] aspect-square rounded-full p-[3.5px] sm:p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-cyan-400 shadow-[0_0_40px_rgba(245,158,11,0.45),0_0_20px_rgba(6,182,212,0.3)]">
          {/* Thin Dark Separator Ring */}
          <div className="w-full h-full rounded-full p-[2.5px] bg-[#030305]">
            {/* Inner Luminous Cyan/Emerald Bezel */}
            <div className="w-full h-full rounded-full p-[1.5px] bg-gradient-to-b from-cyan-400/90 via-amber-400/70 to-emerald-400/90">
              {/* Pure Circular Mask for Debangan's Real Portrait (Static, Centered, No Rotation) */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#070b14] relative flex items-center justify-center shadow-inner border border-black/80">
                <PortraitImage
                  alt="Debangan Bera"
                  className="w-full h-full object-cover object-center rounded-full"
                  fallbackText="D"
                  fallbackClassName="text-4xl sm:text-5xl font-display font-black text-amber-300 tracking-wider select-none"
                />

                {/* Soft Edge Vignette for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 4 Cardinal Precision Axis Nodes */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#06b6d4]" />
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#06b6d4]" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. PROFILE IDENTITY INFORMATION (BELOW PORTRAIT) */}
      {/* ============================================================ */}
      <div className="w-full mt-3 sm:mt-4 text-center space-y-2 relative z-30">
        {/* Name */}
        <h3 className="text-xl sm:text-2xl xl:text-3xl font-extrabold font-display tracking-wider text-white uppercase leading-tight">
          <span className="bg-gradient-to-r from-white via-neutral-100 to-amber-200 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h3>

        {/* Role & Status */}
        <p className="text-xs sm:text-sm font-mono font-semibold text-amber-400 tracking-wide uppercase">
          {personal.role}
        </p>

        {/* Supporting Telemetry Badges: Core Focus & Location */}
        <div className="pt-2 grid grid-cols-2 gap-2 sm:gap-3 max-w-sm mx-auto text-left font-mono text-[10px] sm:text-xs">
          {/* Core Focus */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-amber-400/20 flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider flex items-center gap-1">
              <Code2 className="w-3 h-3 text-amber-400" />
              <span>CORE FOCUS</span>
            </span>
            <span className="font-bold text-amber-300 mt-0.5 tracking-wider">
              {personal.currentFocus.toUpperCase()} LEARNING
            </span>
          </div>

          {/* Location */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-cyan-400/20 flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>LOCATION</span>
            </span>
            <span className="font-bold text-cyan-300 mt-0.5 tracking-wider truncate">
              {personal.location.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
