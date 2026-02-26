import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function add(a, b) {
  return a + b;
}

// Component
function App() {
  const result = add(5, 3); 
  return (
    <>
      <h1>This is a simple sentence.</h1>
      <h2>Addition Result: {result}</h2>
    </>
  );
}
export default App
