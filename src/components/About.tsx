import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { User, Code, Compass, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>01 / WHO I AM</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] whitespace-pre-line">
          {personal.aboutHeading}
        </h2>
      </div>

      {/* Main Grid: Editorial Narrative + Technical Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Side: Long-form Bio & Perspective */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-normal">
            {personal.aboutBio}
          </p>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-4">
            <div className="text-xs font-mono tracking-wider text-cyan-300 uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>THE MINDSET</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Every concept begins with curiosity. Rather than rushing ahead or memorizing syntaxes, the goal is to build deep intuition for object orientation, structured algorithms, and resilient debugging habits.
            </p>
          </div>
        </div>

        {/* Right Side: Technical Information Panel */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#090d15] border border-white/[0.1] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden">
            
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500" />

            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                TECHNICAL SPECIFICATIONS
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                VERIFIED
              </span>
            </div>

            {/* Spec items */}
            <div className="space-y-4 font-mono text-xs">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-white/[0.05] gap-1">
                <span className="text-neutral-500 uppercase tracking-wider">NAME</span>
                <span className="text-white font-semibold text-sm">{personal.name}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-white/[0.05] gap-1">
                <span className="text-neutral-500 uppercase tracking-wider">ROLE</span>
                <span className="text-neutral-200 font-medium">{personal.role}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-white/[0.05] gap-1">
                <span className="text-neutral-500 uppercase tracking-wider">CURRENT FOCUS</span>
                <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {personal.currentFocus}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-1">
                <span className="text-neutral-500 uppercase tracking-wider">LOCATION</span>
                <span className="text-neutral-200">{personal.location}</span>
              </div>

            </div>

            {/* Sub-note */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-[11px] font-mono text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
              <span>Authentic learner profile • Open to collaboration</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
