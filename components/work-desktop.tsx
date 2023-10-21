import Container from './container';
import { Fade } from 'react-awesome-reveal';

const WorkDesktop = () => {
  return (
    <section id="mobile" className="py-16 md:py-40 relative overflow-hidden w-full">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -bottom-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
        <div className="grid grid-cols-2 gap-6 md:gap-14 w-full">
          <div className="col-span-2 w-full shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <img
              src="/assets/articles/deploy-shared-navigational-experience/cover.webp"
              className="w-full object-cover"
              alt="Thumbnail showcasing projects from working at Merative"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 w-full shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <img
              src="/assets/work/merative/work--merative-thumb.webp"
              className="w-full object-cover"
              alt="Thumbnail showcasing projects from working at Merative"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 w-full shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <img
              src="/assets/work/merative/work--merative-thumb.webp"
              className="w-full object-cover"
              alt="Thumbnail showcasing projects from working at Merative"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 w-full shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <img
              src="/assets/articles/deploy-shared-navigational-experience/cover.webp"
              className="w-full object-cover"
              alt="Thumbnail showcasing projects from working at Merative"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WorkDesktop;
