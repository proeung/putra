import Container from './container';
import { Fade } from 'react-awesome-reveal';

const MoreSandBox = () => {
  return (
    <section id="sandbox" className="border-t border-slate-900/10 dark:border-slate-50/[0.1] bg-slate-100 py-16 dark:bg-slate-800 md:py-40 relative w-full">
      <Container>
        <div className="max-w-2xl">
          <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
            <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
              Sandbox.
            </h2>
            <p className="mt-4 md:mt-6 text-base text-zinc-600 max-w-sm md:text-lg md:max-w-lg dark:text-zinc-400">
              Step into my playground, where  I experiment with new frameworks and transforming ideas into living prototypes.
            </p>
          </Fade>
        </div>

        <Fade delay={1e2} triggerOnce>
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-20">
            <a href="https://codesandbox.io/s/ibm-lets-create-leadspace-ds0d0u" target="_blank" className="bg-white row-span-1 rounded-2xl md:rounded-3xl overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
              <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline preload="auto" className="object-cover w-full h-full">
                    <source src="/assets/sandbox/sandbox--ibm-leadspace.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">
                Leadspace - Web Components
              </h3>
            </a>

            <a href="https://codesandbox.io/s/ibm-masthead-v2-lexu76" target="_blank" className="bg-white row-span-1 rounded-2xl md:rounded-3xl overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
              <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline preload="auto" className="object-cover w-full h-full">
                    <source src="/assets/sandbox/sandbox--fantasybb-hero.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">
                Leader Board - Tailwind CSS
              </h3>
            </a>

            <a href="https://codesandbox.io/s/ibm-masthead-v2-lexu76" target="_blank" className="bg-white row-span-1 rounded-2xl md:rounded-3xl overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
              <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline preload="auto" className="object-cover w-full h-full">
                    <source src="/assets/sandbox/sandbox--ibm-masthead-v2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">
                Masthead - Web Components
              </h3>
            </a>

            <a href="https://github.com/proeung/accessible-menu" target="_blank" className="bg-white row-span-1 rounded-2xl md:rounded-3xl overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
              <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline preload="auto" className="object-cover w-full h-full">
                    <source src="/assets/sandbox/sandbox--accessible-menu.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">
                Accessible Menu - ES6 & Tailwind CSS
              </h3>
            </a>

            <a href="https://codesandbox.io/s/leadspace-centered-ic4r8w?file=/index.html" target="_blank" className="bg-white row-span-1 rounded-2xl md:rounded-3xl overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
              <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline preload="auto" className="object-cover w-full h-full">
                    <source src="/assets/sandbox/sandbox--ibm-centered-leadspace.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-xl tracking-tight text-center mt-8 mb-4">
                Leadspace - Web Components
              </h3>
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default MoreSandBox;
