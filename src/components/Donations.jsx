import React from "react";
import "../styles/donations.css";
import { animateScroll } from "react-scroll";

const Donations = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="main-container" id="donate">
      <div className="main-content">
        <span id="donations-header">DONERA</span>
        <p id="donations-text">
          <b>Bankgiro:</b> 5493-6505 <br />
          <b>Swish:</b> 123-536 74 46
        </p>
        <p id="donations-text">
          Vid frågor angående donationer, vänligen ta kontakt med Arne Wåhlstedt{" "}
          <br /> arne.enkoping@gmail.com <br /> 070-5890606
        </p>
        <button
          className="to-the-topp"
          id="extra-margin"
          onClick={scrollToTop}
        ></button>
      </div>
    </div>
  );
};

export default Donations;
