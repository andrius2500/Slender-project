import React from "react";
import { Link } from "react-router-dom";
import Note from "../../../Note/Note";
import "../inside-cave.css";

const LeftSide = () => {
  return (
    <div className="inside-cave-right-side--container">
      <Note />
      <ul className="inside-cave-right-side--ul">
        <li>
          <Link to="/inside-cave" className="arrow down">
            {/* Return */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSide;
