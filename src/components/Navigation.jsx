import React from "react";
import "../styles/navigation.css";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div id="navigation">
      <div id="navigation-content">
        <span id="header">FÖRENINGEN VICTORIA</span>
        <br />
        <Link
          className="tab"
          activeClass="active"
          to="purposes"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          isDynamic={true}
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
          duration={500}
          isDynamic={true}
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
          duration={500}
          isDynamic={true}
        >
          Styrelsen
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
