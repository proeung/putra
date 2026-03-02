import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '@/components/container';
import ArticleHeader from '@/components/article-header';
import Layout from '@/components/layout';
import { getArticleBySlug, getAllArticles } from '@/lib/api';
import Head from 'next/head';
import markdownToHtml from '@/lib/markdownToHtml';
import type ArticleType from '@/types/article';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import PageTitle from '@/components/page-title';
import NextItem from '@/components/next-item';
import Textarea from '@/components/textarea';

type Props = {
  article: ArticleType
  preview?: boolean
}

export default function Post({ article, preview }: Props) {
  const router = useRouter();
  const title = `${article?.title ?? 'Untitled'} | ${SITE_NAME}`;
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>

      {router.isFallback ? (
        <PageTitle>Loading…</PageTitle>
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content={article.excerpt} />
            <meta name="author" content="Putra Bonaccorsi" />
            <link rel="canonical" href={`${SITE_URL}/articles/${article.slug}`} />

            {/* Open Graph */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`${SITE_URL}/articles/${article.slug}`} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={article.excerpt} />
            <meta property="og:image" content={`${SITE_URL}${article.ogImage.url}`} />
            <meta property="og:image:alt" content={article.title} />
            <meta property="article:author" content="Putra Bonaccorsi" />
            <meta property="article:published_time" content={article.date} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={article.excerpt} />
            <meta name="twitter:image" content={`${SITE_URL}${article.ogImage.url}`} />
          </Head>
          <article className="mb-32">
            <Container>
              <ArticleHeader
                title={article.title}
                coverImage={article.coverImage}
                coverVideo={article.coverVideo}
                poster={article.poster}
                date={article.date}
              />
              <Textarea content={article.content} />
            </Container>
          </article>
          <NextItem
            title={article.nextTitle}
            type="article"
            url={article.nextUrl}
          />
        </>
      )}
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
    'excerpt',
    'content',
    'ogImage',
    'coverImage',
    'coverVideo',
    'poster',
    'nextTitle',
    'nextUrl',
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
