import React from "react";
import { Routes, Route } from "react-router-dom";
import StartWindow from "./StartWindow/StartWindow";
import About from "./About/About";
import FirstPath from "./FirstPath/FirstPath";
import House from "./House/House";
import Campsite from "./Campsite/Campsite";
import Cave from "./Cave/Cave";
import Forest from "./Forest/Forest";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartWindow />} />
        <Route path="/start" element={<FirstPath />} />
        <Route path="/about" element={<About />} />
        <Route path="/campsite" element={<Campsite />} />
        <Route path="/house" element={<House />} />
        <Route path="/cave" element={<Cave />} />
        <Route path="/forest" element={<Forest />} />
      </Routes>
    </>
  );
};

export default Main;
