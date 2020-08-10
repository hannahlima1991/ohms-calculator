import React, { useState, useEffect } from "react";
import "./LeftSide.css";

function LeftSide() {
  const [firstColorChange, setFirstColorChange] = useState("");
  const [secondColorChange, setSecondColorChange] = useState("");
  const [thirdColorChange, setThirdColorChange] = useState("");
  const [fourthColorChange, setfourthColorChange] = useState("");

  useEffect(() => {
    console.log("first band worked");
  }, [firstColorChange]);
  useEffect(() => {
    console.log("Second band worked");
  }, [secondColorChange]);
  useEffect(() => {
    console.log("third band worked");
  }, [thirdColorChange]);
  useEffect(() => {
    console.log("fourth band worked");
  }, [fourthColorChange]);

  return (
    <div className="col-lg-6 leftSide">
      <form className="leftSideForm" action="/index.html">
        <div className="row dropdownTitle">
          <h3>1st Band - First Value:</h3>
        </div>
        <div id=" selectorOne">
          <select
            className="firstBand"
            value={firstColorChange}
            onChange={(event) => setFirstColorChange(event.target.value)}
          >
            <option selected="selected">First Value</option>
            <option value={"1"}>Black - 0</option>
            <option value={"2"}>Brown - 1</option>
            <option value={"3"}>Red - 2</option>
            <option value={"4"}>Orange - 3</option>
            <option value={"5"}>Yellow - 4</option>
            <option value={"6"}>Grenn - 5</option>
            <option value={"7"}>Blue - 6</option>
            <option value={"8"}>Violet - 7</option>
            <option value={"9"}>Grey - 8</option>
            <option value={"10"}>White - 9</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>2nd Band - Second Value:</h3>
        </div>
        <div id="selectorTwo">
          <select
            className="secondBand"
            value={secondColorChange}
            onChange={(event) => setSecondColorChange(event.target.value)}
          >
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
          <select
            className="thirdBand"
            value={thirdColorChange}
            onChange={(event) => setThirdColorChange(event.target.value)}
          >
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
          <select
            className="fourthBand"
            value={fourthColorChange}
            onChange={(event) => setfourthColorChange(event.target.value)}
          >
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
        <div className="calculationButton">
          <button className="calculateOhms">Calculator</button>
        </div>
      </form>
    </div>
  );
}

export default LeftSide;
