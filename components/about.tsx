import Link from 'next/link'
import Container from './container'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <section id="about" className="border-t lg:border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40 w-full">
      <Container>
        <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-2xl">
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
                About.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed">
                I'm Putra, a Developer and Design Technologist with expertise in Technical Project Management, based South Jersey/Philadelphia area. I'm also the co-founder of <Link href="https://offred.co" target="_blank" className="font-bold text-teal-600 dark:text-teal-500 hover:underline">Off Red</Link>, where we design and develop apps to satisfy our own curiosities and love for reality shows.
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed">
                In my role as a Design Technologist Lead, I excel in bridging the gap between design and engineering, overseeing projects from initial prototypes to refined production code. Leveraging my dual role as an engineer and technical project manager, I efficiently create and manage design libraries, collaborating seamlessly with cross-functional teams, including UX Designers, Backend Engineers, and Product Owners. I’m passionate about leveraging my skills to elevate digital projects to their full potential.
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed">
                When I'm not immersed in code, I indulge my love for gardening, sharing my passion on Instagram and TikTok <Link href="https://instagram.com/goodpathgarden" target="_blank" className="font-bold text-teal-600 dark:text-teal-500 hover:underline">@goodpathgarden</Link>. In addition, my competitive spirit shines as I co-founded and manage a fantasy league app dedicated to the hit reality show "Big Brother" alongside my husband <Link href="https://imjohnbon.com" target="_blank" className="font-bold text-teal-600 dark:text-teal-500 hover:underline">John</Link>, aptly named <Link href="https://fantasybb.com" target="_blank" className="font-bold text-teal-600 dark:text-teal-500 hover:underline">FantasyBB</Link>.
              </p>
            </Fade>
          </div>

          <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
            <div className="auto-rows-[130px] grid grid-cols-2 gap-4 mt-10 self-center md:mt-20 md:gap-8 lg:pl-16 xl:pl-24">
              <div className="row-span-2 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-neutral-900 shadow-md via-teal-300 to-violet-500">
                <img
                  src="/assets/about/about--pic-01.webp"
                  className="grayscale-[60%] h-full object-cover"
                  alt="Portrait of Putra Bonaccorsi"
                  loading="lazy"
                />
              </div>

              <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden shadow-md">
                <img
                  src="/assets/about/about--pic-02.webp"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  alt="Wide shot of the @GoodPathGarden"
                  loading="lazy"
                />
              </div>

              <div className="row-span-2 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden shadow-md">
                <img
                  src="/assets/about/about--pic-03.webp"
                  className="grayscale h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  alt="Screenshot of FantasyBB"
                  loading="lazy"
                />
              </div>

              <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden shadow-md">
                <img
                  src="/assets/about/about--pic-04.webp"
                  className="grayscale w-full h-full object-cover transition-all duration-500 ease-out hover:grayscale-0"
                  alt="Wide shot of Tulips"
                  loading="lazy"
                />
              </div>
            </div>
          </Fade>
        </div>

        <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -right-40 -top-1/2 z-[-1]"></div>
      </Container>
    </section >
  )
}

export default About
