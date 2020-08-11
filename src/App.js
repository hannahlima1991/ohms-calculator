import React, { useState } from "react";
import "./App.css";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";

function App() {
  const [firstColorChange, setFirstColorChange] = useState("");
  const [secondColorChange, setSecondColorChange] = useState("");
  const [thirdColorChange, setThirdColorChange] = useState("");
  const [fourthColorChange, setfourthColorChange] = useState("");

  return (
    <div className="App container">
      <div className="row">
        <LeftSide
          firstBand={firstColorChange}
          firstBandChange={setFirstColorChange}
          secondBand={secondColorChange}
          secondBandChange={setSecondColorChange}
          thirdBand={thirdColorChange}
          thirdBandChange={setThirdColorChange}
          fourthBand={fourthColorChange}
          fourthBandChange={setfourthColorChange}
        />
        <RightSide
          firstBand={firstColorChange}
          secondBand={secondColorChange}
          thirdBand={thirdColorChange}
          fourthBand={fourthColorChange}
        />
      </div>
    </div>
  );
}

export default App;
