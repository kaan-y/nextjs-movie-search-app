import { initializeStore } from '@/redux/store'
import { search } from '@/redux/actions/search'
import { useSelector } from 'react-redux'

const Index = () => {
  const { loading, result, totalResults } = useSelector((state) => state.search)
  return (
    <>
      <h1 className="text-3xl">Hello World!</h1>

      {result.map((movie) => (
        <h2>{movie.Title}</h2>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore
  await dispatch(search('one'))

  return {
    props: { initialReduxState: reduxStore.getState() },
  }
}

export default Index
