import React from "react";
import { Link } from "react-router-dom";
import forestWalkingEffect from "../utils/forest-walking-effect";
import TransitionWrapper from "../TransitionWrapper";
import "./forest.css";

const Forest = () => {
  return (
    <TransitionWrapper>
      <div className="forest--container">
        <ul className="forest--ul">
          <li
            className="forest--arrow-up"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/campsite" className="arrow up"></Link>
          </li>
          <div className="forest--li">
            <li onClick={() => forestWalkingEffect()}>
              <Link to="/start" className="arrow left"></Link>
            </li>
            <li onClick={() => forestWalkingEffect()}>
              <Link to="/game-over" className="arrow right"></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Forest;
