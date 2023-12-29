import Container from './container';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="border-t lg:border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40 w-full">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -top-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="mx-auto grid lg:max-w-none lg:grid-cols-2">
          <div className="max-w-2xl">
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
                About.
              </h2>
              <p className="mt-6 text-base/relaxed md:text-lg/relaxed">
                I'm Putra, a Developer and Design Technologist with expertise in Technical Project Management, based in the South Jersey/Philadelphia, PA area. I'm also the co-founder of <Link href="https://offred.co" target="_blank">Off Red</Link>, where we design and develop apps to satisfy our own curiosities and love for reality shows.
              </p>
              <p className="mt-6 text-base/relaxed md:text-lg/relaxed">
                In my role as a Design Technologist Lead, I excel in bridging the gap between design and engineering, overseeing projects from initial prototypes to production. Leveraging my dual role as an engineer and technical project manager, I efficiently create and manage design system libraries, collaborating seamlessly with cross-functional teams, including UX Designers, Backend Engineers, and Product Owners. I’m passionate about leveraging my skills to elevate digital projects to their full potential.
              </p>
              <p className="mt-6 text-base/relaxed md:text-lg/relaxed">
                When I'm not immersed in code, I indulge my love for gardening, sharing my passion on Instagram and TikTok <Link href="https://instagram.com/goodpathgarden" target="_blank">@goodpathgarden</Link>. In addition, my competitive spirit shines as I co-founded and manage a fantasy league app dedicated to the hit reality show Big Brother alongside my husband <Link href="https://imjohnbon.com" target="_blank">John</Link>, aptly named <Link href="https://fantasybb.com" target="_blank">FantasyBB</Link>.
              </p>
            </Fade>
          </div>

          <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
            <div className="auto-rows-[140px] grid grid-cols-2 gap-4 mt-10 self-center md:mt-20 md:gap-8 lg:pl-16 xl:pl-24">
              <div className="bg-neutral-100 row-span-2 rounded-2xl md:rounded-3xl  dark:bg-slate-800 overflow-hidden  shadow-sm bg-gradient-to-tr from-violet-600 via-indigo-500 to-teal-400 bg-300% animate-gradient">
                <Image
                  src="/assets/about/about--pic-01.webp"
                  alt="Portrait of Putra Bonaccorsi"
                  className="grayscale-[60%] h-full object-cover"
                  width={1024}
                  height={678}
                />
              </div>

              <div className="bg-neutral-100 overflow-hidden row-span-1 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
                <Image
                  src="/assets/about/about--pic-02.webp"
                  alt="Wide shot of the @GoodPathGarden"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </div>

              <div className="bg-neutral-100 overflow-hidden row-span-2 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
                <Image
                  src="/assets/about/about--pic-03.webp"
                  alt="Screenshot of FantasyBB"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </div>

              <div className="bg-neutral-100 overflow-hidden row-span-1 rounded-2xl shadow-sm md:rounded-3xl dark:bg-slate-800">
                <Image
                  src="/assets/about/about--pic-04.webp"
                  alt="Wide shot of Tulips"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  width={1024}
                  height={678}
                />
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section >
  );
}

export default About;
