import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container,Card,Button } from "react-bootstrap";
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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
export default App;
