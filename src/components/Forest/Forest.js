import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import "./forest.css";

const Forest = () => {
  const [transition, setTransition] = useState(2);

  return (
    <TransitionWrapper transitionDuration={transition}>
      <div className="forest--container">
        <ul className="forest--ul">
          <li
            className="forest--arrow-up"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/campsite" className="arrow up"></Link>
          </li>
          <div className="forest--li">
            <li onClick={() => forestWalkingEffect()}>
              <Link to="/start" className="arrow left"></Link>
            </li>
            <li onClick={() => setTransition(0)}>
              <Link to="/game-over" className="arrow right"></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Forest;
