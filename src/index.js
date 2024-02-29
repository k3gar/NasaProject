import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <img src="/assets/earth-3.png" alt="earth" className="earth-image"></img>
    <App />
  </React.StrictMode>
);
