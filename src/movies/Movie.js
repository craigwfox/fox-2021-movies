import PropTypes from 'prop-types'

export function Movie({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={`Poster for ${movie.title}`} />
      <ul>
        <li><strong>Watch date:</strong> {movie.date_watched}</li>
        <li><strong>My rating:</strong> {movie.my_rating}</li>
      </ul>
    </article>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired
}