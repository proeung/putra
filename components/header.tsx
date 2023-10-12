import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.08] bg-white dark:bg-slate-900/75">
      <div className="container mx-auto px-5 py-8 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight md:tracking-tighter text-zinc-800 dark:text-zinc-100 leading-tight">
            <Link href="/">
              putra<span className="text-teal-500">.</span>
            </Link>
          </h1>

          <div className="hidden md:flex items-center">
            <nav aria-label="Primary">
              <ul className="flex items-center font-bold gap-x-8 text-lg dark:text-zinc-300">
                <li>
                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">work</a>
                </li>
                <li>
                  <a href="/" className="transition hover:text-teal-500 dark:hover:text-teal-400">articles</a>
                </li>
                <li>
                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">sandbox</a>
                </li>
                <li>
                  <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">about</a>
                </li>
              </ul>
            </nav>

            <div className="pointer-events-auto ml-8">
              <button
                type="button"
                aria-label="Switch to light theme"
                className="group rounded-full px-3 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:ring-white/20 dark:hover:ring-white/40"
              >
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                >
                  <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
                  <path
                    d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                    fill="none"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="hidden h-6 w-6 fill-slate-900 stroke-teal-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                >
                  <path
                    d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
