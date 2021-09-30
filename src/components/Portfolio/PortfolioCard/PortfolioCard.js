import React from "react";
import './PortfolioCard.css'
const PortfolioCard = (props) => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCardContent">
        <img src={props.imgSrc} alt="asd" />
        <p>{props.content}</p>
        <br />
      </div>
    </div>
  );
};

export default PortfolioCard;
