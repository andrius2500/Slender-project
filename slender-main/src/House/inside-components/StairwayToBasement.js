import React from "react";
import { Link } from "react-router-dom";
import "./inside-house.css";

const LeftRoom = () => {
  return (
    <div className="house-stairway--container">
      <ul className="house-stairway--ul">
        <li>
          <Link to="/found-note" className="arrow up"></Link>
        </li>
        <li>
          <Link to="/inside-house" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftRoom;
