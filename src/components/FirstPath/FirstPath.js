import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import { playForrestAudio } from "../../utils/background-sound-effects";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import "./first-path.css";

const FirstPath = () => {
  useEffect(() => {
    playForrestAudio();
  });

  return (
    <TransitionWrapper>
      <div className="first-path--container">
        <ul className="first-path--ul">
          <div className="first-path--upper-arrows-wrapper">
            <li className="first-path--li">
              <Link
                to="/house"
                className="arrow up"
                onClick={() => forestWalkingEffect()}
              ></Link>
            </li>
            <li className="first-path--li first-path--li-diagonally-right">
              <Link
                to="/campsite"
                className="arrow diagonally-right"
                onClick={() => forestWalkingEffect()}
              ></Link>
            </li>
          </div>

          <div className="first-path--lower-arrows-wrapper">
            <li className="first-path--li first-path--li-arrow-left">
              <Link
                to="/cave"
                className="arrow left"
                onClick={() => forestWalkingEffect()}
              ></Link>
            </li>
            <li className="first-path--li">
              <Link
                to="/forest"
                className="arrow right"
                onClick={() => forestWalkingEffect()}
              ></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default FirstPath;
