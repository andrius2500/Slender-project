import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import House from "../House/House";
import Campsite from "../Campsite/Campsite";
import Cave from "../Cave/Cave";
import Forest from "../Forest/Forest";

const StartWindow = () => {
  return (
    <>
      <ul>
        <li>
          <h2>Chooose</h2>
          <Link to="/start">Start</Link>
        </li>
        <li>
          <h2>About</h2>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* <Routes>
        <Route path="/campsite" element={<Campsite />} />
        <Route path="/house" element={<House />} />
        <Route path="/cave" element={<Cave />} />
        <Route path="/forest" element={<Forest />} />
      </Routes> */}
    </>
  );
};

export default StartWindow;
