import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, Terminal, MapPin, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[calc(100vh-5rem)] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-12 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center my-auto">
        
        {/* Left Column: Hero Typography & CTAs (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Small Technical Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-cyan-400 uppercase tracking-[0.25em] bg-cyan-400/10 px-3.5 py-1.5 rounded-sm border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Student / Java Learner
            </span>
          </motion.div>

          {/* Main Display Name (Heroic Monumental Title - Scaled with clamp and responsive breakpoints) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-6 sm:mb-7"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[84px] 2xl:text-[96px] font-black leading-none tracking-tighter text-white uppercase select-none break-normal">
              DEBANGAN
            </h1>
          </motion.div>

          {/* Authentic Description with Vertical Accent Line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-lg xl:text-xl font-light text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-xl border-l-2 border-cyan-400/40 pl-5 sm:pl-6 italic"
          >
            Learning. Building. Becoming.<br />
            <span className="text-white/60 not-italic font-normal text-sm sm:text-base">
              Developing software fundamentals and problem solving one step at a time from West Bengal, India.
            </span>
          </motion.p>

          {/* Action CTAs (High Contrast Immersive UI Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-5 items-center"
          >
            <a
              id="hero-primary-cta"
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="bg-white text-black px-7 sm:px-8 py-3.5 sm:py-4 text-xs font-mono font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-200 active:scale-95 flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
            >
              <span>Explore My Work</span>
              <span>&rarr;</span>
            </a>

            <a
              id="hero-secondary-cta"
              href="#journey"
              onClick={(e) => scrollToSection(e, 'journey')}
              className="border border-white/20 px-7 sm:px-8 py-3.5 sm:py-4 text-xs font-mono font-bold uppercase tracking-widest text-white hover:border-cyan-400/60 hover:bg-white/5 hover:text-cyan-300 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              My Journey
            </a>
          </motion.div>

          {/* Numbered Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-8 sm:mt-12 grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10 max-w-md"
          >
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                01 / Current Focus
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-wide text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Java Development
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                02 / Location
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-wide text-neutral-200 font-medium">
                West Bengal, India
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: High-Tech Profile Visual Identity (5 cols on desktop) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <HeroVisual />
        </div>

      </div>

      {/* Subtle Scroll Down Prompt at Base of Hero */}
      <div className="pt-6 sm:pt-8 lg:pt-4 flex justify-center">
        <a
          id="scroll-to-about-indicator"
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center gap-2 text-[10px] font-mono text-white/40 hover:text-cyan-400 transition-colors uppercase tracking-[0.35em] group"
        >
          <span>SCROLL TO EXPLORE &darr;</span>
        </a>
      </div>
    </section>
  );
};
