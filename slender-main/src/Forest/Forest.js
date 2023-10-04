import React from "react";
import { Link } from "react-router-dom";
import walkingEffect from "../utils/walking-effect";
import TransitionWrapper from "../TransitionWrapper";
import "./forest.css";

const Forest = () => {
  return (
    <TransitionWrapper>
      <div className="forest--container">
        <ul className="forest--ul">
          <li className="forest--arrow-up" onClick={() => walkingEffect()}>
            <Link to="/campsite" className="arrow up"></Link>
          </li>
          <div className="forest--li">
            <li onClick={() => walkingEffect()}>
              <Link to="/start" className="arrow left"></Link>
            </li>
            <li onClick={() => walkingEffect()}>
              <Link to="/game-over" className="arrow right"></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Forest;
