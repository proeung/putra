import { Fade } from 'react-awesome-reveal';
import PageTitle from './page-title';
import CoverVideo from './cover-video';
import Container from './container';

type Props = {
  title: string
  excerpt: string
  src: string
  poster: string
}

const WorkHeader = ({ title, src, poster, excerpt }: Props) => {
  return (
    <>
      <section className="py-16 md:py-40 relative w-full">
        <Container>
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <Fade cascade delay={1} damping={1e-1} triggerOnce>
              <PageTitle>{title}</PageTitle>
            </Fade>
          </div>

          <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <CoverVideo
              src={src}
              poster={poster}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 md:mt-40">
            <p className="text-base/relaxed md:text-xl/relaxed">
              <span className="font-bold">{title}</span> - {excerpt}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default WorkHeader;
