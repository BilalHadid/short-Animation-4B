import React from "react";
import "./App.css";
import { Home } from "./component/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <div className="App">
        <Home />
      </div>
    </Routes>
  );
}

export default App;
