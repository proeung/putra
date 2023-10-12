import Link from 'next/link'

const Intro = () => {
  return (
    <section className="container mx-auto px-5 relative w-full mb-16 md:mb-28 mt-40">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 sm:text-6xl">
          Creative developer/designer, founder, and garden enthusiast.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          I'm Putra, a Design Technologist with expertise in Technical Project Management, based South Jersey/Philadelphia. I'm also the co-founder of <Link href="https://offred.co" target="_blank" className="hover:underline">Off Red</Link>, where we craft innovative apps to satisfy our own curiosities and love for reality shows.
        </p>
  
      </div>
    </section>
  )
}

export default Intro
