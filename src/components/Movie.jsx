const Movie = ({ movie }) => {
  return (
    <div className='movie'>
      <div className='img'>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className='desc'>
        <h3>{movie.title}</h3>
        <p>
          <small>release date: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className='overview'>{movie.overview}</p>
      </div>
    </div>
  )
}
export default Movie
