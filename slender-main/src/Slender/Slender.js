import React from "react";
import { Link } from "react-router-dom";
import "./slender.css";

const Slender = () => {
  return (
    <div className="slender--container">
      <div className="slender--link">
        <h1>SLENDER - GAME OVER</h1>

        <Link to="/start">Start over</Link>
      </div>
    </div>
  );
};

export default Slender;
