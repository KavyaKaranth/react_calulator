//import { useState } from 'react';
import './App.css';
//import Greet from './Greet.js';
//
// import image from './assests/download.jpg';
/*
function App() {
  const [count,setCount]=useState(0);
  return (
  <div class="container">
    <h1>COUNTER APP</h1>
    <p>You have clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  
  </div>
);

}
function App(){
  function handleclick(){
    alert("You have clicked the button");
  }
  return <button onClick={handleclick}>Click here</button>

}

//Conditions
function App(isloggedin){
  return isloggedin? <h3>Sucsessfully logged</h3> : <h3>Please log in</h3>
}
*/
//JSX,function components,properties(props),state componnets,event handling
//map:list is converted into JSX elements
/*function App(){
const names=['apple','orange','banana'];
return (
  <ul>
    {names.map((name,index)=>(
      <li key={index}>{name}</li>
    ))}
  </ul>
)
}
export default App;
*/
import { useState } from 'react';
import Calc from './Calculator';

function App() {
  return (
  <div class="container">
    
    <h2>Simple Calculator</h2>
    
    
    <Calc />
  </div>
  );
}

export default App;

