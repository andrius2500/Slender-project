import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import forestSound from "../assets/sound_effects/test.mp3";
import "./start-window.css";

const StartWindow = () => {
  // const audio = new Audio(forestSound);

  // useEffect(() => {
  //   play();

  //   return () => {
  //     stop();
  //   };
  // });

  // function play() {
  //   audio.play();
  // }

  // function stop() {
  //   audio.pause();
  // }

  return (
    <div className="start-window--container">
      <ul className="start-window--ul">
        <li className="start-window--li">
          <Link
            to="/start"
            className="start-window--btn start-window--start-btn"
          >
            Start
          </Link>
        </li>
        <li className="start-window--li">
          <Link to="/about" className="start-window--btn">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StartWindow;
