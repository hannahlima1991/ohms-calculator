import React from "react";
import "./RightSide.css";

function RightSide(props) {
  //importing the props from the parent component
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
            {/* thease are the divs i have created and positioned over the existing ones,
            once the user selects an option,the new state is fired changing the color 
            of this div from non-existing to the value that was selected. */}
            <div className={`firstColorBand ${firstBand}`}></div>
            <div className={`secondColorBand ${secondBand}`}></div>
            <div className={`thirdColorBand ${thirdBand}`}></div>
            <div className={`fourthColorBand ${fourthBand}`}></div>
          </div>
          {/* the result is then displayed to the user. */}
          <div className="resultContainer">
            <h4>{result}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
