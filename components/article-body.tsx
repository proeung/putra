import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div className="max-w-3xl mx-auto prose dark:prose-invert">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default ArticleBody
