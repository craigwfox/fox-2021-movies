import { useState, useRef } from "react"
import { Movie } from "./Movie"
import { Filter } from "../Filter"

const movies = [
  {
    name: '2 Fast 2 Furious'
  },
  {
    name: 'Abraham Lincoln: Vampire Hunter'
  },
  {
    name: 'An American Pickle'
  },
  {
    name: 'Anette'
  },
  {
    name: 'Army of the Dead'
  },
  {
    name: 'Bad Education'
  },
  {
    name: 'Big Eyes'
  },
  {
    name: 'Birdman'
  },
  {
    name: 'Black Widow'
  },
  {
    name: 'Bladerunner'
  },
  {
    name: 'Blood Red Sky'
  },
  {
    name: 'Captain Fantastic'
  },
  {
    name: 'Cats (2018)'
  },
  {
    name: 'Come Away'
  },
  {
    name: 'Cruellella'
  },
  {
    name: 'Dark Phoenix'
  },
  {
    name: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'
  },
  {
    name: 'Enola Holmes'
  },
  {
    name: 'Fast and Furious (2009)'
  },
  {
    name: 'Fast and the Furious (2001)'
  },
  {
    name: 'Fear Street: Part One - 1994'
  },
  {
    name: 'Fear Street: Part Three - 1666'
  },
  {
    name: 'Fear Street: Part Two - 1978'
  },
  {
    name: 'Ford vs Ferrari'
  },
  {
    name: 'Ghostbusters (1984)'
  },
  {
    name: 'Godzilla (2014)'
  },
  {
    name: 'Godzilla vs. Kong'
  },
  {
    name: 'Godzilla: King of the Monsters'
  },
  {
    name: 'Gunpowder Milkshake'
  },
  {
    name: 'Guns Akimbo'
  },
  {
    name: 'Horns'
  },
  {
    name: 'Hotel Coppelia'
  },
  {
    name: 'I Care a Lot'
  },
  {
    name: 'Intersteller'
  },
  {
    name: 'Just Mercy'
  },
  {
    name: 'Kill Bill Vol 1'
  },
  {
    name: 'Knight\'s of Badassdom'
  },
  {
    name: 'Kong: Skull Island'
  },
  {
    name: 'Ma Rainey\'s Black Bottom'
  },
  {
    name: 'Midnight Sky'
  },
  {
    name: 'Midway'
  },
  {
    name: 'Miles Davis: The Birth of Cool'
  },
  {
    name: 'Minari'
  },
  {
    name: 'Moxie'
  },
  {
    name: 'News of the World'
  },
  {
    name: 'One Hour Photo'
  },
  {
    name: 'One Night in Miami '
  },
  {
    name: 'Rememory'
  },
  {
    name: 'Reminiscence'
  },
  {
    name: 'Saving Mr. Banks'
  },
  {
    name: 'Sherlock Holmes'
  },
  {
    name: 'Shirley'
  },
  {
    name: 'Sonic the Hedgehog'
  },
  {
    name: 'The Birds of Prey'
  },
  {
    name: 'The Danish Girl'
  },
  {
    name: 'The Dead Don\'t Die'
  },
  {
    name: 'The Devil All the Time'
  },
  {
    name: 'The Dig'
  },
  {
    name: 'The Disaster Artist'
  },
  {
    name: 'The Great Debaters'
  },
  {
    name: 'The Green Knight'
  },
  {
    name: 'The Guilty'
  },
  {
    name: 'The Lighthouse'
  },
  {
    name: 'The Little Things'
  },
  {
    name: 'The Many Saints of Newark'
  },
  {
    name: 'The Polka King'
  },
  {
    name: 'The Report'
  },
  {
    name: 'The Room'
  },
  {
    name: 'The Suicide Squad'
  },
  {
    name: 'The Theory of Everything'
  },
  {
    name: 'The Trial of the Chicago 7'
  },
  {
    name: 'The Vault'
  },
  {
    name: 'The Woman in the Window'
  },
  {
    name: 'Thunder Force'
  },
  {
    name: 'War Dogs'
  },
  {
    name: 'Judas and the Black Messiah'
  },
  {
    name: 'Nobody'
  },
  {
    name: 'Red Notice'
  },
  {
    name: 'Les Miserables'
  },
  {
    name: 'Kajillionaire'
  }
]

export function MoviesList() {
  const [filter, setFilter] = useState("")
  const ref = useRef(null)

  return (
    <div className="movies-list">
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(ref.current.value)
      }}>
        <input ref={ref} />
        <button>Button</button>
      </form>
      <Filter filter={filter} setFilter={setFilter} />

      <ul>
        { movies.filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          ).map((movie) => (
            <Movie key={movie.name} movie={movie} />
          )
        )}
      </ul>
    </div>
  )
}