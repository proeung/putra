import React, { useEffect } from 'react';
import Container from "./container";
import { Fade } from 'react-awesome-reveal';
import LazyVideo from './lazy-video';

const MoreWork = () => {

  return (
    <section id="work" className="pt-12 pb-16 md:pb-40 md:pt-28">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -top-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2 lg:col-span-1">
            <Fade delay={.5} triggerOnce>
              <img
                src="/assets/work/ibm/work--ibm-thumb.webp"
                className="w-full h-full object-cover"
                alt="Thumbnail showcasing projects from working at IBM"
                loading="lazy"
              />
            </Fade>
          </div>

          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <Fade delay={.5} triggerOnce>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                  <LazyVideo
                    src="/assets/work/outrider/work--outrider.mp4"
                    poster="/assets/work/outrider/work--outrider-poster.webp"
                  />
                </div>
              </div>
            </Fade>
          </div>

          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <Fade delay={.5} triggerOnce>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                  <LazyVideo
                    src="/assets/work/albright-knox/work--albright-knox.mp4"
                    poster="/assets/work/albright-knox/work--albright-knox-poster.webp"
                  />
                </div>
              </div>
            </Fade>
          </div>

          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden p-4 md:p-10">
            <Fade delay={.5} triggerOnce>
              <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-6 rounded-t-lg bg-gray-200 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <img
                  src="/assets/work/merative/work--merative-thumb.webp"
                  className="w-full h-full object-cover"
                  alt="Thumbnail showcasing projects from working at Merative"
                  loading="lazy"
                />
              </div>
            </Fade>
          </div>

          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden">
            <Fade delay={.5} triggerOnce>
              <img
                src="/assets/work/merative/work--merative-thumb-02.webp"
                className="w-full h-full"
                alt="Thumbnail showcasing email web marketing project from Merative"
              />
            </Fade>
          </div>

          <div className="row-span-1 rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
            <Fade delay={.5} triggerOnce>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0">
                  <LazyVideo
                    src="/assets/work/happy-cog/work--happy-cog-homepage.mp4"
                    poster="/assets/work/happy-cog/work--happy-cog-homepage-poster.webp"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none blob absolute opacity-30 -left-40 -bottom-1/4 z-[-1] w-[40rem] h-[40rem]"></div>
      </Container>
    </section>
  )
}

export default MoreWork;
