import React from "react";
import { Link } from "react-router-dom";
import forestWalkingEffect from "../utils/forest-walking-effect";
import TransitionWrapper from "../TransitionWrapper";
import "./campsite.css";

const Campsite = () => {
  return (
    <TransitionWrapper>
      <div className="campsite--container">
        <ul className="campsite--ul">
          <li
            className="campiste--arrow-up"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/campsite/inside-tent" className="arrow up"></Link>
          </li>

          <div className="campsite--left-arrows-wrapper">
            <li
              className="campiste--arrow-left"
              onClick={() => forestWalkingEffect()}
            >
              <Link to="/house" className="arrow left"></Link>
            </li>
            <li
              className="campiste--arrow-diagonally-left--down"
              onClick={() => forestWalkingEffect()}
            >
              <Link to="/start" className="arrow diagonally-left--down"></Link>
            </li>
          </div>

          <li
            className="campiste--arrow-down"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/forest" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Campsite;
