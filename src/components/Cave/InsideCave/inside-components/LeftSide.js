import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Note from "../../../Note/Note";
import NotesCollected from "../../../NotesCollected/NotesCollected";
import TransitionWrapper from "../../../../wrappers/TransitionWrapper";
import { caveWalkingEffect } from "../../../../utils/walking-sound-effects";
import { NoteContext } from "../../../../utils/note-context";
import Congratulations from "../../../Congratulations/Congratulations";
import "../inside-cave.css";

const LeftSide = () => {
  const [noteCollected, setNoteCollected] = useState(false);
  const { noteStatus } = useContext(NoteContext);

  return (
    <TransitionWrapper>
      <div className="inside-cave-left-side--container">
        {!noteCollected && !noteStatus.position.cave ? (
          <Note
            collectNote={setNoteCollected}
            paragraph="faktai apie mane"
            linkUrl="/inside-cave"
            notePositionClassName={"cave--note-position"}
            noteFound={{
              ...noteStatus,
              position: {
                ...noteStatus.position,
                cave: true,
              },
            }}
          />
        ) : null}
      </div>

      {noteStatus.count === 3 ? (
        <Congratulations />
      ) : (
        <>
          <ul className="inside-cave-left-side--ul">
            <li>
              <Link
                to="/inside-cave"
                className="arrow down"
                onClick={() => caveWalkingEffect()}
              ></Link>
            </li>
          </ul>
          <NotesCollected
            noteStatus={{ count: noteStatus.count, ...noteStatus }}
          />
        </>
      )}
    </TransitionWrapper>
  );
};

export default LeftSide;
