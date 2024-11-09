import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/card";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card texting="battleground mobile India" />
      <Card texting="player battleground mobile India" />
    </>
  );
}

export default App;
