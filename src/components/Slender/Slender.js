import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../../utils/note-context";
import { useGlitch } from "react-powerglitch";
import {
  stopCaveAudio,
  stopForrestAudio,
  stopInsideHouseAudio,
} from "../../utils/background-sound-effects";
import gameOverSound from "../../assets/sound_effects/game-over-effect.mp3";
import "./slender.css";

const gameOverSoundEffect = new Audio(gameOverSound);

const Slender = () => {
  const { setNoteCount } = useContext(NoteContext);

  useEffect(() => {
    stopCaveAudio();
    stopForrestAudio();
    stopInsideHouseAudio();
    gameOverSoundEffect.play();
    setNoteCount({
      count: 0,
      position: {
        basement: false,
        campsite: false,
        cave: false,
      },
    });
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
