import { SortingVisualiser } from "./components/SortingVisualiser";
import { useState, useEffect } from "react";
import "./index.css";
import { elements } from "./components/SortingVisualiser";

function App() {
  useEffect(() => {
    console.log("APP USE EFFECT");
  }, []);
  return (
    <div className="App">
      <div className="visualiser-background">
        <SortingVisualiser />
      </div>
    </div>
  );
}

export default App;
