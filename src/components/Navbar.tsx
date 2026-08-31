import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { SudarshanChakra } from './SudarshanChakra';
import { Menu, X, ArrowUpRight, Terminal, Github, Linkedin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { personal, contact, navigation } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll spy & progress calculation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
          setScrollProgress(progress);

          const sectionIds = ['hero', 'about', 'journey', 'skills', 'lab', 'github-section', 'mindset', 'road-ahead', 'contact'];
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 160) {
                setActiveSection(sectionIds[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === 'hero' || targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Scroll Progress Bar at Top */}
      <div
        className="h-[2px] bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 shadow-[0_0_10px_#f59e0b] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Frosted Glass Nav Bar */}
      <div className="bg-[#030305]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Brand Identity / Monogram with Rotating Mini Chakra */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              <SudarshanChakra size={26} spinSpeed="fast" glowIntensity="subtle" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest uppercase group-hover:text-amber-300 transition-colors">
                {personal.monogram}
              </span>
              <span className="text-[9px] font-mono text-cyan-400/80 tracking-wider">
                {personal.currentFocus} LEARNER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  id={`nav-link-${targetId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-2 rounded-lg transition-all uppercase tracking-wider font-medium cursor-pointer ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 border border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-amber-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Social Profiles & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Desktop GitHub */}
            <a
              id="nav-social-github"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub: deba710"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/50 text-neutral-300 hover:text-cyan-300 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Desktop LinkedIn */}
            <a
              id="nav-social-linkedin"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn: Debangan Bera"
              aria-label="LinkedIn Profile"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/50 text-neutral-300 hover:text-amber-300 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white hover:text-amber-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030305]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 font-mono text-xs">
            {navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  id={`mobile-nav-link-${targetId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-lg uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-400/30 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </a>
              );
            })}
          </nav>

          {/* Mobile Socials */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <a
              id="mobile-social-github"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              id="mobile-social-linkedin"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              <Linkedin className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
