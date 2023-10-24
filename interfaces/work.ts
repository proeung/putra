type Stat = {
  title: string
  content: string
};

type Mobile = {
  url: string
  alt: string
  caption: string
};

type WorkType = {
  slug: string
  title: string
  date: string
  coverImage: string
  coverVideo: string
  coverVideoPoster: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  stats: Stat[]
  sectionMobile: Mobile[]
  nextTitle: string
  nextUrl: string
}

export default WorkType
