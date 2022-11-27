import React from "react";
import { Link } from "react-router-dom";

const House = () => {
  return (
    <div>
      <h1>House</h1>
      <ul>
        <li>
          <h2>Forest</h2>
          <Link to="/forest">Forest</Link>
        </li>
      </ul>
    </div>
  );
};

export default House;
