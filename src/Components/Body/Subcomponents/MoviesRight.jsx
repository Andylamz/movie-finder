import { useEffect, useState } from "react";
import styles from "./MoviesRight.module.css";

const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzA4Y2ZhZmZmY2IxYjVlMWI1OTA5ZDA3MGM0OGVjNyIsIm5iZiI6MTc0NzQyMTI1Ni45NTksInN1YiI6IjY4Mjc4ODQ4YjM2ZjJmY2IyNGQ5ODNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoA0NwmKgCVvNSfry4LQ8BTygjwp8Swp8bsN_ZUuHgU",
  },
};

function MoviesRight({ selectedMovie, movies }) {
  const [runtime, setRuntime] = useState("");
  useEffect(() => {
    async function fetchData() {
      if (!selectedMovie) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedMovie.id}?language=en-US`,
        fetchOptions
      );
      const data = await res.json();
      console.log(data);
      setRuntime(data.runtime);
    }
    fetchData();
  }, [selectedMovie]);
  return (
    <>
      <div className={styles.container}>
        {!selectedMovie && (
          <div className={styles.message}>Please Select A Movie</div>
        )}
        {movies.length > 0 && selectedMovie && (
          <>
            <div className={styles.imageContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`}
              />
            </div>
            <div className={styles.detailContainer}>
              <h3>{selectedMovie.title}</h3>

              <div className={styles.movieDetails}>
                <span>
                  Released Date:
                  {selectedMovie.release_date === ""
                    ? "N/A"
                    : selectedMovie.release_date}
                </span>
                <span>
                  {"Run-time"}: {runtime} mins
                </span>
                <span>Rating: {selectedMovie.vote_average}</span>
                <span>Movie ID: {selectedMovie.id}</span>
              </div>

              <div className={styles.movieDes}>
                <p>{selectedMovie.overview}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MoviesRight;
