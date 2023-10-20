import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  playForrestAudio,
  stopInsideHouseAudio,
} from "../../utils/background-sound-effects";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import "./house.css";

const House = () => {
  useEffect(() => {
    stopInsideHouseAudio();
    playForrestAudio();
  });

  return (
    <TransitionWrapper>
      <div className="house--container">
        <ul className="house--ul">
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/house/inside-house" className="arrow up"></Link>
          </li>
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/campsite" className="arrow right"></Link>
          </li>
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/start" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default House;
