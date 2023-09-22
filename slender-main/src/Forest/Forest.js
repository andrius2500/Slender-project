import React from "react";
import { Link } from "react-router-dom";
import "./forest.css";

const Forest = () => {
  return (
    <div className="forest--container">
      <ul className="forest--ul">
        <li className="forest--arrow-up">
          <Link to="/campsite" className="arrow up"></Link>
        </li>
        <div className="forest--li">
          <li>
            <Link to="/start" className="arrow left"></Link>
          </li>
          <li>
            <Link to="/game-over" className="arrow right"></Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Forest;
