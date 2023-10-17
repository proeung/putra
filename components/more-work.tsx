import React, { useEffect } from 'react';
import Container from "./container";

const MoreWork = () => {

  useEffect(() => {
    const lazyVideos = Array.from(document.querySelectorAll<HTMLVideoElement>('video.lazy'));

    if ('IntersectionObserver' in window) {
      const lazyVideoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            Array.from(entry.target.children).forEach(child => {
              if (child instanceof HTMLSourceElement) {
                child.src = child.dataset.src || '';
              }
            });

            // Typecast to HTMLVideoElement
            const videoElement = entry.target as HTMLVideoElement; 

            // Call load() on the typed videoElement
            videoElement.load();
            videoElement.classList.remove('lazy');
            lazyVideoObserver.unobserve(videoElement);
          }
        });
      });

      lazyVideos.forEach(lazyVideo => {
        lazyVideoObserver.observe(lazyVideo);
      });
    }

    return () => {
      // Clean up the observer when the component unmounts
      const lazyVideoObserver = new IntersectionObserver(() => {});
      lazyVideos.forEach(lazyVideo => {
        lazyVideoObserver.unobserve(lazyVideo);
      });
    };
  }, []);

  return (
    <section id="work" className="md:mb-40 pt-28">
      <Container>
        <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -right-40 -top-56 z-[-1]"></div>
        <div className="grid grid-cols-3 gap-8">
          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="/assets/work/ibm/work--ibm-thumb.webp"
              className=""
              alt=""
              loading="lazy"
            />
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="lazy object-cover w-full h-full" poster="/assets/work/outrider/work--outrider-poster.webp">
                        <source data-src="/assets/work/outrider/work--outrider.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="lazy object-cover w-full h-full" poster="/assets/work/albright-knox/work--albright-knox-poster.webp">
                        <source data-src="/assets/work/albright-knox/work--albright-knox.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden p-10">
            <div className="w-full h-full shadow-lg h-full rounded-lg overflow-hidden">
              <div className="w-full h-6 rounded-t-lg bg-gray-200 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <img
                src="/assets/work/merative/work--merative-thumb.webp"
                className="h-full object-cover"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="/assets/work/merative/work--merative-thumb-02.webp"
              className=""
              alt=""
            />
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="lazy object-cover w-full h-full" poster="/assets/work/happy-cog/work--happy-cog-homepage-poster.webp">
                        <source data-src="/assets/work/happy-cog/work--happy-cog-homepage.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
          </div>        
        </div>

        <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -left-40 -bottom-1/4 z-[-1]"></div>
      </Container>
    </section>
  )
}

export default MoreWork
