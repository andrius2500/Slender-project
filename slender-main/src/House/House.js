import React from "react";
import { Link } from "react-router-dom";
import "./house.css";

const House = () => {
  return (
    <div className="house--container">
      <ul className="house--ul">
        <li>
          <Link to="/inside-house" className="arrow up">
            {/* Inside */}
          </Link>
        </li>
        <li>
          <Link to="/campsite" className="arrow right">
            {/* Camp */}
          </Link>
        </li>
        <li>
          <Link to="/start" className="arrow down">
            {/* Return */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default House;
