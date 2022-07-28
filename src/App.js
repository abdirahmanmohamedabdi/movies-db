import "bootstrap/dist/css/bootstrap.min.css";
// import MovieCard from "./Movie";
import { Navbar, Container } from "react-bootstrap";
// import Movie from './MoviesData'
import MovieCtx from './components/MovieCtx'
import SearchBar from "./components/Search";
import PostReivew from "./components/PostReivew";

function App() {
  return (
    <div className="App">
      <header>
        
        <Navbar expand="lg" variant="dark" bg="dark">
          
          <Container>
            
            <Navbar.Brand href="#">Movies-db</Navbar.Brand>
            <label>Search BAR</label>
          </Container>
        </Navbar>
      </header>
      <main>
        <MovieCtx />
        <PostReivew/>
      </main>
      {/* <MovieCard/> */}
      {/* <Movie/>  */}
    </div>
  );
}
export default App;
