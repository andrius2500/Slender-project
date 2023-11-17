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
          <li>
            <Link
              to="/house/inside-house"
              className="arrow up"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
          <li>
            <Link
              to="/campsite"
              className="arrow right"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
          <li>
            <Link
              to="/start"
              className="arrow down"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default House;
