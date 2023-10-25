import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllArticles, getAllWork } from '../lib/api'
import Head from 'next/head'
import type Article from '../interfaces/article'
import type WorkType from '../interfaces/work';
import MoreWork from '../components/more-work'
import MoreArticles from '../components/more-articles'
import About from '../components/about'
import MoreSandBox from '../components/more-sandbox'
import { SITE_NAME } from '../lib/constants'

type Props = {
  allArticles: Article[]
  allWork: WorkType[]
}

export default function Index({ allArticles, allWork }: Props) {
  const morePosts = allArticles.slice(0);
  const moreWork = allWork.slice(0);

  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | Developer & Design Technologist`}</title>
        </Head>
        <Intro />
        {/* <MoreWork /> */}

        {moreWork.length > 0 && <MoreWork works={moreWork} />}
        {morePosts.length > 0 && <MoreArticles articles={morePosts} />}
        <MoreSandBox />
        <About />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'excerpt',
  ]);

  const allWork = getAllWork([
    'title',
    'date',
    'slug',
    'excerpt',
    'thumbnail'
  ]);

  return {
    props: { allArticles, allWork },
  }
}
