import NextImg from 'next/image'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

const MovieCard = ({ movie }) => (
  <NextLink href={`/movie/${movie.imdbID}`}>
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden md:cursor-pointer my-2">
      <div className="relative h-64 lg:h-72 w-full">
        <NextImg
          src={movie.Poster === 'N/A' ? '/popcorn.png' : movie.Poster}
          layout="fill"
          alt={movie.Title}
        />
      </div>
      <div className="p-6">
        <h2 className="font-bold mb-2 text-lg text-black-800">{movie.Title}</h2>
        <span className="text-black-500 text-sm">{movie.Year}</span>
      </div>
    </div>
  </NextLink>
)

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieCard
