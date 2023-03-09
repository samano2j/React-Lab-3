import React, { Component } from 'react';
//import images
import left from '../assets/look-left.jpeg'
import right from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    image: right
  }

  //click left/right button handler goes here
  changeImgLeft = (e) => {
    e.preventDefault()
    this.setState({ image: left })

  }

  changeImgRight = (e) => {
    e.preventDefault()
    this.setState({ image: right })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src= {this.state.image}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.changeImgLeft}>⭠</button>
        <button className="btn" onClick={this.changeImgRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;