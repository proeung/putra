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
  const formattedExcerpt = { __html: excerpt };

  return (
    <>
      <section className="py-16 md:py-40 w-full">
        <Container>
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <Fade cascade delay={1} damping={1e-1}>
              <PageTitle>{title}</PageTitle>
            </Fade>
          </div>

          <div className="bg-neutral-100 -mx-5 overflow-hidden shadow-lg dark:bg-slate-800 sm:mx-0 sm:rounded-lg">
            <div className="w-full h-6 md:h-8 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-5 md:px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <CoverVideo
              src={src}
              poster={poster}
              label={`Video screenshot of ${title}`}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 md:mt-40">
            <p className="text-base/relaxed md:text-xl/relaxed">
              <span className="font-bold">{title}</span> - <span dangerouslySetInnerHTML={formattedExcerpt} />
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default WorkHeader;
