import React from "react";
import { Link } from "react-router-dom";

const CenterRoom = () => {
  return (
    <div>
      <h1>Center room</h1>
      <ul>
        <li>
          <h2>Basement</h2>
          <Link to="/basement">Basement</Link>
        </li>
        <li>
          <h2>Return</h2>
          <Link to="/inside-house">Return</Link>
        </li>
      </ul>
    </div>
  );
};

export default CenterRoom;
