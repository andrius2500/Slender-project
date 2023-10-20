// FIX IMPORTS
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import StartWindow from "./components/StartWindow/StartWindow";
import About from "./components/About/About";
import FirstPath from "./components/FirstPath/FirstPath";
import House from "./components/House/House";
import Campsite from "./components/Campsite/Campsite";
import Cave from "./components/Cave/Cave";
import Forest from "./components/Forest/Forest";
import InsideHouse from "./components/House/inside-components/InsideHouse";
import StairwayToBasement from "./components/House/inside-components/StairwayToBasement";
import InsideBasement from "./components/House/inside-components/InsideBasement";
import Slender from "./components/Slender/Slender";
import RightSide from "./components/Cave/InsideCave/inside-components/RightSide";
import LeftSide from "./components/Cave/InsideCave/inside-components/LeftSide";
import InsideCave from "./components/Cave/InsideCave/InsideCave";
import Note from "./components/Note/Note";
import Glitch from "./wrappers/GlitchEffectWrapper";
import { AnimatePresence } from "framer-motion";
import "./global.css";

const Main = () => {
  const location = useLocation();
  return (
    <>
      {/* <Glitch> */}
      {/* <AnimatePresence mode="wait" initial={false}> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartWindow />} />
        <Route path="/start" element={<FirstPath />} />
        <Route path="/about" element={<About />} />
        <Route path="/campsite" element={<Campsite />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/house" element={<House />} />
        <Route path="/house/inside-house" element={<InsideHouse />} />
        <Route
          path="/house/inside-house/stairway"
          element={<StairwayToBasement />}
        />
        <Route
          path="/house/inside-house/stairway/inside-basement"
          element={<InsideBasement />}
        />
        <Route path="/cave" element={<Cave />} />
        <Route path="/inside-cave" element={<InsideCave />} />
        <Route path="/inside-cave/inside-cave-right" element={<RightSide />} />
        <Route path="/inside-cave/inside-cave-left" element={<LeftSide />} />
        <Route path="/game-over" element={<Slender />} />
        <Route path="/found-note" element={<Note />} />
      </Routes>
      {/* </AnimatePresence> */}
      {/* </Glitch> */}
    </>
  );
};

export default Main;
