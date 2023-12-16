
import Play from './component/Play.jsx'
// import Result from './component/result.jsx'

import './app.css'

import React, { Component } from 'react'

class App extends Component {
  
  render() {
    return (
      <>
      {/* <div className='Head'>Quiz App</div>
      <button className='button'>Play</button> */}
      <Play/>
      {/* <Result/> */}
      </>
    )
  }
}


export default App
