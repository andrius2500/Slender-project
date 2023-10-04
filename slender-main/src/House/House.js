import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { playForrestAudio } from "../utils/forrest-effect";
import walkingEffect from "../utils/walking-effect";
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
          <li onClick={() => walkingEffect()}>
            <Link to="/house/inside-house" className="arrow up"></Link>
          </li>
          <li onClick={() => walkingEffect()}>
            <Link to="/campsite" className="arrow right"></Link>
          </li>
          <li onClick={() => walkingEffect()}>
            <Link to="/start" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};

export default House;
