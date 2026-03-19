import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from "./Component/Assignment";
import Html from "./Component/html";

// Here, it is a function
function add(a, b) {
  return a + b;
}
function mul(a,b,c){
  return a*b*c ;
}

//Here , it is a Component
function App() {
  const result = add(5, 3);
  const name="Aryan";
  let x=90;
  let y=56;
  var a=20;
  var a=40;
  return (
    <>
      <h1>Aryan Pandey(2300101530035)</h1>
      <h2>Hello I am {name}</h2>
      <h3>The Difference of two number {x-y}</h3>
      <h3>var value : {a}</h3>
      <h3> Multiplication : {mul(5,2,7)}</h3>


      <h2>Addition Result: {result}</h2>
      <Assignment />
      <Html />

    </>
  );
}
export default App