import { search } from '@/redux/actions/search'
import { useDispatch } from 'react-redux'
import debounce from '@/utils/debounce'

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const searchTerm = event.target.value
    if (searchTerm.length) {
      dispatch(search(searchTerm))
    }
  }

  return (
    <input
      type="text"
      className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Search for any movie..."
      onChange={debounce(handleChange, 300)}
    />
  )
}

export default SearchBar
