import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/").then((response) => {
      var respObj = response.json();
    });
  };

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
