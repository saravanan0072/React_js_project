import logo from './logo.svg';
import Square from './Square.js';
import Input from './Input.js';
import { useState } from 'react';

function App() {
const[colorValue,setColorValue]=useState("")
const[hexValue,setHexValue]=useState("")
const[isDarkText,setDarkText]=useState("true")
  const handleClearBtn = (e) => {
    e.preventDefault();
    setColorValue("");
}
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setDarkText={setDarkText}
        handleClearBtn={handleClearBtn}
      />
    </div>
  );
}

export default App;
