import {Card,Col} from "react-bootstrap";

function MovieCard({movie}) {

    return (
        <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={movie.image} />
  
                <Card.Title>Movie Title: {movie.title}</Card.Title>
                <Card.Text> Release Date:{movie.year}</Card.Text>
                <Card.Text> Score :{movie.score}</Card.Text>
                <Card.Text> Type:{movie.type}</Card.Text>
              </Card>
            </Col>
      </div>
    )
}
export default MovieCard