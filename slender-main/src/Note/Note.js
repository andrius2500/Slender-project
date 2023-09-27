import React from "react";
import { Link } from "react-router-dom";
import "./note.css";

const Note = ({ paragraph, linkUrl }) => {
  return (
    <div className="content-main">
      <div className="content-box">
        <h2>About me</h2>
        <p>{paragraph}</p>
        <Link to={`${linkUrl}`}>Go back</Link>
      </div>
    </div>
  );
};

export default Note;
