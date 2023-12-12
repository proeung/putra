import Container from './container';
import type WorkType from '../interfaces/work';
import { Fade } from 'react-awesome-reveal';

type Props = {
  stats: WorkType['stats'];
};

const WorkStats: React.FC<Props> = ({ stats }) => {
  return (
    <section className="border-t border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40 relative w-full">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Fade cascade delay={1e2} damping={1e-1}>
            <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight md:text-5xl lg:text-6xl dark:text-zinc-100">
              Stats.
            </h2>

            <ul className="grid grid-cols-2 gap-y-10 md:gap-y-16 mt-10 md:mt-20 items-start">
              {stats.map((stat, index) => (
                <li key={index} className="gap-y-2 flex flex-wrap items-baseline">
                  <h3 className="font-bold flex-none">{stat.title}</h3>
                  <p className="flex-none leading-relaxed w-full">{stat.content}</p>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
      </Container>
    </section>
  );
}

export default WorkStats;
