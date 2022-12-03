import React from "react";
import { Link } from "react-router-dom";

const House = () => {
  return (
    <div>
      <h1>House</h1>
      <ul>
        <li>
          <h2>Camp</h2>
          <Link to="/campsite">Camp</Link>
        </li>
        <li>
          <h2>Inside the house</h2>
          <Link to="/inside-house">Inside</Link>
        </li>
        <li>
          <h2>Return</h2>
          <Link to="/start">Return</Link>
        </li>
      </ul>
    </div>
  );
};

export default House;
