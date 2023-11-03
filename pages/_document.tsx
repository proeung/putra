import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth scroll-pt-[3.875rem] md:scroll-pt-20 dark">
      <Head />
      <body className="antialiased text-zinc-700 dark:text-zinc-300 bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-S4RYWZQ3MQ"
        />
        <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S4RYWZQ3MQ');
            `}
        </Script>
      </body>
    </Html>
  )
}
