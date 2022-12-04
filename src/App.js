import React from 'react'
import {useSelector} from 'react-redux';

function App() {

  const myState = (state) =>{
      return state.changeNumber
      
  }
  return (
    <>
      <div>
        <h1>Increment Decrement Counter</h1>
        <h4>Using React and Redux</h4>
          <div>
            <a><span>-</span></a>
            <input type="text" name="quantity" value={myState}></input>
            <a><span>+</span></a>
          </div>
      </div>
    </>
  )
}

export default App
