import React from "react";
import { Link } from "react-router-dom";
import "./campsite.css";

const Campsite = () => {
  return (
    <div className="campsite--container">
      <h1>Camspite</h1>
      <ul>
        <li>
          <h2>Return</h2>
          <Link to="/start">Return</Link>
        </li>
        <li>
          <h2>House</h2>
          <Link to="/house">House</Link>
        </li>
        <li>
          <h2>Go to forest</h2>
          <Link to="/forest">Go to forest</Link>
        </li>
        <li>
          <h2>Go to car</h2>
          <Link to="/car-location">Go to car</Link>
        </li>
      </ul>
    </div>
  );
};

export default Campsite;
