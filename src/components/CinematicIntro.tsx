import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SudarshanChakra } from './SudarshanChakra';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    'pure-black' | 'distant-right' | 'traveling-left' | 'charged-left' | 'cutting-right' | 'splitting' | 'revealed'
  >('pure-black');
  const [isSkipped, setIsSkipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Handle escape key to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Main cinematic sequence timeline (~3.6 - 4.0s total)
  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const startTime = Date.now();
    const duration = 2600; // ms for loading progression (0 -> 100%)

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(currentProgress);

      if (currentProgress < 12) {
        setPhase('pure-black');
      } else if (currentProgress >= 12 && currentProgress < 35) {
        setPhase('distant-right');
      } else if (currentProgress >= 35 && currentProgress < 80) {
        setPhase('traveling-left');
      } else if (currentProgress >= 80 && currentProgress < 100) {
        setPhase('charged-left');
      } else if (currentProgress >= 100) {
        clearInterval(timer);

        // Phase 5: Chakra cuts sharply from LEFT across to RIGHT
        setPhase('cutting-right');

        // Phase 6: Screen cuts open along diagonal seam and splits into two panels
        setTimeout(() => {
          setPhase('splitting');
        }, 500);

        // Phase 7: Complete reveal and handover to portfolio
        setTimeout(() => {
          setPhase('revealed');
          onComplete();
        }, 1150);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsSkipped(true);
    setPhase('revealed');
    onComplete();
  };

  if (isSkipped || phase === 'revealed') return null;

  return (
    <AnimatePresence>
      <div
        id="cinematic-intro-container"
        className="fixed inset-0 z-[100] bg-black overflow-hidden select-none pointer-events-auto flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* ============================================================ */}
        {/* 1. DISTANT COSMIC STARFIELD & DEEP SPACE BACKGROUND */}
        {/* ============================================================ */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Cosmic vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/75 to-black" />

          {/* Golden & Cyan particle sparks drifting in 3D */}
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 28 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${(i * 19) % 100}vw`,
                  y: `${(i * 27) % 100}vh`,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 0.85, 0],
                  scale: [0.3, 1.2, 0.3],
                  y: [`${(i * 27) % 100}vh`, `${((i * 27) % 100) - 18}vh`],
                }}
                transition={{
                  duration: 2.2 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.06,
                }}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 2 === 0
                    ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                    : 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. 3D TRAJECTORY: RIGHT -> TRAVEL LEFT -> CHARGED LEFT -> CUT RIGHT */}
        {/* ============================================================ */}
        <div
          className="relative z-20 flex flex-col items-center justify-center w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 3D Moving Chakra Actor */}
          {phase !== 'pure-black' && (
            <motion.div
              initial={{
                x: '36vw',
                y: '-8vh',
                scale: 0.12,
                opacity: 0.2,
                rotateX: 42,
                rotateY: -48,
                rotateZ: 20,
                filter: 'blur(3px)',
              }}
              animate={
                phase === 'distant-right'
                  ? {
                      x: '32vw',
                      y: '-6vh',
                      scale: 0.2,
                      opacity: 0.85,
                      rotateX: 38,
                      rotateY: -42,
                      rotateZ: 18,
                      filter: 'blur(2px)',
                    }
                  : phase === 'traveling-left'
                  ? {
                      x: '-8vw',
                      y: '2vh',
                      scale: 0.72,
                      opacity: 1,
                      rotateX: 22,
                      rotateY: -15,
                      rotateZ: 5,
                      filter: 'blur(0px)',
                    }
                  : phase === 'charged-left'
                  ? {
                      x: '-22vw',
                      y: '2vh',
                      scale: 1.05,
                      opacity: 1,
                      rotateX: 16,
                      rotateY: 28,
                      rotateZ: -12,
                      filter: 'blur(0px)',
                    }
                  : phase === 'cutting-right'
                  ? {
                      // Chakra cuts aggressively across the screen from LEFT to RIGHT
                      x: ['-24vw', '-5vw', '30vw', '65vw'],
                      y: ['2vh', '-4vh', '-10vh', '-18vh'],
                      scale: [1.05, 1.45, 1.8, 1.2],
                      rotateX: [16, -10, 25, 0],
                      rotateY: [28, -25, 45, 0],
                      rotateZ: [-12, 180, 540, 900],
                      filter: ['blur(0px)', 'blur(1.5px)', 'blur(3px)', 'blur(0px)'],
                      opacity: [1, 1, 1, 0.8],
                    }
                  : {
                      // Splitting phase - smooth exit
                      x: '65vw',
                      scale: 0.9,
                      opacity: 0,
                      filter: 'blur(5px)',
                    }
              }
              transition={{
                duration:
                  phase === 'cutting-right'
                    ? 0.5
                    : phase === 'charged-left'
                    ? 0.45
                    : phase === 'traveling-left'
                    ? 0.9
                    : 0.6,
                ease: phase === 'cutting-right' ? [0.22, 1, 0.36, 1] : [0.16, 1, 0.3, 1],
              }}
              className="absolute flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Distant Golden Singularity Flare */}
              {phase === 'distant-right' && (
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [1, 2.2, 1.6], opacity: [0.4, 0.9, 0.6] }}
                  transition={{ duration: 1.0, repeat: Infinity }}
                  className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-200 blur-2xl pointer-events-none"
                />
              )}

              {/* The Sudarshan Chakra Vector Engine */}
              <SudarshanChakra
                size={typeof window !== 'undefined' && window.innerWidth < 640 ? 240 : 330}
                spinSpeed={
                  phase === 'cutting-right' ? 'laser' : phase === 'charged-left' ? 'fast' : 'normal'
                }
                glowIntensity={
                  phase === 'cutting-right' ? 'cosmic' : phase === 'charged-left' ? 'high' : 'medium'
                }
              />

              {/* High-Energy Acceleration Ring during charged phase */}
              {(phase === 'charged-left' || phase === 'cutting-right') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1.22, rotate: 360 }}
                  transition={{ duration: 0.55, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-dashed border-amber-300 rounded-full shadow-[0_0_35px_#fbbf24] pointer-events-none"
                />
              )}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* 3. MINIMAL MONOSPACE LOADING TELEMETRY */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: phase === 'cutting-right' || phase === 'splitting' ? 0 : 1,
              y: 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-16 sm:bottom-20 flex flex-col items-center gap-2 font-mono text-center relative z-30"
          >
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shadow-[0_0_6px_#f59e0b]" />
              <span>INITIALIZING</span>
            </div>

            {/* Percentage Display */}
            <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-bold tracking-widest text-amber-300 drop-shadow-[0_0_18px_rgba(245,158,11,0.6)]">
              <span>{progress < 10 ? `0${progress}` : progress}</span>
              <span className="text-sm sm:text-base text-cyan-400 font-normal">%</span>
            </div>

            {/* Micro Precision Progress Rail */}
            <div className="w-44 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mt-1 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-300 to-cyan-400 shadow-[0_0_10px_#f59e0b]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* 4. THE SCREEN CUT (GOLDEN ENERGY LINE & LIGHT STREAK) */}
        {/* ============================================================ */}
        {phase === 'cutting-right' && (
          <>
            {/* Blazing Diagonal Energy Slash */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1.2], opacity: [0, 1, 0.95] }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-x-[-20%] top-1/2 -translate-y-1/2 h-[4px] bg-gradient-to-r from-transparent via-amber-200 to-cyan-300 shadow-[0_0_45px_#22d3ee,0_0_75px_#f59e0b] z-40 pointer-events-none"
              style={{ transform: 'rotate(-14deg)' }}
            />
            {/* White-Hot Core Ray */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.35 }}
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white shadow-[0_0_30px_#ffffff] z-50 pointer-events-none"
              style={{ transform: 'rotate(-14deg)' }}
            />
          </>
        )}

        {/* ============================================================ */}
        {/* 5. BLACK SCREEN SPLITS INTO TWO LARGE SEPARATING PIECES */}
        {/* ============================================================ */}
        {phase === 'splitting' && (
          <>
            {/* Top-Left Angular Piece (slides away up & left) */}
            <motion.div
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: '-35vw', y: '-100vh', opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 bg-black z-30 pointer-events-none origin-top-left shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 43%, 0 57%)',
              }}
            />

            {/* Bottom-Right Angular Piece (slides away down & right) */}
            <motion.div
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: '35vw', y: '100vh', opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 bg-black z-30 pointer-events-none origin-bottom-right shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
              style={{
                clipPath: 'polygon(0 57%, 100% 43%, 100% 100%, 0 100%)',
              }}
            />

            {/* Dispersing Golden Slash Aura along the seam */}
            <motion.div
              initial={{ opacity: 1, scaleY: 1 }}
              animate={{ opacity: 0, scaleY: 2.5 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-x-[-10%] top-1/2 -translate-y-1/2 h-[6px] bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_60px_#fbbf24] z-40 pointer-events-none"
              style={{ transform: 'rotate(-14deg)' }}
            />
          </>
        )}

        {/* ============================================================ */}
        {/* 6. SKIP BUTTON */}
        {/* ============================================================ */}
        <button
          id="skip-intro-btn"
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 text-[11px] font-mono tracking-widest text-white/40 hover:text-amber-300 uppercase px-3 py-1.5 rounded-sm border border-white/10 hover:border-amber-400/40 bg-white/[0.02] backdrop-blur-sm transition-all cursor-pointer"
        >
          SKIP INTRO [ESC] →
        </button>
      </div>
    </AnimatePresence>
  );
};
