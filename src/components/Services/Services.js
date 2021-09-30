import React from "react";
import Card from "./Card/Card";
import website from "../../assets/svg/web-site.svg";
import layers from "../../assets/svg/layers.svg";
import startup from "../../assets/svg/startup.svg";
import magnifyingGlass from "../../assets/svg/magnifying-glass.svg";
import wordpress from "../../assets/svg/wordpress.svg";
import webDesign from "../../assets/svg/web-design.svg";

const Services = () => {
  return (
    <services>
      <div className="servicesContainer">
        <div className="servicesHead">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et.
          </p>
        </div>
        <div className="servciesCard">
          <center>
            <Card
              title="Wordpress Site"
              content="Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut "
              imgsrc={website}
            />
            <Card
              title="WordPress Plugin"
              content="Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut "
              imgsrc={wordpress}
            />
            <Card
              title="Wesite Redesign"
              content="Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut "
              imgsrc={webDesign}
            />
            <Card
              imgsrc={magnifyingGlass}
              title="WordPress Site Optimization"
              content="Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut "
            />
            <Card imgsrc={startup} title="Search Engine Optimization" 
            content="Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut "/>
            <Card imgsrc={layers} title="Cross Platform Mobile App" 
            content="Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut "/>
          </center>
        </div>
      </div>
    </services>
  );
};

export default Services;
