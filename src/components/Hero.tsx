import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { SudarshanChakra } from './SudarshanChakra';
import { ArrowRight, Compass, Sparkles, Terminal, Shield, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'hero' || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      {/* ============================================================ */}
      {/* BACKGROUND FAINT SUDARSHAN CHAKRA SILHOUETTE */}
      {/* ============================================================ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:opacity-25 z-0">
        <SudarshanChakra
          size={window.innerWidth < 640 ? 550 : 850}
          spinSpeed="ultra-slow"
          glowIntensity="cosmic"
        />
      </div>

      {/* Ambient Cosmic Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid Layout: Left Content, Right Identity Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column (7 cols): Typographic Hero & Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          {/* Status Badge with Mini Chakra */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="uppercase font-semibold">{personal.role}</span>
          </div>

          {/* Large Main Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white uppercase leading-none">
              <span className="bg-gradient-to-r from-white via-neutral-100 to-white/70 bg-clip-text text-transparent">
                {personal.heroHeading}
              </span>
            </h1>

            {/* 4 Statement Words */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-base sm:text-xl xl:text-2xl font-bold font-mono tracking-wide text-cyan-300">
              {personal.heroKeywords.map((word, i) => (
                <span
                  key={i}
                  className={
                    word.includes('DEVELOPER')
                      ? 'text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                      : 'text-neutral-300'
                  }
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            {personal.heroBio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              id="hero-primary-cta"
              href="#journey"
              onClick={(e) => scrollToSection(e, 'journey')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-neutral-950 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>EXPLORE MY JOURNEY</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-secondary-cta"
              href="#lab"
              onClick={(e) => scrollToSection(e, 'lab')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-cyan-400/50 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>MY LEARNING LAB</span>
            </a>
          </div>

          {/* Quick Metrics / Focus Badges */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left font-mono">
            <div>
              <span className="text-[10px] text-white/40 uppercase block tracking-wider">FOCUS</span>
              <span className="text-sm font-bold text-amber-300">{personal.currentFocus}</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase block tracking-wider">STAGE</span>
              <span className="text-sm font-bold text-cyan-300">FOUNDATION</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase block tracking-wider">DIRECTION</span>
              <span className="text-sm font-bold text-white/90">BUILDING</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Cosmic Visual & Card */}
        <div className="lg:col-span-5 flex justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <a
        id="scroll-to-about-indicator"
        href="#about"
        onClick={(e) => scrollToSection(e, 'about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/40 hover:text-amber-300 transition-colors font-mono text-[10px] tracking-widest uppercase cursor-pointer"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
      </a>
    </section>
  );
};
