import { useState, useRef, useEffect } from "react";
import LazyVideo from "./lazy-video";

type Props = {
  src: string
  poster: string
  label: string
  pauseOnHover?: boolean
}

const CoverVideo = ({ label, src, poster, pauseOnHover = false }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (pauseOnHover && videoRef.current && isPlaying) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (pauseOnHover && videoRef.current && !isFocused) {
      videoRef.current.play();
    }
  };

  const showButton = (isHovered || isFocused) && !pauseOnHover;

  useEffect(() => {
    if (!pauseOnHover) return;

  }, [pauseOnHover, isHovered]);

  return (
    <>
      <div
        className={`relative aspect-video overflow-hidden h-full group ${!pauseOnHover ? 'cursor-pointer' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={!pauseOnHover ? togglePlayPause : undefined}
      >
        <div className="absolute inset-0 top-0">
          <LazyVideo
            src={src}
            poster={poster}
            label={label}
            videoRef={videoRef}
          />
        </div>

        {!pauseOnHover && (
          <button
            type="button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            onClick={togglePlayPause}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`absolute bottom-5 right-5 lg:bottom-7 lg:right-7 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-slate-950 flex items-center justify-center transition-all duration-200 cursor-pointer z-10 shadow-xl/20 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${showButton ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </>
  );
}

export default CoverVideo;
