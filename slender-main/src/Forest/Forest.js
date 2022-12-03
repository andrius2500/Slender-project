import React from "react";
import { Link } from "react-router-dom";

const Forest = () => {
  return (
    <div>
      <h1>Forest</h1>
      <ul>
        <li>
          <h2>Return to start</h2>
          <Link to="/start">Return to start</Link>
        </li>
        <li>
          <h2>Campsite</h2>
          <Link to="/campsite">Campsite</Link>
        </li>
        <li>
          <h2>Further to foster</h2>
          <Link to="/game-over">Further to forest</Link>
        </li>
      </ul>
    </div>
  );
};

export default Forest;
