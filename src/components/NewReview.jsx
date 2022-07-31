import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewReview({ movieId }) {
  const [review, setReview] = useState("");

  function changeHandler(event) {
    setReview(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault()
    if (review.length > 0) {
      const newReview = {
        movieId,
        review,
      };
      
      fetch('http://localhost:3000/reviews',{
        method:'post',
        body: JSON.stringify(newReview),
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
      .then(() => {
        alert('Review posted successfully')
        setReview("")
        window.location.reload()
      })
    }
  }

  return (
    <div>
      
      
       <form onSubmit={submitHandler}>
        <input
          type="text"
          name="review"
          value={review}
          onChange={changeHandler}
        />
         
        <button type="Submit">Submit Review</button>
      </form> 
  </div>
  );
}

export default NewReview;
