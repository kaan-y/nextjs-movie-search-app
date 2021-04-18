import { initializeStore } from '@/redux/store'
import { search } from '@/redux/actions/search'
import { useSelector } from 'react-redux'
import NextHead from 'next/head'
import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import MovieCard from '@/components/MovieCard'

const Index = () => {
  const { loading, result, totalResults, apiError } = useSelector(
    (state) => state.search
  )
  return (
    <>
      <NextHead>
        <title>Movie Search App - Home</title>
      </NextHead>
      <Layout>
        <SearchBar />
        {result ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 relative">
            {result.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl my-5">{apiError}</p>
        )}
      </Layout>
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
