import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function myApp() {
  return <h1>Custom React !</h1>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://www.google.com/" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://www.youtube.com", target: "_blank" },
  "click me to visit youtube"
);

createRoot(document.getElementById("root")).render(<App />);
