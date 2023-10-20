import React, { useState } from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../../../../wrappers/TransitionWrapper";
import { caveWalkingEffect } from "../../../../utils/walking-sound-effects";
import "../inside-cave.css";

const RightSide = () => {
  const [transition, setTransition] = useState(2);

  return (
    <TransitionWrapper transitionDuration={transition}>
      <div className="inside-cave-right-side--container">
        <ul className="inside-cave-right-side--ul">
          <li onClick={() => setTransition(0)}>
            <Link to="/game-over" className="arrow up"></Link>
          </li>
          <li onClick={() => caveWalkingEffect()}>
            <Link to="/inside-cave" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default RightSide;
