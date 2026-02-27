import React, { useEffect, useRef, useState, RefObject } from 'react';

type Props = {
  label: string;
  src: string;
  poster: string;
  videoRef?: RefObject<HTMLVideoElement>;
};

const LazyVideo = ({ label, src, poster, videoRef: externalRef }: Props) => {
  const internalRef = useRef<HTMLVideoElement>(null);
  const videoRef = externalRef || internalRef;
  const loadedRef = useRef(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionPreferenceChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setShouldAutoPlay(!e.matches);
    };

    handleMotionPreferenceChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!loadedRef.current) {
              videoElement.src = src;
              videoElement.load();
              loadedRef.current = true;
            }
            if (shouldAutoPlay) {
              videoElement.play().catch(() => {});
            }
          } else if (loadedRef.current) {
            videoElement.pause();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [src, shouldAutoPlay]);

  return (
    <video
      loop
      muted
      playsInline
      preload="none"
      className="w-full h-full max-w-none object-cover object-top"
      poster={poster}
      ref={videoRef}
      aria-label={label}
      disableRemotePlayback
    />
  );
};

export default LazyVideo;
