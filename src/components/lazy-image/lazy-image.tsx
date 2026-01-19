import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const LazyImage: React.FC<Props> = ({ src, alt, width, height }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '60px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef}>
      <Image
        src={src}
        alt={alt}
        className={`object-cover w-full transition-opacity duration-700 ease-in-out ${isVisible && isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
