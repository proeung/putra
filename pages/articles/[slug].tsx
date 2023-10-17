import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import ArticleBody from '../../components/article-body'
import ArticleHeader from '../../components/article-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllArticles } from '../../lib/api'
import ArticleTitle from '../../components/article-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type ArticleType from '../../interfaces/article'
import { SITE_NAME } from '../../lib/constants'

type Props = {
  post: ArticleType
  morePosts: ArticleType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | ${SITE_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <ArticleTitle>Loading…</ArticleTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <ArticleHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <ArticleBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllArticles(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
