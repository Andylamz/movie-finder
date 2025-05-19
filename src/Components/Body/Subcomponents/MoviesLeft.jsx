import MovieCard from "./MovieCard";
import styles from "./MoviesLeft.module.css";

function MoviesLeft({ movies, setSelectedMovie }) {
  return (
    <div className={styles.container}>
      {movies.length === 0 && <div className={styles.message}>No Results</div>}

      {movies.length > 0 &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
    </div>
  );
}

export default MoviesLeft;
