import React, { useState } from "react";
import "./App.css";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";

function App() {
  //These are my react hooks, because I use functional components, I also use hooks so I can attribute a state
  //and also make changes to the state.
  const [firstColorChange, setFirstColorChange] = useState("");
  const [secondColorChange, setSecondColorChange] = useState("");
  const [thirdColorChange, setThirdColorChange] = useState("");
  const [fourthColorChange, setfourthColorChange] = useState("");
  const [result, changeResult] = useState("");

  return (
    <div className="App">
      <h1>Welcome to Ohms Calculator</h1>
      <div className="container">
        <div className="row">
          {/* These are all the props I need to export to the children components,
          so they can be aware of the current state and also listen to any state changes. */}
          <LeftSide
            firstBand={firstColorChange}
            firstBandChange={setFirstColorChange}
            secondBand={secondColorChange}
            secondBandChange={setSecondColorChange}
            thirdBand={thirdColorChange}
            thirdBandChange={setThirdColorChange}
            fourthBand={fourthColorChange}
            fourthBandChange={setfourthColorChange}
            changeResult={changeResult}
          />
          <RightSide
            firstBand={firstColorChange}
            secondBand={secondColorChange}
            thirdBand={thirdColorChange}
            fourthBand={fourthColorChange}
            result={result}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
