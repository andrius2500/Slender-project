import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  stopForrestAudio,
  playInsideHouseAudio,
} from "../../../utils/background-sound-effects";
import { hallwayWalkingEffect } from "../../../utils/walking-sound-effects";
import TransitionWrapper from "../../../wrappers/TransitionWrapper";
import "./inside-house.css";

const InsideHouse = () => {
  const [transition, setTransition] = useState(2);

  useEffect(() => {
    stopForrestAudio();
    // playInsideHouseAudio();
  });

  return (
    <TransitionWrapper transitionDuration={transition}>
      <div className="house-lobby-container">
        <ul className="house-lobby--ul">
          <li onClick={() => setTransition(0)}>
            <Link to="/game-over" className="arrow up"></Link>
          </li>
          <li onClick={() => hallwayWalkingEffect()}>
            <Link
              to="/house/inside-house/stairway"
              className="arrow left"
            ></Link>
          </li>
          <li onClick={() => hallwayWalkingEffect()}>
            <Link to="/house" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default InsideHouse;
