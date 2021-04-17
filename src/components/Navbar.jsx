import NextLink from 'next/link'
import NextImg from 'next/image'

const Navbar = () => (
  <nav className="sm:container mx-auto flex flex-wrap items-center justify-center md:justify-start shadow-lg p4 p-5 bg-red-300 md:rounded-bl-lg md:rounded-br-lg">
    <NextImg src="/popcorn.png" width={50} height={50} />
    <NextLink href="/">
      <a className="text-red-900 text-2xl">Movie Search App</a>
    </NextLink>
  </nav>
)

export default Navbar
