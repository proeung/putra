type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container px-5 md:px-10 xl:px-14 relative w-full">{children}</div>
}

export default Container
