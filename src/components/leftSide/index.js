import React from "react";
import "./LeftSide.css";

const firstBandTranslation = {
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};
const secondBandTranslation = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};
const thirdBandTranslation = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  violet: 10000000,
  gold: 0.1,
  silver: 0.01,
};
const fourthBandTranslation = {
  black: "± 20% Tolerance",
  brown: "± 1% Tolerance",
  red: "± 2% Tolerance",
  gold: "± 5% Tolerance",
  silver: "± 10% Tolerance",
};

function calculateOhms(firstBand, secondBand, thirdBand, fourthBand) {
  const firstBandTranslated = firstBandTranslation[firstBand];
  const secondBandTranslated = secondBandTranslation[secondBand];
  const thirdBandTranslated = thirdBandTranslation[thirdBand];
  const fourthBandTranslated = fourthBandTranslation[fourthBand];
  const firstSecondBandCalc = firstBandTranslated * 10 + secondBandTranslated;
  const totalOhms = firstSecondBandCalc * thirdBandTranslated;

  return totalOhms + fourthBandTranslated;
}

function LeftSide(props) {
  const {
    changeResult,
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
      <div className="leftSideForm">
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
            <option value="black">Black ± 20%</option>
            <option value="brown">Brown ± 1%</option>
            <option value="red">Red ± 2%</option>
            <option value="gold">Gold ± 5%</option>
            <option value="silver">Silver ± 10%</option>
          </select>
        </div>
        <div className="calculationButton">
          <button
            className="calculateOhms"
            onClick={() => {
              const result = calculateOhms(
                firstBand,
                secondBand,
                thirdBand,
                fourthBand
              );
              changeResult(result);
            }}
          >
            Calculator
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
