import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlitch } from "react-powerglitch";
import {
  stopCaveAudio,
  stopForrestAudio,
  stopInsideHouseAudio,
} from "../utils/background-sound-effects";
import gameOverSound from "../Assets/sound_effects/game-over-effect.mp3";
import "./slender.css";

const gameOverSoundEffect = new Audio(gameOverSound);

const Slender = () => {
  useEffect(() => {
    stopCaveAudio();
    stopForrestAudio();
    stopInsideHouseAudio();
    gameOverSoundEffect.play();
  });
  const glitch = useGlitch();

  return (
    <div className="slender--container">
      <div className="slender--link">
        <h1 ref={glitch.ref}>GAME OVER</h1>

        <Link className="slender--start-over" to="/start">
          Start over
        </Link>
      </div>
    </div>
  );
};

export default Slender;
