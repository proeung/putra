import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllArticles } from '../lib/api'
import Head from 'next/head'
import Article from '../interfaces/article'
import MoreWork from '../components/more-work'
import MoreArticles from '../components/more-articles'
import About from '../components/about'
import MoreSandBox from '../components/more-sandbox'
import { SITE_NAME } from '../lib/constants'

type Props = {
  allArticles: Article[]
}

export default function Index({ allArticles }: Props) {
  const morePosts = allArticles.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | Developer & Design Technologist`}</title>
        </Head>
          <Intro />
          <MoreWork />
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
  ])

  return {
    props: { allArticles },
  }
}
