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
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Small Technical Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="font-mono text-[11px] text-cyan-400/90 uppercase tracking-[0.3em] bg-cyan-400/10 px-3.5 py-1.5 rounded-sm border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              Student / Java Learner
            </span>
          </motion.div>

          {/* Main Display Name (Immersive UI Monumental Title - Single Line DEBANGAN) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[104px] font-black leading-none tracking-tighter text-white uppercase select-none whitespace-nowrap">
              DEBANGAN
            </h1>
          </motion.div>

          {/* Authentic Description with Vertical Line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg font-light text-white/70 leading-relaxed mb-10 max-w-[460px] border-l-2 border-white/20 pl-6 italic"
          >
            Learning. Building. Becoming.<br />
            Developing skills one step at a time from West Bengal, India.
          </motion.p>

          {/* Action CTAs (High Contrast Immersive UI Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-6 items-center"
          >
            <a
              id="hero-primary-cta"
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-200 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Explore My Work</span>
              <span>&rarr;</span>
            </a>

            <a
              id="hero-secondary-cta"
              href="#journey"
              onClick={(e) => scrollToSection(e, 'journey')}
              className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:border-white hover:bg-white/5 transition-all duration-200 active:scale-95"
            >
              My Journey
            </a>
          </motion.div>

          {/* Numbered Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-white/10 max-w-md"
          >
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                01 / Current Focus
              </span>
              <span className="font-mono text-sm tracking-wide text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Java Development
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                02 / Location
              </span>
              <span className="font-mono text-sm tracking-wide text-neutral-200 font-medium">
                West Bengal, India
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: High-Tech Profile Visual Identity */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroVisual />
        </div>

      </div>

      {/* Subtle Scroll Down Prompt at Base of Hero */}
      <div className="pt-12 sm:pt-16 flex justify-center">
        <a
          id="scroll-to-about-indicator"
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center gap-2 text-[10px] font-mono text-white/30 hover:text-cyan-400 transition-colors uppercase tracking-[0.4em] group"
        >
          <span>SCROLL TO EXPLORE &darr;</span>
        </a>
      </div>
    </section>
  );
};
