import { useState, useEffect } from "react"
import { Movie } from "./Movie"
import { Filter } from "../Filter"

const MOVIE_JSON = './movies.json'
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=***REMOVED***&language=en-US&page=1&include_adult=false'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=***REMOVED***'

export function MoviesList() {
  const [filter, setFilter] = useState("")
  const [config, setConfig] = useState({})
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const response = await fetch(MOVIE_JSON)
      const movies = await response.json()
      const moviesNew = []

      for await (const movie of movies) {
        const res = await fetch(`${API_URL}&query=${movie.title}&year=${movie.year}`)
        const resJson = await res.json()
        const data = await resJson.results[0]

        if(data) {
          moviesNew.push({
            title: data.title,
            title_mine: movie.title,
            genre: movie.genre,
            director: movie.director,
            date_watched: movie.date_watched,
            rewatch: movie.rewatch,
            my_rating: movie.rating,
            id: data.id,
            user_rating: data.vote_average,
            release: data.release_date,
            poster: data.poster_path,
            overview: data.overview
          })
        } else {
          console.log(`Missing:  ${movie.title}`)
        }
      }

      setMovies(moviesNew)
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
    getMovies()
  }, [])

  return (
    <div className="movies-wrapper">
      <Filter filter={filter} setFilter={setFilter} />

      <section className="movies-list">
        { movies.filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          ).map((movie) => (
            <Movie key={movie.id} config={config} movie={movie} />
          )
        )}
      </section>
    </div>
  )
}