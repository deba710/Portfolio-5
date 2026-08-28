/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Milestones } from './components/Milestones';
import { PersonalIdentity } from './components/PersonalIdentity';
import { Interests } from './components/Interests';
import { NorthStar } from './components/NorthStar';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-neutral-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Ambient background grid and blurred atmospheric lighting */}
      <BackgroundEffect />

      {/* Desktop pointer-following smooth glow */}
      <CursorGlow />

      {/* Sticky frosted glass navbar with active spy and scroll progress */}
      <Navbar />

      {/* Main content sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Milestones />
        <PersonalIdentity />
        <Interests />
        <NorthStar />
        <Resume />
        <Contact />
      </main>

      {/* Distinctive Footer */}
      <Footer />
    </div>
  );
}
