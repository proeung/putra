import Container from './container'


const MoreSandBox = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-800 py-40 w-full">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-light font-serif tracking-tight text-zinc-800 leading-tight dark:text-zinc-100 sm:text-6xl">
          Sandbox.
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
          </p>
        </div>

        <div className="auto-rows-[340px] grid grid-cols-3 gap-8 mt-16 sm:mt-20">
          <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-700">
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-700">
          </div>

          <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-700">
          </div>
        </div>
      </Container>

    </section>
  )
}

export default MoreSandBox
