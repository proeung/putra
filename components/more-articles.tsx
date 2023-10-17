import PostPreview from './post-preview'
import type Post from '../interfaces/article'
import Container from './container'

type Props = {
  posts: Post[]
}

const MoreArticles = ({ posts }: Props) => {
  return (
    <section id="articles" className="border-t lg:border-slate-900/10 bg-white dark:border-slate-50/[0.08] dark:bg-slate-900 py-40 w-full">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 sm:text-6xl">
            Writing.
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-lg dark:text-zinc-400">
          Discover my in-depth insights on programming, product design, and more, collected in chronological order.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-teal-900">
            <div className="flex max-w-4xl flex-col space-y-16">
              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="font-bold text-2xl tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-100 opacity-0 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-600/50 sm:-inset-x-6 sm:rounded-2xl" />
                    <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">
                        Deploy a shared navigational experience across multiple content ecosystems within ibm.com/cloud
                      </span>
                    </a>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-lg text-zinc-400 dark:text-zinc-500 pl-3.5"
                    dateTime="2022-09-05"
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    Jan 21, 2022
                  </time>
                  <p className="relative z-10 mt-4 text-base text-zinc-600 dark:text-zinc-400">
                    IBM.com is a massive web experience developed and managed by different teams, powered by technology ranging from standalone JavaScript applications to monolithic content management systems.
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
                  dateTime="2022-09-05"
                >
                  Jan 21, 2022
                </time>
              </article>

              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="font-bold text-2xl tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-100 opacity-0 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-600/50 sm:-inset-x-6 sm:rounded-2xl" />
                    <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">
                        Drupal 9 Olivero: Turning Conversation into a Core Initiative
                      </span>
                    </a>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-lg text-zinc-400 dark:text-zinc-500 pl-3.5"
                    dateTime="2022-09-05"
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    Feb 19, 2020
                  </time>
                  <p className="relative z-10 mt-4 text-base text-zinc-600 dark:text-zinc-400">
                    How does an idea evolve from a conversation in a hotel lobby into a Drupal core release initiative? Follow the new Drupal 9 default theme, Olivero, from ideation through execution.
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
                  dateTime="2022-09-05"
                >
                  Feb 19, 2020
                </time>
              </article>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mt-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div> */}
      </Container>

    </section>
  )
}

export default MoreArticles
