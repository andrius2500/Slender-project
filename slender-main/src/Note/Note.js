import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { pickingPaperEffect } from "../utils/paper-sound-effect";
import "./note.css";

const Note = ({ paragraph, linkUrl, notePostion }) => {
  useEffect(() => {
    const note = document.getElementById("note");
    note.style.margin = notePostion?.margin;
    note.style.top = notePostion?.top;
    note.style.left = notePostion?.left;
  });

  const showNote = () => {
    pickingPaperEffect();
    const note = document.getElementById("note");
    note.style.scale = 1;
    note.style.margin = "0 auto";
    note.style.top = "50%";
    note.style.left = "0";
  };

  return (
    <div id="note" className="content-main" onClick={() => showNote()}>
      <div className="content-box">
        <h2>About me</h2>
        <p>{paragraph}</p>
        <Link to={`${linkUrl}`}>Go back</Link>
      </div>
    </div>
  );
};

export default Note;
