import { initializeStore } from '@/redux/store'
import { getMovieDetails } from '@/redux/actions/movie'
import { useSelector, useDispatch } from 'react-redux'
import NextHead from 'next/head'
import NextImg from 'next/image'
import Layout from '@/components/Layout'
import DetailTable from '@/components/DetailTable'

const MovieDetails = () => {
  const { loading, details } = useSelector((state) => state.movie)

  return (
    <>
      <NextHead>
        <title>
          Movie Search App - {details.Title} ({details.Year})
        </title>
      </NextHead>
      <Layout>
        <div className="sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="relative h-full w-full flex justify-center mb-2 sm:mb-0">
            <NextImg
              src={details.Poster}
              alt={details.Title}
              width={300}
              height={445}
              objectFit="contain"
            />
          </div>
          <DetailTable details={details} />
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore
  await dispatch(getMovieDetails(params.id))

  return {
    props: { initialReduxState: reduxStore.getState() },
  }
}

export default MovieDetails
