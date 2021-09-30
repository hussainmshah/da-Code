import React from "react";
import Analyse from "../../assets/img/Analyse1.png";
import elipse from "../../assets/svg/elipse.svg";

const hero = () => {
  return (
    <div>
      <hero className="heroContainer">
        <div className="heroContent">
          <div className="heroContent-line"></div>
          <h2>
            We help you create your <span className="blueColor">website</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <div>
            <button className="blueBtn">Get Started</button>
            <button className="blueBtn whiteBtn">Contact Us</button>
          </div>
        </div>
        <div className="Analyse">
          <img src={Analyse} alt="AnalyseImage" />
        </div>

        <div className="elipse">
          <img src={elipse} alt="elipse" />
        </div>
      </hero>
    </div>
  );
};

export default hero;
