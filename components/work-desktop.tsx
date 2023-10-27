import Container from './container';
import CoverVideo from './cover-video';
import Image from 'next/image';
import type WorkType from '../interfaces/work';

type Props = {
  items: WorkType['sectionDesktop'];
};

const WorkDesktop: React.FC<Props> = ({ items }) => {
  return (
    <section className="border-t border-slate-900/10 dark:border-slate-50/[0.1] bg-slate-200 py-16 dark:bg-slate-950/[0.2] md:py-40 relative overflow-hidden w-full">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-20 -right-40 -bottom-56 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="grid grid-cols-2 gap-6 md:gap-14 relative w-full z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.style === 'half' ? 'col-span-1' : 'col-span-2'
                } w-full`}
            >
              <div className="bg-white dark:bg-slate-950 w-full shadow-lg rounded-lg overflow-hidden">
                {
                  item.type !== 'collage' ? (
                    <div className="w-full h-6 md:h-8 rounded-t-lg bg-neutral-100 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-5 md:px-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  ) :
                    null
                }

                {
                  item.type === 'video' ? (
                    <CoverVideo
                      src={item.url}
                      poster={item.poster}
                    />
                  ) :
                    <Image
                      src={item.url}
                      alt={item.alt}
                      className="object-cover w-full"
                      width={1300}
                      height={630}
                      priority={true}
                    />
                }
              </div>

              {
                item.caption !== undefined && item.caption !== '' ? (
                  <p className="text-sm mt-6">
                    {item.caption}
                  </p>
                ) : null
              }
            </div>
          ))}
        </div>
      </Container>
    </section >
  );
}

export default WorkDesktop;
