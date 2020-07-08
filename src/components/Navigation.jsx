import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div id="navigation">
      <div id="navigation-content">
        <span id='header'>FÖRENINGEN VICTORIA</span><br/>
        <span className="tab">Ändamål</span>
        <span className="tab">Galleri</span>
        <span className="tab">Styrelsen</span>
      </div>
    </div>
  );
};

export default Navigation;
