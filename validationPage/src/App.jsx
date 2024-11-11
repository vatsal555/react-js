import { useState } from "react";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello from react</h1>
      <Login />
      <Signup />
    </>
  );
}

export default App;
