import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { playForrestAudio } from "../utils/forrest-effect";
import walkingEffect from "../utils/walking-effect";
import "./house.css";

const House = () => {
  // useEffect(() => {
  //   playForrestAudio();
  // });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="house--container">
        <ul className="house--ul">
          <li onClick={() => walkingEffect()}>
            <Link to="/house/inside-house" className="arrow up"></Link>
          </li>
          <li onClick={() => walkingEffect()}>
            <Link to="/campsite" className="arrow right"></Link>
          </li>
          <li onClick={() => walkingEffect()}>
            <Link to="/start" className="arrow down"></Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default House;
