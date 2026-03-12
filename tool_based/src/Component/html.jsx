function Html() {
  return (
    <div>
      <h2>My Image</h2>
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        width="300"
      />
      <br /><br />
     <button onClick={click}>
      Click Me
      </button>
    </div>
  );
}
function click(){
  alert("Button clicked! Thank you");
}
export default Html;