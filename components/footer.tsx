import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h4 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © 2023 Putra Bonaccorsi
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
