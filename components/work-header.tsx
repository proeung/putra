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

          <CoverVideo
            src={src}
            poster={poster}
          />

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
