import React from "react";
import { Link } from "react-router-dom";
import "../inside-cave.css";

const RightSide = () => {
  return (
    <div className="inside-cave-right-side--container">
      <ul className="inside-cave-right-side--ul">
        <li>
          <Link to="/game-over" className="arrow up"></Link>
        </li>
        <li>
          <Link to="/inside-cave" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default RightSide;
