type ArticleType = {
  slug: string
  title: string
  date: string
  coverImage?: string
  coverVideo?: string
  poster?: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  nextTitle: string
  nextUrl: string
}

export default ArticleType
