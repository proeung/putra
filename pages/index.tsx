import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/article'
import MoreStories from '../components/more-stories'
import MoreArticles from '../components/more-articles'
import About from '../components/about'
import MoreSandBox from '../components/more-sandbox'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Putra Bonaccorsi | Portfolio`}</title>
        </Head>
          <Intro />
          <MoreStories />
          <MoreArticles posts={morePosts} />
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
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
