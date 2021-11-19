import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Header } from "../Header"

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=***REMOVED***'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=***REMOVED***'

// {config, extras}
export function MovieDetail() {
  const { id } = useParams()
  const [config, setConfig] = useState({})
  const [ movie, setMovie ] = useState({})

  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + id + API_KEY)
      const newMovie = await res.json()

      setMovie(newMovie)
    } catch (e) {
      console.error(e)
    }
  }

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL)
      const config = await res.json()

      setConfig(config)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getConfig()
    getMovie()
  }, [id])

  // prevents showing movie data if getMovie hasn't ran
  if(!movie.title) return null

  return (
    <div className="page-wrapper">
      <Header />
      <main id="maincontent" className="App main main--detail">
        <div className="detail__backdrop">
          {config.images?.secure_base_url && (
            <img
              aria-hidden="true"
              src={config.images.secure_base_url + config.images.backdrop_sizes[2] + movie.backdrop_path}
              alt={`Poster for ${movie.title}`} />
          )}
        </div>
        <div className="detail">
          <h1 className="detail__title">{ movie.title }</h1>
          <ul className="detail__genres">
            {movie.genres.map( (genre) => (
              <li key={ genre.name }>{ genre.name }</li>)
            )}
          </ul>
          <div className="detail__content">
            <ul className="detail__stats">
              <li><strong>Release:</strong> { movie.release_date }</li>
              <li><strong>Runtime</strong> { movie.runtime }</li>
              <li><strong>Rating:</strong> { movie.vote_average } / 10</li>
              <li><strong>IMDB:</strong> { movie.imdb_id }</li>
            </ul>
            <h2 className="detail__tagline">{ movie.tagline }</h2>
            <p>{ movie.overview }</p>
          </div>
          {config.images?.secure_base_url && (
            <img
              className="detail__poster"
              src={config.images.secure_base_url + config.images.poster_sizes[4] + movie.poster_path}
              alt={`Poster for ${movie.title}`} />
          )}
        </div>
      </main>
    </div>
  )
}
