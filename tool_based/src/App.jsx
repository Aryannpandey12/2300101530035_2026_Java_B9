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

//Here , it is a Component
function App() {
  const result = add(5, 3);
  return (
    <>
      <h1>This is a simple sentence.</h1>
      <h2>Addition Result: {result}</h2>
      <Assignment />
      <Html />
    </>
  );
}
export default App