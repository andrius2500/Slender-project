import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./inside-house.css";
import TransitionWrapper from "../../TransitionWrapper";
import { stairwayWalkingEffect } from "../../utils/walking-sound-effects";

import Note from "../../Note/Note";

const InsideBasement = () => {
  const [noteCollected, setNoteCollected] = useState(false);

  return (
    <TransitionWrapper>
      <div className="inside-basement--container">
        {!noteCollected && (
          <Note
            collectNote={setNoteCollected}
            paragraph="trumpas aprasymas apie karjera"
            linkUrl="/house/inside-house/stairway"
            notePostionClassName={"inside-basement--note-position"}
          />
        )}
      </div>

      <ul className="inside-basement--ul">
        <li onClick={() => stairwayWalkingEffect()}>
          <Link to="/house/inside-house/stairway" className="arrow down"></Link>
        </li>
      </ul>
    </TransitionWrapper>
  );
};

export default InsideBasement;
