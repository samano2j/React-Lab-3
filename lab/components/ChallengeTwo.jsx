import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
    disable: true
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList, disable: false })
    }, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    //Fisher-Yates Algorithm and Destructuring to swap
    for (let i = this.state.arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.state.arr[i], this.state.arr[j]] = [this.state.arr[j], this.state.arr[i]];
    }
    this.setState({ arr: studentList })
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((studentName, index) => {
              return(
                <li key={index}>{studentName}</li>
              )
            })}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize} disabled={this.state.disable}>Randomize</button>
      </>
    )
  }
}
