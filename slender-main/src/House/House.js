import React from "react";
import { Link } from "react-router-dom";
import "./house.css";

const House = () => {
  return (
    <div className="house--container">
      <ul className="house--ul">
        <li>
          <Link to="/house/inside-house" className="arrow up"></Link>
        </li>
        <li>
          <Link to="/campsite" className="arrow right"></Link>
        </li>
        <li>
          <Link to="/start" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default House;
