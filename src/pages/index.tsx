import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllArticles, getAllWork } from '@/lib/api'
import Head from 'next/head'
import type Article from '@/types/article'
import type WorkType from '@/types/work';
import MoreWork from '@/components/more-work'
import MoreArticles from '@/components/more-articles'
import About from '@/components/about'
import MoreSandBox from '@/components/more-sandbox'
import { SITE_NAME, SITE_URL, HOME_OG_IMAGE_URL } from '@/lib/constants'

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
          <title>{`${SITE_NAME} — Developer & Design Technologist`}</title>
          <meta name="description" content="Putra Bonaccorsi is a Developer and Design Technologist based in South Jersey/Philadelphia with 14+ years of experience. Owner of Off Red LLC, specializing in scalable websites, design systems, React, and AI-assisted development." />
          <meta name="author" content="Putra Bonaccorsi" />
          <meta name="keywords" content="Putra Bonaccorsi, Developer, Design Technologist, Technical Project Manager, Off Red LLC, React, Design Systems, Frontend Developer, Philadelphia, South Jersey" />
          <link rel="canonical" href={SITE_URL} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={`${SITE_NAME} — Developer & Design Technologist`} />
          <meta property="og:description" content="Developer and Design Technologist with 14+ years of experience building scalable websites and design systems. Owner of Off Red LLC, based in South Jersey/Philadelphia." />
          <meta property="og:image" content={`${SITE_URL}${HOME_OG_IMAGE_URL}`} />
          <meta property="og:image:alt" content="Putra Bonaccorsi — Developer & Design Technologist" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${SITE_NAME} — Developer & Design Technologist`} />
          <meta name="twitter:description" content="Developer and Design Technologist with 14+ years of experience building scalable websites and design systems. Owner of Off Red LLC." />
          <meta name="twitter:image" content={`${SITE_URL}${HOME_OG_IMAGE_URL}`} />

          {/* JSON-LD Person Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Putra Bonaccorsi",
                "url": SITE_URL,
                "email": "putra@offred.co",
                "jobTitle": "Developer & Design Technologist",
                "description": "Developer and Design Technologist with expertise in Technical Project Management and over 14 years of experience helping agencies and businesses ship great digital work.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "South Jersey/Philadelphia",
                  "addressRegion": "NJ/PA",
                  "addressCountry": "US"
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Off Red LLC",
                  "url": "https://offred.co"
                },
                "sameAs": [
                  "https://github.com/proeung",
                  "https://www.linkedin.com/in/putra-bonaccorsi",
                  "https://offred.co"
                ]
              })
            }}
          />
        </Head>

        <Intro />
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
    'thumbnail',
    'featured',
    'recent',
    'featuredOrder',
    'recentOrder'
  ]);

  return {
    props: { allArticles, allWork },
  }
}
