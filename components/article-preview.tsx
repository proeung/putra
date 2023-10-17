import DateFormatter from './date-formatter'
import Link from 'next/link'

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
        <h2 className="font-bold text-2xl tracking-tight text-zinc-800 dark:text-zinc-100">
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
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-lg text-zinc-400 dark:text-zinc-500 pl-3.5"
          dateTime="{date}"
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          </span>
          <DateFormatter dateString={date} />
        </time>
        <p className="relative z-10 mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {excerpt}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex font-bold items-center text-base text-teal-500"
        >
          read article
        </div>
      </div>
      <time
        className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-lg text-zinc-500 dark:text-zinc-300"
        dateTime="{date}"
      >
        <DateFormatter dateString={date} />
      </time>
    </article>
  )
}

export default ArticlePreview
