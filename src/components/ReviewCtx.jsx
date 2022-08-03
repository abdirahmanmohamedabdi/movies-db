import { ListGroup,Card } from "react-bootstrap";

function ReviewCtx({reviews}){
    return (
        <Card>
        <ListGroup>
        {reviews.map((review) => (
            <ListGroup.Item key={review.id}>{review.review}</ListGroup.Item>
        ))}
        </ListGroup>
        </Card>
    )
}

export default ReviewCtx