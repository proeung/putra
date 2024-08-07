import React, { useRef, useEffect, useState } from 'react';
import Container from './container';
import { Fade } from 'react-awesome-reveal';

const sandboxItems = [
  {
    title: 'Leadspace - Web Components',
    url: 'https://codesandbox.io/p/sandbox/ibm-lets-create-leadspace-ds0d0u?file=%2Findex.html',
    videoSrc: '/assets/sandbox/sandbox--ibm-leadspace.mp4',
    posterSrc: '/assets/sandbox/sandbox--ibm-leadspace-poster.webp'
  },
  {
    title: 'Leader Board - Tailwind CSS',
    url: 'https://codesandbox.io/p/sandbox/unruffled-rain-8y5d9g?file=%2Findex.html',
    videoSrc: '/assets/sandbox/sandbox--fantasybb-hero.mp4',
    posterSrc: '/assets/sandbox/sandbox--fantasybb-hero-poster.webp'
  },
  {
    title: 'Masthead - Web Components',
    url: 'https://codesandbox.io/p/sandbox/ibm-masthead-v2-lexu76?file=%2Findex.html',
    videoSrc: '/assets/sandbox/sandbox--ibm-masthead-v2.mp4',
    posterSrc: '/assets/sandbox/sandbox--ibm-masthead-v2-poster.webp'
  },
  {
    title: 'Sortable Table - React',
    url: 'https://github.com/proeung/sortable-table',
    videoSrc: '/assets/sandbox/sandbox--sortable-table.mp4',
    posterSrc: '/assets/sandbox/sandbox--sortable-table-poster.webp'
  },
  {
    title: 'Accessible Menu - Tailwind CSS',
    url: 'https://github.com/proeung/accessible-menu',
    videoSrc: '/assets/sandbox/sandbox--accessible-menu.mp4',
    posterSrc: '/assets/sandbox/sandbox--accessible-menu-poster.webp'
  },
  {
    title: 'Leadspace - Web Components',
    url: 'https://codesandbox.io/p/sandbox/leadspace-centered-ic4r8w?file=%2Findex.html',
    videoSrc: '/assets/sandbox/sandbox--ibm-centered-leadspace.mp4',
    posterSrc: '/assets/sandbox/sandbox--ibm-centered-leadspace-poster.webp'
  }
];

const MoreSandBox = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(Array(sandboxItems.length).fill(false));

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  }, []);

  const handleMouseOver = async (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused && !isPlaying[index]) {
        try {
          await video.play();
          setIsPlaying((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        } catch (error) {
          console.error(`Failed to play video at index ${index}: ${error}`);
        }
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (!video.paused && isPlaying[index]) {
        video.pause();
        video.currentTime = 0;
        setIsPlaying((prevState) => {
          const newState = [...prevState];
          newState[index] = false;
          return newState;
        });
      }
    }
  };

  return (
    <section id="sandbox" className="border-t border-slate-900/10 dark:border-slate-50/[0.1] bg-slate-100 py-16 dark:bg-slate-800 md:py-40 relative w-full overflow-y-hidden">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-20 -bottom-1/4 -z-1 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="max-w-2xl">
          <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
            <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
              Sandbox.
            </h2>
            <p className="mt-4 md:mt-6 text-base text-zinc-600 max-w-sm md:text-lg md:max-w-lg dark:text-zinc-400">
              Step into my playground, where I experiment with new frameworks and transform ideas into living prototypes.
            </p>
          </Fade>
        </div>

        <Fade delay={1e2} triggerOnce className="h-full will-change-transform">
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-20">
            {sandboxItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="bg-white row-span-1 rounded-2xl md:rounded-3xl p-4 text-zinc-800 hover:shadow-xl dark:text-zinc-400  dark:bg-slate-900 hover:bg-white hover:dark:bg-slate-950 transition duration-300 ease-out hover:ease-in card"
                onMouseOver={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="aspect-video border lg:border-slate-900/10 dark:border-transparent relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      loop
                      muted
                      playsInline
                      className="w-full h-full max-w-none object-cover object-top"
                      poster={item.posterSrc}
                      src={item.videoSrc}
                      aria-label={`Video screenshot of ${item.title}`}
                    >
                    </video>
                  </div>
                </div>
                <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">{item.title}</h3>
              </a>
            ))}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default MoreSandBox;