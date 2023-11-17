import React from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../../../wrappers/TransitionWrapper";
import {
  hallwayWalkingEffect,
  stairwayWalkingEffect,
} from "../../../utils/walking-sound-effects";

import "./inside-house.css";

const LeftRoom = () => {
  return (
    <TransitionWrapper>
      <div className="house-stairway--container">
        <ul className="house-stairway--ul">
          <li>
            <Link
              to="/house/inside-house/stairway/inside-basement"
              className="arrow up"
              onClick={() => stairwayWalkingEffect()}
            ></Link>
          </li>
          <li>
            <Link
              to="/house/inside-house"
              className="arrow down"
              onClick={() => hallwayWalkingEffect()}
            ></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default LeftRoom;
