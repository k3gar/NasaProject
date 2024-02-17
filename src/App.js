import React from "react";
import Header from "./components/Header";
import Answer from "./components/Answer";
import "./styles/main.css";
import { CoordinatesContextProvider } from "./context/CoordinatesContext";

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
