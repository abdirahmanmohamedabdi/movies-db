import React, { useState, useEffect } from "react";
// import MovieCard from "./Movie";
function Movie() {
  const apiUrl = "http://localhost:3000/movies";
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        //console.log(responseData)
        setMovies(responseData)
      });
  }, []);
  return (
    <div className="movies-Data">
      {/* render a list of <Poem> components in here */}
      {movies.map((movie, i) => {
        return <Movie movie={movie} />;
      })}
    </div>
  );
}

export default Movie;
