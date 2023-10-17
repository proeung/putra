import Link from 'next/link'
import Container from './container'

const Intro = () => {
  return (
    <section className="mt-40">
      <Container>      
        <div className="max-w-2xl">
          <h1 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 sm:text-6xl">
            Creative developer/designer, founder, and garden enthusiast based outside of Philadelphia.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-lg dark:text-zinc-400">
            Scroll down to see a curated selection of web projects from my extensive professional journey.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Intro
