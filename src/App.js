import React from "react";
import "./App.css";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
