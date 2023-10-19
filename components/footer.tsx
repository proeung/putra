import Container from './container'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
  return (
    <footer className="border-t border-slate-900/10 dark:border-slate-50/[0.08]">
      <Container>
        <div className="py-14 md:py-20 flex flex-col items-center justify-between lg:flex-row">
          <h4 className="text-sm text-zinc-600 dark:text-zinc-400">
            <Fade cascade delay={.5} triggerOnce>
              <p>&copy; {new Date().getFullYear()} Putra Bonaccorsi</p>
            </Fade>
          </h4>
          <nav>
            <Fade cascade delay={1} damping={1e-1} triggerOnce>
              <ul className="flex font-bold gap-x-5 mt-4 text-sm text-zinc-600 md:mt-0 dark:text-zinc-400">
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://github.com/proeung" target="_blank">Github</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://instagram.com/goodpathgarden" target="_blank">Instagram</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="https://www.linkedin.com/in/putra-bonaccorsi" target="_blank">LinkedIn</Link></li>
                <li><Link className="transition hover:text-teal-600 dark:hover:text-teal-400" href="mailto:putra.roeung@gmail.com" target="_blank">Email</Link></li>
              </ul>
            </Fade>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
