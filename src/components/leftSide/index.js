import React from "react";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="leftSide">
      <div className="title">
        <h1>This is the left side.</h1>
      </div>
      <form className="leftSideForm" action="/index.html">
        <div className="dropdownTitle">
          <h3>1st Band - First Value:</h3>
        </div>
        <div id="selectorOne">
          <select name="colorSelection" class="firstBand">
            <option selected="selected">First Value</option>
            <option value="1">Black - 0</option>
            <option value="2">Brown - 1</option>
            <option value="3">Red - 2</option>
            <option value="4">Orange - 3</option>
            <option value="5">Yellow - 4</option>
            <option value="6">Grenn - 5</option>
            <option value="7">Blue - 6</option>
            <option value="8">Violet - 7</option>
            <option value="9">Grey - 8</option>
            <option value="10">White - 9</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>2nd Band - Second Value:</h3>
        </div>
        <div id="selectorTwo">
          <select name="colorSelection" class="secondBand">
            <option selected="selected">Second Value</option>
            <option value="1">Black - 0</option>
            <option value="2">Brown - 1</option>
            <option value="3">Red - 2</option>
            <option value="4">Orange - 3</option>
            <option value="5">Yellow - 4</option>
            <option value="6">Grenn - 5</option>
            <option value="7">Blue - 6</option>
            <option value="8">Violet - 7</option>
            <option value="9">Grey - 8</option>
            <option value="10">White - 9</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>Select a Multiplier:</h3>
        </div>
        <div id="selectorThree">
          <select name="multiplierSelection" class="thirdBand">
            <option selected="selected">Multiplier</option>
            <option value="1">Black ×1 Ω</option>
            <option value="2">Brown ×10 Ω</option>
            <option value="3">Red ×100 Ω</option>
            <option value="4">Orange ×1 kΩ</option>
            <option value="5">Yellow ×10 kΩ</option>
            <option value="6">Grenn ×100 kΩ</option>
            <option value="7">Blue ×1 MΩ</option>
            <option value="8">Violet ×10 MΩ</option>
            <option value="9">Grey ×100 MΩ</option>
            <option value="10">White ×1 GΩ</option>
            <option value="11">Gold ×0.1 Ω</option>
            <option value="12">Silver ×0.01 Ω</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>Select Tolerance:</h3>
        </div>
        <div id="selectorFour">
          <select name="toleranceSelection" class="fourthBand">
            <option selected="selected">Tolerance</option>
            <option value="1">Brown ± 1%</option>
            <option value="2">Red ± 2%</option>
            <option value="3">Grenn ± 0.5%</option>
            <option value="4">Blue ± 0.25%</option>
            <option value="5">Violet ± 0.1%</option>
            <option value="6">Grey ± 0.05%</option>
            <option value="7">Gold ± 5%</option>
            <option value="8">Silver ± 10%</option>
          </select>
        </div>
      </form>
      <div className="calculationButton">
        <button className="calculateOhms">Calculator</button>
      </div>
    </div>
  );
}

export default LeftSide;
