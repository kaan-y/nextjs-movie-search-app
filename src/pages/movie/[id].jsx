import { initializeStore } from '@/redux/store'
import { getMovieDetails } from '@/redux/actions/movie'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '@/components/Layout'

const MovieDetails = () => {
  const { loading, details } = useSelector((state) => state.movie)

  return <h1>{details.Title}</h1>
}

export async function getServerSideProps({ params }) {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore
  const data = await dispatch(getMovieDetails(params.id))

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { initialReduxState: reduxStore.getState() },
  }
}

export default MovieDetails
