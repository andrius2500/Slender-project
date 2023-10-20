import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TransitionWrapper from "../../../wrappers/TransitionWrapper";
import { caveWalkingEffect } from "../../../utils/walking-sound-effects";
import {
  playCaveAudio,
  stopForrestAudio,
} from "../../../utils/background-sound-effects";
import "./inside-cave.css";

const InsideCave = () => {
  useEffect(() => {
    stopForrestAudio();
    // playCaveAudio();
  });

  return (
    <TransitionWrapper>
      <div className="inside-cave-entrance--container">
        <ul className="inside-cave-entrance--ul">
          <div className="inside-cave-entrance--li">
            <li onClick={() => caveWalkingEffect()}>
              <Link
                to="/inside-cave/inside-cave-left"
                className="arrow left"
              ></Link>
            </li>
            <li onClick={() => caveWalkingEffect()}>
              <Link
                to="/inside-cave/inside-cave-right"
                className="arrow right"
              ></Link>
            </li>
          </div>

          <li
            className="inside-cave-entrance--go-back"
            onClick={() => caveWalkingEffect()}
          >
            <Link to="/cave" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default InsideCave;
