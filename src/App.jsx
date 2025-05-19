import Header from "./Components/Header/Header";
import styles from "./App.module.css";
import Body from "./Components/Body/body";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  return (
    <div className={styles.container}>
      <Header
        setMovies={setMovies}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
      <Body
        movies={movies}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
    </div>
  );
}

export default App;
