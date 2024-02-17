import React from "react";

import Header from "./components/Header";
import Answer from "./components/Answer";

import { CoordinatesContextProvider } from "./context";

import "./styles/main.css";

function App() {
  return (
    <CoordinatesContextProvider>
      <div className="App">
        <Header />
        <Answer />
      </div>
    </CoordinatesContextProvider>
  );
}

export default App;
