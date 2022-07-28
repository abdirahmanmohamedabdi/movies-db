import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MovieCard() {
//    console.log(setMovies)
  return (
    <div>
      <Row xs={3} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />

              <Card.Title>Movie title:</Card.Title>
              <Card.Text> Year:</Card.Text>
              <Card.Text> Score:</Card.Text>
              <Card.Text> Type:</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default MovieCard;
