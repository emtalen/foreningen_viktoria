import React from "react";
import Navigation from "./Navigation";
import '../styles/theBoard.css'

const TheBoard = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <Navigation />
        <h4>Ordförande: Arne Wåhlstedt 070-5890606</h4>
        <h4>Sekreterare: Anders Eriksson 070-4539686</h4>
        <h4>Kassör: Ove Rickardsson 070-3075040</h4>
      </div>
    </div>
  );
};

export default TheBoard;
