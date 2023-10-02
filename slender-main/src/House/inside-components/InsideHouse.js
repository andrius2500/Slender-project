import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { stopForrestAudio } from "../../utils/forrest-effect";
import "./inside-house.css";

const InsideHouse = () => {
  useEffect(() => {
    stopForrestAudio();
  });
  return (
    <div className="house-lobby-container">
      <ul className="house-lobby--ul">
        <li>
          <Link to="/game-over" className="arrow up"></Link>
        </li>
        <li>
          <Link to="/house/inside-house/stairway" className="arrow left"></Link>
        </li>
        <li>
          <Link to="/house" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default InsideHouse;
