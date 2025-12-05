import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth scroll-pt-[3.875rem] md:scroll-pt-20 dark">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                let isSystemDarkMode = darkModeMediaQuery.matches;
                let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && true);

                if (isDarkMode) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `,
          }}
        />
      </Head>
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
              gtag('config', 'G-S4RYWZQ3MQ', {
                client_storage: 'none'
              });
            `}
        </Script>

      </body>
    </Html>
  )
}
