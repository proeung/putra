import Container from './container';
import CoverVideo from './cover-video';
import Image from 'next/image';
import type WorkType from '../interfaces/work';

type Props = {
  items: WorkType['sectionDesktop'];
};

const WorkDesktop: React.FC<Props> = ({ items }) => {
  return (
    <section id="mobile" className="py-16 md:py-40 relative overflow-hidden w-full">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -bottom-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="grid grid-cols-2 gap-6 md:gap-14 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.style === 'half' ? 'col-span-1' : 'col-span-2'
                } w-full`}
            >
              <div className="bg-neutral-100 dark:bg-slate-800 w-full shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>

                {
                  item.type === 'video' ? (
                    <CoverVideo
                      src={item.url}
                      poster=""
                    />
                  ) :
                    <Image
                      src={item.url}
                      alt={item.alt}
                      className="object-cover w-full"
                      width={1300}
                      height={630}
                      priority={false}
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
