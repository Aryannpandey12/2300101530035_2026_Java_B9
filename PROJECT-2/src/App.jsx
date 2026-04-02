import "./App.css";

function App() {
  const fruit=(name)=>{
    alert(`Hello ${name}! Button was clicked.`);
  };

  return (
    <>
      <h1>Example of Click Event</h1>
      <button onClick={()=>fruit("Ok")}>Ok</button>
      <button onClick={()=>fruit("Apple")}>Apple</button>
      <button onClick={()=>fruit("Banana")}>Banana</button>
    </>
  );
}

export default App;