import React, { useEffect, useState, useContext } from "react";
import { pickingPaperEffect } from "../../utils/paper-sound-effect";
import { NoteContext } from "../../utils/note-context";
import "./note.css";

const Note = ({
  paragraph,
  notePositionClassName,
  collectNote,
  noteFound,
  cameFromAbout = false,
}) => {
  const [noteShown, setNoteShown] = useState(false);
  const { noteStatus, setNoteCount } = useContext(NoteContext);

  useEffect(() => {
    const note = document.getElementById("note");
    note.classList.add(notePositionClassName);
  });

  const showNote = () => {
    if (!noteShown && !cameFromAbout) {
      pickingPaperEffect();
      setNoteShown(true);
      const note = document.getElementById("note");
      note.classList.add("note--main-style");
    }
  };

  return (
    <div
      id="note"
      className={`content-main ${!cameFromAbout && "scale-paper"}`}
      onClick={() => showNote()}
    >
      <div className="paper">
        <div className="lines">
          <div className="text">{paragraph}</div>
          {!cameFromAbout && (
            <button
              className="note-btn"
              onClick={() => {
                collectNote(true);
                setNoteCount({
                  count: ++noteStatus.count,
                  position: {
                    basement: noteFound.position.basement,
                    campsite: noteFound.position.campsite,
                    cave: noteFound.position.cave,
                  },
                });
              }}
            >
              Collect note
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
