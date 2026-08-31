import React from 'react';
import { motion } from 'motion/react';
import { PeacockFeatherCanvas } from './PeacockFeatherCanvas';

interface BackgroundEffectProps {
  isRevealed?: boolean;
}

export const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ isRevealed = true }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030305]">
      {/* ============================================================ */}
      {/* 1. DEEP MIDNIGHT BASE & GEOMETRIC MANDALA GRID */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.45) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ============================================================ */}
      {/* 2. CELESTIAL VOLUMETRIC LIGHT RAYS (Slow Drifting God-Rays) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {/* Ray 1: Golden Angle Sweep */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.2, 0.35, 0.15],
            rotate: [-28, -24, -28],
            x: ['-5%', '3%', '-5%'],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[40%] left-[10%] w-[180px] sm:w-[320px] h-[180vh] bg-gradient-to-b from-amber-400/20 via-amber-300/5 to-transparent blur-[60px] transform origin-top pointer-events-none"
        />

        {/* Ray 2: Cyan Divine Beam */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.25, 0.4, 0.2],
            rotate: [18, 22, 18],
            x: ['5%', '-2%', '5%'],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[30%] right-[15%] w-[160px] sm:w-[280px] h-[170vh] bg-gradient-to-b from-cyan-400/15 via-teal-300/5 to-transparent blur-[60px] transform origin-top pointer-events-none"
        />

        {/* Ray 3: Center Emerald-Gold Accent Beam */}
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.15, 0.25, 0.1],
            scaleX: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[220px] sm:w-[400px] h-[150vh] bg-gradient-to-b from-emerald-500/10 via-amber-400/5 to-transparent blur-[75px] pointer-events-none"
        />
      </div>

      {/* ============================================================ */}
      {/* 3. SUBTLE DRIFTING MIST & ENERGY HAZE */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-5%', '5%', '-5%'],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[700px] h-[400px] bg-gradient-to-r from-teal-500/10 via-emerald-600/5 to-transparent rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            x: ['8%', '-8%', '8%'],
            y: ['5%', '-5%', '5%'],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[750px] h-[450px] bg-gradient-to-l from-amber-500/10 via-indigo-600/5 to-transparent rounded-full blur-[150px]"
        />
      </div>

      {/* ============================================================ */}
      {/* 4. COSMIC GOLD & CYAN NEBULAE */}
      {/* ============================================================ */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/[0.05] rounded-full blur-[160px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/[0.05] rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-[160px]" />

      {/* ============================================================ */}
      {/* 5. LIVING PEACOCK FEATHER PARTICLES & STARDUST (Canvas Engine) */}
      {/* ============================================================ */}
      <PeacockFeatherCanvas isRevealed={isRevealed} />

      {/* ============================================================ */}
      {/* 6. SUBTLE CINEMATIC VIGNETTE */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030305]/30 to-[#030305]/95 pointer-events-none" />
    </div>
  );
};
