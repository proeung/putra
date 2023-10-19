import DateFormatter from './date-formatter'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const ArticlePreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
          <h2 className="font-bold text-base md:text-2xl tracking-tight text-zinc-800 w-11/12 md:w-full dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-100 opacity-0 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-600/50 sm:-inset-x-6 sm:rounded-2xl" />
            <Link
              as={`/articles/${slug}`}
              href="/articles/[slug]"
            >
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">
                {title}
              </span>
            </Link>
          </h2>
          <time
            className="md:hidden relative z-10 order-first flex items-center text-base text-zinc-600 dark:text-zinc-400"
            dateTime="{date}"
          >
            <DateFormatter dateString={date} />
          </time>
          <p className="hidden relative z-10 mt-4 text-base text-zinc-600 md:block dark:text-zinc-400">
            {excerpt}
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex font-bold items-center text-base text-teal-500"
          >
            read article
          </div>
        </Fade>
      </div>
      <time
        className="mt-1 hidden relative z-10 order-first mb-3 md:flex items-center text-lg text-zinc-500 dark:text-zinc-300"
        dateTime="{date}"
      >
        <DateFormatter dateString={date} />
      </time>
    </article>
  )
}

export default ArticlePreview
