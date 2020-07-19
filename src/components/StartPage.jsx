import React from "react";
import "../styles/startPage.css";
import Navigation from "./Navigation";


const StartPage = () => {
  return (
    <>
    <div className="main-container">
      <div className="main-content">
        <Navigation />
        <div className="bunny">
          <span>
            <img src="/images/bunny-right.png" alt="Bunny" />
            <img src="/images/bunny-left.png" alt="Bunny" />
          </span>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default StartPage;
