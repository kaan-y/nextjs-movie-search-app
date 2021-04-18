import { useSelector } from 'react-redux'
import NextHead from 'next/head'
import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import MovieCard from '@/components/MovieCard'
import Pagination from '@/components/Pagination'

const Index = () => {
  const { result, totalResults, apiError } = useSelector(
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
          <>
            <p className="text-right p-4">Total Results: {totalResults}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 relative">
              {result.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-2xl my-5">{apiError}</p>
        )}
        {result && <Pagination totalResults={totalResults} />}
      </Layout>
    </>
  )
}

export default Index
