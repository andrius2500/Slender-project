import React from "react";
import { Link } from "react-router-dom";

const FirstPath = () => {
  return (
    <ul>
      <li>
        <h2>House</h2>
        <Link to="/house">House</Link>
      </li>
      <li>
        <h2>Campsite</h2>
        <Link to="/campsite">Campsite</Link>
      </li>
      <li>
        <h2>Cave</h2>
        <Link to="/cave">Cave</Link>
      </li>
      <li>
        <h2>Forest</h2>
        <Link to="/forest">Forest</Link>
      </li>
    </ul>
  );
};

export default FirstPath;
