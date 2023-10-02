import React from "react";
import { Link } from "react-router-dom";
import walkingEffect from "../utils/walking-effect";
import "./cave.css";

const Cave = () => {
  return (
    <div className="cave-entrance--container">
      <ul className="cave-entrance--ul">
        <li onClick={() => walkingEffect()}>
          <Link to="/inside-cave" className="arrow up"></Link>
        </li>
        <li onClick={() => walkingEffect()}>
          <Link to="/start" className="arrow right"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Cave;
