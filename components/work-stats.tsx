import Container from './container';
import { Fade } from 'react-awesome-reveal';

const WorkStats = () => {
  return (
    <section className="border-t border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40 relative w-full">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
            Stats.
          </h2>
          <div className="grid grid-cols-2 gap-y-16 mt-20">
            <div className="gap-y-2 flex flex-wrap items-baseline">
              <h3 className="font-bold flex-none">Date</h3>
              <p className="flex-none w-full">03.12.2018</p>
            </div>
            <div className="gap-y-2 flex flex-wrap items-baseline">
              <h3 className="font-bold flex-none">Role</h3>
              <p className="flex-none w-full">Team Lead/Development</p>
            </div>
            <div className="gap-y-2 flex flex-wrap items-baseline">
              <h3 className="font-bold flex-none">Agency</h3>
              <p className="flex-none w-full">Bluecadet</p>
            </div>
            <div className="gap-y-2 flex flex-wrap items-baseline">
              <h3 className="font-bold flex-none">Tech</h3>
              <p className="flex-none w-full">React, Gatsby, Drupal, REST API, CSS Modules</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WorkStats;
