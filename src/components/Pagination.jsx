import ReactPaginate from 'react-paginate'
import { changePage } from '@/redux/actions/pagination'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

const Pagination = ({ totalResults }) => {
  const dispatch = useDispatch()

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    dispatch(changePage(page))
  }

  return (
    <ReactPaginate
      onPageChange={(page) => handlePageChange(page.selected + 1)}
      disableInitialCallback={true}
      pageCount={totalResults / 20}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      initialPage={0}
      containerClassName="flex justify-center my-6"
      pageClassName="p-2 border border-red-200 mx-1 rounded-lg"
      pageLinkClassName="text-gray-600 cursor-pointer outline-none"
      breakClassName="p-2 mx-1 outline-none"
      activeClassName="bg-red-200"
      nextClassName="p-2 border border-red-200 mx-1 rounded-lg"
      nextLinkClassName="cursor-pointer outline-none"
      previousClassName="p-2 border border-red-200 mx-1 rounded-lg"
      previousLinkClassName="cursor-pointer outline-none"
    />
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.string.isRequired,
}

export default Pagination
