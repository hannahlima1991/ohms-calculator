import React from "react";
import "./RightSide.css";

function RightSide(props) {
  const { firstBand, secondBand, thirdBand, fourthBand } = props;

  return (
    <div className="col-lg-6 ">
      <div>
        <div className=" mx-auto">
          <div className="imageContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/4-Band_Resistor.svg/2000px-4-Band_Resistor.svg.png"
              class="card-img-top"
              alt="ohms resistor"
            />
            <div className={`firstColorBand ${firstBand}`}>a</div>
            <div className={`secondColorBand ${secondBand}`}>b</div>
            <div className={`thirdColorBand ${thirdBand}`}>c</div>
            <div className={`fourthColorBand ${fourthBand}`}>d</div>
          </div>
          <div className="resultContainer"></div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
