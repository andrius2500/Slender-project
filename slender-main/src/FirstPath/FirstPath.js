import React from "react";
import { Link } from "react-router-dom";
import "./first-path.css";

const FirstPath = () => {
  return (
    <div className="first-path--container">
      <ul className="first-path--ul">
        <div className="first-path--upper-arrows-wrapper">
          <li className="first-path--li">
            <Link to="/house" className="arrow up"></Link>
          </li>
          <li className="first-path--li first-path--li-diagonally-right">
            <Link to="/campsite" className="arrow diagonally-right"></Link>
          </li>
        </div>

        <div className="first-path--lower-arrows-wrapper">
          <li className="first-path--li first-path--li-arrow-left">
            <Link to="/cave" className="arrow left"></Link>
          </li>
          <li className="first-path--li">
            <Link to="/forest" className="arrow right"></Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FirstPath;
