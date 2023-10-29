import React from "react";
import "./notes-collected.css";

const NotesCollected = ({ noteStatus }) => {
  return (
    <div className="notes-test">
      <h1>{noteStatus.count}/3</h1>
    </div>
  );
};

export default NotesCollected;
