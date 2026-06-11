import Container from '@/components/container';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarAdd } from '@carbon/icons-react';

const About = () => {
  return (
    <section id="about" className="border-t border-slate-900/10 py-16 dark:border-slate-50/10 md:py-40 w-full">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -top-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="mx-auto grid items-center xl:max-w-none xl:grid-cols-2">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="flex justify-between items-center mb-6 lg:mb-8">
              <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
                <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
                  About.
                </h2>
                {false && (
                <p className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-900/10 dark:border-slate-50/20 py-2 pl-3 pr-4 text-xs md:text-sm text-zinc-600  dark:text-zinc-200">
                  <span className="relative flex h-3 w-3 mr-1">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  Booking new projects for 2026
                </p>
                )}
              </Fade>
            </div>
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                I’m Putra, a Developer and Design Technologist based in the South Jersey/Philadelphia area, with a background in Technical Project Management and over 14 years of experience helping agencies and businesses ship great digital work. Through my consultancy, <Link href="https://offred.co" target="_blank">Off Red LLC</Link>, I partner with creative agencies to build scalable websites and design systems — bringing design and code closer together using React, enterprise CMSes, modern frontend tooling, and AI-assisted workflows.
              </p>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                I love the craft of turning complex design visions into real, working experiences — building component systems that hold up at scale and feel right to use. I’ve had the chance to work with clients like IBM, Merative, Princeton University Art Museum, Council on Foreign Relations, WHYY, the Smithsonian National Air and Space Museum, and Outrider Foundation, building accessible, performance-focused websites with custom animations, data visualizations, and thoughtful interactions.
              </p>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                Outside of work, I spend a lot of time in the garden — you can follow along on <Link href="https://instagram.com/goodpathgarden" target="_blank">Instagram</Link> and <Link href="https://tiktok.com/@goodpathgarden" target="_blank">TikTok</Link> (@goodpathgarden). My husband <Link href="https://imjohnbon.com" target="_blank">John</Link> and I also built <Link href="https://tellydraft.com" target="_blank">TellyDraft</Link>, a fantasy games app for reality TV fans that we run together.
              </p>

              <p className="mt-8 mb-12 md:mt-10 xl:mb-0">
                <Link className="button" href="https://zcal.co/putrabonaccorsi/30min" target="_blank">
                  Schedule an Intro Call <CalendarAdd size={16} />
                </Link>
              </p>
            </Fade>
          </div>

          <div className="auto-rows-[150px] grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-2 xl:pl-24">
            <div className="bg-neutral-100 row-span-2 rounded-2xl md:rounded-3xl dark:bg-slate-800 overflow-hidden  shadow-sm bg-linear-to-tr from-violet-600 via-indigo-500 to-teal-400 bg-size-[300%] animate-gradient">
              <Fade delay={.5} triggerOnce className="h-full will-change-transform">
                <Image
                  src="/assets/about/about--pic-01.webp"
                  alt="Portrait of Putra Bonaccorsi"
                  className="grayscale-60 h-full object-cover"
                  width={1024}
                  height={678}
                />
              </Fade>
            </div>

            <div className="bg-neutral-100 overflow-hidden row-span-1 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
              <Fade delay={.5} triggerOnce className="h-full will-change-transform">
                <Image
                  src="/assets/about/about--pic-02.webp"
                  alt="Wide shot of the @GoodPathGarden"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </Fade>
            </div>

            <div className="bg-neutral-100 overflow-hidden row-span-2 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
              <Fade delay={.5} triggerOnce className="h-full will-change-transform">
                <Image
                  src="/assets/about/about--pic-03.webp"
                  alt="Screenshot of FantasyBB"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </Fade>
            </div>

            <div className="bg-neutral-100 overflow-hidden row-span-1 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
              <Fade delay={.5} triggerOnce className="h-full will-change-transform">
                <Image
                  src="/assets/about/about--pic-04.webp"
                  alt="Wide shot of Tulips"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </Fade>
            </div>
          </div>

        </div>
      </Container>
    </section >
  );
}

export default About;
