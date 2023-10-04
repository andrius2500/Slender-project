import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import forestWalkingEffect from "../utils/forest-walking-effect";
import TransitionWrapper from "../TransitionWrapper";
import { stopCaveAudio } from "../utils/cave-sound-effect";
import { playForrestAudio } from "../utils/forrest-effect";

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
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/inside-cave" className="arrow up"></Link>
          </li>
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/start" className="arrow right"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Cave;
