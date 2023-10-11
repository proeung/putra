import Container from './container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <h4 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © 2023 Putra Bonaccorsi
          </h4>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
