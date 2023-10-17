import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth scroll-pt-20 dark">
      <Head />
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
