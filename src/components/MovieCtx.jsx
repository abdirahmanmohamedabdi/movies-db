import { Container,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieCtx() {
  const apiUrl = "http://localhost:3000/movies";
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(apiUrl).then((res) => res.json())
    .then((res) => setMovies(res))
  },[])
//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log(responseData);
//         setMovies(responseData);
//       });
//   }, []);
  return (
    <Container>
        <Row xs={3} md={3} className="g-4">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </Row>
        
    </Container>
  );
}

export default MovieCtx;
