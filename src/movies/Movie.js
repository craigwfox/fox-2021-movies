import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Movie({ movie, config }) {
  return (
    <article>
      <h2>
        <Link to="/details">
          {movie.title}
        </Link>
      </h2>
      <div className="poster">
        <Link to="/details">
          {config.images?.base_url && (
            <img src={config.images.secure_base_url + config.images.poster_sizes[4] + movie.poster} alt={`Poster for ${movie.title}`} />
          )}
        </Link>
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