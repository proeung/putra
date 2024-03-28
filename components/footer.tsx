import Container from './container';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className="border-t border-slate-900/10 dark:border-slate-50/[0.08]">
      <Container>
        <div className="py-14 md:py-20 flex flex-col items-center justify-between lg:flex-row">
          <nav>
            <Fade cascade delay={1} damping={1e-1}>
              <ul className="flex font-bold gap-x-5 mb-4 text-sm text-zinc-600 dark:text-zinc-400 md:mb-0">
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="mailto:putra.roeung@gmail.com" target="_blank">Email</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://github.com/proeung" target="_blank">Github</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://www.linkedin.com/in/putra-bonaccorsi" target="_blank">LinkedIn</Link></li>
              </ul>
            </Fade>
          </nav>

          <h4 className="text-sm text-zinc-600 dark:text-zinc-400">
            <Fade delay={1e2}>
              <p>&copy; {new Date().getFullYear()} Putra Bonaccorsi</p>
            </Fade>
          </h4>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
