import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './container'
import { Fade } from 'react-awesome-reveal'

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle light mode"
      className="group rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition md:px-3 md:py-3 dark:ring-white/20 dark:hover:ring-white/40"
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 fill-zinc-100 stroke-teal-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 md:h-6 md:w-6 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-5 w-5 fill-slate-900 stroke-teal-500 transition md:h-6 md:w-6 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Handle scroll event
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll('section[id]');
      let currentActiveSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    }

    window.addEventListener('scroll', handleScroll);

    // Initial scroll to set the active section on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <header
      className={`${isSticky
        ? 'py-3'
        : 'py-6 md:py-10'
        } sticky top-0 z-40 w-full backdrop-blur flex-none transition-all duration-500 ease-out z-50 border-b border-slate-900/10 dark:border-slate-50/[0.08] bg-white dark:bg-slate-900/75`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight md:tracking-tighter text-zinc-800 dark:text-zinc-100 leading-tight">
            <Fade cascade delay={1} triggerOnce>
              <Link href="/">
                p<span className="hidden md:inline">utra</span><span className="text-teal-500">.</span>
              </Link>
            </Fade>
          </h1>

          <div className="flex items-center">
            <nav aria-label="Primary">
              <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
                <ul className="flex items-center font-bold gap-x-4 text-base md:gap-x-8 md:text-lg dark:text-zinc-300">
                  <li>
                    <Link className={`transition hover:text-teal-500 dark:hover:text-teal-400 ${activeSection === 'work' ? 'active text-teal-500' : ''}`} href="/#work" scroll={false}>
                      work
                    </Link>
                  </li>
                  <li>
                    <Link className={`transition hover:text-teal-500 dark:hover:text-teal-400 ${activeSection === 'articles' ? 'active text-teal-500' : ''}`} href="/#articles" scroll={false}>
                      articles
                    </Link>
                  </li>
                  <li>
                    <Link className={`transition hover:text-teal-500 dark:hover:text-teal-400 ${activeSection === 'sandbox' ? 'active text-teal-500' : ''}`} href="/#sandbox" scroll={false}>
                      sandbox
                    </Link>
                  </li>
                  <li>
                    <Link className={`transition hover:text-teal-500 dark:hover:text-teal-400 ${activeSection === 'about' ? 'active text-teal-500' : ''}`} href="/#about" scroll={false}>
                      about
                    </Link>
                  </li>
                </ul>
              </Fade>
            </nav>

            <div className="pointer-events-auto ml-6 md:ml-8">
              <Fade cascade delay={1e3} triggerOnce>
                <ModeToggle />
              </Fade>
            </div>
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header
