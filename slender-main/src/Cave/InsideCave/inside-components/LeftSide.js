import React from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div>
      <h1>Left side</h1>
      <h2>YOU FOUND A PAGE</h2>
      <Link to="/cave">Return to cave</Link>
    </div>
  );
};

export default LeftSide;
