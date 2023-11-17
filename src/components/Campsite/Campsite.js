import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { forestWalkingEffect } from "../../utils/walking-sound-effects";
import TransitionWrapper from "../../wrappers/TransitionWrapper";
import Note from "../Note/Note";
import NotesCollected from "../NotesCollected/NotesCollected";
import { NoteContext } from "../../utils/note-context";
import Congratulations from "../Congratulations/Congratulations";
import "./campsite.css";

const Campsite = () => {
  const [noteCollected, setNoteCollected] = useState(false);
  const { noteStatus } = useContext(NoteContext);

  return (
    <TransitionWrapper>
      <div className="campsite--container">
        {!noteCollected && !noteStatus.position.campsite ? (
          <Note
            collectNote={setNoteCollected}
            paragraph="faktai apie mane"
            linkUrl="/inside-cave"
            notePositionClassName={"campsite--note-position"}
            noteFound={{
              ...noteStatus,
              position: {
                ...noteStatus.position,
                campsite: true,
              },
            }}
          />
        ) : null}
      </div>

      {noteStatus.count === 3 ? (
        <Congratulations />
      ) : (
        <>
          <ul className="campsite--ul">
            <div className="campsite--left-arrows-wrapper">
              <li className="campiste--arrow-left">
                <Link
                  to="/house"
                  className="arrow left"
                  onClick={() => forestWalkingEffect()}
                ></Link>
              </li>
              <li className="campiste--arrow-diagonally-left--down">
                <Link
                  to="/start"
                  className="arrow diagonally-left--down"
                  onClick={() => forestWalkingEffect()}
                ></Link>
              </li>
            </div>

            <li className="campiste--arrow-down">
              <Link
                to="/forest"
                className="arrow down"
                onClick={() => forestWalkingEffect()}
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

export default Campsite;
