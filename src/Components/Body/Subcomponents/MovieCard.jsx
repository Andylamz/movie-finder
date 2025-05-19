import styles from "./MovieCard.module.css";

function MovieCard({ movie, setSelectedMovie }) {
  function handleSelectMovie(movie) {
    console.log(movie);
    setSelectedMovie(movie);
  }
  return (
    <div className={styles.container} onClick={() => handleSelectMovie(movie)}>
      <div className={styles.imgContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
        />
      </div>
      <div className={styles.description}>
        <h3>{movie.title}</h3>
        <p>Release date: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
