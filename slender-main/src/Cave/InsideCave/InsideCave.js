import React from "react";
import { Link } from "react-router-dom";
import "./inside-cave.css";

const Cave = () => {
  return (
    <div className="inside-cave-entrance--container">
      <ul className="inside-cave-entrance--ul">
        <div className="inside-cave-entrance--li">
          <li>
            <Link
              to="/inside-cave/inside-cave-left"
              className="arrow left"
            ></Link>
          </li>
          <li>
            <Link
              to="/inside-cave/inside-cave-right"
              className="arrow right"
            ></Link>
          </li>
        </div>

        <li className="inside-cave-entrance--go-back">
          <Link to="/cave" className="arrow down"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Cave;
