import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./inside-house.css";
import TransitionWrapper from "../../../wrappers/TransitionWrapper";
import { stairwayWalkingEffect } from "../../../utils/walking-sound-effects";
import Note from "../../Note/Note";
import NotesCollected from "../../NotesCollected/NotesCollected";
import { NoteContext } from "../../../utils/note-context";
import Congratulations from "../../Congratulations/Congratulations";

const InsideBasement = () => {
  const [noteCollected, setNoteCollected] = useState(false);
  const { noteStatus } = useContext(NoteContext);

  return (
    <TransitionWrapper>
      <div className="inside-basement--container">
        {!noteCollected && !noteStatus.position.basement ? (
          <Note
            collectNote={setNoteCollected}
            paragraph={
              <>
                My career path:
                <br />
                - Development intern from Sep 2020 to Dec 2020 at CarCar (now
                called Rocket assistance)
                <br />
                - Junior Fullstack developer from Jan 2021 to May 2021 at
                Lietuvos draudimas
                <br />
                - Junior Frontend developer from May 2021 to March 2023 at
                Barbora Lietuva (later promoted to mid and worked till July
                2023)
                <br />- Software Engineer from August 2023 to present at
                Notified
              </>
            }
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

      {noteStatus.count === 3 ? (
        <Congratulations />
      ) : (
        <>
          <ul className="inside-basement--ul">
            <li>
              <Link
                to="/house/inside-house/stairway"
                className="arrow down"
                onClick={() => stairwayWalkingEffect()}
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

export default InsideBasement;
