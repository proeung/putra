type Desktop = {
  url: string
  alt: string
  caption: string
  content: string
  style: string
  type: string
  poster: string
  id: string
};

type Mobile = {
  url: string
  alt: string
  caption: string
};

type Stat = {
  title: string
  content: string
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
  thumbnail: {
    type: string
    url: string
    poster: string
  }
  featured: number
  recent: number
  content: string
  stats: Stat[]
  sectionMobile: Mobile[]
  sectionDesktop: Desktop[]
  sectionDesktopMiddle: Desktop[]
  sectionMobileBottom: Mobile[]
  sectionDesktopBottom: Desktop[]
  nextTitle: string
  nextUrl: string
}

export default WorkType
