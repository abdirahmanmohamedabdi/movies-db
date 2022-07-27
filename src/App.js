import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./Movie";
import { Navbar, Container } from "react-bootstrap";
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
    </div>
  );
}
export default App;
