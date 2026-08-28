import React from 'react';
import { motion } from 'motion/react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark base background with Immersive UI dual radial gradients */}
      <div 
        className="absolute inset-0 bg-[#050505]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(0, 240, 255, 0.07) 0%, transparent 40%),
            radial-gradient(circle at 10% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 40%)
          `,
        }}
      />

      {/* 40px technical grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        }}
      />

      {/* Concentric subtle circular wireframes */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] border border-white/5 rounded-full opacity-30 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full opacity-10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* Very large blurred ambient light sources */}
      {/* 1. Cyan ambient light in top right */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.15, 0.25, 0.15, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* 2. Purple ambient light in bottom left */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.08, 1],
          opacity: [0.12, 0.2, 0.12, 0.12],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-purple-600/15 blur-[150px]"
      />

      {/* 3. Warm orange highlight accent in bottom right corner */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Border Guidelines & Crosshairs */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-cyan-400/30 select-none tracking-[0.3em] uppercase hidden lg:block">
        SYS.ID: DEBANGAN // 22.5726° N
      </div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-cyan-400/30 select-none tracking-[0.3em] uppercase hidden lg:block">
        CORE.ENV: JAVA_SE
      </div>
      <div className="absolute bottom-6 left-6 text-[10px] font-mono text-white/20 select-none tracking-[0.3em] uppercase hidden lg:block">
        BUILD STRONG FUNDAMENTALS
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-white/20 select-none tracking-[0.3em] uppercase hidden lg:block">
        DIGITAL IDENTITY // 2026
      </div>
    </div>
  );
};
