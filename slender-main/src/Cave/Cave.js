import React from "react";
import { Link } from "react-router-dom";

const Cave = () => {
  return (
    <div>
      <h1>Cave</h1>
      <ul>
        <li>
          <h2>Return</h2>
          <Link to="/start">Return</Link>
        </li>
        <li>
          <h2>Turn left</h2>
          <Link to="/left-cave-inside">Turn left</Link>
        </li>
        <li>
          <h2>Turn right</h2>
          <Link to="/right-cave-inside">Turn right</Link>
        </li>
      </ul>
    </div>
  );
};

export default Cave;
