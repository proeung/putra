import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t lg:border-slate-900/10 dark:border-slate-50/[0.08]">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h4 className="font-bold tracking-tighter leading-tight text-center lg:text-left lg:pr-4 lg:w-1/2">
            © 2023 Putra Bonaccorsi
          </h4>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
