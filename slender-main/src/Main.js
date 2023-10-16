// FIX IMPORTS
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import StartWindow from "./StartWindow/StartWindow";
import About from "./components/About/About";
import FirstPath from "./FirstPath/FirstPath";
import House from "./House/House";
import Campsite from "./Campsite/Campsite";
import Cave from "./Cave/Cave";
import Forest from "./Forest/Forest";
import InsideHouse from "./House/inside-components/InsideHouse";
import StairwayToBasement from "./House/inside-components/StairwayToBasement";
import InsideBasement from "./House/inside-components/InsideBasement";
import Slender from "./Slender/Slender";
import RightSide from "./Cave/InsideCave/inside-components/RightSide";
import LeftSide from "./Cave/InsideCave/inside-components/LeftSide";
import InsideCave from "./Cave/InsideCave/InsideCave";
import Note from "./Note/Note";
import Glitch from "./GlitchEffectWrapper";
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
