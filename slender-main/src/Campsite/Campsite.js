import React from "react";
import { Link } from "react-router-dom";
import walkingEffect from "../utils/walking-effect";
import "./campsite.css";

const Campsite = () => {
  return (
    <div className="campsite--container">
      <ul className="campsite--ul">
        <li className="campiste--arrow-up" onClick={() => walkingEffect()}>
          <Link to="/campsite/inside-tent" className="arrow up"></Link>
        </li>

        <div className="campsite--left-arrows-wrapper">
          <li className="campiste--arrow-left" onClick={() => walkingEffect()}>
            <Link to="/house" className="arrow left"></Link>
          </li>
          <li
            className="campiste--arrow-diagonally-left--down"
            onClick={() => walkingEffect()}
          >
            <Link to="/start" className="arrow diagonally-left--down"></Link>
          </li>
        </div>

        <li className="campiste--arrow-down" onClick={() => walkingEffect()}>
          <Link to="/forest" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Campsite;
