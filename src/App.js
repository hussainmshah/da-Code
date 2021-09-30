import React, { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Services />
      <Portfolio/>
    </Fragment>
  );
};

export default App;
