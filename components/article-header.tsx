import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import ArticleTitle from './article-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const ArticleHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-40 mb-16">
        <ArticleTitle>{title}</ArticleTitle>
        <div className="font-bold mt-4 text-zinc-600 dark:text-zinc-400">
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="bg-neutral-100 mb-8 overflow-hidden rounded-3xl dark:bg-slate-800 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>

    </>
  )
}

export default ArticleHeader
