import React, { useEffect, useState } from "react";
import { pickingPaperEffect } from "../utils/paper-sound-effect";
import "./note.css";

const Note = ({ paragraph, notePostion, collectNote }) => {
  const [noteShown, setNoteShown] = useState(false);

  useEffect(() => {
    const note = document.getElementById("note");
    note.style.margin = notePostion?.margin;
    note.style.top = notePostion?.top;
    note.style.left = notePostion?.left;
  });

  const showNote = () => {
    if (!noteShown) {
      pickingPaperEffect();
      setNoteShown(true);
      const note = document.getElementById("note");
      note.classList.add("test");
    }
  };

  return (
    <div id="note" className="content-main" onClick={() => showNote()}>
      <div className="content-box">
        <h2>About me</h2>
        <p>{paragraph}</p>
        <button onClick={() => collectNote(true)}>Collect</button>
      </div>
    </div>
  );
};

export default Note;
