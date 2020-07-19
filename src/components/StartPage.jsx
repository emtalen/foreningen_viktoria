import React from "react";
import "../styles/startPage.css";
import Navigation from "./Navigation";
import Purposes from "./Purposes";
import Galleri from "./Galleri";
import TheBoard from "./TheBoard";
import Donations from "./Donations";
import ApplyForm from "./ApplyForm";
import Footer from "./Footer";

const StartPage = () => {
  return (
    <>
      <div className="main-container-extra">
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
      <Purposes />
      <Galleri />
      <TheBoard />
      <Donations />
      <ApplyForm />
      <Footer />
    </>
  );
};

export default StartPage;
