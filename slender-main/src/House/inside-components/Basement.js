import React from "react";
import { Link } from "react-router-dom";

const Basement = () => {
  return (
    <div>
      <h1>Basement</h1>
      <h2>YOU FOUND A PAGE</h2>
      <Link to="/inside-house">Return</Link>
    </div>
  );
};

export default Basement;
