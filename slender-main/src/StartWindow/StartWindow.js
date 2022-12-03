import React from "react";
import { Link } from "react-router-dom";

const StartWindow = () => {
  return (
    <>
      <ul>
        <li>
          <h2>Chooose</h2>
          <Link to="/start">Start</Link>
        </li>
        <li>
          <h2>About</h2>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default StartWindow;
