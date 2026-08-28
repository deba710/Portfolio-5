import React, { useState } from 'react';
import { profilePhoto } from '../data/portfolio';

interface PortraitImageProps {
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackText?: string;
}

const photoCandidates = [
  profilePhoto,
  '/images/debangan.jpg',
  '/images/debangan-1.jpg',
  '/debangan-1.jpg',
  '/images/debangan-1L.jpg',
  '/debangan-1L.jpg',
  '/debangan.jpg',
  '/profile.jpg',
].filter(Boolean);

export const PortraitImage: React.FC<PortraitImageProps> = ({
  alt,
  className = 'w-full h-full object-cover object-center',
  fallbackClassName = 'text-cyan-400 font-mono font-bold text-xl',
  fallbackText = 'D',
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (candidateIndex < photoCandidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  if (allFailed || photoCandidates.length === 0) {
    return <span className={fallbackClassName}>{fallbackText}</span>;
  }

  return (
    <img
      src={photoCandidates[candidateIndex]}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
};
