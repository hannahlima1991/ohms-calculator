import React from "react";
import "./LeftSide.css";

//Bellow are 4 objects that translate every option's value into math values for the Ohms formula.
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

//This function takes the 4 option bands as arguments,this way I capture the user input
function calculateOhms(firstBand, secondBand, thirdBand, fourthBand) {
  const firstBandTranslated = firstBandTranslation[firstBand];
  const secondBandTranslated = secondBandTranslation[secondBand];
  const thirdBandTranslated = thirdBandTranslation[thirdBand];
  const fourthBandTranslated = fourthBandTranslation[fourthBand];
  //Here is where I apply a formula using the translated values declared in the objects above.
  const firstSecondBandCalc = firstBandTranslated * 10 + secondBandTranslated;
  let totalOhms = firstSecondBandCalc * thirdBandTranslated;
  totalOhms = formatedResult(totalOhms);
  return totalOhms + fourthBandTranslated;
}

//Here I compare the amount of digits coming out of the formula as a result,
//string.length is the amount os digits for the total of ohms,
//based on that I return the same string or divide it so it can be easier to read.
function formatedResult(number) {
  const string = "" + number;
  switch (true) {
    case string.length === 2:
      console.log(number, "I am 2");
      return string;
    case string.length === 3:
      console.log(number, "I am 3");
      return number;
    case string.length === 4:
      console.log(number, "I am 4");
      return +number / 1000 + "KΩ";
    case string.length === 5:
      console.log(number, "I am 5");
      return +number / 1000 + "KΩ";
    case string.length === 6:
      console.log(number, "I am 6");
      return +number / 1000 + "KΩ";
    case string.length === 7:
      console.log(number, "I am 7");
      return +number / 1000000 + "MΩ";
    case string.length === 8:
      console.log(number, "I am 8");
      return +number / 1000000 + "MΩ";
    case string.length === 9:
      console.log(number, "I am 9");
      return +number / 1000000 + "MΩ";
    default:
      return "error,please try again.";
  }
}
//Here I am importing the props from the parent to use on my dropdowns and capture the user's choice
//as the new state.
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
            //the value is the user selection
            value={firstBand}
            //and once it changes it becomes the new state.
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
            // once clicked, the result will be calculated using the function that was a bove 'calculateOhms'
            //every value will be captured, and will fire the changeResult prop.
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
