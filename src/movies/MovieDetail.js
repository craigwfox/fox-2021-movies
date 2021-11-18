import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Header } from "../Header"

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=***REMOVED***'

// {config, extras}
export function MovieDetail() {
  const { id } = useParams()
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

  useEffect(() => {
    getMovie()
  }, [id])

  // prevents showing movie data if getMovie hasn't ran
  if(!movie.title) return null

  return (
    <div className="page-wrapper">
      <Header />
      <main id="maincontent" className="App main">
        <div className="movies-single">
          <ul>
            {movie.genres.map( (genre) => (
              <li key={ genre.name }>{ genre.name }</li>)
            )}
          </ul>
          <h1>{ movie.title }</h1>
          <p>{ movie.overview }</p>
        </div>
      </main>
    </div>
  )
}
