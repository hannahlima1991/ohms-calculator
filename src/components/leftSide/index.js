import React from "react";
import "./LeftSide.css";

function LeftSide(props) {
  const {
    firstBand,
    firstBandChange,
    secondBand,
    secondBandChange,
    thirdBand,
    thirdBandChange,
    fourthBand,
    fourthBandChange,
  } = props;
  return (
    <div className="col-lg-6 leftSide">
      <form className="leftSideForm" action="/index.html">
        <div className="dropdownTitle">
          <h3>1st Band - First Value:</h3>
        </div>
        <div id=" selectorOne">
          <select
            className="firstBand"
            value={firstBand}
            onChange={(event) => firstBandChange(event.target.value)}
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="black">Black - 0</option>
            <option value="brown">Brown - 1</option>
            <option value="red">Red - 2</option>
            <option value="orange">Orange - 3</option>
            <option value="yellow">Yellow - 4</option>
            <option value="green">Green - 5</option>
            <option value="blue">Blue - 6</option>
            <option value="violet">Violet - 7</option>
            <option value="grey">Grey - 8</option>
            <option value="white">White - 9</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>2nd Band - Second Value:</h3>
        </div>
        <div id="selectorTwo">
          <select
            className="secondBand"
            value={secondBand}
            onChange={(event) => secondBandChange(event.target.value)}
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="black">Black - 0</option>
            <option value="brown">Brown - 1</option>
            <option value="red">Red - 2</option>
            <option value="orange">Orange - 3</option>
            <option value="yellow">Yellow - 4</option>
            <option value="green">Green - 5</option>
            <option value="blue">Blue - 6</option>
            <option value="violet">Violet - 7</option>
            <option value="grey">Grey - 8</option>
            <option value="white">White - 9</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>Select a Multiplier:</h3>
        </div>
        <div id="selectorThree">
          <select
            className="thirdBand"
            value={thirdBand}
            onChange={(event) => thirdBandChange(event.target.value)}
          >
            <option value="" disabled selected>
              Multiplier
            </option>
            <option value="black">Black ×1 Ω</option>
            <option value="brown">Brown ×10 Ω</option>
            <option value="red">Red ×100 Ω</option>
            <option value="orange">Orange ×1 kΩ</option>
            <option value="yellow">Yellow ×10 kΩ</option>
            <option value="green">Green ×100 kΩ</option>
            <option value="blue">Blue ×1 MΩ</option>
            <option value="violet">Violet ×10 MΩ</option>
            <option value="grey">Grey ×100 MΩ</option>
            <option value="white">White ×1 GΩ</option>
            <option value="gold">Gold ×0.1 Ω</option>
            <option value="silver">Silver ×0.01 Ω</option>
          </select>
        </div>
        <div className="dropdownTitle">
          <h3>Select Tolerance:</h3>
        </div>
        <div id="selectorFour">
          <select
            className="fourthBand"
            value={fourthBand}
            onChange={(event) => fourthBandChange(event.target.value)}
          >
            <option value="" disabled selected>
              Tolerance
            </option>
            <option value="brown">Brown ± 1%</option>
            <option value="red">Red ± 2%</option>
            <option value="green">Grenn ± 0.5%</option>
            <option value="blue">Blue ± 0.25%</option>
            <option value="violet">Violet ± 0.1%</option>
            <option value="grey">Grey ± 0.05%</option>
            <option value="gold">Gold ± 5%</option>
            <option value="silver">Silver ± 10%</option>
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
