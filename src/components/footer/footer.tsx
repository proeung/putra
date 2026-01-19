import Container from '@/components/container';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { CalendarAdd } from '@carbon/icons-react';

const Footer = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <footer className="border-t border-slate-900/10 dark:border-slate-50/8">
      <Container>
        <div className="py-14 md:py-20 flex flex-col items-center justify-between lg:flex-row">
          <nav>
            <Fade cascade delay={1} damping={1e-1}>
              <ul className="flex font-sans font-bold gap-x-4 mb-4 text-sm text-zinc-600 dark:text-zinc-400 md:mb-0 md:gap-x-6">
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://github.com/proeung" target="_blank">Github</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://www.linkedin.com/in/putra-bonaccorsi" target="_blank">LinkedIn</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="mailto:putra@offred.co" target="_blank">Email</Link></li>
                {!isHomePage && (
                  <li>
                    <Link className="transition hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1.5" href="https://zcal.co/putrabonaccorsi/30min" target="_blank">
                      Schedule an Intro Call
                      <CalendarAdd size={16} />
                    </Link>
                  </li>
                )}
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
