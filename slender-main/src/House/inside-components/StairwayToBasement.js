import React from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../../TransitionWrapper";
import hallwayWalkingEffect from "../../utils/hallway-walking-effect";
import stairwayWalkingEffect from "../../utils/stairway-walking-effect";

import "./inside-house.css";

const LeftRoom = () => {
  return (
    <TransitionWrapper>
      <div className="house-stairway--container">
        <ul className="house-stairway--ul">
          <li onClick={() => stairwayWalkingEffect()}>
            <Link
              to="/house/inside-house/stairway/inside-basement"
              className="arrow up"
            ></Link>
          </li>
          <li onClick={() => hallwayWalkingEffect()}>
            <Link to="/house/inside-house" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default LeftRoom;
