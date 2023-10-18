import Container from './container'


const MoreSandBox = () => {
  return (
    <section id="sandbox" className="border-t lg:border-slate-900/10 dark:border-slate-50/[0.1] bg-slate-100 dark:bg-slate-800 py-40 relative w-full">
      <div className="absolute inset-x-0 top-0 h-64 text-slate-600/10 dark:text-slate-700 [mask-image:linear-gradient(to_top,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern"
              width={32}
              height={32}
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <Container>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 sm:text-6xl">
          Sandbox.
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-lg dark:text-zinc-400">
            Step into my playground, where  I experiment with new frameworks and transforming ideas into living prototypes.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 sm:mt-20">

          <a href="https://codesandbox.io/s/ibm-lets-create-leadspace-ds0d0u" target="_blank" className="row-span-1 rounded-3xl bg-white overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
            <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src="/assets/sandbox/sandbox--ibm-leadspace.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-center mt-8 mb-4">
              Leadspace - Web Components
            </h3>
          </a>

          <a href="https://codesandbox.io/s/ibm-masthead-v2-lexu76" target="_blank" className="row-span-1 rounded-3xl bg-white overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
            <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src="/assets/sandbox/sandbox--fantasybb-hero.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-center mt-8 mb-4">
            Leader Board - Tailwind CSS
            </h3>
          </a>

          <a href="https://codesandbox.io/s/ibm-masthead-v2-lexu76" target="_blank" className="row-span-1 rounded-3xl bg-white overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
            <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src="/assets/sandbox/sandbox--ibm-masthead-v2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-center mt-8 mb-4">
              Masthead - Web Components
            </h3>
          </a>

          <a href="https://github.com/proeung/accessible-menu" target="_blank" className="row-span-1 rounded-3xl bg-white overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
            <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src="/assets/sandbox/sandbox--accessible-menu.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-center mt-8 mb-4">
              Accessible Menu - ES6 & Tailwind CSS
            </h3>
          </a>

          <a href="https://codesandbox.io/s/leadspace-centered-ic4r8w?file=/index.html" target="_blank" className="row-span-1 rounded-3xl bg-white overflow-hidden p-4 shadow-md text-zinc-800 dark:text-zinc-400 dark:bg-slate-900 hover:bg-slate-700 hover:dark:bg-slate-700 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
            <div className="aspect-video border lg:border-slate-900/10 dark:border-slate-50/[0.1] relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src="/assets/sandbox/sandbox--ibm-centered-leadspace.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <h3 className="font-bold text-xl tracking-tight text-center mt-8 mb-4">
              Leadspace - Web Components
            </h3>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default MoreSandBox
