import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./Movie";
import { Navbar, Container } from "react-bootstrap";
import Movie from './MoviesData'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Movies-db</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <MovieCard />
      <Movie/> 
    </div>
  );
}
export default App;
