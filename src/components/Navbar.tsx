import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timeString, setTimeString] = useState('');

  // Live IST time indicator
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll spy & progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      const sectionIds = ['hero', 'about', 'journey', 'skills', 'projects', 'milestones', 'identity', 'resume', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/[0.05]">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#050505]/80 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-10 h-10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl bg-cyan-400/5 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-sm uppercase text-white/90">
                {portfolioData.personal.monogram}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-[0.2em] uppercase">
                Student • Java
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
            {portfolioData.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  id={`nav-link-${targetId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? 'text-cyan-400 font-bold'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Technical Info Widget & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Live Clock / Tech Status (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_6px_#06b6d4]"></span>
              <span className="text-white/40 uppercase tracking-tight">System Status:</span>
              <span className="text-cyan-400 uppercase font-semibold">Active</span>
              <span className="text-white/20">|</span>
              <span className="text-white/80">{timeString || 'LIVE'}</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/40 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-35 bg-[#05070c]/98 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Background grid details in mobile menu */}
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/70 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>NAVIGATION INDEX</span>
                <span>01 — 08</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {portfolioData.navigation.map((item, idx) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <a
                      key={item.label}
                      id={`mobile-nav-link-${targetId}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isActive
                          ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300'
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                        <span className="font-display font-bold text-lg tracking-wide">{item.label}</span>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-neutral-600'}`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer info */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-xs text-neutral-400">
              <div className="flex items-center justify-between">
                <span>STUDENT • JAVA LEARNER</span>
                <span className="text-cyan-400 font-semibold">{timeString} IST</span>
              </div>
              <div className="text-[11px] text-neutral-500">
                {portfolioData.personal.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
