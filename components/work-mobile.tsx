import Container from './container';
import Image from 'next/image';
import type WorkType from '../interfaces/work';

type Props = {
  items: WorkType['sectionMobile'];
};

const WorkMobile: React.FC<Props> = ({ items }) => {
  return (
    <section id="mobile" className="bg-slate-100 py-16 dark:bg-slate-950/[0.4] md:py-40 relative w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-20 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] lg:border-[14px] rounded-[2.5rem] h-[400px] w-[200px] lg:h-[600px] lg:w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[12px] lg:-left-[17px] top-[72px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[12px] lg:-left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[12px] lg:-left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[12px] lg:-right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    className="w-full object-cover"
                    width={830}
                    height={1802}
                  />
                </div>
              </div>
              {item.caption !== undefined && item.caption !== '' ? (
                <p className="text-sm text-center mt-6">
                  {item.caption}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WorkMobile;
