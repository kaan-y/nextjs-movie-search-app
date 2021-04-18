import ReactPaginate from 'react-paginate'
import { changePage } from '@/redux/actions/pagination'
import { useDispatch } from 'react-redux'

const Pagination = ({ totalResults }) => {
  const dispatch = useDispatch()

  const handlePageChange = (page) => {
    dispatch(changePage(page))
  }

  return (
    <ReactPaginate
      onPageChange={(page) => handlePageChange(page.selected + 1)}
      pageCount={totalResults / 10}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      initialPage={0}
      containerClassName="flex justify-center my-6"
      pageClassName="p-2 border border-red-200 mx-1 rounded-lg"
      pageLinkClassName="text-gray-600 outline-none"
      breakClassName="p-2 mx-1"
      activeClassName="bg-red-200"
      nextClassName="p-2 border border-red-200 mx-1 rounded-lg"
      previousClassName="p-2 border border-red-200 mx-1 rounded-lg"
    />
  )
}

export default Pagination