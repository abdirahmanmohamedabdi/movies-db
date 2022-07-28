import React, { Component } from 'react'

 class PostReivew extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          review:'',
       }
    }
changeHandler = e  => {
    this.setState({[e.target.name]:e.target.value})
}

     
     submitHandler = e =>{
         e.preventDefault()
         console.log(this.state)
     }
  render() {
      const{review} = this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <input type= "text" name ="review" value = {review} onChange={this.changeHandler }/>
              <button type = "Submit">Submit"</button>
          </form> 
      </div>
    )
  }
}

export default PostReivew