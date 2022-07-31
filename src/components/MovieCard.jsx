import { Card, Col, ListGroup } from "react-bootstrap";
import NewReview from "./NewReview";
import ReviewCtx from "./ReviewCtx";

function MovieCard({ movie }) {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={movie.image} />
          <ListGroup>
            <ListGroup.Item>{movie.title}</ListGroup.Item>
            <ListGroup.Item>{movie.year}</ListGroup.Item>
            <ListGroup.Item>{movie.score}</ListGroup.Item>
            <ListGroup.Item>{movie.type}</ListGroup.Item>
            <ListGroup.Item>{<NewReview movieId={movie.id} />}</ListGroup.Item>
            {/* <ListGroup.Item>{[(movie.reviews)]}</ListGroup.Item> */}
          </ListGroup>
          <ReviewCtx reviews={movie.reviews}/>
        </Card>
      </Col>
    </div>
  );
}
export default MovieCard;
