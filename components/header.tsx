import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto px-5 w-full">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-20">
        <Link href="/" className="hover:underline">
          putra.
        </Link>
      </h1>
    </header>
  )
}

export default Header
