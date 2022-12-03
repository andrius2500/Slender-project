import React from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div>
      <h1>Right side</h1>
      <h2>Go further to cave</h2>
      <Link to="/game-over">Further to cave</Link>
    </div>
  );
};

export default RightSide;
