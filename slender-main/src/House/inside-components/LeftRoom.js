import React from "react";
import { Link } from "react-router-dom";
import "./inside-house.css";

const LeftRoom = () => {
  return (
    <div className="house-stairway--container">
      <ul className="house-stairway--ul">
        <li>
          <Link to="/basement">Basement</Link>
        </li>
        <li>
          <Link to="/inside-house">Return</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftRoom;
