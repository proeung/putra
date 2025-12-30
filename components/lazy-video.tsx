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
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionPreferenceChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setShouldAutoPlay(!e.matches);
    };

    // Set initial value
    handleMotionPreferenceChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.src = videoElement.dataset.src || '';
          videoElement.load();
          videoElement.classList.remove('lazy');
          observer.unobserve(videoElement);
        }
      });
    };

    const lazyVideoObserver = new IntersectionObserver(handleIntersection);

    if (videoElement) {
      lazyVideoObserver.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        lazyVideoObserver.unobserve(videoElement);
      }
    };
  }, [src, poster]);

  return (
    <video
      autoPlay={shouldAutoPlay}
      loop
      muted
      playsInline
      className="w-full h-full max-w-none object-cover object-top"
      poster={poster}
      ref={videoRef}
      data-src={src}
      aria-label={label}
      disableRemotePlayback
    >
      <source data-src={src} type="video/mp4" />
    </video>
  );
};

export default LazyVideo;
