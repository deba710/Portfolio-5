import React, { useState } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { BackgroundEffect } from './components/BackgroundEffect';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { LearningLab } from './components/LearningLab';
import { GitHubHighlight } from './components/GitHubHighlight';
import { Mindset } from './components/Mindset';
import { RoadAhead } from './components/RoadAhead';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030305] text-neutral-100 selection:bg-amber-500/20 selection:text-amber-200">
      {/* Cinematic Intro & Loading Experience (Sudarshan Chakra 0% -> 100% with Laser Slicing) */}
      {!introCompleted && (
        <CinematicIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Atmospheric Background Geometry & Cosmic Ambient Glow */}
      <BackgroundEffect isRevealed={introCompleted} />

      {/* Subtle Desktop Pointer Light (Gold/Cyan) */}
      <CursorGlow />

      {/* Sticky Frosted Header Navbar */}
      <Navbar />

      {/* Main Content Sections with Chakra Design System */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <LearningLab />
        <GitHubHighlight />
        <Mindset />
        <RoadAhead />
        <Contact />
      </main>

      {/* Cinematic Footer with Rotating Chakra */}
      <Footer />
    </div>
  );
}
