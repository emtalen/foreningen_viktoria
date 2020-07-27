import React from "react";
import "../styles/startPage.css";
import Navigation from "./Navigation";
import Purposes from "./Purposes";
import Galleri from "./Galleri";
import TheBoard from "./TheBoard";
import Donations from "./Donations";
import ApplyForm from "./ApplyForm";
import Footer from "./Footer";
import { Link } from "react-scroll";

const StartPage = () => {
  return (
    <>
      <div className="main-container-extra">
        <div className="main-content">
          <Navigation />
          <div className="bunny">
            <span>
              <Link
          activeClass="active"
          to="donate"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        > <img src="/images/1.png" alt="Bunny" /></Link>
             <Link
          activeClass=""
          to="apply"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        ><img src="/images/2.png" alt="Bunny" /></Link>
              
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
