import React from "react";
import Navigation from "./Navigation";
import '../styles/purpose.css'
import Galleri from "./Galleri";
import TheBoard from "./TheBoard";
import Donations from "./Donations";
import ApplyForm from "./ApplyForm";
import Footer from "./Footer";

const Purposes = () => {
  return (
    <>
      <div className="main-container" id='purposes'>
        <div className="main-content">
          {" "}
          <Navigation />
          <div id="purpose-text">
            <p>
              Föreningen har som ändåmål att bedriva ideell verksamhet i med
              barn och ungdomar med särskilda behov / functionsnedsättning from
              av vara utveckla deras fritidsintressen samt med särskild
              målsättning att utvecklas till sitt bästa jag. Föreningen vänder
              sig till människor i alla åldrar, oavsett bakgrund. Föreningen ska
              aktivt arbeta för att motverka all form av diskriminering.
            </p>
            <p>
              Utdelning <br />
              Utdelning sker varje år till material, hjälpmedel, aktivitet eller
              liknane som kanstödja den ansökande personen eller närstående,
              beslut fattas av föreningens Styrelse.
            </p>
          </div>
        </div>
      </div>
      <Galleri />
      <TheBoard />
      <Donations />
      <ApplyForm />
      <Footer />
    </>
  );
};

export default Purposes;
