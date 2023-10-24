import Container from './container';
import type WorkType from '../interfaces/work';

type Props = {
  items: WorkType['sectionMobile'];
};

const WorkMobile: React.FC<Props> = ({ items }) => {
  return (
    <section id="mobile" className="bg-slate-100 py-16 dark:bg-slate-950/[0.4] md:py-40 relative w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img
                    src={item.url}
                    className="w-[272px] h-[572px]"
                    alt={item.alt}
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
