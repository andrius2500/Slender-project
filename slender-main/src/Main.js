import React from "react";
import { Routes, Route } from "react-router-dom";
import StartWindow from "./StartWindow/StartWindow";
import About from "./About/About";
import FirstPath from "./FirstPath/FirstPath";
import House from "./House/House";
import Campsite from "./Campsite/Campsite";
import Cave from "./Cave/Cave";
import Forest from "./Forest/Forest";
import InsideHouse from "./House/inside-components/InsideHouse";
import StairwayToBasement from "./House/inside-components/StairwayToBasement";
import Basement from "./House/inside-components/Basement";
import InsideTent from "./Campsite/InsideTent";
import Slender from "./Slender/Slender";
import LeftSide from "./Cave/InsideCave/inside-components/LeftSide";
import RightSide from "./Cave/InsideCave/inside-components/RightSide";
import InsideCave from "./Cave/InsideCave/InsideCave";

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
        <Route path="/inside-house" element={<InsideHouse />} />
        <Route path="/stairway" element={<StairwayToBasement />} />
        <Route path="/game-over" element={<Slender />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/inside-tent" element={<InsideTent />} />
        <Route path="/inside-cave" element={<InsideCave />} />
        <Route path="/inside-cave/inside-cave-left" element={<LeftSide />} />
        <Route path="/inside-cave/inside-cave-right" element={<RightSide />} />
      </Routes>
    </>
  );
};

export default Main;
