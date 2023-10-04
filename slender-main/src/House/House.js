import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { playForrestAudio } from "../utils/forrest-effect";
import forestWalkingEffect from "../utils/forest-walking-effect";
import TransitionWrapper from "../TransitionWrapper";
import "./house.css";

const House = () => {
  // useEffect(() => {
  //   playForrestAudio();
  // });

  return (
    <TransitionWrapper>
      <div className="house--container">
        <ul className="house--ul">
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/house/inside-house" className="arrow up"></Link>
          </li>
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/campsite" className="arrow right"></Link>
          </li>
          <li onClick={() => forestWalkingEffect()}>
            <Link to="/start" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default House;
