import React from "react";
import Navigation from "./Navigation";
import '../styles/purpose.css'

const Purposes = () => {
  return (
    <div className="main-container" id="purposes">
      <div className="main-content">
        <Navigation />
        <div id="purpose-text">
          <p>
            Föreningen har som ändåmål att bedriva ideell verksamhet för barn
            och ungdomar med särskilda behov / funktionsnedsättning i form av att
            utveckla deras fritidsintressen samt med särskild målsättning att
            utvecklas till sitt bästa jag. Föreningen vänder sig till människor
            i alla åldrar, oavsett bakgrund. Föreningen ska arbetar aktivt för att motverka all form av
            diskriminering.
          </p>
          <p>
            Utdelning <br />
            Utdelning sker varje år till material, hjälpmedel, aktivitet eller
            liknane som kan mellanslag här stödja den ansökande personen eller
            närstående. Beslutet fattas av föreningens Styrelse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purposes;
