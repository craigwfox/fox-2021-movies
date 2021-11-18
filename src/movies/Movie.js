import PropTypes from 'prop-types'

export function Movie({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
    </article>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }).isRequired
}