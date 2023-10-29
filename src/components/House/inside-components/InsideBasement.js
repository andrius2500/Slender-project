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
  const { noteStatus } = useContext(NoteContext);

  return (
    <TransitionWrapper>
      <div className="inside-basement--container">
        {!noteCollected && !noteStatus.position.basement ? (
          <Note
            collectNote={setNoteCollected}
            paragraph="trumpas aprasymas apie karjera"
            linkUrl="/house/inside-house/stairway"
            notePositionClassName={"inside-basement--note-position"}
            noteFound={{
              ...noteStatus,
              position: {
                ...noteStatus.position,
                basement: true,
              },
            }}
          />
        ) : null}
      </div>

      <ul className="inside-basement--ul">
        <li onClick={() => stairwayWalkingEffect()}>
          <Link to="/house/inside-house/stairway" className="arrow down"></Link>
        </li>
      </ul>

      <NotesCollected noteStatus={{ count: noteStatus.count, ...noteStatus }} />
    </TransitionWrapper>
  );
};

export default InsideBasement;
