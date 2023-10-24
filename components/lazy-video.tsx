import React, { useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster }) => {
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
  }, []);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="lazy object-cover w-full h-full"
      poster={poster}
      ref={videoRef}
      data-src={src}
    >
      <source data-src={src} type="video/mp4" />
    </video>
  );
};

export default LazyVideo;
