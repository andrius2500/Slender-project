import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import {
  stopCaveAudio,
  playForrestAudio,
} from "../../utils/background-sound-effects";

import "./cave.css";

const Cave = () => {
  useEffect(() => {
    stopCaveAudio();
    playForrestAudio();
  });

  return (
    <TransitionWrapper>
      <div className="cave-entrance--container">
        <ul className="cave-entrance--ul">
          <li>
            <Link
              to="/inside-cave"
              className="arrow up"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
          <li>
            <Link
              to="/start"
              className="arrow right"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Cave;
