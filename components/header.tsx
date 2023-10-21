import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import Container from './container';
import clsx from 'clsx';
import { Fade } from 'react-awesome-reveal';

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  );
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
  );
}

const links = [
  { href: '/#work', label: 'work' },
  { href: '/#articles', label: 'article' },
  { href: '/#sandbox', label: 'sandbox' },
  { href: '/#about', label: 'about' },
]

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Fade delay={1} triggerOnce>
        <Popover.Button className="group h-9 flex items-center rounded-full px-4 py-2 text-sm font-bold focus:outline-none leading-none text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-200 dark:ring-white/20 dark:hover:ring-white/40">
          menu
          <ChevronDownIcon className="ml-2 h-auto w-2 stroke-zinc-400 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </Popover.Button>
      </Fade>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed h-screen inset-0 z-50 bg-zinc-800/40 backdrop-blur dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-slate-900 dark:ring-slate-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1 focus:outline-none">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-light font-serif tracking-tight text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 font-bold text-base text-zinc-800 dark:divide-slate-800 dark:text-zinc-300">
                {links.map((link) => (
                  <Popover.Button
                    as={Link}
                    href={link.href}
                    key={link.label}
                    className="transition block py-2 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Popover.Button>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark');

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
      <MoonIcon className="hidden h-5 w-5 fill-transparent stroke-teal-500 transition md:h-6 md:w-6 dark:block" />
    </button>
  );
}

function NavItem({ href, children }) {
  let hrefWithoutHash = href.replace('#', '');
  let path = useRouter().pathname;
  let isActive = path.includes(hrefWithoutHash);

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'transition block py-2 md:inline-block md:py-0',
          isActive
            ? 'text-teal-600 dark:text-teal-400'
            : 'hover:text-teal-600 dark:hover:text-teal-400'
        )}
      >
        {children}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
        <ul className="flex items-center font-bold gap-x-4 text-base md:gap-x-8 md:text-lg dark:text-zinc-300">
          {links.map((link) => (
            <NavItem
              href={link.href}
              key={link.label}
            >
              {link.label}
            </NavItem>
          ))}
        </ul>
      </Fade>
    </nav>
  );
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
        } sticky top-0 w-full backdrop-blur flex-none transition-all duration-500 ease-out z-50 border-b border-slate-900/10 dark:border-slate-50/[0.08] bg-white dark:bg-slate-900/75`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight md:tracking-tighter text-zinc-800 dark:text-zinc-100 leading-tight">
            <Fade delay={.5} triggerOnce>
              <Link href="/">
                putra<span className="text-teal-500">.</span>
              </Link>
            </Fade>
          </h1>

          <div className="flex items-center">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
            <div className="pointer-events-auto ml-4 md:ml-8">
              <Fade delay={1e3} triggerOnce>
                <ModeToggle />
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
