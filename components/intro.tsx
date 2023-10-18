import Link from 'next/link'
import Container from './container'

const Intro = () => {
  return (
    <section className="mt-16 md:mt-28 lg:mt-40">
      <Container>      
        <div className="max-w-md md:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
            Creative developer/designer, founder, and garden enthusiast based outside of Philadelphia.
          </h1>
          <p className="mt-4 md:mt-6 text-base text-zinc-600 max-w-sm md:text-lg md:max-w-lg dark:text-zinc-400">
            Scroll down to see a curated selection of web projects from my extensive professional journey.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Intro
