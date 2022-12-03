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
import LeftRoom from "./House/inside-components/LeftRoom";
import CenterRoom from "./House/inside-components/CenterRoom";
import Basement from "./House/inside-components/Basement";
import CarLocation from "./Campsite/CarLocation";
import Slender from "./Slender/Slender";
import LeftSide from "./Cave/inside-components/LeftSide";
import RightSide from "./Cave/inside-components/RightSide";

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
        <Route path="/left-room" element={<LeftRoom />} />
        <Route path="/game-over" element={<Slender />} />
        <Route path="/center-room" element={<CenterRoom />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/car-location" element={<CarLocation />} />
        <Route path="/left-cave-inside" element={<LeftSide />} />
        <Route path="/right-cave-inside" element={<RightSide />} />
      </Routes>
    </>
  );
};

export default Main;
