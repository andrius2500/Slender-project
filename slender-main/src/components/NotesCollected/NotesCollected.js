import React from "react";
import "./notes-collected.css";

const NotesCollected = (props) => {
  return (
    <div className="notes-test">
      <h1>{props.noteCount}/3</h1>
    </div>
  );
};

export default NotesCollected;
