import { useState, useEffect } from 'react';
import { portfolioData, profilePhoto } from '../data/portfolio';

const STORAGE_KEY = 'debangan_profile_photo';
const EVENT_NAME = 'debangan_photo_updated';

export const getStoredProfilePhoto = (): string => {
  if (typeof window === 'undefined') return profilePhoto;
  return localStorage.getItem(STORAGE_KEY) || profilePhoto || portfolioData.personal.photoUrl || '/profile.jpg';
};

export const setStoredProfilePhoto = (newPhoto: string): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, newPhoto);
    } catch {
      // Storage quota fallback
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: newPhoto }));
  }
};

export const useProfilePhoto = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => getStoredProfilePhoto());
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const handlePhotoUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
        setHasError(false);
      } else {
        setPhotoSrc(getStoredProfilePhoto());
        setHasError(false);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setPhotoSrc(e.newValue);
        setHasError(false);
      }
    };

    window.addEventListener(EVENT_NAME, handlePhotoUpdate);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(EVENT_NAME, handlePhotoUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return {
    photoSrc,
    hasError,
    setHasError,
    updatePhoto: setStoredProfilePhoto,
  };
};
