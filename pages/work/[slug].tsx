import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/layout';
import { getWorkBySlug, getAllWork } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type WorkType from '../../interfaces/work';
import { SITE_NAME } from '../../lib/constants';
import WorkHeader from '../../components/work-header';
import PageTitle from '../../components/page-title';
import WorkStats from '../../components/work-stats';
import WorkMobile from '../../components/work-mobile';
import WorkDesktop from '../../components/work-desktop';

type Props = {
  work: WorkType
  preview?: boolean
}

export default function Post({ work, preview }: Props) {
  const router = useRouter();
  const title = `${work.title} | ${SITE_NAME}`
  if (!router.isFallback && !work?.slug) {
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
            <meta property="og:image" content={work.ogImage.url} />
          </Head>
          <WorkHeader
            title={work.title}
            excerpt={work.excerpt}
            coverVideo={work.coverVideo}
            date={work.date}
          />
          <WorkMobile />
          <WorkDesktop />
          <WorkStats />
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
  const work = getWorkBySlug(params.slug, [
    'title',
    'date',
    'excerpt',
    'slug',
    'content',
    'ogImage',
    'coverImage',
    'coverVideo'
  ]);
  const content = await markdownToHtml(work.content || '')

  return {
    props: {
      work: {
        ...work,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const works = getAllWork(['slug']);

  return {
    paths: works.map((work) => {
      return {
        params: {
          slug: work.slug,
        },
      }
    }),
    fallback: false,
  }
}