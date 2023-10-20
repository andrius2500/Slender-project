import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./inside-house.css";
import TransitionWrapper from "../../../wrappers/TransitionWrapper";
import { stairwayWalkingEffect } from "../../../utils/walking-sound-effects";

import Note from "../../Note/Note";
import NotesCollected from "../../NotesCollected/NotesCollected";
import { NoteContext } from "../../../utils/note-context";

const InsideBasement = () => {
  const [noteCollected, setNoteCollected] = useState(false);
  const { noteCount } = useContext(NoteContext);

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

      <NotesCollected noteCount={noteCount} />
    </TransitionWrapper>
  );
};

export default InsideBasement;
