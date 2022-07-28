import "bootstrap/dist/css/bootstrap.min.css";
// import MovieCard from "./Movie";
import { Navbar, Container } from "react-bootstrap";
// import Movie from './MoviesData'
import MovieCtx from './components/MovieCtx'

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
      <main>
        <MovieCtx />
      </main>
      {/* <MovieCard/> */}
      {/* <Movie/>  */}
    </div>
  );
}
export default App;
