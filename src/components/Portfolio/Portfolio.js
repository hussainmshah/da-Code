import React from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="portfolioHeader">
        <h3>Portfolio</h3>
        <h2>Our Great Work</h2>
      </div>
      <div className="portfolioButtons">
        <button className="activeBtn">Website Optimization</button>
        <button>Website Redesign</button>
        <button>Search Engine Optimization</button>
      </div>
      <div>
        <PortfolioCard
          imgSrc={img1}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
        <PortfolioCard
          imgSrc={img2}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
        <PortfolioCard
          imgSrc={img3}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
      </div>
    </div>
  );
};

export default Portfolio;
