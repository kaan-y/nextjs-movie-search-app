import { initializeStore } from '@/redux/store'
import { getMovieDetails } from '@/redux/actions/movie'
import { useSelector, useDispatch } from 'react-redux'
import NextHead from 'next/head'
import NextImg from 'next/image'

import Layout from '@/components/Layout'

const MovieDetails = () => {
  const { loading, details } = useSelector((state) => state.movie)
  const titlesToShow = [
    'Title',
    'Year',
    'Runtime',
    'Director',
    'Actors',
    'Rewards',
  ]

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
          <table className="col-span-2 table-auto">
            <tbody>
              {Object.entries(details).map(([key, value]) => {
                if (titlesToShow.includes(key))
                  return (
                    <tr>
                      <td className="border px-6 py-4 text-gray-400 font-medium">
                        {key}
                      </td>
                      <td className="border px-6 py-4 text-gray-600 font-medium">
                        {value}
                      </td>
                    </tr>
                  )
              })}
            </tbody>
          </table>
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
