import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div>
        <h1 className='result'>Result</h1>
        <div className='resultbox'>
            <h3>You need more practice</h3>
            <h2 className='score'>Your score is 20%</h2>
            <div className='statistics'>
                <div className='statisticname'>
                    <p>Total number of questions</p>
                    <p>Number of attempted questions</p>
                    <p>Number of currect answers</p>
                    <p>Number of wrong answers</p>
                </div>
                <div className='statisticscore'>
                    <p>15</p>
                    <p>9</p>
                    <p>3</p>
                    <p>6</p>
                </div>
            </div>
        </div>
        <div className='endbuttons'>
            <button className='playagain'>Play Again</button>
            <button className='backhome'>Back to home</button>
        </div>
      </div>
    )
  }
}
