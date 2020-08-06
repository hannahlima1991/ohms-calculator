import React from "react";
import "./RightSide.css";

function RightSide() {
  return (
    <div className="rightSide">
      <div className="title">
        <h1>This is the right side.</h1>
      </div>
      <div className="imageContainer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/4-Band_Resistor.svg/2000px-4-Band_Resistor.svg.png"></img>
        <div className="firstColorBand">a</div>
        <div className="secondColorBand">b</div>
        <div className="thirdColorBand">c</div>
        <div className="fourthColorBand">d</div>
      </div>
      <div className="resultContainer">
        <p className="ohmsResult"></p>
      </div>
    </div>
  );
}

export default RightSide;
