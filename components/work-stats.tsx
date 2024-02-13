import Container from './container';
import type WorkType from '../interfaces/work';
import { Fade } from 'react-awesome-reveal';

type Props = {
  hideTitle?: boolean;
  stats: WorkType['stats'];
};

const WorkStats: React.FC<Props> = ({ stats, hideTitle = false }) => {
  return (
    <section className={`${!hideTitle ? 'border-t border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40' : ''} relative w-full`}>
      <Container>
        <div className={`${hideTitle ? 'border-t border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:pt-24 md:pb-40 md:-mt-20' : ''} mx-auto max-w-3xl`}>
          {!hideTitle && (
            <h2 className="text-3xl font-light font-serif tracking-tight text-zinc-800 leading-tight mb-10 md:mb-20 md:text-5xl lg:text-6xl dark:text-zinc-100">
              Stats.
            </h2>
          )}

          <ul className="grid grid-cols-2 gap-y-10 md:gap-y-16 items-start">
            {stats.map((stat, index) => (
              <li key={index} className="gap-y-2 flex flex-wrap items-baseline">
                <h3 className="font-bold flex-none">{stat.title}</h3>
                <p className="flex-none leading-relaxed w-full">{stat.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default WorkStats;
