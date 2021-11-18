import { useState, useEffect } from "react"
import { Movie } from "./Movie"
import { Filter } from "../Filter"

const MOVIE_JSON = './movies.json'
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=***REMOVED***&language=en-US&page=1&include_adult=false'
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=***REMOVED***&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

export function MoviesList() {
  const [filter, setFilter] = useState("")
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
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + data.poster_path,
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

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="movies-list">
      <Filter filter={filter} setFilter={setFilter} />

      <section>
        { movies.filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          ).map((movie) => (
            <Movie key={movie.id} movie={movie} />
          )
        )}
      </section>
    </div>
  )
}