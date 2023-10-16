import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../TransitionWrapper";
import { playForrestAudio } from "../utils/background-sound-effects";
import { forestWalkingEffect } from "../utils/walking-sound-effects";
import "./first-path.css";

const FirstPath = () => {
  useEffect(() => {
    // playForrestAudio();
  });

  return (
    <TransitionWrapper>
      <div className="first-path--container">
        <ul className="first-path--ul" onClick={() => forestWalkingEffect()}>
          <div className="first-path--upper-arrows-wrapper">
            <li className="first-path--li">
              <Link to="/house" className="arrow up"></Link>
            </li>
            <li
              className="first-path--li first-path--li-diagonally-right"
              onClick={() => forestWalkingEffect()}
            >
              <Link to="/campsite" className="arrow diagonally-right"></Link>
            </li>
          </div>

          <div
            className="first-path--lower-arrows-wrapper"
            onClick={() => forestWalkingEffect()}
          >
            <li className="first-path--li first-path--li-arrow-left">
              <Link to="/cave" className="arrow left"></Link>
            </li>
            <li
              className="first-path--li"
              onClick={() => forestWalkingEffect()}
            >
              <Link to="/forest" className="arrow right"></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default FirstPath;
