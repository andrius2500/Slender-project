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
          <li className="forest--arrow-up">
            <Link
              to="/campsite"
              className="arrow up"
              onClick={() => forestWalkingEffect()}
            ></Link>
          </li>
          <div className="forest--li">
            <li>
              <Link
                to="/start"
                className="arrow left"
                onClick={() => forestWalkingEffect()}
              ></Link>
            </li>
            <li>
              <Link
                to="/game-over"
                className="arrow right"
                onClick={() => setTransition(0)}
              ></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default Forest;
