import React, { useState,useEffect } from "react";
 import MovieCard from "./Movie";
function Movie() {
  const apiUrl = 'localhost:3000/movies' 
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
    //  setMovies(responseData)     
    }) 
  },[]);
  return (
    <div className="movies-Data">
      
        
      
    </div>
  );
}

export default Movie;
