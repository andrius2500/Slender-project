import React, { useEffect, useState, useContext } from "react";
import { pickingPaperEffect } from "../../utils/paper-sound-effect";
import { NoteContext } from "../../utils/note-context";
import "./note.css";

const Note = ({ paragraph, notePostionClassName, collectNote, noteFound }) => {
  const [noteShown, setNoteShown] = useState(false);
  const { noteStatus, setNoteCount } = useContext(NoteContext);

  useEffect(() => {
    const note = document.getElementById("note");
    note.classList.add(notePostionClassName);
  });

  const showNote = () => {
    if (!noteShown) {
      pickingPaperEffect();
      setNoteShown(true);
      const note = document.getElementById("note");
      note.classList.add("note--main-style");
    }
  };

  return (
    <div id="note" className="content-main" onClick={() => showNote()}>
      <div className="content-box">
        <h2>About me</h2>
        <p>{paragraph}</p>
        <button
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
          Collect
        </button>
      </div>
    </div>
  );
};

export default Note;
