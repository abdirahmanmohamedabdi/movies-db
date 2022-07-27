import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Movies-db</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default App;
