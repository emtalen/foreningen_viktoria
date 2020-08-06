import React from "react";
import "../styles/startPage.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-scroll";

const StartPage = () => {
  return (
    <>
      <div className="main-container-extra" id='start-page'>
        <div className="main-content">
          <Navigation />
         <p>De sista detaljerna finslipas och inom kort släpper vi den nya hemsidan</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartPage;
