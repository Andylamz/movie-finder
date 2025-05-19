import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzA4Y2ZhZmZmY2IxYjVlMWI1OTA5ZDA3MGM0OGVjNyIsIm5iZiI6MTc0NzQyMTI1Ni45NTksInN1YiI6IjY4Mjc4ODQ4YjM2ZjJmY2IyNGQ5ODNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoA0NwmKgCVvNSfry4LQ8BTygjwp8Swp8bsN_ZUuHgU",
  },
};

function Header({ setMovies, movies, setSelectedMovie }) {
  const searchRef = useRef();

  useEffect(() => {
    const autoFetch = async function () {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          fetchOptions
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        /*eslint-disable */
      } catch (err) {
        console.log("Something went wrong");
      }
    };
    autoFetch();
  }, [setMovies]);

  // Searching - fetch data
  async function handleSearchMovies(query) {
    if (query.trim() === "")
      return alert("Please do not leave the field empty!");
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        fetchOptions
      );
      console.log(res);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      console.log(data);
      if (data.results.length === 0) {
        setSelectedMovie("");
      }
      setMovies(data.results);
      // manipulaing useRef value only because the value only matters after submitting.
      searchRef.current.value = "";
    } catch (err) {
      alert(err);
    }
  }

  async function handleSearchEnter(e) {
    if (e.code === "Enter") {
      return handleSearchMovies(searchRef.current.value);
    }
  }
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>Movie Finder</h1>
      <div className={styles.searchContainer}>
        <input
          ref={searchRef}
          type="text"
          className={styles.search}
          onKeyDown={(e) => handleSearchEnter(e)}
        />
        <button type="submit" className={styles.searchBtn}>
          <i
            onClick={() => handleSearchMovies(searchRef.current.value)}
            className="fa-solid fa-magnifying-glass"
          ></i>
        </button>
      </div>
      <div className={styles.result}>{!movies.length ? "No Results" : ""} </div>
    </div>
  );
}

export default Header;
