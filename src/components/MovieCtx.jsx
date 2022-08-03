import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieCtx() {
  const apiUrl = "https://shrouded-badlands-00147.herokuapp.com/movies/?_embed=reviews";
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setMovies(res));
  }, []);

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
