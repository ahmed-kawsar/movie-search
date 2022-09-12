import { useState } from 'react'
import Movies from './components/Movies'
import Search from './components/Search'

const App = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  const searchMovies = async (e) => {
    e.preventDefault()

    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='App'>
      <h1 className='title'>React Movie Search</h1>
      <Search searchMovies={searchMovies} query={query} setQuery={setQuery} />
      <Movies movies={movies} />
    </div>
  )
}
export default App
