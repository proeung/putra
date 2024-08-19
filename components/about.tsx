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
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="flex justify-between items-center mb-6 lg:mb-8">
              <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
                <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
                  About.
                </h2>
                <p className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-900/10 dark:border-slate-50/[0.2] py-1.5 pl-3 pr-4 text-xs md:text-sm text-zinc-600  dark:text-zinc-200">
                  <span className="relative flex h-3 w-3 mr-1">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  Available for select freelance
                </p>
              </Fade>
            </div>
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                I'm Putra, a Developer and Design Technologist with expertise in Technical Project Management, based in the South Jersey/Philadelphia, PA area. I'm also the owner and co-founder of <Link href="https://offred.co" target="_blank">Off Red</Link>, a company that specializes in creating dynamic websites, cutting-edge web applications, and premium user experiences.
              </p>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                As a Developer/Design Technologist Lead, I excel at bridging the gap between design and engineering, overseeing projects from initial prototypes to production. Leveraging my dual role as an engineer and technical project manager, I efficiently create and manage design system libraries while collaborating seamlessly with cross-functional teams, including UX Designers, Backend Engineers, and Product Owners. I’m passionate about using my skills to help digital projects reach their full potential.
              </p>
              <p className="mt-4 md:mt-6 text-base/relaxed md:text-lg/relaxed">
                When I'm not coding, I indulge my love for gardening by sharing my passion on <Link href="https://instagram.com/goodpathgarden" target="_blank">Instagram</Link> and <Link href="https://tiktok.com/@goodpathgarden" target="_blank">TikTok</Link> (@goodpathgarden). In addition, my competitive spirit shines as I co-founded and manage a fantasy league app dedicated to the hit reality show Big Brother alongside my husband <Link href="https://imjohnbon.com" target="_blank">John</Link>, aptly named <Link href="https://fantasybb.com" target="_blank">FantasyBB</Link>.
              </p>
            </Fade>
          </div>


          <div className="auto-rows-[150px] grid grid-cols-2 gap-4 self-end md:gap-8 lg:pl-16 xl:pl-24">
            <div className="bg-neutral-100 row-span-2 rounded-2xl md:rounded-3xl  dark:bg-slate-800 overflow-hidden  shadow-sm bg-gradient-to-tr from-violet-600 via-indigo-500 to-teal-400 bg-300% animate-gradient">
              <Fade delay={.5} triggerOnce className="h-full will-change-transform">
                <Image
                  src="/assets/about/about--pic-01.webp"
                  alt="Portrait of Putra Bonaccorsi"
                  className="grayscale-[60%] h-full object-cover"
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
