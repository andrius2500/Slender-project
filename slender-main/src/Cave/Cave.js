import React from "react";
import { Link } from "react-router-dom";
import "./cave.css";

const Cave = () => {
  return (
    <div className="cave-entrance--container">
      <ul className="cave-entrance--ul">
        <li>
          <Link to="/inside-cave" className="arrow up"></Link>
        </li>
        <li>
          <Link to="/start" className="arrow right"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Cave;
