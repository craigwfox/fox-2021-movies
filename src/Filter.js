import PropTypes from 'prop-types'

export function Filter({setFilter, filter}) {
  return (
    <div className="form">
      <label htmlFor="filtering">Search for movies</label>
      <input
        id="filtering"
        onChange={(e) => setFilter(e.target.value) }
        value={filter} />
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
