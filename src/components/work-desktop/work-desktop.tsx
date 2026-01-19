import Container from '@/components/container';
import CoverVideo from '@/components/cover-video';
import LazyImage from '@/components/lazy-image';
import type WorkType from '@/types/work';
import Textarea from '@/components/textarea';
import markdownStyles from '@/components/markdown-styles.module.css';

type Props = {
  style: string
  items: WorkType['sectionDesktop'];
};

const WorkDesktop: React.FC<Props> = ({ style, items }) => {
  return (
    <section
      className={`${style === 'even' ? 'bg-white  dark:bg-slate-700/20' : 'bg-slate-200 dark:bg-slate-950/20'
        } border-t border-slate-900/10 dark:border-slate-50/10 py-16 md:py-40 relative overflow-hidden w-full`}
    >
      <Container>
        <div
          aria-hidden="true"
          className={`${style === 'even' ? '-left-40' : '-right-40'
            } pointer-events-none block blob absolute opacity-20 -bottom-56 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]`}>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 relative w-full z-10">
          {items.map((item, index) => (

            <div
              key={index}
              id={item.id}
              className={`${item.style === 'half' ? 'col-span-1' : 'col-span-1 md:col-span-2'
                } w-full`}
            >
              {item.type !== 'text' && (

                <div className="bg-neutral-100 dark:bg-slate-950 w-full shadow-lg rounded-lg overflow-hidden">
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
                        label={item.alt}
                      />
                    ) :
                      <LazyImage
                        src={item.url}
                        alt={item.alt}
                        width={1300}
                        height={630}
                      />
                  }
                </div>

              )}

              {
                item.caption !== undefined && item.caption !== '' ? (
                  <div className={`${markdownStyles['markdown']} max-w-xs mt-6 md:max-w-lg`}>
                    <p
                      className={`text-sm my-0!`}
                      dangerouslySetInnerHTML={{ __html: item.caption }}
                    />
                  </div>
                ) : null
              }

              {item.type === 'text' &&
                <div className="mt-16 mb-16 md:mt-24 md:mb-20">
                  <Textarea content={item.content} />
                </div>
              }
            </div>

          ))}
        </div>
      </Container>
    </section >
  );
}

export default WorkDesktop;
