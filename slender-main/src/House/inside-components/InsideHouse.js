import React from "react";
import { Link } from "react-router-dom";

const InsideHouse = () => {
  return (
    <div>
      <h1>Inside house - main lobby</h1>
      <ul>
        <li>
          <h2>Left room</h2>
          <Link to="/left-room">Left room</Link>
        </li>
        <li>
          <h2>Center room</h2>
          <Link to="/center-room">Center room</Link>
        </li>
        <li>
          <h2>Right room</h2>
          <Link to="/game-over">Right room</Link>
        </li>
        <li>
          <h2>Return</h2>
          <Link to="/house">Return</Link>
        </li>
      </ul>
    </div>
  );
};

export default InsideHouse;
