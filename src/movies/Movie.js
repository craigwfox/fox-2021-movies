import PropTypes from 'prop-types'

export function Movie({ movie, config }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <div className="poster">
        {config.images?.base_url && (
          <img src={config.images.base_url + config.images.poster_sizes[4] + movie.poster} alt={`Poster for ${movie.title}`} />
        )}
      </div>
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
    poster: PropTypes.string.isRequired,
    date_watched: PropTypes.string.isRequired,
    my_rating: PropTypes.string.isRequired,
  }).isRequired
}