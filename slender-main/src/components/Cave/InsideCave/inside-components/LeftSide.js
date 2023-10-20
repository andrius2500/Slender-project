import React, { useState } from "react";
import { Link } from "react-router-dom";
import Note from "../../../Note/Note";
import TransitionWrapper from "../../../../wrappers/TransitionWrapper";
import { caveWalkingEffect } from "../../../../utils/walking-sound-effects";
import "../inside-cave.css";

const LeftSide = () => {
  const [noteCollected, setNoteCollected] = useState(false);

  return (
    <TransitionWrapper>
      <div className="inside-cave-left-side--container">
        {!noteCollected && (
          <Note
            collectNote={setNoteCollected}
            paragraph="faktai apie mane"
            linkUrl="/inside-cave"
          />
        )}
      </div>

      <ul className="inside-cave-left-side--ul">
        <li onClick={() => caveWalkingEffect()}>
          <Link to="/inside-cave" className="arrow down"></Link>
        </li>
      </ul>
    </TransitionWrapper>
  );
};

export default LeftSide;
