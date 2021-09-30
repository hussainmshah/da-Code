import React from "react";
import "./Card.css";


const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="cardLine"></div>
      <div className="cardContent">
        <img src={props.imgsrc} alt="asd" />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <br/>
        <br/>
        <a href=".#">Read More</a>{" "}
        
        <svg
          width="27"
          height="10"
          viewBox="0 0 27 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.679932 5.17163H24.8401" stroke="#7BC0E3" />
          <path
            d="M21.4729 1.28369L25.416 5.22668L21.4729 9.16968"
            stroke="#7BC0E3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
