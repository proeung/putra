import ArticlePreview from './article-preview';
import type Article from '../interfaces/article';
import Container from './container';
import { Fade } from 'react-awesome-reveal';

type Props = {
  articles: Article[]
}

const MoreArticles = ({ articles }: Props) => {
  return (
    <section id="articles" className="border-t border-slate-900/10 bg-white py-16 dark:border-slate-50/[0.08] dark:bg-slate-900 md:py-40 w-full">
      <Container>
        <div className="max-w-2xl">
          <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
            <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
              Articles.
            </h2>
            <p className="mt-4 md:mt-6 text-base text-zinc-600 max-w-sm md:text-lg md:max-w-lg dark:text-zinc-400">
              Discover my in-depth insights on programming, product design, and more, collected in chronological order.
            </p>
          </Fade>
        </div>

        <div className="mt-12 sm:mt-20">
          <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-teal-900">
            <div className="flex max-w-4xl flex-col space-y-10 md:space-y-16">
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
  );
}

export default MoreArticles;
