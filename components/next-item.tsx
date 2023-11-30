import Link from 'next/link';
import Container from './container';
import { Fade } from 'react-awesome-reveal';

type Props = {
  title: string
  type: string
  url: string
}

const NextItem = ({ title, type, url }: Props) => {
  return (
    <section className="border-t border-slate-900/10 dark:border-slate-50/[0.1] w-full">
      <Link
        as={url}
        href={url}
        className="block bg-gray-100 overflow-hidden py-16 dark:bg-slate-950/[0.2] md:py-40 relative w-full hover:bg-gray-900 hover:dark:bg-slate-950 hover:text-white hover:dark:text-white transition duration-300 ease-out hover:ease-in"
      >
        <Container>
          <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-20 -left-40 -bottom-0 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>
          <div className="mx-auto max-w-3xl">
            <Fade cascade delay={1e2} damping={1e-1} triggerOnce>
              <p className="font-bold mb-4">next {type}</p>
              <h3 className="text-3xl font-light font-serif tracking-tight leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h3>
            </Fade>
          </div>
        </Container>
      </Link>
    </section>
  );
}

export default NextItem;
