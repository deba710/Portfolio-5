import React from 'react';
import { motion } from 'motion/react';

interface SudarshanChakraProps {
  size?: number | string;
  className?: string;
  variant?: 'hero' | 'loader' | 'ambient' | 'badge' | 'icon' | 'interactive' | '3d-satellite';
  spinSpeed?: 'ultra-slow' | 'slow' | 'normal' | 'fast' | 'laser';
  isHovered?: boolean;
  glowIntensity?: 'subtle' | 'medium' | 'high' | 'cosmic';
  colorTheme?: 'gold' | 'cyan' | 'divine-hybrid';
}

export const SudarshanChakra: React.FC<SudarshanChakraProps> = ({
  size = 320,
  className = '',
  variant = 'hero',
  spinSpeed = 'normal',
  isHovered = false,
  glowIntensity = 'medium',
  colorTheme = 'divine-hybrid',
}) => {
  // Generate 24 outer rounded curved solar blades (broad base, rounded semicircular crest)
  const bladeCount = 24;
  const blades = Array.from({ length: bladeCount }, (_, i) => {
    const angle = (i * 360) / bladeCount;
    return { id: i, angle };
  });

  // Generate 12 inner geometric radial spokes
  const spokeCount = 12;
  const spokes = Array.from({ length: spokeCount }, (_, i) => {
    const angle = (i * 360) / spokeCount;
    return { id: i, angle };
  });

  // Generate 8 core lotus energy petals
  const petalCount = 8;
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount;
    return { id: i, angle };
  });

  // Generate 72 fine precision tick marks on the concentric ring
  const tickCount = 72;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i * 360) / tickCount;
    const isMajor = i % 6 === 0;
    const isMedium = i % 3 === 0;
    return { id: i, angle, isMajor, isMedium };
  });

  // Determine spin duration based on speed prop and hover state
  const getSpinDuration = () => {
    if (isHovered) return 12;
    switch (spinSpeed) {
      case 'ultra-slow': return 75;
      case 'slow': return 45;
      case 'normal': return 28;
      case 'fast': return 8;
      case 'laser': return 2.2;
      default: return 28;
    }
  };

  const spinDuration = getSpinDuration();

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
    >
      {/* Outer Atmospheric Aura / Plasma Glow */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
          glowIntensity === 'cosmic'
            ? 'bg-gradient-to-tr from-amber-500/30 via-cyan-500/25 to-indigo-600/30 blur-3xl scale-125'
            : glowIntensity === 'high'
            ? 'bg-gradient-to-tr from-amber-500/25 via-cyan-500/18 to-transparent blur-2xl scale-110'
            : glowIntensity === 'medium'
            ? 'bg-gradient-to-tr from-amber-500/18 via-cyan-500/12 to-transparent blur-xl scale-105'
            : 'bg-amber-500/8 blur-lg'
        }`}
      />

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10 overflow-visible drop-shadow-[0_4px_25px_rgba(0,0,0,0.75)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Multi-Stop 3D Gold Gradient for Rounded Blades */}
          <linearGradient id="scGoldBlade3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="20%" stopColor="#fef08a" />
            <stop offset="48%" stopColor="#f59e0b" />
            <stop offset="78%" stopColor="#d97706" />
            <stop offset="95%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          {/* Bevel Highlight Gradient for Blade Crest Curvature */}
          <linearGradient id="scBladeBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#d97706" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
          </linearGradient>

          {/* Electric Cyan Technical Gradient */}
          <linearGradient id="scCyanTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          {/* Metallic Outer Chamfer Rim */}
          <linearGradient id="scMetalRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="25%" stopColor="#92400e" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="75%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          {/* Concentric Disc 3D Depth Shading */}
          <radialGradient id="scDiscDepth" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#0a0f1d" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#060911" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#1e1b12" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#030305" stopOpacity="0.6" />
          </radialGradient>

          {/* Core Central Singularity Flare */}
          <radialGradient id="scBinduRadiance" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#fef08a" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="scChakraGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="scSuperGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="scBladeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* ROTATING LAYER 1: 24 HYBRID SUDARSHAN BLADES (Clockwise) */}
        {/* Half smooth rounded curved crest -> Smooth transition -> Sharp pointed tip */}
        {/* ============================================================ */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: spinDuration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* 24 Hybrid Curved & Sharp Blades with Multi-Depth Shading */}
          <g filter="url(#scBladeShadow)">
            {blades.map((b) => (
              <g key={b.id} transform={`rotate(${b.angle} 200 200)`}>
                {/* Hybrid Blade Body: Left half rounded dome curve -> transitions to sharp pointed tip */}
                <path
                  d="M 191 72 C 184 56, 183 34, 190 20 C 193 14, 198 12, 203 13 C 208 14, 213 19, 217 26 L 220 28 C 215 44, 211 58, 207 72 C 202 74, 196 74, 191 72 Z"
                  fill="url(#scGoldBlade3D)"
                  stroke="#fbbf24"
                  strokeWidth="0.85"
                />

                {/* Left Half Rounded Bevel Specular Highlight */}
                <path
                  d="M 191 72 C 184 56, 183 34, 190 20 C 193 14, 198 12, 203 13 L 201 73 Z"
                  fill="url(#scBladeBevel)"
                  opacity="0.75"
                />

                {/* Central Raised Metallic Ridge / Spine */}
                <line
                  x1="203"
                  y1="14"
                  x2="201"
                  y2="70"
                  stroke="#ffffff"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Sharp Cutting Edge Bevel Line */}
                <line
                  x1="203"
                  y1="13"
                  x2="220"
                  y2="28"
                  stroke="#ffffff"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* Rounded Shoulder Node */}
                <circle cx="201" cy="14" r="1.3" fill="#ffffff" />
                {/* Sharp Tip Highlight Sparkle */}
                <circle cx="220" cy="28" r="1.0" fill="#fef08a" />
              </g>
            ))}
          </g>

          {/* Thin Golden Ring (Second Layer from Outside) */}
          <circle
            cx="200"
            cy="200"
            r="132"
            fill="none"
            stroke="url(#scMetalRimGrad)"
            strokeWidth="3.5"
            opacity="0.95"
          />

          {/* Golden Outer Track */}
          <circle
            cx="200"
            cy="200"
            r="127"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeOpacity="0.75"
            strokeDasharray="3 5"
          />

          {/* 72 Fine Precision Radial Division Ticks */}
          <g opacity="0.85">
            {ticks.map((t) => (
              <line
                key={t.id}
                x1="200"
                y1={t.isMajor ? "122" : t.isMedium ? "124" : "126"}
                x2="200"
                y2="131"
                stroke={t.isMajor ? "#fef08a" : t.isMedium ? "#f59e0b" : "#d97706"}
                strokeWidth={t.isMajor ? "1.4" : "0.75"}
                transform={`rotate(${t.angle} 200 200)`}
              />
            ))}
          </g>
        </motion.g>

        {/* ============================================================ */}
        {/* COUNTER-ROTATING LAYER 2: DARK METALLIC & CYAN TECHNICAL RING */}
        {/* ============================================================ */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{
            duration: spinDuration * 1.35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* Dark Recessed Metallic Ring with 3D Depth (Third Layer) */}
          <circle
            cx="200"
            cy="200"
            r="118"
            fill="url(#scDiscDepth)"
            stroke="#0f172a"
            strokeWidth="12"
            opacity="0.9"
          />

          {/* Cyan Technical Ring (Fifth Layer) */}
          <circle
            cx="200"
            cy="200"
            r="122"
            fill="none"
            stroke="url(#scCyanTechGrad)"
            strokeWidth="1.4"
            strokeDasharray="24 8 6 8"
            strokeOpacity="0.9"
          />

          {/* Inner Cyan Track */}
          <circle
            cx="200"
            cy="200"
            r="110"
            stroke="#22d3ee"
            strokeWidth="0.9"
            strokeDasharray="5 3"
            strokeOpacity="0.7"
          />

          {/* 12 Astrolabe Coordinate Diamond Nodes */}
          <g opacity="0.85">
            {spokes.map((s) => (
              <g key={s.id} transform={`rotate(${s.angle} 200 200)`}>
                <polygon
                  points="200,113 202,116 200,119 198,116"
                  fill="#22d3ee"
                />
                <circle cx="200" cy="116" r="0.75" fill="#ffffff" />
              </g>
            ))}
          </g>

          {/* 4 Cardinal Notches */}
          {[0, 90, 180, 270].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <line
                x1="200"
                y1="108"
                x2="200"
                y2="124"
                stroke="#22d3ee"
                strokeWidth="1.8"
                opacity="0.95"
              />
              <circle cx="200" cy="107" r="1.5" fill="#22d3ee" />
            </g>
          ))}
        </motion.g>

        {/* ============================================================ */}
        {/* LAYER 3: GOLDEN INNER RING & SACRED MANDALA (Sixth Layer) */}
        {/* ============================================================ */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: spinDuration * 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* Golden Inner Ring (Sixth Layer) */}
          <circle
            cx="200"
            cy="200"
            r="102"
            fill="none"
            stroke="url(#scGoldBlade3D)"
            strokeWidth="1.8"
            opacity="0.9"
          />

          {/* 12 Radial Solar Spoke Struts */}
          <g opacity="0.75">
            {spokes.map((s) => (
              <g key={s.id} transform={`rotate(${s.angle} 200 200)`}>
                <line
                  x1="200"
                  y1="78"
                  x2="200"
                  y2="102"
                  stroke="url(#scGoldBlade3D)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="90" r="1.4" fill="#22d3ee" />
              </g>
            ))}
          </g>

          {/* 8-Petal Sacred Core Elements */}
          <g filter="url(#scChakraGlow)">
            {petals.map((p) => (
              <g key={p.id} transform={`rotate(${p.angle} 200 200)`}>
                <path
                  d="M200 120 C206 132, 209 142, 200 152 C191 142, 194 132, 200 120 Z"
                  fill="url(#scGoldBlade3D)"
                  stroke="#fbbf24"
                  strokeWidth="0.8"
                  opacity="0.85"
                />
                <circle cx="200" cy="126" r="1.2" fill="#e0f2fe" />
              </g>
            ))}
          </g>
        </motion.g>

        {/* ============================================================ */}
        {/* CENTRAL BINDU SINGULARITY (When not housing a portrait) */}
        {/* ============================================================ */}
        {variant !== 'hero' && (
          <g>
            <circle
              cx="200"
              cy="200"
              r="28"
              fill="url(#scBinduRadiance)"
              filter="url(#scSuperGlow)"
            />
            <circle
              cx="200"
              cy="200"
              r="16"
              fill="#030305"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="200"
              r="7"
              fill="#ffffff"
              filter="url(#scChakraGlow)"
            />
            <path
              d="M200 188 L202 198 L212 200 L202 202 L200 212 L198 202 L188 200 L198 198 Z"
              fill="#fbbf24"
            />
          </g>
        )}

        {/* Traveling Perimeter Energy Arc */}
        <motion.circle
          cx="200"
          cy="200"
          r="133"
          stroke="#38bdf8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="36 360"
          filter="url(#scChakraGlow)"
          animate={{ rotate: 360 }}
          transition={{
            duration: spinDuration * 0.45,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Orbiting Aura Sparks */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: spinDuration * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="52" r="2.5" fill="#fef08a" filter="url(#scChakraGlow)" />
          <circle cx="348" cy="200" r="2.2" fill="#22d3ee" filter="url(#scChakraGlow)" />
          <circle cx="200" cy="348" r="2.0" fill="#10b981" filter="url(#scChakraGlow)" />
          <circle cx="52" cy="200" r="2.4" fill="#fbbf24" filter="url(#scChakraGlow)" />
        </motion.g>
      </svg>
    </div>
  );
};
