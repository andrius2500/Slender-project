import React from "react";
import { Link } from "react-router-dom";

const LeftRoom = () => {
  return (
    <div>
      <h1>Left room</h1>
      <h2>Nothing here</h2>
      <Link to="/inside-house">Return</Link>
    </div>
  );
};

export default LeftRoom;
