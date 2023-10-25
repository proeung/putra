import Link from 'next/link';
import Container from './container';
import { Fade } from 'react-awesome-reveal';

type Props = {
  title: string
  url: string
}

const WorkNext = ({ title, url }: Props) => {
  return (
    <section>
      <Link href={url} className="block bg-slate-100 overflow-hidden py-16 dark:bg-slate-950/[0.4] md:py-40 relative w-full hover:bg-gray-900 hover:dark:bg-slate-950 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <p className="font-bold mb-4">see next project</p>
              <h3 className="text-3xl font-light font-serif tracking-tight leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h3>
              <p className="font-bold hidden mt-20">learn more</p>
            </Fade>
          </div>
        </Container>
      </Link>
    </section>
  );
}

export default WorkNext;
