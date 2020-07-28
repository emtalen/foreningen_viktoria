import React from "react";
import "../styles/navigation.css";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div id="navigation">
      <div id="navigation-content">
        <span></span>
        <Link
          id="header"
          activeClass=""
          to="start-page"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          FÖRENINGEN VICTORIA
        </Link>
        <br />
        <Link
          className="tab"
          activeClass="active"
          to="purposes"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Ändamål
        </Link>
        <Link
          className="tab"
          activeClass="active"
          to="galleri"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Galleri
        </Link>
        <Link
          className="tab"
          activeClass="active"
          to="the-board"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Styrelsen
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
