import { Card, Button } from "react-bootstrap";
function MovieCard(){
return(
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Movie title</Card.Title>
        <Card.Text> Year</Card.Text>
        <Card.Text> score</Card.Text>
        <Card.Text> Rating</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
)

}
export default MovieCard;