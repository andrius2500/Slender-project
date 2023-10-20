import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import Note from "../Note/Note";
import "./campsite.css";

const Campsite = () => {
  const [noteCollected, setNoteCollected] = useState(false);

  return (
    <TransitionWrapper>
      <div className="campsite--container">
        {!noteCollected && (
          <Note
            collectNote={setNoteCollected}
            paragraph="faktai apie mane"
            linkUrl="/inside-cave"
            notePostionClassName={"campsite--note-position"}
          />
        )}
      </div>

      <ul className="campsite--ul">
        <div className="campsite--left-arrows-wrapper">
          <li
            className="campiste--arrow-left"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/house" className="arrow left"></Link>
          </li>
          <li
            className="campiste--arrow-diagonally-left--down"
            onClick={() => forestWalkingEffect()}
          >
            <Link to="/start" className="arrow diagonally-left--down"></Link>
          </li>
        </div>

        <li
          className="campiste--arrow-down"
          onClick={() => forestWalkingEffect()}
        >
          <Link to="/forest" className="arrow down"></Link>
        </li>
      </ul>
    </TransitionWrapper>
  );
};

export default Campsite;
