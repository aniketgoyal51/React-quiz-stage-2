import React, { Component } from 'react'
// import data from '../Resources/quizQuestion.json'
import data from "../Resources/quizQuestion.json"

class Play extends Component {
  constructor(){
    super()
    this.state={
      question:1
    }
  }

  handlenext=()=>{
    if(this.state.question<15){
    this.setState({question: this.state.question+1})
  }
  }
  handleprev=()=>{
    if(this.state.question>0){
      this.setState({question:this.state.question-1})
    }
  }

  handlequit=()=>{
    alert('Are you sure you want to quit ?')
  }

  render() {
    return (
      <div className='quizbox'>
        <h1>Question</h1>
        <h4>{this.state.question} of 15</h4>
          <div>
            <h3>{data[this.state.question-1].question}</h3>
            <div className='optionbox'>
              <button className='option'>{data[this.state.question-1].optionA}</button>
              <button className='option'>{data[this.state.question-1].optionB}</button>
              <button className='option'>{data[this.state.question-1].optionC}</button>
              <button className='option'>{data[this.state.question-1].optionD}</button>
            </div>
        <div className='buttons'>
          <button className='prev' onClick={this.handleprev}>Previous</button>
          <button className='next' onClick={this.handlenext}>Next</button>
          <button className='quit' onClick={this.handlequit}>Quit</button>
        </div>
          </div>
      </div>
    )
  }
}

export default Play