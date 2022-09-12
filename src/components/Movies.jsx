import Movie from './Movie'

const Movies = ({ movies }) => {
  return (
    <main className='movies'>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </main>
  )
}
export default Movies
