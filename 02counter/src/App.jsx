import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 15;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    // setCounter(counter++);
    // setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
    // setCounter(counter--);
    // setCounter(counter - 1);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add{counter}</button>
      <br />
      <button onClick={removeValue}>Remove{counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
