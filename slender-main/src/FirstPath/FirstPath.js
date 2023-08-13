import React from "react";
import { Link } from "react-router-dom";
import "./first-path.css";

const FirstPath = () => {
  return (
    <div className="first-path--container">
      <ul className="first-path--ul">
        <li className="first-path--li">
          <Link to="/house" className="arrow up">
            {/* House */}
          </Link>
        </li>
        <li className="first-path--li">
          <Link to="/campsite" className="arrow diagonally-right">
            {/* Campsite */}
          </Link>
        </li>
        <li className="first-path--li">
          <Link to="/cave" className="arrow left">
            {/* Cave */}
          </Link>
        </li>
        <li className="first-path--li">
          <Link to="/forest" className="arrow right">
            {/* Forest */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FirstPath;
