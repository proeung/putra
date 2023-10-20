import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import ArticleBody from '../../components/article-body';
import ArticleHeader from '../../components/article-header';
import Layout from '../../components/layout';
import { getArticleBySlug, getAllArticles } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type ArticleType from '../../interfaces/article';
import { SITE_NAME } from '../../lib/constants';
import PageTitle from '../../components/page-title';

type Props = {
  article: ArticleType
  preview?: boolean
}

export default function Post({ article, preview }: Props) {
  const router = useRouter()
  const title = `${article.title} | ${SITE_NAME}`
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={article.ogImage.url} />
              </Head>
              <ArticleHeader
                title={article.title}
                coverImage={article.coverImage}
                date={article.date}
              />
              <ArticleBody content={article.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(article.content || '');

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug']);

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
  }
}
