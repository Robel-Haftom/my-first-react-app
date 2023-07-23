import style from './Style.css'
import { useState, useRef } from 'react';

function SimpleCalculator(){

const inputRef = useRef(null);
const resultRef = useRef(null);
const[result, setResult] = useState(0);

function additionHandler(e) {
  setResult((result) => result + Number(inputRef.current.value));
}
function subtractionHandler(e){
  e.preventDefault();
  setResult((result) => result - Number(inputRef.current.value));
}
function multiplicationHandler(e){
  e.preventDefault();
  setResult((result) => result * Number(inputRef.current.value));
  }
function divissionHandler(e){
  e.preventDefault();
  setResult((result) => result / Number(inputRef.current.value));
  }
function resetResultHandler(e){
  e.preventDefault();
  setResult((result) => result * 0);
}  
return (
  <div className='div'>
    <h1>The calculator</h1>
    <p ref={resultRef}>{result}</p>
    <input 
      className='input' 
      type="number" 
      pattern='[0-9]'
      ref={inputRef}>
    </input>
    <br/>
    <button className="button" onClick={
      additionHandler
    }>Add</button>
    <button className='button' onClick={
      subtractionHandler
    }>Subtract</button>
    <button className='button' onClick={
      multiplicationHandler
    }>Multiply</button>
    <button className='button' onClick={
      divissionHandler
    }>Divide</button>
    <button className='button' onClick={
      resetResultHandler
    }>Reset the result</button>
  </div>
    );
}

export default SimpleCalculator;