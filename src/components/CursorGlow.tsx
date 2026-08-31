import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only render on non-touch desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const glowEl = glowRef.current;
    if (!glowEl) return;

    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;
    let isVisible = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        glowEl.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      glowEl.style.opacity = '0';
    };

    const updatePosition = () => {
      // Smooth lerp to reduce high-frequency jitter
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;

      glowEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-30 opacity-0 transition-opacity duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* Subtle dual-core pointer light (Gold & Cyan) */}
      <div className="w-[340px] h-[340px] bg-gradient-to-tr from-amber-500/[0.04] via-cyan-500/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
