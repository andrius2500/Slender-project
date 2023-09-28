import React from "react";
import { Link } from "react-router-dom";
import "./slender.css";
import { useGlitch } from "react-powerglitch";

const Slender = () => {
  const glitch = useGlitch({ hideOverflow: "true", shake: false });
  // shake: { velocity: 5 }
  return (
    <div className="slender--container" ref={glitch.ref}>
      <div className="slender--link">
        <h1>SLENDER - GAME OVER</h1>

        <Link to="/start">Start over</Link>
      </div>
    </div>
  );
};

export default Slender;
