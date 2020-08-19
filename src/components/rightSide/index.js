import React from "react";
import "./RightSide.css";

function RightSide(props) {
  const { firstBand, secondBand, thirdBand, fourthBand, result } = props;
  console.log(result);
  return (
    <div className="col-lg-6 ">
      <div>
        <div className=" mx-auto rightSidePosition">
          <div className="imageContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/4-Band_Resistor.svg/2000px-4-Band_Resistor.svg.png"
              class="card-img-top"
              alt="ohms resistor"
            />
            <div className={`firstColorBand ${firstBand}`}></div>
            <div className={`secondColorBand ${secondBand}`}></div>
            <div className={`thirdColorBand ${thirdBand}`}></div>
            <div className={`fourthColorBand ${fourthBand}`}></div>
          </div>
          <div className="resultContainer">{result}</div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
// The current (I) = Voltage (V) / Resistance (Ohms). The Power (P) = I * V (Current * Voltage)
