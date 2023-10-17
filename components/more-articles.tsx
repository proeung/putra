import ArticlePreview from './article-preview'
import type Article from '../interfaces/article'
import Container from './container'

type Props = {
  articles: Article[]
}

const MoreArticles = ({ articles }: Props) => {
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
              {articles.map((article) => (
                <ArticlePreview
                  key={article.slug}
                  title={article.title}
                  date={article.date}
                  slug={article.slug}
                  excerpt={article.excerpt}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MoreArticles
