import Navbar from '@/components/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar></Navbar>
    <div className="sm:container mx-auto p-4 sm:px-0">{children}</div>
  </>
)

export default Layout
