import { FaSearch } from 'react-icons/fa'

const Search = ({ searchMovies, query, setQuery }) => {
  return (
    <form className='searchForm' onSubmit={searchMovies}>
      <label htmlFor='query'>Movie Name:</label>
      <input
        type='text'
        name='query'
        placeholder='e.g. joker'
        query={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='btn' type='submit'>
        <FaSearch className='search_icon' />
      </button>
    </form>
  )
}
export default Search
