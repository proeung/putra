import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ArticleTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 md:text-6xl">
      {children}
    </h1>
  )
}

export default ArticleTitle
