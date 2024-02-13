import React, { useEffect, useRef } from 'react';

const LazyVideo = ({ label, src, poster }) => {
  const videoRef = useRef(null);

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
      autoPlay
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
