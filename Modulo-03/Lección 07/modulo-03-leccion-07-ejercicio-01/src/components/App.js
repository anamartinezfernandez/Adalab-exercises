import React, { useState } from "react";

function App() {
  const [age, setAge]= useState(20);
  const [gifts, setGifts]= useState(1)
  const handleClick = () => {
    setAge(age +1);
    setGifts (gifts +1);
  };

  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad</p>
      <p>Tengo {gifts} regalo</p>
      <button onClick={handleClick}>Hazme más viejo</button> 
    </div>
  );
}

export default App;
