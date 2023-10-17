import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Article from '../interfaces/article'
import MoreWork from '../components/more-work'
import MoreArticles from '../components/more-articles'
import About from '../components/about'
import MoreSandBox from '../components/more-sandbox'

type Props = {
  allPosts: Article[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Putra Bonaccorsi | Portfolio`}</title>
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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
