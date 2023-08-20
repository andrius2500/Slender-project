import React from "react";
import { Link } from "react-router-dom";
import "./cave.css";

// TODO: Make new inside cave component

const Cave = () => {
  return (
    <div className="cave-entrance--container">
      <ul className="cave-entrance--ul">
        <li>
          <Link to="/" className="arrow up">
            {/* Return */}
          </Link>
        </li>
        <li>
          <Link to="/start" className="arrow right">
            {/* Return */}
          </Link>
        </li>

        {/* <li>
          <Link to="/left-cave-inside" className="arrow left">
            Turn left
          </Link>
        </li>
        <li>
          <Link to="/right-cave-inside" className="arrow rigth">
            Turn rights
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Cave;
