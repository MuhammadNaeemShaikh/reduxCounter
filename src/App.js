import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './action/index'
import './App.css';

function App() {

  const dispatch = useDispatch();
  const myState = useSelector( (state) =>{
      return state.changeNumber
  })

  return (
    <>
      <div className='container'>
        <h1>Increment Decrement Counter</h1>
        <h2>Using React and Redux</h2>
          <div className='quantity'>
            <a className='quantity-minus' title='decrement' onClick={() => dispatch(decNumber()) }><span>-</span></a>
            <input type="text" name="quantity" className='quantity-input'  value={myState}></input>
            <a className='quantity-plus' title='increment' onClick={() => dispatch(incNumber(5)) }><span>+</span></a>
          </div>
      </div>
    </>
  )
}

export default App
