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
    playCaveAudio();
  });

  return (
    <TransitionWrapper>
      <div className="inside-cave-entrance--container">
        <ul className="inside-cave-entrance--ul">
          <div className="inside-cave-entrance--li">
            <li>
              <Link
                to="/inside-cave/inside-cave-left"
                className="arrow left"
                onClick={() => caveWalkingEffect()}
              ></Link>
            </li>
            <li>
              <Link
                to="/inside-cave/inside-cave-right"
                className="arrow right"
                onClick={() => caveWalkingEffect()}
              ></Link>
            </li>
          </div>

          <li className="inside-cave-entrance--go-back">
            <Link
              to="/cave"
              className="arrow down"
              onClick={() => caveWalkingEffect()}
            ></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default InsideCave;
