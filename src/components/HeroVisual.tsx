import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { useProfilePhoto } from '../utils/useProfilePhoto';

export const HeroVisual: React.FC = () => {
  const { personal } = portfolioData;
  const { photoSrc, hasError, setHasError, updatePhoto } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updatePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updatePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none flex items-center justify-center">
      {/* Surrounding concentric ambient circular wireframes */}
      <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none" />

      {/* Hidden File Input for direct photo selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload profile portrait"
      />

      {/* Main Holographic Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="w-full sm:w-[420px] min-h-[520px] border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl flex flex-col p-7 sm:p-8 shadow-2xl relative overflow-hidden group"
      >
        {/* Top Right Profile ID coordinate */}
        <div className="absolute top-0 right-0 p-5 font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
          Profile ID: {personal.coordinates || '22.5726° N'}
        </div>

        {/* Circular portrait frame */}
        <div
          onClick={triggerUpload}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mb-6 relative cursor-pointer group/avatar"
          title="Click to update portrait photo"
        >
          {/* Subtle surrounding glow ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover/avatar:border-cyan-400/50 group-hover/avatar:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all pointer-events-none" />

          <div className="w-20 h-20 bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] relative">
            {!hasError && photoSrc ? (
              <img
                src={photoSrc}
                alt={personal.name}
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 group-hover/avatar:scale-105"
                onError={() => setHasError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-cyan-900 to-purple-900 flex items-center justify-center">
                <span className="text-4xl font-serif italic text-white">D</span>
              </div>
            )}
          </div>
        </div>

        {/* Name and Designation */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1 uppercase text-white">
          {personal.name}
        </h2>
        <span className="font-mono text-xs text-cyan-400 mb-6 block uppercase tracking-[0.2em]">
          [ Beginner Programmer ]
        </span>

        {/* Data Specification Rows */}
        <div className="space-y-4 font-mono">
          <div className="flex justify-between items-end border-b border-white/10 pb-3.5">
            <div>
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">PRIMARY TECH</span>
              <span className="text-sm text-neutral-100 font-semibold font-sans">Java SE</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">PRACTICING</span>
            </div>
          </div>

          <div className="flex justify-between items-end border-b border-white/10 pb-3.5">
            <div>
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">METHODOLOGY</span>
              <span className="text-sm text-neutral-100 font-semibold font-sans">Problem Solving</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-white/40 uppercase tracking-widest">EXPLORING</span>
            </div>
          </div>

          <div className="flex justify-between items-end border-b border-white/10 pb-3.5">
            <div>
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">REPOSITORY</span>
              <a 
                href="#projects" 
                className="text-sm text-neutral-200 hover:text-cyan-300 italic underline underline-offset-2 transition-colors font-sans"
              >
                /github/debangan
              </a>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-cyan-300 uppercase tracking-widest font-semibold">2 PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Progress Gauge */}
        <div className="mt-auto pt-8 flex items-center gap-3">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 w-1/3 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
          </div>
          <span className="font-mono text-[10px] text-white/40 whitespace-nowrap uppercase tracking-widest">
            Level 01
          </span>
        </div>

        {/* Ambient warm orange blur in corner */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
};
