import PropTypes from 'prop-types'
import Navbar from '@/components/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="sm:container mx-auto p-4 sm:px-0">{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
