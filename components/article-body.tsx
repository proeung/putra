import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div className="mx-auto prose max-w-full lg:max-w-3xl dark:prose-invert">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default ArticleBody
