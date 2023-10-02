import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TransitionWrapper from "../TransitionWrapper";
import { playForrestAudio } from "../utils/forrest-effect";
import walkingEffect from "../utils/walking-effect";
import "./first-path.css";

const FirstPath = () => {
  useEffect(() => {
    playForrestAudio();
  });

  return (
    <TransitionWrapper>
      <div className="first-path--container">
        <ul className="first-path--ul" onClick={() => walkingEffect()}>
          <div className="first-path--upper-arrows-wrapper">
            <li className="first-path--li">
              <Link to="/house" className="arrow up"></Link>
            </li>
            <li
              className="first-path--li first-path--li-diagonally-right"
              onClick={() => walkingEffect()}
            >
              <Link to="/campsite" className="arrow diagonally-right"></Link>
            </li>
          </div>

          <div
            className="first-path--lower-arrows-wrapper"
            onClick={() => walkingEffect()}
          >
            <li className="first-path--li first-path--li-arrow-left">
              <Link to="/cave" className="arrow left"></Link>
            </li>
            <li className="first-path--li" onClick={() => walkingEffect()}>
              <Link to="/forest" className="arrow right"></Link>
            </li>
          </div>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default FirstPath;
