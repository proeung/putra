type Stat = {
  title: string;
  content: string;
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
  stats: Stat[];
}

export default WorkType
