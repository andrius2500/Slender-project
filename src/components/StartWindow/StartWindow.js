import React from "react";
import { Link } from "react-router-dom";
import "./start-window.css";

const StartWindow = () => {
  return (
    <div className="start-window--container">
      <ul className="start-window--ul">
        <li className="start-window--li">
          <Link
            to="/start"
            className="start-window--btn start-window--start-btn"
          >
            Start
          </Link>
        </li>
        <li className="start-window--li">
          <Link to="/about" className="start-window--btn">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StartWindow;
