import styles from "./Body.module.css";
import MoviesLeft from "./Subcomponents/MoviesLeft";
import MoviesRight from "./Subcomponents/MoviesRight";

function Body({ movies, selectedMovie, setSelectedMovie }) {
  return (
    <div className={styles.container}>
      {/* Left */}
      <MoviesLeft movies={movies} setSelectedMovie={setSelectedMovie} />
      {/* Right */}
      <MoviesRight selectedMovie={selectedMovie} movies={movies} />
    </div>
  );
}

export default Body;
